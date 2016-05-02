const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require("gulp-tslint");
const stylish = require('gulp-tslint-stylish');

var config = require('./config');

var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('typescript', ['typescript:dev']);

gulp.task('typescript:dev', function () {
    var dest = config.dev.DEST;
    return compileTypeScript(dest);
});

gulp.task('typescript:dist', function () {
    var dest = config.dist.DEST;
    return compileTypeScript(dest);
});
 
function compileTypeScript(dest) {
    gulp.src(config.buildSrcGlob('typescript'))
        .pipe(tslint())
        .pipe(tslint.report(stylish, {
            emitError: false,
            sort: true,
            bell: true
        }));

    return tsProject.src()
        .pipe(sourcemaps.init())
            .pipe(ts(tsProject))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dest));
}