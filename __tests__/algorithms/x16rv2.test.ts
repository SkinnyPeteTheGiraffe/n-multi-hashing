import * as hashing from '../../build/Debug/n-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = '96df79ab5c7ec28450438b0c41a99d7c337d273d4aa5bd0ad477a20b124c2fed'

describe('Testing x16rv2 Algorithm', () => {
    const nTime = '1623046762';
    const nonce = '211447';
    const merkleTree = Buffer.from('7eb35ada44', 'hex');
    const headerBuffer = serializeHeader(
        {
            bits: '1f01ffff',
            previousblockhash: '',
            version: 2,
        },
        merkleTree.toString('hex'),
        nTime,
        nonce
    );
    it('Test Valid x16rv2 Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.x16rv2(headerBuffer, hashOutBuf, 16).toString('hex')).toEqual(valid)
    });
});
