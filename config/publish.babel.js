import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import * as base from './base';

//setting webpack.config
const filename = base.templateConfig.filename.split('.')[0];

base.commonConfig.entry[filename] = ['./src/' + filename];

base.commonConfig.plugins.push(new HtmlWebpackPlugin(base.templateConfig));

base.commonConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        },
        compress: {
            warnings: false, //delete debug info
            drop_debugger: true,
            drop_console: true
        }
    })
)

export default base.commonConfig;
