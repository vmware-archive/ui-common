const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // context: path.resolve('../'),

    entry: path.resolve(__dirname, 'src'),

    output: {
        filename: 'ui-common.js',
        path: path.join(__dirname, 'dist'),
        library: 'ui-common',
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true,
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: [path.resolve(__dirname, '../ui/src')],
        alias: {
            react: path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            'prop-types': path.resolve(__dirname, './node_modules/prop-types'),
            moment: path.resolve(__dirname, './node_modules/moment'),
            classnames: path.resolve(__dirname, './node_modules/classnames'),
        },
    },

    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM',
        },
        'prop-types': {
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'PropTypes',
            root: 'PropTypes',
        },
        moment: {
            commonjs: 'moment',
            commonjs2: 'moment',
            amd: 'moment',
            root: 'moment',
        },
        classnames: {
            commonjs: 'classnames',
            commonjs2: 'classnames',
            amd: 'classnames',
            root: 'classnames',
        },
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: 'file-loader',
                            name: '[name][md5:hash].[ext]',
                            outputPath: 'assets/',
                            publicPath: '/assets/',
                        },
                    },
                ],
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {},
                },
            },
            {
                test: /\.*css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: false,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-typescript',
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                        plugins: [
                            '@babel/proposal-class-properties',
                            '@babel/proposal-object-rest-spread',
                        ],
                    },
                },
            },
        ],
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false,
        }),
    ],
};
