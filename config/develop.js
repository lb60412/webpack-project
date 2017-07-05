import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import open from 'open';
import * as base from './base';

const hostPath = `http://${base.getIP()[0]}:${base.port}`;
const filename = base.templateConfig.filename.split('.')[0];

base.commonConfig.devtool = 'source-map';

base.commonConfig.entry[filename] = ['./src/' + filename];
base.commonConfig.entry[filename].unshift('webpack-dev-server/client?' + hostPath, 'webpack/hot/dev-server');

base.commonConfig.plugins.push(new HtmlWebpackPlugin(base.templateConfig));
base.commonConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

// initial devServer
new WebpackDevServer(webpack(base.commonConfig), {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
}).listen(base.port, base.getIP()[0], function(err) {
    if (err) {
        return console.log(err);
    }

    open(hostPath);

    console.log('Listening at ' + hostPath);
});
