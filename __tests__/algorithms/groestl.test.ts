import * as hashing from '../../build/Debug/n-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = '4e7f92b2123cf19fe99e734b6d2cc1f8603c3889731911bcc0d869e3a9001f74';

describe('Testing Groestl Algorithm', () => {
    const nTime = '1623134082000';
    const nonce = '448002170';
    const merkleTree = Buffer.from('558f7fca2ac665b497ef72a2594db9acb3363d5d2f3237e19e7de7328dc3de70', 'hex');
    const headerBuffer = serializeHeader(
        {
            bits: '1A2D818D',
            previousBlockHash: '0000000000002302ab6a9ffd97c3fd0be8c163982bfffef2cc6a63ad24faa78b',
            version: 2,
        },
        merkleTree.toString('hex'),
        nTime,
        nonce
    );
    it('Test Valid Groestl Hash', () => {
        expect(hashing.groestl(headerBuffer).toString('hex')).toEqual(valid);
    });
});
