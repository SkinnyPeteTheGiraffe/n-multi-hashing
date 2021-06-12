# N-Multi-Hashing
[![Build Status](https://github.com/SkinnyPeteTheGiraffe/n-multi-hashing/actions/workflows/test.yml/badge.svg)](https://github.com/SkinnyPeteTheGiraffe/n-multi-hashing/actions/workflows/test.yml?query=branch%3Amain+)
[![npm](https://img.shields.io/npm/dm/n-multi-hashing)](https://www.npmjs.com/package/n-multi-hashing)

_For list of supported Algorithms, scroll to bottom of README_

A rewrite of [node-multi-hashing](https://github.com/SkinnyPeteTheGiraffe/node-multi-hashing) in Typescript,
more algorithms, and proper unit testing. This version should be much more stable, as full coverage unit testing, will
ensure consistency of hashing functions, warning developers of any breaking changes. This version will also include
more algorithms, and will continue to add them as development continues.

## Inspiration
When I first got into crypto development, I forked [node-multi-hashing](https://github.com/SkinnyPeteTheGiraffe/node-multi-hashing)
and added a few algorithms, but admittedly was still novice in terms of development. I have gained much more experience,
and decided to re-write (not algorithms) my past work, and added features I have found to be valuable (such as unit testing).

## Requirements
While these are not all hard requirements, I have listed what I used to develop/build this project to give more guidance.

| Requirement  |  Version |
|--------------|----------|
| Unix OS      | Ubuntu*  |
| NodeJS       | ~12.x.x  |
| yarn         | 1.21.1   |
| gcc          | ~9.x.x   |
| node-gyp     | ^8.1.0   |

`* Can be anything`

## Getting Started
A simple usage example to get you started. *Note, that not all algorithms contain the same parameters.*
```js
import multiHashing from 'n-multi-hashing';

const hash = multiHashing.x16r(Buffer.from('ffff0000', 'hex'));
```

## How To Build
Install Dependencies
```shell
yarn
```
Building Binaries
```shell
yarn build:binaries
```
Building Distribution
```shell
yarn build
```

#### Testing
Building Debug Binaries
```shell
yarn build:debug
```
Run Jest
```shell
yarn jest
```

### Contributions
Anyone is free to fork/clone this project and use at their own will. Though if you would like help develop this project,
I have listed some things to note in order for your PR to be accepted.
  * When creating a PR, be descriptive about your changes, and keep your code clean and maintainable.
  * If adding algorithms, please include associated unit-tests.
  * Ensure your changes pass the CI/CD pipeline (check the Actions tab).

### Attributions
  * [@chuanwc](https://github.com/chuanwc) - Creator of project I originally forked [node-multi-hashing](https://github.com/chuanwc/node-multi-hashing-1) from
  * [@MintPond](https://github.com/MintPond) - For [KAWPOW](https://github.com/MintPond/hasher-kawpow) implementation

### Want to say thank you
All I ask is you like and/or contribute to the project! :sparkling_heart:

#### Want to help out more
I don't need anything else, but if you would like, buy me some :coffee: maybe:
```yml
BTC: bc1qmqwa6jvus9kr3nusexvuewt0h75jj5qwka8a2u
ETH: 0x5BcEcC9710a3Aa47F84BaCb1E5EE6591dEa7a32e
RVN: RBfEoddXbXDR8fLLyCcvy5FUgdvpdof5f3
```

### Supported Algorithms
| Unit Test          | Algorithms            | Unit Test          |  Algorithms      | Unit Test          | Algorithms     |
|--------------------|-----------------------|--------------------|------------------|--------------------|----------------|
| :white_check_mark: | Argon2d               | :white_check_mark: |  Lyra2RE         | :white_check_mark: |  X15           |
| :white_check_mark: | Argon2i               | :white_check_mark: |  Lyra2REv2       | :white_check_mark: |  X16r          |
| :white_check_mark: | Argon2id              | :white_check_mark: |  Lyra2REv3       | :white_check_mark: |  X16rV2        |
| :white_check_mark: | Bcrypt                | :white_check_mark: |  Lyra2z          | :white_check_mark: |  Yescrypt      |
| :white_check_mark: | Blake                 | :white_check_mark: |  NeoScrypt       |                    |                |
| :white_check_mark: | boolberry             | :white_check_mark: |  NIST5           |                    |                |
| :white_check_mark: | C11                   | :white_check_mark: |  Quark           |                    |                |
| :white_check_mark: | CryptoNight           | :white_check_mark: |  Qubit           |                    |                |
| :white_check_mark: | CryptoNight Fast      | :white_check_mark: |  Scrypt          |                    |                |
| :white_check_mark: | Fresh                 | :white_check_mark: |  ScryptJane      |                    |                |
| :white_check_mark: | Fugue                 | :white_check_mark: |  ScryptN         |                    |                |
| :white_check_mark: | Groestl               | :white_check_mark: |  SHA1            |                    |                |
| :white_check_mark: | Groestl Myriad        | :white_check_mark: |  SHA256d         |                    |                |
| :white_check_mark: | Hefty1                | :white_check_mark: |  Shavite3        |                    |                |
| :white_check_mark: | KAWPOW                | :white_check_mark: |  Skein           |                    |                |
| :white_check_mark: | Keccak                | :white_check_mark: |  X11             |                    |                |
| :white_check_mark: | LBRY                  | :white_check_mark: |  X13             |                    |                |
