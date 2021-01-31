const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const cleanCSS = require('gulp-clean-css')

sass.compiler = require('node-sass')

gulp.task('sass', async () => {
  return gulp
    .src('./css/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
})

gulp.task('watch', async () => {
  gulp.watch('./css/style.scss', gulp.series('sass'))
})

gulp.task('default', gulp.series('sass', 'watch'))
