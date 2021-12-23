const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./styles/tailwind.css')
  eleventyConfig.addPassthroughCopy('./src/assets')

  return {
    dir: {
      input: 'src',
      output: '_site'
    }
  }

};