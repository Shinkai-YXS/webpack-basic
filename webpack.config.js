// 引入 path 模块（path 模块提供了一些实用工具，用于处理文件和目录的路径）
const path = require('path')
// 引入 clean-webpack-plugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// 引入 HtmlWebpackPlugin
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    // 设置入口文件
    entry: './src/index.js',
    // 设置出口文件
    output: {
        // 出口文件名字
        filename: 'bundle.js',
        // 出口文件位置
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    },
    // plugins 是 webpack 的插件，目的在于解决 loader 无法实现的其他事。
    plugins: [
       new CleanWebpackPlugin({
           // 这个是非必填的，它会默认清空我们output里面设置的所有文件夹
           cleanAfterEveryBuildPatterns: ["dist"]
        }),
        new HtmlWebpackPlugin({
            // 用于生成的 HTML 文档的标题
            title: 'test webpack'
        })
    ]
};