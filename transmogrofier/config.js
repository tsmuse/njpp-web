const config = {
  cwd: './site_src/',
  dist: './dist/',
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
};

module.exports = config;