import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = 'd2fb6dc6843e1cec02932c4414e7461071645035a124be5e18d6ac2f47911f37';

describe('Testing Fresh Algorithm', () => {
    const nTime = '1390103681';
    const nonce = '128987';
    const merkleTree = Buffer.from('ef3ee42b51e2a19c4820ef182844a36db1201c61eb0dec5b42f84be4ad1a1ca7', 'hex');
    const headerBuffer = serializeHeader(
        {
            bits: '1e0ffff0',
            previousBlockHash: '00000ffd590b1485b3caadc19b22e6379c733355108f107a430458cdf3407ab6',
            version: 2,
        },
        merkleTree.toString('hex'),
        nTime,
        nonce
    );
    it('Test Valid Fresh Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.fresh(headerBuffer, hashOutBuf, 32).toString('hex')).toEqual(valid);
    });
});
