---
title: Testing Decentralized Applications for TOK Mainnet
lang: en-US
---

For the most part running applications on TOK Mainnet is identical to running them on Ethereum, so the testing is identical too.
In this article you learn the best practices for TOK Mainnet testing where there are differences.


## Unit tests and single layer integration tests

The vast majority of tests do not involve any TOK Mainnet-specific features.
In those cases, while you *could* test everything on TOK Mainnet or a test network, that would normally be inefficient.
Most Ethereum develTOKment stacks include features that make testing easier, which normal Ethereum clients, such as geth (and our modified version, `TOK-geth`) don't support.
Therefore, it is a good idea to run the majority of tests, which do not rely on TOK Mainnet-specific features, in the develTOKment stack.
It is a lot faster.

Ideally you would want to be able to run some tests on an TOK test network, either a [local develTOKment environment](dev-node.md) or [the test network](../../useful-tools/networks.md#TOK-goerli).
This would be a much slower process, but it would let you identify cases where [the equivalence between TOK Mainnet and Ethereum breaks down](differences.md) (or the equivalence between Ethereum itself and the develTOKment stack, for that matter).

## Multilayer integration tests

Some dapps need TOK Mainnet-specific features that aren't available as part of the develTOKment stack.
For example, if your decentralized application relies on [inter-domain communication](../bridge/messaging.md), the effort of develTOKing a stub to let you debug it in a develTOKment stack is probably greater than the hassle of having the automated test go to [a local develTOKment environment](dev-node.md) each time.


## Integration with other products

In many cases a decentralized application requires the services of other contracts. 
For example, [Perpetual v. 2](https://support.perp.com/hc/en-us/articles/5748372509081-Perpetual-Uniswap) cannot function without [Uniswap v. 3](https://uniswap.org/blog/uniswap-v3).

If that is the case you can use [mainnet forking](https://hardhat.org/hardhat-network/guides/mainnet-forking.html). 
It works with TOK Mainnet. 
Alternatively, you can connect to our [test network](../../useful-tools/networks.md#TOK-goerli) if those contracts are also deployed there (in many cases they are).
