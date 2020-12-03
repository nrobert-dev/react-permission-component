const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode : 'development',
    entry : './src/index.dev.js',
    output: {
        path : path.resolve(__dirname,"dist"),
        filename : 'bundle.js'
    },
    devServer: {
        hot : true,
        open : true,
        port : 7777,
        contentBase : path.join(__dirname,'dist')
    },
    devtool: 'inline-source-map',
    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        filename : 'index.html',
        template : './template.html'
    })]
}