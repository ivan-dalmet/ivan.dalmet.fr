import {
  src, dest, series, parallel, watch,
} from 'gulp';
import del from 'del';
import nodeSass from 'node-sass';

import $autoprefixer from 'gulp-autoprefixer';
import $concat from 'gulp-concat';
import $cssnano from 'gulp-cssnano';
import $htmlmin from 'gulp-htmlmin';
import $inject from 'gulp-inject';
import $sass from 'gulp-sass';
import $webserver from 'gulp-webserver';

$sass.compiler = nodeSass;

// -------------------------
//    Configuration
// -------------------------
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

path.html = {
    input:  path.folder.input + '/html/**/*',
    watch:  path.folder.input + '/html/**/*',
    output: path.folder.output
};

path.rootFiles = {
    input:  path.folder.input + '/root-files/**/*',
    watch:  path.folder.input + '/root-files/**/*',
    output: path.folder.output
};

// -------------------------
//    STYLE tasks
// -------------------------

export const buildScss = () => src(path.scss.input)
  .pipe($sass().on('error', $sass.logError))
  .pipe($cssnano({ discardComments: { removeAll: true }, safe: true }))
  .pipe($autoprefixer())
  .pipe($concat(`style.css`))
  .pipe(dest(path.scss.output));

export const watchScss = () => watch(path.scss.watch, series(buildScss, buildHtml));

// -------------------------
//    HTML tasks
// -------------------------

export const buildHtml = () => src(path.html.input)
  .pipe($inject(src([path.scss.output + '**/*.css']), {
    transform: (filePath, file) => `<style>${file.contents.toString('utf8')}</style>`,
  }))
  .pipe($htmlmin({ collapseWhitespace: true }))
  .pipe(dest(path.html.output));

export const watchHtml = () => watch(path.html.watch, buildHtml);

// -------------------------
//    Copy root files tasks
// -------------------------

export const buildRootFiles = () => src(path.rootFiles.input)
  .pipe(dest(path.rootFiles.output));

export const watchRootFiles = () => watch(path.rootFiles.watch, buildRootFiles);

// -------------------------
//    Global tasks
// -------------------------

export const clean = () => del(path.folder.output);
export const devServer = () => src(path.folder.output)
  .pipe($webserver({
    livereload: true,
    open: true,
  }));

export const build = series(
  clean,
  parallel(
    series(buildScss, buildHtml),
    buildRootFiles
  )
);

export const dev = series(
  build,
  devServer,
  parallel(watchScss, watchHtml, watchRootFiles),
);

export default build;

