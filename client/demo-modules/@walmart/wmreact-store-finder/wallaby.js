var wallabyWebpack = require('wallaby-webpack');
var webpack = require('webpack');

var webpackPostprocessor = wallabyWebpack({
    cache: true,
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: [/node_modules/],
            loader: 'babel-loader?stage=1'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader'
        }],
        postLoaders: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components|plugins|[.]spec[.]js)/,
            loader: 'istanbul-instrumenter'
        }]
    },
    resolve: {
        modulesDirectories: ['node_modules', require('path').join(__dirname, 'src')],
        extensions: ['','.js','.jsx']
    }
});

module.exports = function () {

    return {
        files: [
            {pattern: 'node_modules/chai/chai.js', instrument: false},
            {pattern: 'node_modules/sinon/lib/sinon.js', instrument: false},
            {pattern: 'node_modules/sinon-chai/lib/sinon-chai.js', instrument: false},
            {pattern: 'node_modules/react-demo-shared/phantomjs-shims.js', instrument: false},
        ],

        tests: [
            { pattern: 'test/specs/**/*.spec.js', load: false }
        ],

        postprocessor: webpackPostprocessor,

        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    };

}