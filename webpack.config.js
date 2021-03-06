const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: [
                    {
                        loader: 'webpack-bem-loader',
                        options: {
                            levels: {
                                './blocks': {
                                    techs: ['js', 'css'],
                                    scheme: 'nested',
                                    naming: 'origin'
                                }
                            }
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react'],
                            ignore: /node_modules/
                        }
                    }
                ]
            }
        ]
    }
};
