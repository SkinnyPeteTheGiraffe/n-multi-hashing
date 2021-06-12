import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = 'de67a14c743973edadb1838fbae05f56b09f93d8484c4db48d88aa62f40e75fe';
const validV2 = '6027d2b274211dfeb504bfa87f56bcdef9c981b823e3922500012c4e68f07e7b';
const validV3 = 'a60bf6f09a910b335693613515b8785a8a667b08ad4d2331ed18fa9afa0b86b8';
const validZ = '3680b45fe8ab1c0bbeb1f10d4d2f3bfe184c5e47c1f9a326eb33738f808c1bbb';

describe('Testing Lyra Algorithms', () => {
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
    it('Test Valid Lyra2RE Hash', () => {
        expect(hashing.lyra2re(headerBuffer).toString('hex')).toEqual(valid);
    });
    it('Test Valid Lyra2REv2 Hash', () => {
        expect(hashing.lyra2rev2(headerBuffer).toString('hex')).toEqual(validV2);
    });
    it('Test Valid Lyra2REv3 Hash', () => {
        expect(hashing.lyra2rev3(headerBuffer).toString('hex')).toEqual(validV3);
    });
    it('Test Valid Lyra2z Hash', () => {
        expect(hashing.lyra2z(headerBuffer).toString('hex')).toEqual(validZ);
    });
});
