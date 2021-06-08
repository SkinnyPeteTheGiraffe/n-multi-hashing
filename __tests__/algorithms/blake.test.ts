import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = '530f9953b6910d3de4b9a7f8c9fa21ac407ad890eedbee3d6070297eafa7ff4d';

describe('Testing Blake Algorithm', () => {
    const header = Buffer.from('68656c6c6f20776f726c64', 'hex');
    it('Test Valid Blake Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.blake(header, hashOutBuf, 32).toString('hex')).toEqual(valid);
    });
});
