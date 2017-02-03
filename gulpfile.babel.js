import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('sass', () => {
	gulp.src('./demo/sass/style.scss')
	.pipe($.plumber())
	// .pipe($.sourcemaps.init())
	.pipe($.sass({
		// includePaths: ['.']
		// includePaths : [require("bourbon").includePaths],
		// [outputStyle] Type: String Default: nested Values: nested, expanded, compact, compressed
		outputStyle  : 'nested',
	}).on('error', $.sass.logError))
	.pipe($.autoprefixer({
		browsers: ['last 20 versions']
	}))
	.pipe(gulp.dest('./demo/css'));
});

gulp.task('watch', () => {
	gulp.watch([
		'*.scss',
		'assets/*.scss',
		'assets/**/*.scss'
		],['sass']);
});

gulp.task('build', ['sass']);

gulp.task('default', ['build']);