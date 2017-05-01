import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default{
    //debug:true,
    devtool:'inline-source-map',
    //noInfo:false,
    entry:[
        path.resolve(__dirname,'src/index')
    ],
    target:'web',
    output:{
        path:path.resolve(__dirname,'src'),
        publicPath:'/',
        filename:'bundle.js'
    },
    plugins:[
      //Create HTML file that includes references to bundled JS
      new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
    ],
    module:{
        rules:[
            {test:/\.js$/,exclude: /node_modules/,use:[{loader: 'babel-loader'}]},
            {test:/\.css$/,use:["style-loader","css-loader"]}
        ]
    }
}
