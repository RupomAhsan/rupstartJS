import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [

    //Generate an external Css file
    new ExtractTextPlugin('[name].[contenthash].css'),
    //Hash the filename so that the name changes when content changes
    new WebpackMd5Hash(),
    //To create separate bundle, so that they can cached separately
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    //Create HTML file that includes references to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    //Eliminate Duplicate Packages when bundle creating
    new webpack.optimize.DedupePlugin(),
    //Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
     // { test: /\.css$/, loaders: ['style', 'css'] }
     // { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', '!css-loader?sourceMap&importLoaders=1!postcss-loader')}
    ]
  }
}
//{ test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
