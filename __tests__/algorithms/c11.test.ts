import * as hashing from '../../build/Debug/n-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = '332192453386aa665fad5609d0cf0dc64144fd4dbcdcf88eb51de0bd1de77124'

describe('Testing Scrypt Algorithm', () => {
    const nTime = '1623046762';
    const nonce = '211447';
    const merkleTree = Buffer.from('7eb35ada44', 'hex');
    const headerBuffer = serializeHeader(
        {
            bits: '1f01ffff',
            previousblockhash: '1b0e285880c02c03964a49a6b626c54732277dea0320d6381fc6803030454694',
            version: 1,
        },
        merkleTree.toString('hex'),
        nTime,
        nonce
    );
    it('Test Valid C11 Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.c11(headerBuffer, hashOutBuf, 32).toString('hex')).toEqual(valid)
    });
});
