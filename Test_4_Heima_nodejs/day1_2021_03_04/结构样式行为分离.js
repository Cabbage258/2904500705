//导入fs模块.导入path模块
    const fs = require('fs');
    const path = require('path');
//定义正则表达式
    const regStyle = /<style>[\s\S]*<\/style>/
    const regScript = /<script>[\s\S]*<\/script>/
//自定义拆解css文件、html文件、javascript文件的方法
//resolveCSS()拆解CSS文件
    function resolveCSS(htmlStr){
        //用正则提取index.html内需要的内容
        const r1 = regStyle.exec(htmlStr)
        //把提取出来的样式字符串进行替换操作.replace(),去掉style标签
        const newCSS = r1[0].replace('<style>','').replace('</style>','')
        //写入CSS文件
        fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,(err) => {
            if (err) return console.log('写入CSS失败!' + err.message)
            console.log('写入CSS成功!')
        })
    }
//resolveJavascript()拆解JS文件
    function resolveJavascript(htmlStr){
        const r2 = regScript.exec(htmlStr)
        const newJS = r2[0].replace('<script>','').replace('</script>','')
        fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,(err) => {
            if (err) return console.log('写入JS失败!' + err.message)
            console.log('写入JS成功!')
        })
    }
//resolveHTML()拆解HTML文件
    function resolveHTML(){

    }

//使用fs模块读取需要被处理的html文件
    fs.readFile(path.join(__dirname,'./素材/index.html'),'utf8',(err,dataStr) => {
        if (err) return console.log('读取文件失败:' + err.message)

    })