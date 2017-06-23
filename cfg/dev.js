'use strict';

import 'core-js';
import webpack from 'webpack';
import * as base from './base';

var devConfig = {
	devtool: 'eval',
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

export default Object.assign({}, devConfig, base.cfg);