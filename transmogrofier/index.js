// Plugins and other modules used by the toolchain
const { src, dest, parallel, series, watch } = require('gulp');
const pug = require('gulp-pug');
const data = require('gulp-data');
const fm = require('front-matter');
const sass = require('gulp-sass');
  sass.compiler = require('node-sass');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

// settings and site specific vars
const { cwd, dist, sass:styles, pages, portfolio } = require('./config');
const siteGlobalVals = require(`../site_src/globals`);

// Individual Tasks

// Utility functions
function cleanDist(){
  return del(`${dist}**/*`);
}

function buildSass(){
  return src(styles.glob,{ cwd })
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest(styles.dist));
}

function processJS(){}

// "Pages" are pages that have a unique template. Pages exist primarily to take advantage of includes
function buildPages(){
  return src(pages.glob, { cwd })
    .pipe(pug({
      data: siteGlobalVals.data,
    }))
    .pipe(dest(pages.dist));
}
// "Portfolio" pages use the portfolio template, include frontmatter and render their contents into 
// the block of the portfolio template.
function buildPortfolio(){
  return src(portfolio.glob, { cwd })
    .pipe(data(function (file) {
      let frontmater = fm(String(file.contents));
      file.contents = Buffer.from(frontmater.body);
      return frontmater.attributes;
    }))
    .pipe(pug({
      data: siteGlobalVals.data,
    }))
    .pipe(dest(portfolio.dist));
}

function watchSass(){
  watch(styles.glob, { cwd, ignoreInitial: false, }, buildSass );
}

function watchPages(){
  watch(pages.glob, { cwd, ignoreInitial: false, }, buildPages );
}

function watchPortfolio(){
  let opts = { cwd, ignoreInitial: false, ignored: 'portfolio/_*.pug' };
  watch(portfolio.glob, opts , buildPortfolio );
}

// Gulp commands
exports.sass = buildSass;
exports.clean = cleanDist;
exports.pages = buildPages;
exports.portfolio = buildPortfolio;
exports.build = series(cleanDist, parallel(buildSass, buildPages, buildPortfolio));
exports.dev = series(cleanDist, parallel(watchSass, watchPages, watchPortfolio));

