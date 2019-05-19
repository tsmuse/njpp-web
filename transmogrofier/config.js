const config = {
  cwd: './site_src/',
  dist: './dist/',
  baseDir: '../dist/',
  pages: {
    src: 'pages/',
    glob: 'pages/*.pug',
    dist: './dist/',
  },
  portfolio: {
    src: 'portfolio/',
    glob: ['portfolio/*.pug', '!portfolio/_*.pug'],
    dist: './dist/portfolio',
  },
  sass: {
    src: 'static/sass/',
    glob: 'static/sass/*.scss',
    dist: './dist/css',
  },
  js: {
    src: 'static/js/',
    glob: 'static/js/*.js',
    dist: './dist/js/',
  },
  css: {
    src: 'static/css/',
    glob: 'static/css/**/*',
    dist: './dist/css',
  },
  imgs: {
    src: 'static/img/',
    glob: 'static/img/**/*.{png,svg}',
    dist: './dist/img'
  },
  fonts: {
    src: 'static/fonts/',
    glob: 'static/fonts/**/*',
    dist: './dist/fonts'
  }
};

module.exports = config;