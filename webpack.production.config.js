const webpack = require('webpack');

 module.exports = {
     entry: ['babel-polyfill', './src/app.js'],
     output: {
         path: './public',
         filename: 'app.bundle.js',
     },
     module: {
    loaders: [
        {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        },
        { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
        },
    ]
    },
    plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
     new webpack.optimize.DedupePlugin(),
     new webpack.optimize.AggressiveMergingPlugin()


     ]
 }