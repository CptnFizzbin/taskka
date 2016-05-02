var gulp = require('gulp');

var config = require('./config');

gulp.task('static', ['static:dev']);

gulp.task('static:dev', function () {
    var dest = config.dev.DEST;
    return copyStatics(dest);
});

gulp.task('static:dist', function () {
    var dest = config.dist.DEST;
    return copyStatics( dest);
});

function copyStatics(dest) {
    return gulp.src([config.buildSrcGlob('statics')])
        .pipe(gulp.dest(dest))
}