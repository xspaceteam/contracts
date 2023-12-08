const { ethers, upgrades } = require("hardhat");

async function main() {
  const stakingAddress = "0xEc8977f17aD01cAA99Bea62618EDeC5EE25aEC5d";
  const Ctr = await ethers.getContractFactory("StakingV2");
  const ctr = await upgrades.upgradeProxy(stakingAddress, Ctr);

  await ctr.deployed();

  console.log(`contract was upgraded successfully!`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
