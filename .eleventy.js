const { DateTime } = require('luxon')
const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode('year', () => {
    new Date().getFullYear()
  });

  eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./styles/tailwind.css')
  eleventyConfig.addPassthroughCopy('./src/assets')

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

  return {
    dir: {
      input: 'src',
      output: '_site'
    }
  }

};