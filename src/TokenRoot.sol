pragma ton-solidity >=0.43.0;

pragma AbiHeader expire;
pragma AbiHeader time;

import './interfaces/ITokenRoot.sol';
import './interfaces/ITransferTokenProxy.sol';

contract NftCollectionRoot is ITokenRoot {

    address _owner;
    address _addrTransferTokenProxy;
    uint128 _idCallback;

    struct Callback {
        address sender_msg;
        address addrRecipient;
        uint128 amount;
    }

    mapping(uint128 => Callback) transferCallbacks;

    constructor(address owner, address addrTransferTokenProxy) public {
        tvm.accept();
        _owner = owner;
        _addrTransferTokenProxy = addrTransferTokenProxy;
    }

    modifier onlyOwner {
        require(msg.sender == _owner);
        _;
    }

    function setConfiguration(address addrTransferTokenProxy) public onlyOwner {
        _addrTransferTokenProxy = addrTransferTokenProxy;

        msg.sender.transfer({value:0, flag:64});
    }

    function transferToken(
        address gasTo,
        address addrRecipient,
        uint128 amount
    ) public override {
        require(msg.sender == _addrTransferTokenProxy);

        tvm.rawReserve(address(this).balance - msg.value, 2);

        transferCallbacks[_idCallback] = Callback(gasTo, addrRecipient, amount);

        _idCallback++;

        gasTo.transfer({value: 0, flag: 128});
    }

    function burnToken(
        uint128 amount,
        TvmCell payload
    ) public override {
        require(msg.value >= 1.5 ton);

        tvm.rawReserve(address(this).balance - msg.value, 2);

        ITransferTokenProxy(_addrTransferTokenProxy).burnTokenCallback{value: 0, flag: 128}(amount, payload);
    }

    function getInfo() public view returns (
        address owner,
        address addrTransferTokenProxy,
        mapping(uint128 => Callback) _transferCallbacks
    ) {
        return  (_owner, _addrTransferTokenProxy, transferCallbacks);
    }
}