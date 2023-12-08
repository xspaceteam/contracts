import { ethers, upgrades } from "hardhat";

async function main() {
  const stakingAddress = "";
  const Ctr = await ethers.getContractFactory("Staking");
  const ctr = await upgrades.upgradePRoxy(stakingAddress, Ctr);

  await ctr.deployed();

  console.log(`contract was upgraded successfully!`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
