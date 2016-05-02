var gulp = require('gulp');

var config = require('./config');

gulp.task('images', ['images:dev']);

gulp.task('images:dev', function () {
    var dest = config.dev.DEST;
    return copyStatics(dest);
});

gulp.task('images:dist', function () {
    var dest = config.dist.DEST;
    return copyStatics(dest);
});

function copyStatics(dest) {
    return gulp.src([config.buildSrcGlob('images')])
        .pipe(gulp.dest(dest))
}