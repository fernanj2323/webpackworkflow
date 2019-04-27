const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
  //este objeto tiene una propiedad llamada rules 
    // rules es un arreglo que esta compuesto por varios objetos 
    //cada objeto son ordenes para webpack 
    //usa babel loader, para convertir mas tipos de archivos 
    //va a convertir todos los archivos que terminen en .js
    //y que no tome los que estan en la carpeta node_modules ya que ahi dentro estan los archivos para que node pueda funcionar. 
 

    module: {  //aqui configuramos los tipos de archivos que se quieren cargar 
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',   // necesario para agregar archivos css
                    'sass-loader'  // necesario para agregar archivos css

                ]
            },
            {
                test: [/\.(jpg|png|gif)$/,
                        /\.js$/]
                use: [
                      {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/',
                            useRelativePath: true
                        }

                      }
                    ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Cool Website',
            template: './src/index.handlebars',
            minify: {
                html5: true,
                collapseWhitespace: true,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: true
            }
        
          
        }), 
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
};


/*fulll */
/*const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        port: 4000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            autoprefixer: {
                                browser: ["last 2 versions"]
                            },
                            plugins: () => [
                                autoprefixer
                            ]
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/',
                            useRelativePath: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Cool Website',
            template: './src/index.handlebars',
            minify: {
                html5: true,
                collapseWhitespace: true,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]-styles.css",
            chunkFilename: "[id].css"
        })
    ]
};*/