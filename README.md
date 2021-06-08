# N-Multi-Hashing

_For list of supported Algorithms, scroll to bottom of README_

A rewrite of [node-multi-hashing](https://github.com/SkinnyPeteTheGiraffe/node-multi-hashing) in Typescript,
more algorithms, and proper unit testing. This version should be much more stable, as full coverage unit testing, will
ensure consistency of hashing functions, warning developers of any breaking changes. This version will also include
more algorithms, and will continue to add them as development continues.

### Inspiration
When I first got into crypto development, I forked [node-multi-hashing](https://github.com/SkinnyPeteTheGiraffe/node-multi-hashing)
and added a few algorithms, but admittedly was still novice in terms of development. I have gained much more experience,
and decided to re-write (not algorithms) my past work, and added features I have found to be valuable (such as unit testing).

### Requirements
While these are not all hard requirements, I have listed what I used to develop/build this project to give more guidance.

| Requirement  |  Version |
|--------------|----------|
| Unix OS      | Ubuntu*  |
| NodeJS       | ~12.x.x  |
| yarn         | 1.21.1   |
| gcc          | ~9.x.x   |
| node-gyp     | ^8.1.0   |

`* Can be anything`

### Getting Started
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

### Want to say thank you?
All I ask is you like and/or contribute to the project! :sparkling_heart:

#### Want to help out more?
I don't need anything else, but if you would like, buy me some :coffee: maybe:
```
BTC: bc1qmqwa6jvus9kr3nusexvuewt0h75jj5qwka8a2u
ETH: 0x5BcEcC9710a3Aa47F84BaCb1E5EE6591dEa7a32e
RVN: RBfEoddXbXDR8fLLyCcvy5FUgdvpdof5f3
```


### Supported Algorithms
| Algorithms            |                  |                |
|-----------------------|------------------|----------------|
| Argon2d               |  Lyra2RE         |  X15           |
| Argon2i               |  Lyra2REv2       |  X16r*         |
| Argon2id              |  Lyra2REv3       |  X16rV2*       |
| Bcrypt*               |  Lyra2z          |  Yescrypt      |
| Blake*                |  NeoScrypt       |                |
| boolberry             |  NIST5           |                |
| C11*                  |  Quark           |                |
| CryptoNight           |  Qubit           |                |
| CryptoNight Fast      |  Scrypt*         |                |
| Fresh*                |  ScryptJane      |                |
| Fugue*                |  ScryptN         |                |
| Groestl*              |  SHA1            |                |
| Groestl Myriad*       |  SHA256d*        |                |
| Hefty1                |  Shavite3        |                |
| KAWPOW*               |  Skein           |                |
| Keccak                |  X11             |                |
| LBRY                  |  X13             |                |

`* Includes Unit Tests`
