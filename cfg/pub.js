'use strict';

import 'core-js';
import webpack from 'webpack';
import * as base from './base';

var pubConfig = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })
    ]
};

export default Object.assign({}, pubConfig, base.cfg);