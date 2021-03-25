const path = require('path')
//打开自动跳转页面到/res
//头部
const HtmlWebpackPlugin = require('html-webpack-plugin')
//创建插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    //指定要用到的模版文件
    template:'./src/index.html',
    //指定生成的文件得名称,该文件存在于内存中,在目录中不显示
    filename:'index.html'
})

//配置vue组件的加载器
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    //mode用来指定构建模式
    //development开发模式   提高编译速度
    //production线上模式    压缩体积
    mode:'development',
    //入口
    // 文件路径
    entry:path.join(__dirname,'./src/index.js'),
    //出口
    output:{
        //输出文件存放路径
        path:path.join(__dirname,'./dist'),
        //输出文件名
        filename:'test1.js',
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {
                test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                //limit用来指定图片大小,只有小雨limit大小的图片才会被转为base64格式的图片
                use:'url-loader?limit=16941'
            },
            {
                test:/\.vue$/,loader:'vue-loader'
            },

        ]
    },
    //plugins数组是webpack打包期间会用到的一些插件列表
    plugins:[htmlPlugin,new VueLoaderPlugin()]
}

