pragma ton-solidity >= 0.43.0;

interface ITransferTokenProxy {
    function transferToken(TvmCell data) external;
//    function burnTokenCallback(uint256 idCollection, uint256 idToken, TvmCell payload, address gasTo) external;
}
