'use strict';

import path from 'path';
import os from 'os';
import 'core-js';

function getIp() {
    var interfaces = os.networkInterfaces(),
        ips = [];
    Object.keys(interfaces).forEach(function(interfaceName) {
        interfaces[interfaceName].forEach(function(ipInfo) {
            if (ipInfo.address.split('.').length == 4 && ipInfo.family == 'IPv4' && !ipInfo.internal) {
                ips.push(ipInfo.address);
            }
        });
    });

    return ips;
}

export var cfg = {
    entry: {},
    output: {
        path: path.join(__dirname, '/../dist'),
        filename: '[name]-[hash:10].js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!autoprefixer-loader'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=1&name=./images/[name]-[hash:10].[ext]'
        }]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter'
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.scss']
    }
}



export var hostName = getIp()[0];

export var hostPort = 8899;