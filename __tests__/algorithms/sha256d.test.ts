import * as hashing from '../../build/Debug/n-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = 'fa0f564ac5080480e74c0be12be7aa427a8ed08c1cd35b3a85bdadebb9810e00';

describe('Testing SHA256d Algorithm', () => {
    it('Test Valid SHA256d Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(
            hashing
                .sha256d(
                    Buffer.from('4229de271d7d1762aee0637fd41ce74cce42e42fd58a1c9ddf24578a4ccf0c33'),
                    hashOutBuf,
                    32
                )
                .toString('hex')
        ).toEqual(valid);
    });
});
