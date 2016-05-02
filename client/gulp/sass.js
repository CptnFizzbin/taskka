var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');

var config = require('./config');

gulp.task('sass', ['sass:dev']);

gulp.task('sass:dev', function () {
    var dest = config.dev.DEST;
    return compileSass(dest);
});

gulp.task('sass:dist', function () {
    var dest = config.dist.DEST;
    return compileSass(dest);
});

function compileSass(dest) {
    return gulp.src(config.SRC + '/styles.scss')
        .pipe(sassGlob())
        .pipe(sass(config.sass).on('error', sass.logError))
        .pipe(gulp.dest(dest));
}