const path = require('path');
module.exports = {
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'app/[name]_[hash:8].js'  // 打包后文件
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }],
            },
            {
                test: /\.less$/,
                use: [{
                  loader: 'style-loader',
                }, {
                  loader: 'css-loader',
                }, {
                  loader: 'less-loader',
                  options: {
                    sourceMap: true,
                  },
                }],
              },
              {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
              }
        ]
    },
    mode:'development',
}