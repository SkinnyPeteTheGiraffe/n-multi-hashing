import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';
import { boolberry } from '*/n-multi-hashing.node';

const valid = '7b7ff78f242ab87ce987d654839d413ef539c9d0d8423e58f667b6f2d11eb2f8';
const validFast = 'f5dfeccb945ae4d507b17e0e7fe4a89dbf1a38d577ed7e0786797bbcf8c753ad';

describe('Testing Crypto Algorithm', () => {
    const header = Buffer.from(
        '016f3bb5655a980fb688c93fa7409313c82f9454aa71e46323ac02fd18c66b184e0209016ecda92aea9e980b',
        'hex'
    );
    it('Test Valid CryptoNight Hash', () => {
        expect(hashing.cryptonight(header, 32, 1).toString('hex')).toEqual(valid);
    });
    it('Test Valid CryptoNightFast Hash', () => {
        expect(hashing.cryptonightfast(header, 32, 1).toString('hex')).toEqual(validFast);
    });
});
