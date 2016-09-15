import gulp        from 'gulp';
var mainBowerFiles = require('main-bower-files');
var flatten = require('gulp-flatten');
 
gulp.task("bower-files", function(){
  return gulp.src(mainBowerFiles(), { base: '../../bower_components' })
    .pipe(flatten())
    .pipe(gulp.dest("./build/js/lib"));
});