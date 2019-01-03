const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
    mode: 'production',
    entry: slsw.lib.entries,
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.ts',
            '.tsx'
        ],
        modules: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../src')
        ]
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ],
            }
        ]
    }
};
