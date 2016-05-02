var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var historyFallback = require('connect-history-api-fallback');
var log = require('connect-logger');

var config = require('./config');

gulp.task('serve', ['serve:dev']);

gulp.task('serve:dev', ['watch', 'build:dev'], function () {
    serveApp(config.dev.DEST);

    gulp.watch(config.buildSrcGlob('typescript'), ['serve:watch:ts']);
    gulp.watch(config.buildSrcGlob('jade'), ['serve:watch:jade']);
    gulp.watch(config.buildSrcGlob('sass'), ['serve:watch:sass']);
    gulp.watch(config.buildSrcGlob('statics'), ['serve:watch:static']);
    gulp.watch(config.buildSrcGlob('images'), ['serve:watch:images']);
    gulp.watch(config.buildSrcGlob('inject'), ['serve:watch:inject']);
});

gulp.task('serve:dist', ['build:dist'], function () {
    serveApp(config.dist.DEST);
});

function serveApp(baseDir) {
    return browserSync.init({
        injectChanges: false, // workaround for Angular 2 styleUrls loading
        files: ['./**/*.{html,htm,css,js}'],
        server: {
            open: "local",
            baseDir: [baseDir, "node_modules"],
            routes: {
                "/bower_components": "bower_components"
            },
            middleware: [
                log({format: '%date %status %method %url'}),
                historyFallback({"index": '/index.html'})
            ]
        }
    });
}

gulp.task('serve:watch:ts', ['typescript:dev'], browserSync.reload);
gulp.task('serve:watch:jade', ['jade:dev'], browserSync.reload);
gulp.task('serve:watch:sass', ['sass:dev'], browserSync.reload);
gulp.task('serve:watch:static', ['static:dev'], browserSync.reload);
gulp.task('serve:watch:images', ['images:dev'], browserSync.reload);
gulp.task('serve:watch:inject', ['inject:dev'], browserSync.reload);

