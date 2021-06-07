import * as hashing from '../../build/Debug/n-hashing.node';
import { serializeHeader } from '../../src/utils';

const valid = 'b847a7c01c812ed224282877a6c0839731f0109daded4db811a1a67756d71c8d'

describe('Testing Groestl Algorithm', () => {
    it('Test Valid Groestl Hash', () => {
        expect(hashing.groestl(Buffer.from('1234test1234test1234test1234dasd')).toString('hex')).toEqual(valid)
    });
});
