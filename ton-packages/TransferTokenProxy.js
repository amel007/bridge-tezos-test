module.exports = {TransferTokenProxyContract:{abi:{"ABI version":2,"version":"2.1","header":["time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"owner","type":"address"},{"name":"addrTezosEventConfiguration","type":"address"},{"name":"addrEverscaleEventConfiguration","type":"address"},{"name":"addrTokenRoot","type":"address"}],"outputs":[]},{"name":"setConfiguration","inputs":[{"name":"addrTezosEventConfiguration","type":"address"},{"name":"addrEverscaleEventConfiguration","type":"address"},{"name":"addrTokenRoot","type":"address"}],"outputs":[]},{"name":"transferTokenCallback","inputs":[{"name":"data","type":"cell"}],"outputs":[]},{"name":"burnTokenCallback","inputs":[{"name":"amount","type":"uint128"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"getInfo","inputs":[],"outputs":[{"name":"owner","type":"address"},{"name":"addrTokenRoot","type":"address"},{"name":"addrTezosEventConfiguration","type":"address"},{"name":"addrEverscaleEventConfiguration","type":"address"}]},{"name":"encodeTezosEventData","inputs":[{"name":"wid","type":"int8"},{"name":"recipient","type":"uint256"},{"name":"amount","type":"uint128"}],"outputs":[{"name":"data","type":"cell"}]},{"name":"decodeTezosEventData","inputs":[{"name":"data","type":"cell"}],"outputs":[{"name":"wid","type":"int8"},{"name":"recipient","type":"uint256"},{"name":"amount","type":"uint128"}]},{"name":"encodeEverscaleEventData","inputs":[{"name":"wid","type":"int8"},{"name":"recipient","type":"uint256"},{"name":"amount","type":"uint128"}],"outputs":[{"name":"data","type":"cell"}]},{"name":"decodeEverscaleEventData","inputs":[{"name":"data","type":"cell"}],"outputs":[{"name":"wid","type":"int8"},{"name":"recipient","type":"uint256"},{"name":"amount","type":"uint128"}]},{"name":"encodePayload","inputs":[{"name":"wid","type":"int8"},{"name":"recipient","type":"uint256"}],"outputs":[{"name":"data","type":"cell"}]},{"name":"decodePayload","inputs":[{"name":"data","type":"cell"}],"outputs":[{"name":"wid","type":"int8"},{"name":"recipient","type":"uint256"}]}],"data":[],"events":[{"name":"Withdraw","inputs":[{"name":"wid","type":"int8"},{"name":"recipient","type":"uint256"},{"name":"amount","type":"uint128"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_owner","type":"address"},{"name":"_addrTokenRoot","type":"address"},{"name":"_addrTezosEventConfiguration","type":"address"},{"name":"_addrEverscaleEventConfiguration","type":"address"}]},tvc:"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",code:"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"}};