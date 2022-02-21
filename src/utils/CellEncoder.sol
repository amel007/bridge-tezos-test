pragma ton-solidity >= 0.43.0;

contract CellEncoder {
    function encodeTezosEventData(
        uint160 collection_addr,
        uint256 token_id,
        int8 wid,
        uint256 owner_addr,
        string metadata
    ) public pure returns(
        TvmCell data
    ) {
        TvmBuilder builder;

        builder.store(collection_addr, token_id, wid, owner_addr, metadata);

        data = builder.toCell();
    }

    function decodeTezosEventData(
        TvmCell data
    ) public pure returns(
        uint160 collection_addr,
        uint256 token_id,
        int8 wid,
        uint256 owner_addr,
        string metadata
    ) {
        (
            collection_addr,
            token_id,
            wid,
            owner_addr,
            metadata
        ) = data.toSlice().decode(uint160, uint256, int8, uint256, string);
    }

//    function encodeEverscaleEventData(
//        uint160 collection_addr,
//        uint256 token_id,
//        uint160 owner_addr
//    ) public pure returns(
//        TvmCell data
//    ) {
//        TvmBuilder builder;
//
//        builder.store(collection_addr, token_id, owner_addr);
//
//        data = builder.toCell();
//    }
//
//    function decodeEverscaleEventData(
//        TvmCell data
//    ) public pure returns(
//        uint160 collection_addr,
//        uint256 token_id,
//        uint160 owner_addr
//    ) {
//        (
//        collection_addr,
//        token_id,
//        owner_addr
//        ) = data.toSlice().decode(uint160, uint256, uint160);
//    }
}
