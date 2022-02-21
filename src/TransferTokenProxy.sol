pragma ton-solidity >=0.43.0;

pragma AbiHeader expire;
pragma AbiHeader time;

import './utils/CellEncoder.sol';
import './libraries/Constants.sol';
import './interfaces/ITransferTokenProxy.sol';
import './interfaces/ITokenRoot.sol';

contract TransferTokenProxy is ITransferTokenProxy, CellEncoder {

    address _owner;
    address _addrTokenRoot;
    address _addrTezosEventConfiguration;

    event burnToken(uint160 collection_addr, uint256 token_id, uint160 owner_addr);

    constructor(address owner, address addrTezosEventConfiguration, address addrTokenRoot) public {
        tvm.accept();
        _owner = owner;
        _addrTokenRoot = addrTokenRoot;
        _addrTezosEventConfiguration = addrTezosEventConfiguration;
    }

    modifier onlyOwner {
        require(msg.sender == _owner);
        _;
    }

    function setConfiguration(address addrTezosEventConfiguration, address addrTokenRoot) public onlyOwner {
        _addrTokenRoot = addrTokenRoot;
        _addrTezosEventConfiguration = addrTezosEventConfiguration;

        msg.sender.transfer({value:0, flag:64});
    }

    function transferToken(TvmCell data) public override {

        require(msg.sender == _addrTezosEventConfiguration);

        //todo MIN_FOR_TRANSFER_TOKEN
        require(msg.value >= Constants.MIN_FOR_TRANSFER_TOKEN);

        tvm.rawReserve(address(this).balance - msg.value, 2);
        (
            uint160 collection_addr,
            uint256 token_id,
            int8 wid,
            uint256 owner_addr,
            string metadata
        ) = decodeTezosEventData(data);

        ITokenRoot(_addrTokenRoot).transferToken{value: 0, flag: 128}(msg.sender, collection_addr, token_id, wid, owner_addr, metadata);
    }

    function getInfo() public view returns (
        address owner,
        address addrTokenRoot,
        address addrTezosEventConfiguration
    ) {
        return  (_owner, _addrTokenRoot, _addrTezosEventConfiguration);
    }

//    function burnTokenCallback(uint256 idCollection, uint256 idToken, TvmCell payload, address gasTo) public override {
//
//        require(msg.sender == _addrTokenRoot);
//
//        tvm.rawReserve(address(this).balance - msg.value, 2);
//
//        uint160 collection_addr = payload.toSlice().decode(uint160);
//
//        emit burnToken(uint160(idCollection), idToken, collection_addr);
//
//        gasTo.transfer({value: 0, flag: 128});
//    }

}