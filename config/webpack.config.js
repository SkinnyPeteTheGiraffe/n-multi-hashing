const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, '../dist/umd'),
        filename: 'index.js',
        library: 'n-multi-hashing',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.ts(x*)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'config/tsconfig.umd.json',
                    },
                },
            },
        ],
    },
    // file resolutions
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            fs: require.resolve('browserify-fs'),
            path: require.resolve('path-browserify'),
            buffer: require.resolve('buffer'),
            stream: require.resolve('stream-browserify'),
            util: false,
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'build/Release', to: '../dist/umd' }],
        }),
    ],
};
