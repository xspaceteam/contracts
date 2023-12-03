import { ethers } from "hardhat";

async function main() {
  const Ctr = await ethers.getContractFactory("StakingXSP");
  const ctr = await Ctr.deploy();

  await ctr.deployed();

  console.log(`StakingXSP deployed at ${ctr.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
