import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: ['default', ['jest-junit', { outputFile: 'junit.xml' }]],
    verbose: true,
};

export default config;
