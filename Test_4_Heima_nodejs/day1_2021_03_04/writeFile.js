//导入fs模块
const fs = require('fs');
//调用fs.writeFile()方法,写入文件的内容
//参数一:表示文件的存放路径
//参数二:表示要写入的内容
//参数三:回调函数
/*
fs.writeFile('./files/23.txt','1234',function(err){
    //如果文件写入成功,则err值为null
    console.log(err)
    //如果文件写入失败,则err值为错误对象

})
*/
fs.writeFile('./files/233.txt','覆盖内容',(err) => {
    //err.message 为失败消息
    if(err) return console.log('文件写入失败' + err.message)
    console.log('文件写入成功!')
})
