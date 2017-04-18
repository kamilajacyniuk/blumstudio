var gulp=require('gulp');
var sass=require('gulp-sass');
var browserSync=require('browser-sync').create();
var sourcemaps=require('gulp-sourcemaps');
const del = require('del');
var dir="./src";

gulp.task('sass',function(){
  return gulp.src(dir+'/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole:true}))
    .pipe(sass({
      outputStyle:'expanded',
      sourseComments:'map'
    }))
    .pipe(gulp.dest(dir+'/style/'))
    .pipe(browserSync.stream({match:"**/*.css"}));
});

gulp.task('clean', function(){
  return del('dist/**', {force:false});
});

gulp.task('dist', function(){
  return gulp.src([dir+'/**', '!/**/*.scss', '!'+dir+'/README.md'])
  .pipe(gulp.dest('./dist'))
});

gulp.task('build', ['dist', 'sass', 'clean']);

gulp.task('test',function(){
});

gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server:dir
  });

  gulp.watch(dir+'/**/sass/**/*.scss',['sass']);
  gulp.watch(dir+"/**/*.html")
    .on('change',browserSync.reload);
})
