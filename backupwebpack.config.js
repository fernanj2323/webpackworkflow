const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = { 
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js' 
    },
   
 
    module: { //aqui configuramos los tipos de archivos que se quieren cargar 
        rules: [

            {
                use: [
                'babel-loader',
                //MiniCssExtractPlugin.loader,// necesario para agregar archivos css
                // 'css-loader'              // necesario para agregar archivos css
                                    ],
                test: /\.js$/, 
                    
                         // agregamos archivos de react  y css 
                exclude: /node_modules/
            }, 
            



            {
                   test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',   // necesario para agregar archivos css
                    'sass-loader'  // necesario para agregar archivos css

                ], 
                exclude: /node_modules/

            }


        ]
    }

};

