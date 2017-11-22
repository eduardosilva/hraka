var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload,

	sassConfig = {
		layout: {
			task: 'sass-layout',
			source: './sass/admin/layout/**/*.scss',
			dest: './assets/admin/layout/css'
		},
		components: {
			task: 'sass-components',
			source: './sass/global/**/*.scss',
			dest: './assets/global/css'
		},
		old_pages: {
			task: 'sass-pages',
			source: './pages/admin/pages/**/*.scss',
			dest: './assets/admin/pages/css'
		}
	};

// Task 'sass-layout-dev' - Run with command 'gulp sassdev'
gulp.task(sassConfig.layout.task, function () {
	return gulp.src(sassConfig.layout.source)
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(gulp.dest(sassConfig.layout.dest));
});

// Task 'sass-components-dev' - Run with command 'gulp sassdev'
gulp.task(sassConfig.components.task, function () {
	return gulp.src(sassConfig.components.source)
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(gulp.dest(sassConfig.components.dest));
});

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});


gulp.task('browser-sync-reload', function () {
	console.log('reloading...');
	reload();
});

//watch-layout
gulp.task('watch-layout', function () {
	gulp.watch('./sass/**/*.scss', [sassConfig.layout.task, 'browser-sync-reload']);
});

//watch-pages
gulp.task('watch-pages', function () {
	gulp.watch('./pages/**/*.html', ['browser-sync-reload']);
	gulp.watch('./pages/**/*.scss', [sassConfig.layout.task, 'browser-sync-reload']);
});

gulp.task('watch-directives', function (){
	gulp.watch('./directives/**/*.html', ['browser-sync-reload']);
	gulp.watch('./directives/**/*.scss', [sassConfig.layout.task, 'browser-sync-reload']);
});

gulp.task('default', [sassConfig.layout.task,
sassConfig.components.task,
	'browser-sync',
	'watch-layout',
	'watch-pages',
	'watch-directives'
]);