const path = require('path');
const sassGlobImporter = require('node-sass-glob-importer');

let srcPath = path.resolve(__dirname, 'src');
let distPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        app: [path.join(srcPath, '/js/app.js'), path.join(srcPath, '/scss/app.scss'), path.join(srcPath, '/index.html')]
    },
    output: {
        path: distPath,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
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
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                importer: sassGlobImporter()
                            }
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'index.html',
                        }
                    }
                ]
            }
        ]
    }
}