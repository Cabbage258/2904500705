//导入fs模块
const fs = require('fs');
//读取文件内容
fs.readFile('./素材/成绩.txt','utf8',(err,dataStr) => {
    //判断是否成功
    if (err) return console.log('读取文件失败!' + err.message)
    console.log('读取文件成功!' + dataStr)
    //先把成绩的数据按照空格为分割符进行分割
    const oldArr = dataStr.split(' ')
    //循环分割后的数组,把每一项数据进行字符串替换操作
    const newArr = []
    oldArr.forEach(item => {
        newArr.push(item.replace('=',':'))
    })
    //把新数组中的每一项进行合并到一个新的数组
    //用/r/n进行拼接,加入新数组
    const newStr = newArr.join('\r\n')
    console.log('更改完成!' + `\r\n` + newStr)

    //将新数组写入到新文件中
    fs.writeFile('./素材/成绩-改.txt',newStr,(err) => {
        if (err) return console.log('写入文件失败:' + er.message)
        console.log('写入成功!')
    })
})