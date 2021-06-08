import * as hashing from '../../build/Debug/n-multi-hashing.node';

const valid = '95488ef5c3000d74a73b13ddd580838bedc1776bcd9871510e1d21c4d09d8d5d';

describe('Testing BCrypt Algorithm', () => {
    const header = Buffer.from('68656c6c6f20776f726c64', 'hex');
    it('Test Valid BCrypt Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.c11(header, hashOutBuf, 32).toString('hex')).toEqual(valid);
    });
});
