var gulp = require('gulp');
var webdriver = require('gulp-webdriver');

var opts = {
    logLevel: 'silent',
    waitforTimeout: 10000,
    reporter: 'dot'
};

gulp.task('amazon:suite', ['amazon:visual']);

gulp.task('amazon:demo', function() {
    return gulp.src('./test/config/wdio.amazon.js').pipe(webdriver(opts));
});

gulp.task('amazon:visual', function() {
    return gulp.src('./test/config/wdio.visual.js').pipe(webdriver(opts));
});
