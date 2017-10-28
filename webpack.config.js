var cssnext = require("postcss-cssnext");

 module.exports = {
     entry: __dirname + '/js/app.js', //if you use __dirname dont use ./ relative path. It doesnt work
     output: {
         path: __dirname + '/dist', //__dirname is the directory where this file runs. so root directory here.
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [
             {
                 test: /\.css$/,
                 loader: 'style!css!postcss-loader'
             },
             {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             },
             {
                test:/\.(png|jpeg)$/,
                loader: 'file-loader'
             }
         ]
     },
    postcss: function(){
        return [cssnext];
    },
    devServer: {
        contentBase: "./",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
 }
