pragma ton-solidity >= 0.43.0;

interface ITokenRoot {
    function transferToken(
        address gasTo,
        uint160 collection_addr,
        uint256 token_id,
        int8 wid,
        uint256 owner_addr,
        string metadata
    ) external;
}
