module.exports = {
  entry: ["./src/segment-emsg-parser"],
  experiments: {
    outputModule: true,
  },
  output: {
    library: {
      type: "module",
    },
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.m?ts$/,
        exclude: [/node_modules/],
        use: ["swc-loader"],
      },
    ],
  },
  devtool: "source-map",
  plugins: [],
};
