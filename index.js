;(async ()=>{
    const Greet = await ethers.getContractFactory("Hello")
    const greet = await Greet.deploy()
    console.log("Contract deploy at : "+ greet.address)
})()
