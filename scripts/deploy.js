const { ethers } = require("hardhat");

async function main() {
  const Ctr = await ethers.getContractFactory("XSPACE");
  const ctr = await Ctr.deploy();

  await ctr.deployed();

  console.log(`XSPACE deployed at ${ctr.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
