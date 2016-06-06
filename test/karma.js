import karmaWebpack from 'karma-webpack';
import karmaMocha from 'karma-mocha';
import karmaMochaReporter from 'karma-mocha-reporter';
import karmaPhantomJSLauncher from 'karma-phantomjs-launcher';
import karmaSourcemapLoader from 'karma-sourcemap-loader';

import webpackConfig from './webpack.config.js';

module.exports = config => {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: false, // Set this to true if running on CI server
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/tests.webpack.js',
    ],
    preprocessors: {
      './test/tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    plugins: [
      karmaWebpack,
      karmaMocha,
      karmaMochaReporter,
      karmaPhantomJSLauncher,
      karmaSourcemapLoader,
    ],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true,
    },
  });
};
