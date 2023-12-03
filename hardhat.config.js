const dotenv = require('dotenv')
dotenv.config()
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

const { PRIVATE_KEY } = process.env;
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "rinkeby",
  etherscan: {
    apiKey: {
      bscTestnet: "MGYY3TKJVMX6D1WMSB4X34BEC1BVQ6E7F4",
      goerli: "4YX8ZPTGDSEFH8CAD1U8YWPC3SYJUA4KT6",
      mainnet: "5EGJJA5AI9QVEM6CVJXXXKT84PJVUACK8V", //eth
      bsc: "XGRD9Y45RBXBGPISVEK9JMYF97ZWYDRV4S" //bsc
    }
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    goerli: {
      url: "https://goerli.infura.io/v3/43885af4abc848f0a04f9fdabd95ea43",
      chainId: 5,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    testnet: {
      url: "https://bsc-testnet.publicnode.com",
      chainId: 97,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/78e016a8a20d4c1e99944ebadf6e732e",
      accounts: [`0x${PRIVATE_KEY}`],
    },
    eth: {
      url: "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
      chainId: 1,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    arbi: {
      url: "https://arb1.arbitrum.io/rpc",
      chainId: 42161,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    testarbi: {
      url: "https://goerli-rollup.arbitrum.io/rpc",
      chainId: 421613,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    matic: {
      url: "https://matic-mumbai.chainstacklabs.com/",
      accounts: [`0x${PRIVATE_KEY}`],
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      },
      {
        version: "0.8.16",
      },
      {
        version: "0.8.5",
      },
      {
        version: "0.8.0",
      },
      {
        version: "0.8.8",
      },
      {
        version: "0.8.17",
        settings: {},
      },
    ],
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },
  mocha: {
    timeout: 20000
  }
};