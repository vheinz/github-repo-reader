// Karma configuration
// Generated on Sat Sep 24 2016 14:45:22 GMT+0200 (Central Europe Summer Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
            './public/libs/js/jquery-1.11.3.min.js',
            './public/libs/js/angular.js',
            './public/libs/js/angular-sanitize.js',
            './public/libs/js/angular-animate.js',
            './public/libs/js/angular-route.js',
            './public/libs/js/bootstrap.min.js',
            './public/libs/js/ui-bootstrap-tpls-0.14.3.js',
            './public/libs/js/dirPagination.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './private/js/app.js',
            './private/js/services/Get.spec.js',
            './private/js/services/Error.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
