import * as hashing from '../../build/Debug/n-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = 'b17c3c3827ed0f2c1e8a6c9af2300852439b077a4f12e999ce8781acc67a29f9';

describe('Testing x16rv2 Algorithm', () => {
    const nTime = '1623116481';
    const nonce = '211447';
    const merkleTree = Buffer.from('f067cd67d49090a6e1a4bf0822c7ae92744c2305949cbdb87193bb79a750ff78', 'hex');
    const headerBuffer = serializeHeader(
        {
            bits: '1d037169',
            previousBlockHash: 'c359ab90b211be9ec3beb10f7f582ce59b8118f86ed438158dea16039780f723',
            version: 536872192,
        },
        merkleTree.toString('hex'),
        nTime,
        nonce
    );
    it('Test Valid x16rv2 Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.x16rv2(headerBuffer, hashOutBuf, 32).toString('hex')).toEqual(valid);
    });
});
