const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: [/\.js$/, /\.jsx$/],
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
    }, {
      test: /\.css$/,
      loader: 'style!css',
      exclude: /(node_modules|bower_components)/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
      exclude: /(node_modules|bower_components)/,
    }, {
      test: /\.(ttf|eot|jpeg|jpg|otf|png|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader',
      exclude: /(node_modules|bower_components)/,
    }],
  },
  resolve: {
    extensions: ['', '.jsx', '.json', '.js'],
  },
};
