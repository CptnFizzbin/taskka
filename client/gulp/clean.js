var gulp = require('gulp');
var clean = require('gulp-clean');

var config = require('./config');

gulp.task('clean', ['clean:dist']);

gulp.task('clean:dev', function () {
    return cleanDir(config.dev.DEST);
});

gulp.task('clean:dist', function () {
    return cleanDir(config.dist.DEST);
});

function cleanDir(target) {
    return gulp.src(target, {read: false}).pipe(clean());
}