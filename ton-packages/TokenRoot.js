module.exports = {TokenRootContract:{abi:{"ABI version":2,"version":"2.1","header":["time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"owner","type":"address"},{"name":"addrTransferTokenProxy","type":"address"}],"outputs":[]},{"name":"setConfiguration","inputs":[{"name":"addrTransferTokenProxy","type":"address"}],"outputs":[]},{"name":"transferToken","inputs":[{"name":"gasTo","type":"address"},{"name":"collection_addr","type":"uint160"},{"name":"token_id","type":"uint256"},{"name":"wid","type":"int8"},{"name":"owner_addr","type":"uint256"},{"name":"metadata","type":"string"}],"outputs":[]},{"name":"getInfo","inputs":[],"outputs":[{"name":"owner","type":"address"},{"name":"addrTransferTokenProxy","type":"address"},{"components":[{"name":"sender_msg","type":"address"},{"name":"collection_addr","type":"uint160"},{"name":"token_id","type":"uint256"},{"name":"wid","type":"int8"},{"name":"owner_addr","type":"uint256"},{"name":"metadata","type":"string"}],"name":"_transferCallbacks","type":"map(uint128,tuple)"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_owner","type":"address"},{"name":"_addrTransferTokenProxy","type":"address"},{"name":"_idCallback","type":"uint128"},{"components":[{"name":"sender_msg","type":"address"},{"name":"collection_addr","type":"uint160"},{"name":"token_id","type":"uint256"},{"name":"wid","type":"int8"},{"name":"owner_addr","type":"uint256"},{"name":"metadata","type":"string"}],"name":"transferCallbacks","type":"map(uint128,tuple)"}]},tvc:"te6ccgECFgEAA1AAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsTBQQVAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CAYDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8EhIGBFAgghAMpsf4uuMCIIIQIvWkYLrjAiCCECnVqRq64wIgghBJ+nzfuuMCDgwJBwJSMPhCbuMA+Ebyc/pBldTR0PpA3/pBldTR0PpA39H4AAH4avhr2zx/+GcIDwHi7UTQ10nCAYqOZnDtRND0BY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhqjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gtw+Gxt+G2AQPQO8r3XC//4YnD4Y+IRA4ow+Eby4Ez4Qm7jAPpBldTR0PpA39cNn5XU0dDTn9/XDf+V1NHQ0//f1wwHldTR0NIH39cN/5XU0dDT/9/U0ds82zx/+GcRCg8BiPhJ+EvHBfLgZPgnbxBopv5gobV/cvsCX2VvBvhM+E1Y2zzJWYEAgPQX+G34TKS1f/hsJcjPhYjOgG/PQMmBAID7AF8GCwAkbyZeQMjOy5/L/8oHWcjL/8zNAzgw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs8f/hnEQ0PADb4SfhKxwXy4GT4a/hJyM+FiM6Ab89AyYBA+wADgDD4RvLgTPhCbuMA0ds8I44mJdDTAfpAMDHIz4cgznHPC2FeIMjPkjKbH+LOWcjO9ADNzclw+wCSXwPi4wB/+GcREA8AQPhN+Ez4S/hK+EP4QsjL/8s/z4POVSDIzst/9ADNye1UAAz4SvhL+E0ARO1E0NP/0z/TADH6QNTR0PpA03/0BNH4bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oRUUABRzb2wgMC40OC4wAAA=",code:"te6ccgECEwEAAyMABCSK7VMg4wMgwP/jAiDA/uMC8gsQAgESAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8BQMDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8Dw8DBFAgghAMpsf4uuMCIIIQIvWkYLrjAiCCECnVqRq64wIgghBJ+nzfuuMCCwkGBAJSMPhCbuMA+Ebyc/pBldTR0PpA3/pBldTR0PpA39H4AAH4avhr2zx/+GcFDAHi7UTQ10nCAYqOZnDtRND0BY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhqjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gtw+Gxt+G2AQPQO8r3XC//4YnD4Y+IOA4ow+Eby4Ez4Qm7jAPpBldTR0PpA39cNn5XU0dDTn9/XDf+V1NHQ0//f1wwHldTR0NIH39cN/5XU0dDT/9/U0ds82zx/+GcOBwwBiPhJ+EvHBfLgZPgnbxBopv5gobV/cvsCX2VvBvhM+E1Y2zzJWYEAgPQX+G34TKS1f/hsJcjPhYjOgG/PQMmBAID7AF8GCAAkbyZeQMjOy5/L/8oHWcjL/8zNAzgw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs8f/hnDgoMADb4SfhKxwXy4GT4a/hJyM+FiM6Ab89AyYBA+wADgDD4RvLgTPhCbuMA0ds8I44mJdDTAfpAMDHIz4cgznHPC2FeIMjPkjKbH+LOWcjO9ADNzclw+wCSXwPi4wB/+GcODQwAQPhN+Ez4S/hK+EP4QsjL/8s/z4POVSDIzst/9ADNye1UAAz4SvhL+E0ARO1E0NP/0z/TADH6QNTR0PpA03/0BNH4bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oRIRABRzb2wgMC40OC4wAAA="}};