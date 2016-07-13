'use strict';

var path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      'node_modules/@walmart/wmreact-react-demo-shared/phantomjs-shims.js',
      'test/specs/**/*.spec.js'
    ],
    preprocessors: {
      'test/specs/**/*.spec.js': ['webpack']
    },
    webpack: {
      cache: true,
      module: {
        loaders: [{
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/],
          loader: 'babel-loader?stage=1'
        },{
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }, {
          test: /\.styl$/,
          loader: "style-loader!css-loader!stylus-loader"
        }],
        postLoaders: [{
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components|plugins|[.]spec[.]js)/,
          loader: 'istanbul-instrumenter'
        }]
      },
      resolve: {
        root: [__dirname],
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['','.js','.jsx']
      }
    },
    webpackServer: {
      quiet: true,
      noInfo: true,
      stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    },
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,
    browsers: ['PhantomJS'],
    reporters: ['mocha', 'coverage'],
    browserNoActivityTimeout: 60000,
    plugins: [
      require('karma-coverage'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-sinon-chai'),
      require('karma-webpack')
    ],
    coverageReporter: {
      type : 'text'
    },
    captureTimeout: 100000,
    singleRun: true
  });
};
