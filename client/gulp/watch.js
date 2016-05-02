var gulp = require('gulp');

var config = require('./config');

gulp.task('watch', function () {
    gulp.watch(config.buildSrcGlob('typescript'), ['typescript']);
    gulp.watch(config.buildSrcGlob('jade'), ['jade']);
    gulp.watch(config.buildSrcGlob('sass'), ['sass']);
    gulp.watch(config.buildSrcGlob('statics'), ['static']);
    gulp.watch(config.buildSrcGlob('images'), ['images']);
});