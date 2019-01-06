let path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './src/scripts/index.js',
        pattern: './src/scripts/pattern.js',
        docs: './src/scripts/docs.js',
        colors: './src/scripts/colors.js',
        buttons: './src/scripts/buttons.js',
        typography: './src/scripts/typography.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].js'
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?-minimize', 'sass-loader'],
                    
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test: /\.(woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader?pretty&exports=false']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        stats: 'errors-only',
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: { collapseWhitespace: true },
            chunks:['index','pattern','docs'],
            filename: 'index.html',
            template: './src/index.pug',
        }),
        new HtmlWebpackPlugin({
            minify: { collapseWhitespace: true },
            chunks:['colors','pattern','docs'],
            filename: 'docs/colors.html',
            template: './src/docs/colors.pug',
        }),
        new HtmlWebpackPlugin({
            minify: { collapseWhitespace: true },
            chunks:['typography','pattern','docs'],
            filename: 'docs/typography.html',
            template: './src/docs/typography.pug',
        }),
        new HtmlWebpackPlugin({
            minify: { collapseWhitespace: true },
            chunks:['buttons','pattern','docs'],
            filename: 'docs/buttons.html',
            template: './src/docs/buttons.pug',
        }),
        new ExtractTextPlugin('styles/[name].css', { allChunks: true })
    ]
}