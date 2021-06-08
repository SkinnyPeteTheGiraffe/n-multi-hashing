import * as hashing from '../../build/Debug/n-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = '26ed11183d7fc0d0017b20348cbd86ae94a454142274db8c500bc7454b08a762';

describe('Testing x16r Algorithm', () => {
    const header = Buffer.from(
        '00000020a61bcd4ddc82e98f293f2182f2b7c5177cfa6d7ffba32912e560f106000000003d838c9ee01cc5c46e8648325996230366046a21243090b0fe0ff649f323432aae9ec55d2c910b1c12f96b3f',
        'hex'
    );
    it('Test Valid x16r Hash', () => {
        const hashOutBuf = Buffer.alloc(32, 0);
        expect(hashing.x16r(header, hashOutBuf, 32).toString('hex')).toEqual(valid);
    });
});
