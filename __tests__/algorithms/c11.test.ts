import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = 'b61d1f871aa034e2f5b129dd84366d53a759e0c55210f19fbacb2bb933f2304a';

describe('Testing C11 Algorithm', () => {
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
    it('Test Valid C11 Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.c11(headerBuffer, hashOutBuf, 32).toString('hex')).toEqual(valid);
    });
});
