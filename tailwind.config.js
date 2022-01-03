module.exports = {
  content: [
    './src/**/*.njk',
    './src/*.njk'
    // '/_site/**/*.html',
    // '/_site/**/**/*.html'
],
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['"Open Sans"']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
