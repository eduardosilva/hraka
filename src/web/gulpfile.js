var gulp = require('gulp'),
	sass = require('gulp-sass'),
	// browserSync = require('browser-sync').create(),
	
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
		pages: {
			task: 'sass-pages',
			source: './sass/pages/**/*.scss',
			dest: './assets/pages/css'
		},
		old_pages: {
			task: 'sass-pages',
			source: './sass/admin/pages/**/*.scss',
			dest: './assets/admin/pages/css'
		}
	};

// Task 'sass-layout-dev' - Run with command 'gulp sassdev'
// gulp.task(sassConfig.layout.task, function() {
//   return gulp.src(sassConfig.layout.source)
//     .pipe(sass({outputStyle: 'expanded'}))
//     .pipe(gulp.dest(sassConfig.layout.dest));
// });

// Task 'sass-components-dev' - Run with command 'gulp sassdev'
gulp.task(sassConfig.components.task, function() {
  return gulp.src(sassConfig.components.source)
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest(sassConfig.components.dest));
});

// Task 'pages' - Run with command 'gulp sassdev' temp task
gulp.task(sassConfig.pages.task, function() {
  return gulp.src(sassConfig.pages.source)
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest(sassConfig.pages.dest));
});

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });

//watch
gulp.task('watch', function() {
  //gulp.watch(sassConfig.layoutSource, ['sass-layout-dev']);
});

// gulp.task('default', [sassConfig.layout.task, sassConfig.components.task, sassConfig.pages.task, 'browser-sync', 'watch']);
gulp.task('default', [sassConfig.components.task, sassConfig.pages.task, 'watch']);