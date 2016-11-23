/* eslint-env es6, node */
'use strict';

const
  gulp = require('gulp-help')(require('gulp')),
  del = require('del'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify');

// Clean
gulp.task('clean', 'Clean up!', function() {
  return del('jquery.selectable.min.js');
});

// Minify
gulp.task('minify', 'Minify it!', ['clean'], function() {
  return gulp.src('jquery.selectable.js')
    .pipe(uglify({
      preserveComments: 'license'
    }))
    .on('error', function(err) {
      notify(err).write(err);
      this.emit('end');
    })
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(__dirname));
});

// Watch for changes
gulp.task('watch', 'Watch for changes!', function() {
  gulp.watch('jquery.selectable.js', ['minify']);
});

// Default
gulp.task('default', 'The default task.', ['watch']);
