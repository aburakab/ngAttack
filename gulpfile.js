var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('less', function () {

    var g = gulp.src(['./src/less/x_imports.less', './src/less/ui.*.less'])
        .pipe(concat('less/all.less'))
        .pipe(gulp.dest('./src/'))
        .pipe(less({
            paths: ['./src/dev/', './src/less/']
        }))
        .pipe(cssmin())
        .pipe(rename({ basename: 'sh', suffix: '.min' }))
        .pipe(gulp.dest('./assets/css'));
    g.on('error', console.error.bind(console));

    return g;

});


gulp.task('scripts', function () {
    return gulp.src(['./src/js/sh.data.js', './src/js/sh.min.js', './src/js/ui.*.js'])
        .pipe(uglify())
        .pipe(concat('sh.min.js'))
        .pipe(gulp.dest('./assets/js'));
});


gulp.task('default', ['less', 'scripts'], function () {
    // Watch .scss files
    gulp.watch('src/less/*.less', ['less']);

    // Watch .js files
    gulp.watch('src/js/*.js', ['scripts']);
})