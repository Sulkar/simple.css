const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  entry: "./index.js",

  plugins: [
    new CopyPlugin({
      patterns: [{ from: "index.html", to: "" }, { from: "images", to: "images" }],
    }),
    new MiniCssExtractPlugin({ filename: "simple.css" })
  ],

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    static: path.join(__dirname, "dist"),
    client: {
      overlay: false,
    },
  },

  module: {
    rules: [

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
