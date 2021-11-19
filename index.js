require('@nomiclabs/hardhat-ethers');

(async () => {
  const Greet = await ethers.getContractFactory('SimpleStorage');
  const greet = await Greet.deploy();
  console.log(`Contract deploy at : ${greet.address}`);
})();
//npx hardhat run index.js
