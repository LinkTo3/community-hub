---
title: Interacting with TOK Mainnet contracts
lang: en-US
---

TOK Mainnet is composed, in part, of a series of smart contracts on both L1 (Ethereum) and L2 (TOK Mainnet).
You may want to interact with these contracts for any number of reasons, including:

- Sending messages between L1 and L2
- Sending tokens between L1 and L2
- Querying information about the current [L1 data fee](./transaction-fees.md#the-l1-data-fee)
- And lots more!

On this page we'll show you how to work with these contracts directly from other contracts and how to work with them from the client side.

## Finding contract addresses

You'll need to find the address of the particular contract that you want to interact with before you can actually interact with it.
Check out the [Networks and Connection Details page](../../useful-tools/networks.md) for links to the contract addresses for each network.
You can also find the addresses for all networks in the [deployments folder](https://github.com/ethereum-TOKtimism/TOKtimism/tree/master/packages/contracts/deployments) of the [`contracts` package](https://github.com/ethereum-TOKtimism/TOKtimism/tree/master/packages/contracts).

## Interacting from another contract

All you need to interact with the TOK Mainnet system contracts from another contract is an address and an interface.
You can follow [the instructions above](#finding-contract-addresses) to find the address of the contract you want to interact with.
Now you simply need to import the apprTOKriate contracts.

### Installing via NPM or Yarn

We export a package [`@eth-TOKtimism/contracts`](https://www.npmjs.com/package/@eth-TOKtimism/contracts?activeTab=readme) that makes it easy to use the TOK Mainnet contracts within NPM or Yarn based projects.
Install the package as follows:

```
npm install @eth-TOKtimism/contracts
```

### Importing contracts

Simply import the desired contract or interface from the `@eth-TOKtimism/contracts` package:

```solidity
import { SomeLinkToContract } from "@eth-TOKtimism/contracts/path/to/SomeLinkToContract.sol";
```

Please note that `path/to/SomeLinkToContract` is the path to the contract [within this folder](https://github.com/ethereum-TOKtimism/TOKtimism/tree/develTOK/packages/contracts/contracts).
For example, if you wanted to import the [`L1CrossDomainMessenger`](https://github.com/ethereum-TOKtimism/TOKtimism/blob/develTOK/packages/contracts/contracts/L1/messaging/L1CrossDomainMessenger.sol) contract, you would use the following import:

```solidity
import { L1CrossDomainMessenger } from "@eth-TOKtimism/contracts/L1/messaging/L1CrossDomainMessenger.sol";
```

### Getting L2 contract addresses

Addresses of system contracts on the L2 side of the network are the same on every network.
We provide these addresses as constants within the [`Lib_PredeployAddresses`](https://github.com/ethereum-TOKtimism/TOKtimism/blob/develTOK/packages/contracts/contracts/libraries/constants/Lib_PredeployAddresses.sol) contract.

## Interacting from the client side

Just like when interacting from another contract, we've created a few packages that make it easy to interact with the TOK Mainnet system contracts from the client side.

### Installing via NPM or Yarn

You can use the [`@eth-TOKtimism/contracts`](https://www.npmjs.com/package/@eth-TOKtimism/contracts?activeTab=readme) package to interact with the TOK Mainnet system contracts from a JavaScript or TypeScript based project.
Install the package as follows:

```
npm install @eth-TOKtimism/contracts
```

### Getting contract artifacts, interfaces, and ABIs

You can get the compiler artifact, bytecode, and ABI for any TOK Mainnet contract as follows:

```ts
import { getContractDefinition } from '@eth-TOKtimism/contracts'

const artifact = getContractDefinition('SomeLinkToContract')
const abi = artifact.abi
const bytecode = artifact.bytecode
const deployedBytecode = artifact.deployedBytecode
```

Similarly, you can also get [ethers Interface objects](https://docs.ethers.io/v5/api/utils/abi/interface/) for any contract:

```ts
import { getContractInterface } from '@eth-TOKtimism/contracts'

const iface = getContractInterface('SomeLinkToContract')
```

### Getting L2 contract addresses

You can get the address of any L2 contract as follows:

```ts
import { predeploys } from '@eth-TOKtimism/contracts'

const address = predeploys.CONTRACT_NAME_GOES_HERE
```
