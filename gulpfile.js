var gulp = require('gulp');
// var cleanCss = require('gulp-clean-css');
var uglifyJs = require('gulp-uglify');
var connect = require('gulp-connect');
var rubySass = require('gulp-ruby-sass');
var concat = require('gulp-concat');


// // 压缩CSS
// gulp.task('minifyCss', function () {
//     return gulp.src('./src/style/*.css')
//     .pipe(cleanCss())
//     .pipe(gulp.dest('./dist/style/'));
// });

// 编译Sass
gulp.task('sass', function() {
    return rubySass('./src/sass/*.scss', {
        sourcemap: false,
        style: 'compressed',
    }).pipe(gulp.dest('./dist/css/'));
});

// 压缩JS
gulp.task('minifyJs', function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglifyJs())
        .pipe(gulp.dest('./dist/js/'));
});
// 监听Html
gulp.task('html', ['sass', 'minifyJs'], function() {
    return gulp.src('./list.html').pipe(connect.reload());
});

// 监听
gulp.task('default', ['sass', 'minifyJs'], function() {
    // 开启服务器
    connect.server({
        port: 9001,
        livereload: true
    });
    gulp.watch('./src/sass/*.scss', ['html']);
    gulp.watch('./src/js/*.js', ['html']);
});