'use strict';

/*
  Imports
 */
const gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: '*',
        rename:  {}
    });

/*
 Enabled isDev if --dev is available in command line
  */
const isDev = ($.util.env.dev !== undefined),
    isProd = ($.util.env.dev === undefined);

/* ------------------------- *\
    Configuration
\* ------------------------- */

/*
  Paths
 */
const path = {};

path.folder = {
    input:  'src',
    output: 'dist'
};

path.scss = {
    input:  path.folder.input + '/scss/*.scss',
    watch:  path.folder.input + '/scss/**/*.scss',
    output: path.folder.output + '/css'
};

path.js = {
    input:  [path.folder.input + '/js/libs/*.js', path.folder.input + '/js/**/*.js'],
    watch:  path.folder.input + '/js/**/*.js',
    output: path.folder.output + '/js'
};

path.assets = {
    input:  path.folder.input + '/assets/**/*',
    watch:  path.folder.input + '/assets/**/*',
    output: path.folder.output + '/assets'
};

path.html = {
    input:  path.folder.input + '/html/**/*',
    watch:  path.folder.input + '/html/**/*',
    output: path.folder.output
};

/* ------------------------- *\
    Common tasks
\* ------------------------- */

/*
  Default task
 */
gulp.task('default', ['clean'], function () {
    gulp.start(['build:ui']);
});

/*
  Watch task
 */
gulp.task('watch', ['build:ui', 'scss:watch', 'js:watch', 'assets:watch', 'html:watch']);


/*
  Build ui task
 */
gulp.task('build:ui', ['scss', 'js', 'assets', 'html']);

/*
  Clean task
 */
gulp.task('clean', function () {
    return $.del(path.folder.output);
});

/* ------------------------- *\
    STYLE tasks
\* ------------------------- */

/*
  SCSS task
 */
gulp.task('scss', function () {
    return gulp.src(path.scss.input)
        .pipe($.plumber().on('error', $.util.log))
        .pipe($.if(isDev, $.sourcemaps.init()))
        .pipe($.sass.sync())
        .pipe($.if(isProd, $.cssnano({discardComments: {removeAll: true}, safe: true})))
        .pipe($.autoprefixer())
        .pipe($.if(isDev, $.sourcemaps.write()))
        .pipe(gulp.dest(path.scss.output))
});

/*
  SCSS _watch_ task
 */
gulp.task('scss:watch', function () {
    gulp.watch(path.scss.watch, ['scss']);
});

/* ------------------------- *\
    SCRIPTS tasks
\* ------------------------- */

/*
  JS task
 */
gulp.task('js', function () {
    return gulp.src(path.js.input)
        .pipe($.plumber().on('error', $.util.log))
        .pipe($.if(isDev, $.sourcemaps.init()))
        .pipe($.concat('app.js'))
        .pipe($.if(isProd, $.uglify()))
        .pipe($.if(isDev, $.sourcemaps.write()))
        .pipe(gulp.dest(path.js.output))
});

/*
  JS _watch_ task
 */
gulp.task('js:watch', function () {
    gulp.watch(path.js.watch, ['js']);
});

/* ------------------------- *\
    ASSETS tasks
\* ------------------------- */

/*
  Assets task
 */
gulp.task('assets', function () {
    return gulp.src(path.assets.input)
        .pipe(gulp.dest(path.assets.output))
});

/*
  Assets _watch_ task
 */
gulp.task('assets:watch', function () {
    gulp.watch(path.assets.watch, ['assets']);
});

/* ------------------------- *\
    HTML tasks
\* ------------------------- */

/*
  HTML task
 */
gulp.task('html', function () {
    return gulp.src(path.html.input)
        .pipe(gulp.dest(path.html.output))
});

/*
  HTML _watch_ task
 */
gulp.task('html:watch', function () {
    gulp.watch(path.html.watch, ['html']);
});


