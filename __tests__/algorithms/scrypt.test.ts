import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';

describe('Testing Scrypt Algorithm', () => {
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
});
