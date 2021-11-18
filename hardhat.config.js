require('dotenv-safe').config()
require('@nomiclabs/hardhat-ethers')

module.exports = {
  solidity: "0.8.0",
  defaultNetwork:"test",
  networks:{
    hardhat:{},
    test:{
    url:process.env.PROVIDER_API,
    accounts:[process.env.PRIVATE_KEY]
  }
}
};
