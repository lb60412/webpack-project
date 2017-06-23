'use strict';

import minimist from 'minimist';
//import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import dev from './cfg/dev';
import pub from './cfg/pub';
import tmpl from './src/page/tmpl';

const params = minimist(process.argv.slice(2));

let config = params.status == 'develop' ? dev : pub;


tmpl.forEach(function(element) {
	config.plugins.push(new HtmlWebpackPlugin(element));
	config.entry[element.entry] = ['./src/' + element.entry];
});

export default config;