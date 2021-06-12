import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';

const validX11 = 'a01a3059dc126bcc88fe4e3d79a7a80b746b294a350ac75360e6fdd94af15faf';
const validX13 = '784fb57b65cf69674facd3964e862466aff353659122901c98cee3a8d0850eda';
const validX15 = '8a08ca4e37a8284ec7e40a4c97b29e9bf9ef8b207ddf9081740487c092cc922b';
const validX16r = '00acc5dc27410f4baabd50bce5e8c26c5f75c349a12bd316e25bf369f6733c2c';
const validX16rV2 = 'b17c3c3827ed0f2c1e8a6c9af2300852439b077a4f12e999ce8781acc67a29f9';

describe('Testing X Algorithms', () => {
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
    it('Test Valid x11 Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.x11(headerBuffer, hashOutBuf, 32).toString('hex')).toEqual(validX11);
    });
    it('Test Valid x13 Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.x13(headerBuffer, hashOutBuf, 32).toString('hex')).toEqual(validX13);
    });
    it('Test Valid x15 Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.x15(headerBuffer, hashOutBuf, 32).toString('hex')).toEqual(validX15);
    });
    it('Test Valid x16r Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.x16r(headerBuffer, hashOutBuf, 32).toString('hex')).toEqual(validX16r);
    });
    it('Test Valid x16rv2 Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.x16rv2(headerBuffer, hashOutBuf, 32).toString('hex')).toEqual(validX16rV2);
    });
});
