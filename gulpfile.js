var gulp=require('gulp');
var sass=require('gulp-sass');
var browserSync=require('browser-sync').create();
var sourcemaps=require('gulp-sourcemaps');
var dir="./src";

gulp.task('sass',function(){
  return gulp.src(dir+'/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole:true}))
    .pipe(sass({
      outputStyle:'expanded',
      sourseComments:'map'
    }))
    .pipe(gulp.dest(dir+'/style/'))
    .pipe(browserSync.stream({match:"**/*.css"}));
    console.log("Jestem?");
});


gulp.task('test',function(){
	console.log("Jestem?");
});

gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server:dir
  });

  gulp.watch(dir+'/**/scss/*.scss',['sass']);
  gulp.watch(dir+"/**/*.html")
    .on('change',browserSync.reload);
})
