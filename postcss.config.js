module.exports = {
    // parser: 'sugarss',
    plugins: {
      'postcss-import': {},
      'postcss-cssnext': {},
      'postcss-image-set-polyfill':{},
      'cssnano': {autoprefixer: false}
    }
    // plugins:[
    //   require('postcss-import'),
    //   require('postcss-cssnext'),
    //   require('postcss-image-set-polyfill'),
    //   require('cssnano')
    // ]
  }