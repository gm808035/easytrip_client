const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist '
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,{
                        loader: "css-loader",
                        options: {sourseMap:true}
                    },{
                        loader: "postcss-loader",
                        options: {sourseMap:true,config:{path:'./postcss.config.js'}}
                    },{
                        loader: "sass-loader",
                        options: {sourseMap:true}
                    }
                ]
            }

        ],

    },

    devServer: {
        overlay: true
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
        })
    ]
}