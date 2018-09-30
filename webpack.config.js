var path = require("path");

module.exports = function(env, argv) {
  return {
    mode: env.prod ? "production" : "development",
    entry: "./public/app.js",
    output: {
      path: path.join(__dirname,"public", "bundle/"),
      filename: "bundle.js"    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: "/node_modules/",
          loader: "babel-loader"
        }
      ]
    },
    devtool: env.prod ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      publicPath: "/bundle",
      compress: true,
      historyApiFallback: true,
      watchContentBase: true
    }
  };
};
