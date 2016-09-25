var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var minifyjs = require("gulp-uglify");
var minifycss = require("gulp-clean-css");

var jsFiles = [
               	'./private/js/angularIinit.js',
               	'./private/js/services/Error.js',
               	'./private/js/services/Get.js',
               	'./private/js/controllers/FooterCtrl.js', 
               	'./private/js/controllers/ReposCtrl.js'
              ];

var cssFiles = ['./private/css/style.css'];

gulp.task('default', function() {
});

gulp.task('concat-js', function() {
	return gulp.src(jsFiles)
	    .pipe(concat('app.js'))
	    .pipe(gulp.dest('./private/js/'));
});

gulp.task('minify-js', function () {
    gulp.src('./private/js/app.js') 
    .pipe(minifyjs())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('minify-css', function() {
	  return gulp.src(cssFiles)
	    .pipe(minifycss({compatibility: 'ie8'}))
	    .pipe(gulp.dest('./public/css/'));
	});

gulp.task('watch', function() {
	gulp.watch(jsFiles, ['concat-js']);
	gulp.watch(['./private/js/app.js'], ['minify-js']);
	gulp.watch(cssFiles, ['minify-css']);
});


gulp.task('default', ['concat-js', 'minify-js', 'minify-css', 'watch']);