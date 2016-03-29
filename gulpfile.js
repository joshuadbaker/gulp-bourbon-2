var gulp = require('gulp'),
		sass = require('gulp-sass'),
		bourbon = require('bourbon').includePaths;
		neat = require('node-neat').includePaths;
var browserSync = require('browser-sync').create();

var paths = {
	scss: 'app/scss/**/*.scss'
}
gulp.task('sass', function() {
	return gulp.src(paths.scss)
		.pipe(sass({
			includePaths: ['./0-plugins', './2-modules'].concat(neat)
			})) // Converts Sass to Css with gulp-sass
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch(paths.scss, ['sass']);
})

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	})
})
