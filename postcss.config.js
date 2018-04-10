module.exports = {
    // parser: 'sugarss',
    plugins: {
      // 'postcss-import': {},
      'postcss-cssnext': {
        features:{
          autoprefixer: false
        }
      },
      'cssnano': {}
    }
  }