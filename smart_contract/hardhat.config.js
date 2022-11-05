// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };


// https://eth-goerli.g.alchemy.com/v2/ADpR1HdblnMhctnLC1cv9V6r-8G8N094

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ADpR1HdblnMhctnLC1cv9V6r-8G8N094",
      accounts: ['f92ce065e20a198a1ed96c48fd379db4069c3ab7eb24e35d25cf63ad344abc6d']
    }
  }
}