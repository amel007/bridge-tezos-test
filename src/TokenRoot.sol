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
        uint160 collection_addr;
        uint256 token_id;
        int8 wid;
        uint256 owner_addr;
        string metadata;
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
        uint160 collection_addr,
        uint256 token_id,
        int8 wid,
        uint256 owner_addr,
        string metadata
    ) public override {
        require(msg.sender == _addrTransferTokenProxy);

        tvm.rawReserve(address(this).balance - msg.value, 2);

        transferCallbacks[_idCallback] = Callback(gasTo, collection_addr, token_id, wid, owner_addr, metadata);

        uint128 sendIdCallbak = _idCallback;
        _idCallback++;

        gasTo.transfer({value: 0, flag: 128});
    }

    function getInfo() public view returns (
        address owner,
        address addrTransferTokenProxy,
        mapping(uint128 => Callback) _transferCallbacks
    ) {
        return  (_owner, _addrTransferTokenProxy, transferCallbacks);
    }
}