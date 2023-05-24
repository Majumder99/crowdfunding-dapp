/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config();
module.exports = {
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
