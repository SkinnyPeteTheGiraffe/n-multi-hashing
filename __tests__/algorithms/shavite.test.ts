import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';
import { neoscrypt } from '*/n-multi-hashing.node';

describe('Testing Shavite Algorithms', () => {
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
    it('Test Valid Shavite3 Hash', () => {
        expect(hashing.shavite3(headerBuffer).toString('hex')).toEqual(
            '14e89721f10eeccdc400cbfe9eb3579189bfe2f1279d9e73e1a3fbf2c1dac6d9'
        );
    });
});
