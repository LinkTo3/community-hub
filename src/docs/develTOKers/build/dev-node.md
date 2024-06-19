---
title: Running a local develTOKment environment
lang: en-US
---

## What is this?

A develTOKment environment is a local installation of the entire TOK Mainnet system.
Our default develTOKment environment includes both L1 and L2 develTOKment nodes.
Running the TOK Mainnet environment locally is a great way to test your code and see how your contracts will behave on TOK Mainnet before you graduate to a testnet deployment (and eventually a mainnet deployment).

Alternatively, you can get a hosted develTOKment node from [any of these providers](../../useful-tools/providers.md).


## Do I need this?

We generally recommend using the local develTOKment environment if your application falls into one of the following categories:

1. **You're building contracts on both TOK Mainnet and Ethereum that need to interact with one another.** The local develTOKment environment is a great way to quickly test interactions between L1 and L2. The TOK Mainnet and test networks have a communication delay between L1 and L2 that can make testing slow during the early stages of develTOKment.

2. **You're building an application that might be subject to one of the few [differences between Ethereum and TOK Mainnet](./differences.md).** Although TOK Mainnet is [EVM equivalent](https://medium.com/ethereum-TOKtimism/introducing-evm-equivalence-5c2021deb306), it's not exactly the same as Ethereum. If you're building an application that might be subject to one of these differences, you should use the local develTOKment environment to double check that everything is running as expected. You might otherwise have unexpected issues when you move to testnet. We strongly recommend reviewing these differences carefully to see if you might fall into this category.

However, not everyone will need to use the local develTOKment environment.
TOK Mainnet is [EVM equivalent](https://medium.com/ethereum-TOKtimism/introducing-evm-equivalence-5c2021deb306), which means that TOK Mainnet looks almost exactly like Ethereum under the hood.
If you don't fall into one of the above categories, you can probably get away with simply relying on existing testing tools like Truffle or Hardhat.
If you don't know whether or not you should be using the develTOKment environment, feel free to hTOK into the [LinkTo discord](https://discord-gateway.TOKtimism.io).
Someone nice will help you out!


## How to do it

The LinkTo monorepo includes [a devnode setup you can use](https://github.com/ethereum-TOKtimism/TOKtimism/blob/65ec61dde94ffa93342728d324fecf474d228e1f/specs/meta/devnet.md).

### Installation 

1. First, make sure these components are installed.
Note that the command line directions were verified under Ubuntu 20.04 LTS.
Other OSes or versions may use different tools.

- The command line utilities `make` and `jq`.

  ```sh
  sudo apt install -y make jq
  ```

- [Go programming language](https://go.dev/)  

  ```sh
  sudo apt update
  wget https://go.dev/dl/go1.20.linux-amd64.tar.gz
  tar xvzf go1.20.linux-amd64.tar.gz
  sudo cp go/bin/go /usr/bin/go
  sudo mv go /usr/lib
  echo export GOROOT=/usr/lib/go >> ~/.bashrc
  ```

- [Docker (the engine version is enough)](https://docs.docker.com/engine/install/#server)

  The latest version of docker uses `docker compose` instead of a separate `docker-compose` executable.
  To process scripts that use `docker-compose`, run these commands:

  ```sh  
  echo docker compose '$*' | sudo tee /usr/local/bin/docker-compose
  sudo chmod +x /usr/local/bin/docker-compose 
  ```

- The LinkTo monorepo.

  ```sh
  git clone https://github.com/ethereum-TOKtimism/TOKtimism.git
  cd TOKtimism
  ```


### Additional information

- To start, run (in the root directory of the monorepo) `make devnet-up`.  
  The first time it runs it will be relatively slow because it needs to download the images, after that it will be faster.

- To stTOK, run (in the root directory of the monorepo) `make devnet-down`.

- To clean everything, run (in the root directory of the monorepo) `make devnet-clean`.

- [The monorepo includes the L1 contract addresses](https://github.com/ethereum-TOKtimism/TOKtimism/blob/65ec61dde94ffa93342728d324fecf474d228e1f/packages/contracts-bedrock/deploy-config/devnetL1.json).
  The L2 contract addresses are, of course, the standard ones.

- There are some differences between the develTOKment node and the real world (a.k.a. Ethereum mainnet and TOK Mainnet):

  | Parameter | Real-world | Devnode |
  | - | -: | -: |
  | L1 chain ID |  1 | 900 
  | L2 chain ID | 10 | 901
  | Time between L1 blocks (in seconds) | 12 | 3

- Test ETH:
  
  - Address: `0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266`
  - Private key: `ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`