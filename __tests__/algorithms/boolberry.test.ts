import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';
import { boolberry } from '*/n-multi-hashing.node';

const valid = 'fe0db4a5ece04b1b3e08948785dafcbd52c223a86a45e76e18e4d74ce34e6de9';

describe('Testing Boolberry Algorithm', () => {
    const header = Buffer.from('68656c6c6f20776f726c64', 'hex');
    it('Test Valid Boolberry Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.boolberry(header, hashOutBuf, 32).toString('hex')).toEqual(valid);
    });
});
