var gulp = require('gulp'),
		sass = require('gulp-ruby-sass'),
		autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
	gulp.start('styles');
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

gulp.task('watch', function() {
	gulp.watch(['sass/**/*.sass','sass/**/*.scss'], ['styles']);
});