const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");

const baseConfig = {
  entry: "./src/main.jsx",
  module: {
    rules: [
      {
        test: /\.(?:jsx?|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: { injectType: "styleTag" },
            // options: { injectType: "singletonStyleTag" },
          },
          {
            loader: "css-loader",
            options: { modules: true },
          },
        ],
      },
    ],
  },
  plugins: [new HTMLPlugin({ template: "index.html" })],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

const devConfig = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "bundle.js",
    filename: "[name].js",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 9999,
  },
  // devtool: "cheap-module-source-map",
};

const productionConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    clean: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
};

module.exports = function config(env) {
  return env.production
    ? { ...baseConfig, ...productionConfig }
    : { ...baseConfig, ...devConfig };
};
