const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin")
const webpack = require('webpack');
require('webpack-dev-server');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const config = {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
          }
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        }
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
      alias: {
        'providers': path.resolve(__dirname, '.', 'src', 'app', 'providers'),
        'styles': path.resolve(__dirname, '.', 'src', 'app', 'styles'),
        'hooks': path.resolve(__dirname, '.', 'src', 'app', 'hooks'),
        'services': path.resolve(__dirname, '.', 'src', 'app', 'services'),
        'ui': path.resolve(__dirname, '.', 'src', 'app', 'components', 'ui'),
        'screens': path.resolve(__dirname, '.', 'src', 'app', 'components', 'screens'),
        'layout': path.resolve(__dirname, '.', 'src', 'app', 'components', 'layout'),
        'components': path.resolve(__dirname, '.', 'src', 'app', 'components'),
        'store': path.resolve(__dirname, '.', 'src', 'app', 'store'),
        'types': path.resolve(__dirname, '.', 'src', 'app', 'types'),
        'utils': path.resolve(__dirname, '.', 'src', 'app', 'utils'),
      },
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, '/public'), to: path.join(__dirname, '/dist') // copy public folder, which contains locales for i18next
          }
        ]
      })
    ],
    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 8080,
    },
  };

  if (isProduction) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    );
  }

  return config;
};
