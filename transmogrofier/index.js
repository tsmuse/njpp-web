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
const bs = require('browser-sync').create();

// settings and site specific vars
const { 
  cwd, 
  dist, 
  sass:styles, 
  pages, 
  portfolio,
  css, 
  imgs
} = require('./config');
const siteGlobalVals = require(`../site_src/globals`);

// Individual Tasks

// Utility functions
function moveCSS(){
  return src(css.glob, { cwd })
    .pipe(dest(css.dist));
}
function moveImgs(){
  return src(imgs.glob, { cwd })
    .pipe(dest(imgs.dist));
}
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

function startServer(cb){
  bs.init({
    server: {
      baseDir: dist,
    },
  });
  cb();
}

function reloadServer(cb){
  bs.reload();
  cb();
}
function watchDist(){
  const serverGlob = `${dist}**/*`;
  watch(serverGlob, reloadServer);
}

function watchSass(){
  watch(styles.glob, { cwd }, buildSass );
}

function watchPages(){
  watch(pages.glob, { cwd }, buildPages );
}

function watchPortfolio(){
  let opts = { cwd, ignored: 'portfolio/_*.pug' };
  watch(portfolio.glob, opts , buildPortfolio );
}

// Gulp commands
exports.sass = buildSass;
exports.clean = cleanDist;
exports.pages = buildPages;
exports.portfolio = buildPortfolio;
exports.build = series(cleanDist, parallel(buildSass, buildPages, buildPortfolio, moveCSS, moveImgs));
exports.dev = series(
  cleanDist, 
  parallel(buildSass, buildPages,buildPortfolio, moveCSS, moveImgs),
  startServer, 
  parallel(watchSass, watchPages, watchPortfolio, watchDist)
);

