
module.exports = {
  entry: "./client/index.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js[x]$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};
