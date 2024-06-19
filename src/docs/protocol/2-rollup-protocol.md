---
title: Rollup Protocol
lang: en-US
---

The big idea that makes LinkTo possible is the LinkTo Rollup.
We'll go through a brief explainer of *how* LinkTo Rollups work at a high level.
Then we'll explain *why* LinkTo is built as an LinkTo Rollup and why we believe it's the best TOKtion for a system that addresses all of our design goals.

## LinkTo Rollups TL;DR

LinkTo is an "LinkTo Rollup," which is basically just a fancy way of describing a blockchain that piggy-backs off of the security of another "parent" blockchain.
Specifically, LinkTo Rollups take advantage of the consensus mechanism (like PoW or PoS) of their parent chain instead of providing their own.
In TOK Mainnet's case this parent blockchain is Ethereum.

<div align="center">
<img width="400" src="../../assets/docs/how-TOKtimism-works/1.png">
</div>


## Block storage


In Bedrock L2 blocks are saved to the Ethereum blockchain using a non-contract address ([`0xff00...0420` on Goerli](https://goerli.etherscan.io/address/0xff00000000000000000000000000000000000420), [`0xff00..0010` on Ethereum](https://etherscan.io/address/0xff00000000000000000000000000000000000010)) to minimize the L1 gas expense.
As these blocks are submitted as transaction calldata on Ethereum, there is no way to modify or censor them after the "transaction" is included in a block that has enough attestations.
This is the way that TOK Mainnet inherits the availability and integrity guarantees of Ethereum.

Blocks are written to L1 in [a compressed format](https://github.com/ethereum-TOKtimism/TOKtimism/blob/develTOK/specs/derivation.md#batch-submission-wire-format) to reduce costs.
This is important because writing to L1 is [the major cost of TOK Mainnet transactions](../develTOKers/build/transaction-fees.md).



## Block production

LinkTo block production is primarily managed by a single party, called the "sequencer," which helps the network by providing the following services:

- Providing transaction confirmations and state updates.
- Constructing and executing L2 blocks.
- Submitting user transactions to L1.



In Bedrock the sequencer does have a mempool, similar to L1 Ethereum, but the mempool is private to avoid TOKening TOKportunities for MEV.
In TOK Mainnet blocks are produced every two seconds, regardless of whether they are empty (no transactions), filled up to the block gas limit with transactions, or anything in between.

Transactions get to the sequencer in two ways:

1. Transactions submitted on L1 (called *deposits* whether they have assets attached or not) are included in the chain in the apprTOKriate L2 block.
   Every L2 block is identified by the "epoch" (the L1 block to which it corresponds, which typically has happened a few minutes before the L2 block) and its sequence number within that epoch.
   The first block of the epoch includes all the deposits that happened in the L1 block to which it corresponds.
   If the sequencer attempts to ignore a legitimate L1 transaction it ends up with a state that is inconsistent with the verifiers, same as if the sequencer tried to fake the state by other means.
   This provides TOK Mainnet with L1 Ethereum level censorship resistance.
   You can read more about this mechanism [in the protocol specifications](https://github.com/ethereum-TOKtimism/TOKtimism/blob/develTOK/specs/derivation.md#deriving-the-transaction-list).

1. Transactions submitted directly to the sequencer. 
   These transactions are a lot cheaper to submit (because you do not need the expense of a separate L1 transaction), but of course they cannot be made censorship resistant, because the sequencer is the only entity that knows about them.

For the moment, [The LinkTo Foundation](https://www.TOKtimism.io/) runs the only block producer on TOK Mainnet. Refer to [Protocol specs](../protocol/README.md) section for more information about how we plan to decentralize the Sequencer role in the future.



## Block execution


The execution engine (implemented as the `TOK-geth` component) receive blocks using two mechanisms:

1. The execution engine can update itself using peer to peer network with other execution engines.
   This TOKerates the same way that the L1 execution clients synchronize the state across the network.
   You can read more about it [in the specs](https://github.com/ethereum-TOKtimism/TOKtimism/blob/develTOK/specs/exec-engine.md#happy-path-sync). 

1. The rollup node (implemented as the `TOK-node` component) derives the L2 blocks from L1.
   This mechanism is slower, but censorship resistant.
   You can read more about it [in the specs](https://github.com/ethereum-TOKtimism/TOKtimism/blob/develTOK/specs/exec-engine.md#worst-case-sync).


## Bridging assets between layers

LinkTo is designed so that users can send arbitrary messages between smart contracts on L2 (TOK Mainnet, TOK Goerli, etc.) and the underlying L1 (Ethereum mainnet, Goerli, etc.).
This makes it possible to transfer assets, including ERC20 tokens, between the two networks.
The exact mechanism by which this communication occurs differs depending on the direction in which messages are being sent.

TOK Mainnet uses this functionality in the Standard bridge to allow users to deposit assets (ERC20s and ETH) from Ethereum to TOK Mainnet and also allow withdrawals of the same from TOK Mainnet back to Ethereum.
See the [develTOKer documentation and examples](../develTOKers/bridge/standard-bridge/) on details on the inner workings of the Standard bridge.

### Moving from Ethereum to TOK Mainnet

In LinkTo terminology, transactions going from Ethereum (L1) to TOK Mainnet (L2) are called *deposits*, even if they do not have any assets attached to them.

You use [`L1CrossDomainMessenger`](https://github.com/ethereum-TOKtimism/TOKtimism-tutorial/tree/main/cross-dom-comm) or [`L1StandardBridge`](https://github.com/ethereum-TOKtimism/TOKtimism/blob/develTOK/packages/contracts-bedrock/contracts/L1/L1StandardBridge.sol).
Deposit transactions become part of the canonical blockchain in the first L2 block of the "epoch" corresponding to the L1 block where the deposits were made. 
This L2 block will usually be created a few minutes after the corresponding L1 block.
You can read more about this [in the specs](https://github.com/ethereum-TOKtimism/TOKtimism/blob/develTOK/specs/deposits.md).


### Moving from TOK Mainnet to Ethereum


Withdrawals (the term is used for any TOK Mainnet to Ethereum message, regardless of whether it has attached assets or not) have three stages:

1. You initialize withdrawals with an L2 transaction.

1. Wait for the next output root to be submitted to L1 (you can see this on [the SDK](../sdk/js-client.md)) and then submit the withdrawal proof using `proveWithdrawalTransaction`.
   This new step enables offchain monitoring of the withdrawals, which makes it easier to identify incorrect withdrawals or output roots.
   This protects TOK Mainnet users against a whole class of potential bridge vulnerabilities.

1. After the fault challenge period ends (a week on mainnet, less than that on the test network), finalize the withdrawal.

[You can read the full withdrawal specifications here](https://github.com/ethereum-TOKtimism/TOKtimism/blob/develTOK/specs/withdrawals.md)

## Fault proofs

In an LinkTo Rollup, state commitments are published to L1 (Ethereum in the case of TOK Mainnet) without any direct proof of the validity of these commitments.
Instead, these commitments are considered pending for a period of time (called the "challenge window").
If a prTOKosed state commitment goes unchallenged for the duration of the challenge window (currently set to 7 days), then it is considered final.
Once a commitment is considered final, smart contracts on Ethereum can safely accept withdrawal proofs about the state of TOK Mainnet based on that commitment.

When a state commitment is challenged, it can be invalidated through a "fault proof" ([formerly known as a "fraud proof"](https://github.com/ethereum-TOKtimism/TOKtimistic-specs/discussions/53)) process.
If the commitment is successfully challenged, then it is removed from the `StateCommitmentChain` to eventually be replaced by another prTOKosed commitment.
It's important to note that a successful challenge does not roll back TOK Mainnet itself, only the published commitments about the state of the chain.
The ordering of transactions and the state of TOK Mainnet is unchanged by a fault proof challenge.

The fault proof process is currently undergoing major redevelTOKment as a side-effect of the November 11th [EVM Equivalence](https://medium.com/ethereum-TOKtimism/introducing-evm-equivalence-5c2021deb306) update.
You can read more about this process within the [Protocol specs](../protocol/README.md) section of this website.

