const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // context: path.resolve('../'),

  entry: path.resolve(__dirname, "src"),

  output: {
    filename: "ui-common.js",
    path: path.join(__dirname, "dist"),
    library: "ui-common",
    libraryTarget: "umd",
    publicPath: "/dist/",
    umdNamedDefine: true,
    globalObject: "this"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, "../ui/src")],
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      "prop-types": path.resolve(__dirname, "./node_modules/prop-types"),
      moment: path.resolve(__dirname, "./node_modules/moment"),
      classnames: path.resolve(__dirname, "./node_modules/classnames"),
      "@material-ui": path.resolve(__dirname, "./node_modules/@material-ui"),
      "@babel": path.resolve(__dirname, "./node_modules/@babel"),
      "clsx": path.resolve(__dirname, "./node_modules/clsx"),
      "react-select": path.resolve(__dirname, "./node_modules/react-select"),
      "@emotion": path.resolve(__dirname, "./node_modules/@emotion"),
      "hoist-non-react-statics": path.resolve(__dirname, "./node_modules/hoist-non-react-statics"),
      "jss": path.resolve(__dirname, "./node_modules/jss"),
      "jss-plugin-camel-case": path.resolve(__dirname, "./node_modules/jss-plugin-camel-case"),
      "jss-plugin-default-unit": path.resolve(__dirname, "./node_modules/jss-plugin-default-unit"),
      "jss-plugin-global": path.resolve(__dirname, "./node_modules/jss-plugin-global"),
      "jss-plugin-nested": path.resolve(__dirname, "./node_modules/jss-plugin-nested"),
      "jss-plugin-props-sort": path.resolve(__dirname, "./node_modules/jss-plugin-props-sort"),
      "jss-plugin-rule-value-function": path.resolve(__dirname, "./node_modules/jss-plugin-rule-value-function"),
      "jss-plugin-vendor-prefixer": path.resolve(__dirname, "./node_modules/jss-plugin-vendor-prefixer"),
      "lodash": path.resolve(__dirname, "./node_modules/lodash"),
      "memoize-one": path.resolve(__dirname, "./node_modules/memoize-one"),
      "popper.js": path.resolve(__dirname, "./node_modules/popper.js"),
      "react-input-autosize": path.resolve(__dirname, "./node_modules/react-input-autosize"),
      "react-is": path.resolve(__dirname, "./node_modules/react-is"),
      "react-transition-group": path.resolve(__dirname, "./node_modules/react-transition-group"),
      "shortid": path.resolve(__dirname, "./node_modules/shortid"),
      "styled-components": path.resolve(__dirname, "./node_modules/styled-components")
    }
  },

  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "PropTypes",
      root: "PropTypes"
    },
    moment: {
      commonjs: "moment",
      commonjs2: "moment",
      amd: "moment",
      root: "moment"
    },
    classnames: {
      commonjs: "classnames",
      commonjs2: "classnames",
      amd: "classnames",
      root: "classnames"
    },
    "@material-ui": {
      commonjs: "@material-ui",
      commonjs2: "@material-ui",
      amd: "@material-ui",
      root: "@material-ui"
    },
    "@babel": {
      commonjs: "@babel",
      commonjs2: "@babel",
      amd: "@babel",
      root: "@babel"
    },
    "clsx": {
      commonjs: "clsx",
      commonjs2: "clsx",
      amd: "clsx",
      root: "clsx"
    },
    "react-select": {
      commonjs: "react-select",
      commonjs2: "react-select",
      amd: "react-select",
      root: "react-select"
    },
    "@emotion": {
      commonjs: "@emotion",
      commonjs2: "@emotion",
      amd: "@emotion",
      root: "@emotion"
    },
    "hoist-non-react-statics": {
      commonjs: "hoist-non-react-statics",
      commonjs2: "hoist-non-react-statics",
      amd: "hoist-non-react-statics",
      root: "hoist-non-react-statics"
    },
    "jss": {
      commonjs: "jss",
      commonjs2: "jss",
      amd: "jss",
      root: "jss"
    },
    'jss-plugin-camel-case': {
      commonjs: 'jss-plugin-camel-case',
      commonjs2: 'jss-plugin-camel-case',
      amd: 'jss-plugin-camel-case',
      root: 'jss-plugin-camel-case'
    },
    'jss-plugin-default-unit': {
      commonjs: 'jss-plugin-default-unit',
      commonjs2: 'jss-plugin-default-unit',
      amd: 'jss-plugin-default-unit',
      root: 'jss-plugin-default-unit'
    },
    'jss-plugin-global': {
      commonjs: 'jss-plugin-global',
      commonjs2: 'jss-plugin-global',
      amd: 'jss-plugin-global',
      root: 'jss-plugin-global'
    },
    'jss-plugin-nested': {
      commonjs: 'jss-plugin-nested',
      commonjs2: 'jss-plugin-nested',
      amd: 'jss-plugin-nested',
      root: 'jss-plugin-nested'
    },
    'jss-plugin-props-sort': {
      commonjs: 'jss-plugin-props-sort',
      commonjs2: 'jss-plugin-props-sort',
      amd: 'jss-plugin-props-sort',
      root: 'jss-plugin-props-sort'
    },
    'jss-plugin-rule-value-function': {
      commonjs: 'jss-plugin-rule-value-function',
      commonjs2: 'jss-plugin-rule-value-function',
      amd: 'jss-plugin-rule-value-function',
      root: 'jss-plugin-rule-value-function'
    },
    'jss-plugin-vendor-prefixer': {
      commonjs: 'jss-plugin-vendor-prefixer',
      commonjs2: 'jss-plugin-vendor-prefixer',
      amd: 'jss-plugin-vendor-prefixer',
      root: 'jss-plugin-vendor-prefixer'
    },
    'lodash': {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: 'lodash'
    },
    'memoize-one': {
      commonjs: 'memoize-one',
      commonjs2: 'memoize-one',
      amd: 'memoize-one',
      root: 'memoize-one'
    },
    'popper.js': {
      commonjs: 'popper.js',
      commonjs2: 'popper.js',
      amd: 'popper.js',
      root: 'popper.js'
    },
    'react-input-autosize': {
      commonjs: 'react-input-autosize',
      commonjs2: 'react-input-autosize',
      amd: 'react-input-autosize',
      root: 'react-input-autosize'
    },
    'react-is': {
      commonjs: 'react-is',
      commonjs2: 'react-is',
      amd: 'react-is',
      root: 'react-is'
    },
    'react-transition-group': {
      commonjs: 'react-transition-group',
      commonjs2: 'react-transition-group',
      amd: 'react-transition-group',
      root: 'react-transition-group'
    },
    'shortid': {
      commonjs: 'shortid',
      commonjs2: 'shortid',
      amd: 'shortid',
      root: 'shortid'
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
      root: 'styled-components'
    }
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              fallback: "file-loader",
              name: "[name][md5:hash].[ext]",
              outputPath: "assets/",
              publicPath: "/assets/"
            }
          }
        ]
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {}
        }
      },
      {
        test: /\.*css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread",
              "@babel/plugin-proposal-optional-chaining",
              "@babel/plugin-proposal-nullish-coalescing-operator"
            ]
          }
        }
      }
    ]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      ignoreOrder: false
    })
  ]
};
