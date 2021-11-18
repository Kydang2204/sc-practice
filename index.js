
(async () => {
  const Greet = await ethers.getContractFactory('Primitives');
  const greet = await Greet.deploy();
  console.log(`Contract deploy at : ${greet.address}`);
})();
