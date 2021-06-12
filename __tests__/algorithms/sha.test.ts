import * as hashing from '../../build/Debug/n-multi-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = '841d8e2c310666c84a2e8f2636ce0a6eed620d44652062e70e5afcb4e569bf79';
const valid1 = '000000000000000000000000161617ff3cfcae373fe83aa04d11a8f10d269068';

describe('Testing SHA Algorithms', () => {
    it('Test Valid SHA256d Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(
            hashing
                .sha256d(
                    Buffer.from('4229de271d7d1762aee0637fd41ce74cce42e42fd58a1c9ddf24578a4ccf0c33', 'hex'),
                    hashOutBuf,
                    32
                )
                .toString('hex')
        ).toEqual(valid);
    });
    it('Test Valid SHA1 Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(
            hashing.sha1(Buffer.from('a3dcb4d229de6fde0db5686dee47145d', 'hex'), hashOutBuf, 64).toString('hex')
        ).toEqual(valid1);
    });
});
