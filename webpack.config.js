const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    watchContentBase: true,
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        resolve: { extensions: [".mjs", ".js", ".jsx", ".json"] },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  watch: true,
  watchOptions: {
    //Files or folders that are not monitored
    ignored: /node_modules/,
    //After listening to the change, it will wait for 300ms to execute the action, so as to prevent the file from being updated too fast, resulting in too high recompilation frequency
    aggregateTimeout: 300,
    //To judge whether the file has changed or not is realized by constantly asking the system whether the specified file has changed or not
    poll: 1000,
  },
};
