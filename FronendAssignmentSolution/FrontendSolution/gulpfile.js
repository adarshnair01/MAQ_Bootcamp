var gulp = require("gulp"),
		util = require("gulp-util"),
		sass = require("gulp-sass"),
		autoprefixer = require('gulp-autoprefixer'),
		minifycss = require('gulp-minify-css'),
		rename = require('gulp-rename'),
    stylish = require('jshint-stylish'),
		log = util.log;
 
var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task("sass", function(){ 
		log("Generate CSS files " + (new Date()).toString());
    gulp.src("css/*.scss")
            .pipe(sass({ style: 'expanded' }))
						.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
            .pipe(gulp.dest("css/"))
            .pipe(rename({suffix: '.min'}))
            .pipe(minifycss())
            .pipe(gulp.dest('css/'));
});


gulp.task('jshint', function() {
  return gulp.src('js/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

gulp.task("watch", function(){
    log("Watching scss files for modifications");
    gulp.watch("css/*.scss", ["sass"]);

    log("Watching js files for modifications");
    gulp.watch('js/*.js',["jshint"]);
});

gulp.task("default", ["sass","jshint"]);