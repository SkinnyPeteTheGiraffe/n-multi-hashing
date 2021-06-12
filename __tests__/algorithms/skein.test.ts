import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';
import { neoscrypt } from '*/n-multi-hashing.node';

describe('Testing Skein Algorithms', () => {
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
    it('Test Valid Skein Hash', () => {
        expect(hashing.skein(headerBuffer).toString('hex')).toEqual(
            '9bd9e432a3c76c29a54f1bf38e7c85143603e32e0c6f860ffb848e625cbc80f2'
        );
    });
});
