var gulp = require('gulp');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src([
        'static/content_app/scss/*'
    ])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('static/content_app/css'));
});

gulp.task('build', function () {
    return runSequence(
        'sass'
    );
});

gulp.task('watch', ['build'], function() {
    gulp.watch('static/content_app/scss/**/*.scss', ['sass']);
    console.log('Gulp is running...');
});