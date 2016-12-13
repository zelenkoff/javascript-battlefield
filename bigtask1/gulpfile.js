let gulp = require('gulp'),
	webserver = require('gulp-server-livereload');

	gulp.task('webserver',() => {
			gulp.src('./')
				.pipe(webserver({
						livereload: true,
						directoryListing: true,
						open: true
					}));
		});

	gulp.task('default', ['webserver']);