var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('./config');

gulp.task('build', ['build:dist']);

var preBuildTasks = [
    'inject',
    'sass',
    'typescript',
    'jade',
    'static',
    'images'
];

gulp.task('build:dev', function (callback) {
    runSequence(
        'clean:dev',
        preBuildTasks.map(function (task) {
            return task + ":dev"
        }),
        callback
    );
});

gulp.task('build:dist', function (callback) {
    runSequence(
        'clean:dist',
        preBuildTasks.map(function (task) {
            return task + ":dist"
        }),
        callback
    );
});