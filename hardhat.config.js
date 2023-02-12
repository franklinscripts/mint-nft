require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require('dotenv');

dotenv.config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://goerli.infura.io/v3/b91d44890aaa44b39dab999f19fb97f5',
      accounts: ['0fe2151d444dc5ab24939563c59c9feb6ba50204555da48a72c4e520027010b9']
    },

  },
  etherscan: {
    apiKey: '5S3MT9AHBB53U6527FSMUPWF7V6EXBX7F7'
  }
};
