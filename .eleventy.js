module.exports = function(eleventyConfig){
  eleventyConfig.setTemplateFormats(['liquid','md', 'css', 'svg', 'png', 'jpg', 'map', 'js']);
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPairedShortcode('cleared-list', function (listitems){
    return `<div class="list-clear">${listitems}</div>`;
  });
  eleventyConfig.addPairedShortcode('case-summary-image', function(
    alt,
    side,
    imageSrc, 
    mobileImageSrc){
      
    // let sideClass = side === 'left' ? 'case-summary-image-left' : 'case-summary-image-right';
    let sideClass;
    switch(side){
      case 'left':
        sideClass = 'case-summary-image-left';
        break;
      case 'right':
        sideClass = 'case-summary-image-right';
        break;
      default:
        sideClass = '';
    }

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
