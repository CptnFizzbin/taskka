var gulp = require('gulp');
var jade = require('gulp-jade');
var inject = require('gulp-inject');

var config = require('./config');

gulp.task('inject', ['inject:dev']);

gulp.task('inject:dev', ['sass:dev'], function () {
    var dest = config.dev.DEST;
    return injectFiles(config.jade.dev, dest);
});

gulp.task('inject:dist', ['sass:dist'], function () {
    var dest = config.dist.DEST;
    return injectFiles(config.jade.dist, dest);
});

function injectFiles(options, dest) {
    return gulp.src(config.SRC + '/index.jade')
        .pipe(inject(gulp.src(config.SRC + '/**/*.js', {read: false})))
        .pipe(inject(gulp.src(dest + '/**/*.css', {read: false}), { ignorePath: dest }))
        .pipe(jade(options))
        .pipe(gulp.dest(dest));
}