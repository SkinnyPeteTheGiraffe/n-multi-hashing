import * as hashing from '../../build/Debug/n-multi-hashing.node';

const valid2d = 'e4c08ccd58a867b6d56d6293381572f9c5334fc597dbea36f42996974e14fc33';
const valid2i = '0db533e34ed02469d3e97604633fd770c348ffcdee1f6bebee8986f27cb85a46';
const valid2id = '72d3b45e3d43d5f36b0dff3db2ded02344651f956376ed495c5634e88db0e1b4';

describe('Testing Argon2 Algorithms', () => {
    const header = Buffer.from('68656c6c6f20776f726c64', 'hex');
    it('Test Valid Argon2D Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.argon2d(header, 2, 16, 1).toString('hex')).toEqual(valid2d);
    });
    it('Test Valid Argon2I Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.argon2i(header, 2, 16, 1).toString('hex')).toEqual(valid2i);
    });
    it('Test Valid Argon2ID Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.argon2id(header, 2, 16, 1).toString('hex')).toEqual(valid2id);
    });
});
