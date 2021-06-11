const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // bundling mode
    mode: 'production',
    // entry files
    entry: './src/index.ts',
    // node config
    node: {
        global: false,
        __filename: false,
        __dirname: false,
    },
    // output bundles (location)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
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

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'build/Release', to: '' }],
        }),
    ],
};
