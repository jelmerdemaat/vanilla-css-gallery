var gulp = require('gulp'),

		// CSS
		minifyCSS = require('gulp-minify-css'),
		sass = require('gulp-ruby-sass'),
		autoprefixer = require('gulp-autoprefixer'),

		// OTHER
		rename = require('gulp-rename');

gulp.task('default', function() {
	gulp.start('styles','minify');
});

gulp.task('styles', function() {
	return gulp.src(['sass/**/*.sass','sass/**/*.scss'])
					.pipe(sass({
						style: 'expanded',
						debugInfo: false
					}))
					.pipe(autoprefixer('last 3 versions'))
					.pipe(gulp.dest('css/'));
});

gulp.task('minify', function() {
	return gulp.src([
		'css/vanilla-css-gallery.css',
		'css/style.css'
	])
		.pipe(minifyCSS({
			keepSpecialComments: 1
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
	gulp.watch(['sass/**/*.sass','sass/**/*.scss'], ['default']);
});