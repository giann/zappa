module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            './zappa.js',
            './test.js'
        ],

        port: 8080,

        browsers: ['PhantomJS'],
    });
};