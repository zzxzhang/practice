module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
  },
  devServer: {
    open: true,
  },
  resolve: {
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
          "sass-loader",
        ],
      },
      {
        test: /\.svg/,
        loader: "raw-loader",
      },
    ],
  },
};
