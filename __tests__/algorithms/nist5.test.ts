import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';
import { neoscrypt } from '*/n-multi-hashing.node';

describe('Testing NIST5 Algorithms', () => {
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
    it('Test Valid NIST5 Hash', () => {
        expect(hashing.nist5(headerBuffer, 16).toString('hex')).toEqual(
            '7a907b097593e505aa501c187bcfa9323e7d166c259552241bc84448b3082294'
        );
    });
});
