'use strict';

const gulp = require('gulp');

// plugins
const cssVip = require("gulp-css-vip"); // adds !important to all css styles
const rename = require('gulp-rename'); // we want to change the output filename
const watch = require('gulp-watch'); // auto-runs the 'gulp' command for you

gulp.task( 'build', () => {
  return gulp.src('./src/styles.css')
    .pipe( cssVip() )
    .pipe( rename('override-styles.css'))
    .pipe( gulp.dest('./') )
} );

gulp.task( 'default', ['build'], () => {
  // gulp.task('build');
  return gulp.watch('./src/styles.css', ['build'])
} );
