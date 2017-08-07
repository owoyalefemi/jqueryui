var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucks = require('gulp-nunjucks');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('nunjucks', function() {
  return gulp.src('pages/**/*.+(html|nunjucks)')
  .pipe(nunjucksRender({
      path: ['templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('./'))
});

gulp.task('default', ['nunjucks','sass', 'sass:watch']);
