// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: 'url-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader?limit=8192'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "eslint-loader"
      },
    ],
  }
};
