'use strict';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import open from 'open';
import config from './webpack.config.babel';
import {
	hostName,
	hostPort
} from './cfg/base';

const hostPath = 'http://' + hostName + ':' + hostPort;

for (var property in config.entry) {
	config.entry[property].unshift('webpack-dev-server/client?' + hostPath, 'webpack/hot/dev-server');
}

new WebpackDevServer(webpack(config), {
	contentBase: './dist',
	hot: true,
	historyApiFallback: true
}).listen(hostPort, hostName, function(err, result) {
	if (err) {
		return console.log(err);
	}

	open(hostPath);
	console.log('Listening at ' + hostPath);
});