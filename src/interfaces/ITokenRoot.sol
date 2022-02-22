pragma ton-solidity >= 0.43.0;

interface ITokenRoot {
    function transferToken(
        address gasTo,
        address addrRecipient,
        uint128 amount
    ) external;
}
