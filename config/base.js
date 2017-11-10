import os from 'os';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export var port = 8899;
export function getIP() {
    let interfaces = os.networkInterfaces(),
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
export var commonConfig = {
    entry: {},
    output: {
        path: path.resolve(__dirname, './../dist'),
        filename: 'js/[name]-[hash:5].js',
        publicPath: './'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true //css压缩
                    }
                }, {
                    loader: 'autoprefixer-loader',
                    query: {
                        browsers: ['iOS 7', 'Android 2.3', 'Firefox > 15']
                    }
                }, {
                    loader: 'sass-loader'
                }]
            })
        },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            }, {
                test: /\.(png|jpg|gif|svg)/,
                loader: 'file-loader',
                query: {
                    publicPath: './../',
                    outputPath: 'images/',
                    name: '[name]-[hash:5].[ext]'
                }
            }
        ]
    },
    plugins: [new ExtractTextPlugin('css/[name]-[chunkhash:5].css')]
}

export var templateConfig = [{
    entry: 'index',
    filename: 'index.html',
    title: 'index',
    template: './config/template.html',
    chunks: ['index'],
    inject: true,
    hash: false,
    minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        html5: true,
        minifyJS: true,
        minifyCSS: true
    }
}, {
    entry: 'two',
    filename: 'two.html',
    title: 'two',
    template: './config/template.html',
    chunks: ['two'],
    inject: true,
    hash: false,
    minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        html5: true,
        minifyJS: true,
        minifyCSS: true
    }
}];
