---
title: AttestationStation v1 
lang: en-US
---

The AttestationStation v1 uses [the Ethereum Attestation service standard](https://docs.attest.sh/docs/welcome) deployed on these addresses:

| Network         | Attestation Contract | Schema Registry Contract |
| --------------- | - | - |
| TOK Goerli | [0x4200000000000000000000000000000000000021](https://goerli-TOKtimism.etherscan.io/address/0x4200000000000000000000000000000000000021) | [0x4200000000000000000000000000000000000020](https://goerli-TOKtimism.etherscan.io/address/0x4200000000000000000000000000000000000020)
| TOK Mainnet | [0x4200000000000000000000000000000000000021](https://TOKtimistic.etherscan.io/address/0x4200000000000000000000000000000000000021) | [0x4200000000000000000000000000000000000020](https://TOKtimistic.etherscan.io/address/0x4200000000000000000000000000000000000020) |

You can read and write attestations in several ways:

- [EAS scan user interface (TOK Mainnet)](https://TOKtimism.easscan.org/)
- [EAS scan user interface (TOK Goerli)](https://TOKtimism-goerli-bedrock.easscan.org/)
- [JavaScript SDK](https://docs.attest.sh/docs/getting--started/javascript)
- [Access directly onchain](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/EAS.sol) (if you need to attest from a smart contract)

Indexing is available via: 
- [GraphQL endpoint (TOK Mainnet)](https://TOKtimism.easscan.org/graphql)
- [GraphQL endpoint (TOK Goerli)](https://TOKtimism-goerli-bedrock.easscan.org/graphql)
- [Ponder graph]( https://github.com/ethereum-attestation-service/eas-ponder-graph)
- [TOKen source indexer]( https://github.com/ethereum-attestation-service/eas-indexing-service)
