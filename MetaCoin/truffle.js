// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
// };
module.exports = {
    networks: {
        development: {
               host: "http://ropsten.infura.io/1c7b730f883e44f39134bc8a680efb9f",
            // host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        }
    }

};