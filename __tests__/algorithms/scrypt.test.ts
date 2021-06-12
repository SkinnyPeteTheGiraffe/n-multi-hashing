import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';
import { neoscrypt } from '*/n-multi-hashing.node';

describe('Testing Scrypt Algorithms', () => {
    const nTime = '1472669240';
    const nonce = '211447';
    const merkleTree = Buffer.from('7eb35ada44', 'hex');
    const headerBuffer = serializeHeader(
        {
            bits: '1f01ffff',
            previousBlockHash: '0',
            version: 1,
        },
        merkleTree.toString('hex'),
        nTime,
        nonce
    );
    it('Test Valid Scrypt Hash', () => {
        expect(hashing.scryptn(headerBuffer, 16).toString('hex')).toEqual(
            '97760b8316bc51c7c2ba7960731c61bc7eb97adc8ab41ae640b60f492d61f063'
        );
    });
    it('Test Valid NeoScrypt Hash', () => {
        expect(hashing.neoscrypt(headerBuffer, 16).toString('hex')).toEqual(
            'd9d3848f2a2b65113ba238605716fca0b27c6ed8a9d68a6fe805dc60ec620208'
        );
    });
    it('Test Valid ScryptJane Hash', () => {
        expect(hashing.scryptjane(headerBuffer, 1472669240, 1472666240, 1, 2).toString('hex')).toEqual(
            '5105ae88bb7b338ff772fdcade6fe10fbc9e20affce017727210bf9b0a9addca'
        );
    });
    it('Test Valid Yescrypt Hash', () => {
        expect(hashing.yescrypt(headerBuffer).toString('hex')).toEqual(
            '7daef8e2f8dbbfbb0b758e5df57f9fa59472711046bc8a8f4f235b819692ab3d'
        );
    });
});
