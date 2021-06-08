import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = '8500d02bcc680b38f945e734b6c6e96bf7ecd13d6a4c4fbe7db3b9010a4cf2f8';

describe('Testing Fugue Algorithm', () => {
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
    it('Test Valid Fugue Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.fugue(headerBuffer, hashOutBuf, 32).toString('hex')).toEqual(valid);
    });
});
