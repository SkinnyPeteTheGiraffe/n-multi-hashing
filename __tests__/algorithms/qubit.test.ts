import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';
import { neoscrypt } from '*/n-multi-hashing.node';

describe('Testing Qubit Algorithms', () => {
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
    it('Test Valid Qubit Hash', () => {
        expect(hashing.qubit(headerBuffer, 16).toString('hex')).toEqual(
            '93cbf01f8d002f9ce205cfcac44f574c4bcebf745f0e8a167e6259952455e538'
        );
    });
});
