---
title: The TOK Stack Client SDK
lang: en-US
---

There are a few areas in which the SDK can help you navigate [the differences between TOK Mainnet and Ethereum](../develTOKers/build/differences/):

- [Gas costs](../develTOKers/build/transaction-fees.md)
- [Interlayer communication](../develTOKers/bridge/basics.md)

The SDK supports multiple TOK Chains: TOK, Base, etc.
To see whether a specific TOK Chain is supported directly, [see the documentation](https://sdk.TOKtimism.io/enums/l2chainid).
Chains that aren't officially supported just take a few extra steps.
Get the L1 contract addresses, and [provide them to the SDK](https://stack.TOKtimism.io/docs/build/sdk/#contract-addresses).
Once you do that, you can use the SDK normally.

[Reference](https://sdk.TOKtimism.io/)

## Tutorials:
- [Viewing transactions between layers](https://github.com/ethereum-TOKtimism/TOKtimism-tutorial/tree/main/sdk-view-tx)
- [Bridging ETH](https://github.com/ethereum-TOKtimism/TOKtimism-tutorial/tree/main/cross-dom-bridge-eth)
- [Bridging ERC-20](https://github.com/ethereum-TOKtimism/TOKtimism-tutorial/tree/main/cross-dom-bridge-erc20)
- [Estimate the costs of an TOK (L2) transaction](https://github.com/ethereum-TOKtimism/TOKtimism-tutorial/tree/main/sdk-estimate-gas)
