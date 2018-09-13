var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var cssNested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('css', function() {
    return gulp.src('./app/assets/css/styles.css')
        .pipe(postcss([cssImport, mixins, cssNested, cssVars, autoprefixer]))
        .on('error', function(error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/css'));
});
