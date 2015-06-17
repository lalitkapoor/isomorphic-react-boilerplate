var path = require('path')
var webpack = require('webpack')

module.exports = {
  cache: true
, debug: true
, devtool: 'source-map'
, entry: {
    app: './public/js/index'
  }
, devServer: {
    contentBase: './public'
  }
, output: {
    path: path.join(__dirname, 'public/dist')
  , publicPath: '/dist'
  , filename: '[name].js'
  , chunkFilename: '[chunkhash].js'
  , sourceMapFilename: 'debugging/[file].map'
  , hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js'
  , hotUpdateMainFilename: 'hot/[hash].hot-update.json'
  }
, module: {
    loaders: [
      {test: /\.js$/, exclude:[/node_modules/], loaders: [ 'react-hot', 'babel-loader?optional[]=runtime']}
    , {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  , noParse: /\.min\.js/
  }
, resolve: {
    modulesDirectories: ['node_modules']
  , extensions: ['', '.js', '.jsx', '.json']
  }
, plugins: [
    new webpack.HotModuleReplacementPlugin()
  , new webpack.ProvidePlugin({
      jQuery: 'jquery'
    , $: 'jquery'
    })
  ]
}
