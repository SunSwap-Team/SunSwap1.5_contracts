# SunSwap1.5-contracts

[![Tests](https://github.com/sunswapteam/sunswap1.5-contracts/actions/workflows/tests.yml/badge.svg)](https://github.com/sunswapteam/sunswap1.5-contracts/actions/workflows/tests.yml)

This repository contains the core smart contracts for the SunSwap 1.5 Protocol.

## Compile and Deployment

To get started, first create and initialize a [NodeJS 8.0+ environment](https://github.com/nodejs/node). Next, clone the repo and install the developer dependencies:

### Setup

```bash
git clone https://github.com/sunswapteam/sunswap1.5-contracts.git
cd sunswap1.5-contracts
npm install
```

### OS requirement
 * Linux
 * Mac OS X

### Compile

```
npm run compile
```

### Deploy on Nile TestNet

Deploy the Sunswap 1.5 factory and value aggregator contract to the Nile TestNet.

```
export PRIVATE_KEY_NILE='Your private key'
npm run migrate
```

## Community

If you have any questions about this project, or wish to engage with us:

- [Telegram](https://t.me/SunIO_Defi)
- [Twitter](https://twitter.com/defi_sunio)
