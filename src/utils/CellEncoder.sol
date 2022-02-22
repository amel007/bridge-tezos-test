pragma ton-solidity >= 0.43.0;

contract CellEncoder {
    function encodeTezosEventData(
        int8 wid,
        uint256 recipient,
        uint128 amount
    ) public pure returns(
        TvmCell data
    ) {
        TvmBuilder builder;

        builder.store(wid, recipient, amount);

        data = builder.toCell();
    }

    function decodeTezosEventData(
        TvmCell data
    ) public pure returns(
        int8 wid,
        uint256 recipient,
        uint128 amount
    ) {
        (
            wid,
            recipient,
            amount
        ) = data.toSlice().decode(int8, uint256, uint128);
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
