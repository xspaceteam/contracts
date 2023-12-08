import { ethers } from "hardhat";

async function main() {
  const Ctr = await ethers.getContractFactory("Staking");
  // const ctr = await Ctr.deploy(
  //   "0xDe4359F19134B9BdC018b1bbAc305Bf61ED2bCaA", // XSP token
  //   "0x1f89b5D987687DeCc92ec7f9b61fDabC9d4f6C47" // sXSP token
  // );
  const ctr = await Ctr.deploy(
    "0xbc2A152Ce36a76e3071CE221761E2445C1c496D4", // XSP token
    "0x5EF8D1e5A72133D6Fc4f0Ea44d77A3c5929e5407" // sXSP token
  );

  await ctr.deployed();

  console.log(`contract deployed at ${ctr.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});