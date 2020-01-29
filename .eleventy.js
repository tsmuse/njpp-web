module.exports = function(eleventyConfig){
  eleventyConfig.setTemplateFormats(['liquid','md', 'css', 'svg', 'png', 'jpg', 'map']);
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPairedShortcode('cleared-list', function (listitems){
    return `<div class="list-clear">${listitems}</div>`;
  });
  eleventyConfig.addPairedShortcode('case-summary-image', function(
    alt,
    side,
    imageSrc, 
    mobileImageSrc){
    let sideClass = side === 'left' ? 'case-summary-image-left' : 'case-summary-image-right';
    return `<picture class="case-summary-image ${sideClass}">
  <source srcset="${mobileImageSrc}" alt="${alt}"
    media="(max-width: 767px)" />
  <img src="${imageSrc}" alt="${alt}" />
</picture>`;
  });

  return {
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid',
    dir: {
      input: 'src',
    },
  };
};
