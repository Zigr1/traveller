var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app" /*"././"*/
        }
    });

    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/css/**/*.css', function() {
        gulp.start('cssInject');
    })

});

gulp.task('html', function() {
    browserSync.reload();
});

gulp.task('cssInject', ['css'], function() {
    return gulp.src('./app/temp/css/styles.css')
          .pipe(browserSync.stream());
});