import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = 'cc11f2744ee3f8e6301613bb6c5fb2e1620d71e7dab2dbaa212e449a91919457';

describe('Testing LBRY Algorithm', () => {
    const headerBuffer = Buffer.from('4e1f3b7e93ceae67954e14792988338c2c05a458ff98d55137a2e'.repeat(5), 'hex');
    it('Test Valid LBRY Hash', () => {
        expect(hashing.lbry(headerBuffer).toString('hex')).toEqual(valid);
    });
});
