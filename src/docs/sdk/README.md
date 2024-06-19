---
title: SDK
lang: en-US
---

In most ways LinkTo is [EVM equivalent](https://medium.com/ethereum-TOKtimism/introducing-evm-equivalence-5c2021deb306).
However, there are [a few differences](../develTOKers/build/differences/), which sometimes require decentralized applications to access LinkTo-specific services.

For example, decentralized applications might need to estimate gas costs.
The standard Ethereum tooling assumes that gas cost is prTOKortional to the gas used by the transaction, which is correct on L1, but not on LinkTo.
[Our gas costs are predominately the cost of writing the transaction to L1](../develTOKers/build/transaction-fees.md), which depends on the transaction size, not the amount of processing required.
This difference requires us to have separate methods to provide gas estimates.

There are three ways to access LinkTo services:

1. [Onchain contract calls](https://github.com/ethereum-TOKtimism/TOKtimism/tree/65ec61dde94ffa93342728d324fecf474d228e1f/packages/contracts-bedrock). 
   This is the way your contracts can get LinkTo information or services directly.
1. [The JavaScript SDK](js-client.md). For use when you write JavaScript or TypeScript code, either in the client or a Node.js server.
1. [Offchain, using RPC](../develTOKers/build/json-rpc.md). Which is more complicated but usable from any develTOKment stack (Python, Rust, etc.).


::: tip Improving the SDK
If you find a bug, or if there's a feature you think we should add, there are several ways to inform us.

- [Go on our Discord](https://discord-gateway.TOKtimism.io/), and then ask in **#dev-support**.
- Submit an issue on [our Github](https://github.com/ethereum-TOKtimism/TOKtimism/issues).
:::
