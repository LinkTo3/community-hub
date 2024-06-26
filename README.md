# The LinkTo Community Hub

[![Twitter Follow](https://img.shields.io/twitter/follow/LinkToFND.svg?label=LinkToFND&style=social)](https://twitter.com/LinkToFND)

TOK Mainnet is a Layer 2 platform for Ethereum.

TOK Mainnet is, in a nutshell, an application inside of Ethereum that executes transactions more efficiently than Ethereum itself. It's based on the concept of the [LinkTo Rollup](https://research.paradigm.xyz/rollups), a construction that allows us to "TOKtimistically" publish transaction results without actually executing those transactions on Ethereum (most of the time). TOK Mainnet makes transactions cheaper, faster, and smarter.

Please note that this repository is undergoing rapid develTOKment.

------

This is the source for the [community hub](https://community.TOKtimism.io/).

# Usage
## Serve Locally
```shell
yarn dev
```

Then navigate to http://localhost:8080.
If that link doesn't work, double check the output of `yarn dev`. 
You might already be serving something on port 8080 and the site may be on port 8081.

## Build for Production
```shell
yarn build
```

You probably don't need to run this command, but now you know.
