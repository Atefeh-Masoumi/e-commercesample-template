const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3001;
const path = require('path');

//Webpack Analyzer
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
  //Is it in development mod
let devMode = process.env.devMode || true;

module.exports = {
    mode: 'production',
    entry : "./src/index.js",
    output : {
       
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/',
        chunkFilename: "[name].js"
    },
    resolve: {
        extensions: [".js", ".json"]
      },
    devtool: "eval-cheap-source-map",
        
    module:{
    rules: [
        {
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/,
            use: [
        {
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'assets/images/'
        }
        }
  ]
        },
        
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }
    ]
},

plugins : [
   new HtmlWebpackPlugin({
       template: 'public/index.html'
   }),
   new WebpackBundleAnalyzer()
],
devServer :{

    host: 'localhost',
    port:port,
    historyApiFallback: true,
    open: true
},
};
