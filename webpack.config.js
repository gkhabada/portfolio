'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname + '/src',

  entry: {
    app: './index.js',
    media: './media.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[name].js'
  },

  mode: 'production',

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

  plugins: [
    // плагин когда выдает ошибку не компилирует файлы
    new webpack.NoEmitOnErrorsPlugin(),
    // Для вынесения скомпилированного файла стилей в отдельный файл
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new ExtractTextPlugin("css/[name].css"),
    new HTMLPlugin({
      filename: 'index.html',
      template: __dirname + '/src/index.html'
    })
  ],

  //оптимизирует код, создает отдельный js файл с общим(одниковым у всех файлов) кодом
  optimization: {
    // minimize output files
    minimize: false,
    minimizer: [
      new UglifyJSPlugin({
        cache: false,
        sourceMap: true,
        extractComments: true
      })
    ]
  },

  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?optional[]=runtime',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader'
          }]
        })
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: ['ie >= 8', 'last 4 version']
                  })
                ],
                sourceMap: true
              }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader",
        options: {
          outputPath: 'img',
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./app/fonts/[name].[ext]',
        options: {
          outputPath: 'fonts',
        }
      }
    ]
  },

  devServer: {
    contentBase: 'dist',
    stats: "errors-only",
    compress: true,
    open: true,
    overlay: true,
    port: 8080
  }
};
