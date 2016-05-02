var gulp = require('gulp');
var jade = require('gulp-jade');

var config = require('./config');

gulp.task('jade', ['jade:dev']);

gulp.task('jade:dev', function () {
    var dest = config.dev.DEST;
    return compileJade(config.jade.dev, dest);
});

gulp.task('jade:dist', function () {
    var dest = config.dist.DEST;
    return compileJade(config.jade.dist, dest);
});

function compileJade(options, dest) {
    return gulp.src([
            config.buildSrcGlob('jade'),
            '!src/index.jade'
        ])
        .pipe(jade(options).on('error', function (err) {
            console.log(err);
        }))
        .pipe(gulp.dest(dest));
}