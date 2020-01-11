module.exports = function(eleventyConfig){
  eleventyConfig.setTemplateFormats(['liquid','md', 'css', 'svg', 'png', 'jpg']);
  eleventyConfig.addPassthroughCopy('src/resume.html');

  return {
    markdownTemplateEngine: false,
    htmlTemplateEngine: 'liquid',
    dir: {
      input: 'src',
    },
  };
};
