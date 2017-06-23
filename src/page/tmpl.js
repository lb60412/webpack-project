'use strict';

import 'core-js';
var defaultOptions, defaultTmpl, tmplArr = [];

//default webpack html template options
defaultOptions = {
    filename: 'index.html',
    title: 'example',
    template: './src/page/index.html',
    chunks: ['index'], //custom entry file, default all entry file.
    inject: true,
    hash: false,
    minify: {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        html5: true, //根据HTML5规范解析
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    }
}

//custom entry file template
defaultTmpl = [{
    entry: 'index',
    filename: 'index.html',
    title: 'example',
    template: './src/page/index.html',
    chunks: ['index']
}];

defaultTmpl.forEach(function(element) {
    tmplArr.push(Object.assign({}, defaultOptions, element));
});

export default tmplArr;