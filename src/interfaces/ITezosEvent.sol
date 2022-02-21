pragma ton-solidity >= 0.43.0;

interface ITezosEvent {
    struct TezosEventVoteData {
        uint eventTransaction;
        uint32 eventIndex;
        TvmCell eventData;
        uint32 eventBlockNumber;
        uint eventBlock;
    }

    struct TezosEventInitData {
        TezosEventVoteData voteData;
        address configuration;
        uint32 chainId;
        address bridge;
    }
}
