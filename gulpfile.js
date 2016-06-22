'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const friendlyFormatter = require('eslint-friendly-formatter');

gulp.task('lint', () =>
  gulp.src(['src/**/*.js', 'test/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format(friendlyFormatter))
  .pipe(eslint.failAfterError())
);

gulp.task('babel', () =>
  gulp.src('./src/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('build'))
);

gulp.task('default', ['lint', 'babel']);
