var webpack = require('webpack');

module.exports = {
  entry: './src/assets/js/main.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/src/assets/js/build'
  },

  devtool: '#cheap-module-eval-source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        }
      },
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
  ],

  resolve: {
    extensions: ['', '.js']
  }
};
