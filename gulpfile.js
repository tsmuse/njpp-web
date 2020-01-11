// Plugins and other modules used by the toolchain
const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

// settings and site specific vars
const cwd = './src/',
dist = './_site/',
styles = {
  src: 'sass/',
  glob: 'sass/*.scss',
  dist: './src/css/',
},
js = {
  src: 'js/',
  glob: 'js/*.js',
  dist: './_site/js/',
};

// Individual Tasks

// Utility functions

function cleanDist() {
  return del(`${dist}**/*`);
}

function buildSass() {
  return src(styles.glob, { cwd })
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest(styles.dist));
}

function processJS() {
  return src(js.glob, { cwd })
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest(js.dist));
}


function watchSass() {
  watch(styles.glob, { cwd }, buildSass);
}

function watchJS() {
  watch(js.glob, { cwd }, processJS);
}

// build chains
const buildChain = [
  buildSass,
  processJS,
];

const watchChain = [
  watchSass,
  watchJS,
];


// Gulp commands
exports.sass = buildSass;
exports.clean = cleanDist;
exports.build = series(cleanDist, parallel(...buildChain));
exports.dev = series(
  parallel(...buildChain),
  parallel(...watchChain)
);
