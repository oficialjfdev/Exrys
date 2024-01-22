const webpack = require("webpack")
const path = require("path")

module.exports = {
    entry: "./js/game",
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'project.bundle.js'
    },
    module: {
        rules: [
            {
                test: [ /\.vert$/, /\.frag$/],
                use: 'raw-loader'   
            }
        ]
    }
}