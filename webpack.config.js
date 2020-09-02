const path = require('path');

let srcPath = path.resolve(__dirname, 'src');
let distPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        app: [path.join(srcPath, '/js/app.js'), path.join(srcPath, '/scss/app.scss')],
    },
    output: {
        path: distPath,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'css',
                            name: '[name].css',
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
}