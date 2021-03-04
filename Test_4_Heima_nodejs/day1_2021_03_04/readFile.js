//导入fs模块
const fs = require('fs');
//调用fs.readFile()方法读取文件
//参数一:读取文件的存放路径
//参数二:读取文件时候采用的编码格式.一般utf-8
//参数三:回调函数,拿到读取失败和成功的结果 err dataStr
/*fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    //如果读取成功,err值为null
    //如果文件读取失败,err值为错误对象,dataStr值为undefined
    console.log(err)
    console.log('---------')
    console.log(dataStr)
})*/
//判断是否读取成功
fs.readFile('./files/1.txt','utf8',(err,dataStr) => {
    //err.message 为失败消息
    if (err) return console.log('读取文件失败!' + '---' + err.message)
    console.log(dataStr)
})