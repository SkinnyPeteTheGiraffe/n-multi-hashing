import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = 'a03cfcb6f177391652eed949a3f587f6781469b1f2c6d16935d339057aec5c50';

describe('Testing Hefty Algorithm', () => {
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
    it('Test Valid Hefty1 Hash', () => {
        expect(hashing.hefty1(headerBuffer).toString('hex')).toEqual(valid);
    });
});
