import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { reverseBytes } from '../../src/utils';

const expectedMixHash = '89732e5ff8711c32558a308fc4b8ee77416038a70995670e3eb84cbdead2e337';
const expectedHash = '0000000718ba5143286c46f44eee668fdf59b8eba810df21e4e2f4ec9538fc20';

const headerHashBuf = Buffer.from('63543d3913fe56e6720c5e61e8d208d05582875822628f483279a3e8d9c9a8b3', 'hex');
const nonceBuf = reverseBytes(Buffer.from('88a23b0033eb959b', 'hex'));
const blockHeight = 262523;

const hash = (headerHashBuf: Buffer, nonceBuf: Buffer, blockHeight: number) => {
    const mixOutBuf = Buffer.alloc(32, 0);
    const hashOutBuf = Buffer.alloc(32, 0);
    hashing.kawpow(headerHashBuf, nonceBuf, blockHeight, mixOutBuf, hashOutBuf);
    const mix = mixOutBuf.toString('hex');
    const output = hashOutBuf.toString('hex');
    return {
        output,
        mix,
        buffers: {
            output: hashOutBuf,
            mix: mixOutBuf,
        },
    };
};

const verify = (mixHashBuf: Buffer, expectedHash: Buffer, iterations: number) => {
    const verifyHashOutBuf = Buffer.alloc(32);
    for (let i = 0; i < iterations; i++) {
        const isValid = hashing.kawpow_verify(headerHashBuf, nonceBuf, blockHeight, mixHashBuf, verifyHashOutBuf);
        if (!isValid) return false;
    }
    const verifiedHash = verifyHashOutBuf.toString('hex');
    return verifiedHash === expectedHash.toString('hex');
};

describe('Testing KawPOW Algorithm', () => {
    it('Test Valid KawPOW Hash', () => {
        const { output } = hash(headerHashBuf, nonceBuf, blockHeight);
        expect(output).toEqual(expectedHash);
    });

    it('Test Valid KawPOW Mixed Hash', () => {
        const { mix } = hash(headerHashBuf, nonceBuf, blockHeight);
        expect(mix).toEqual(expectedMixHash);
    });
    it('Validate Hash Over 100 Iterations', () => {
        const { buffers } = hash(headerHashBuf, nonceBuf, blockHeight);
        expect(verify(buffers.mix, buffers.output, 100)).toBeTruthy();
    });
});
