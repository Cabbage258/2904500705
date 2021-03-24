//注册服务模块
const data = require('./data.json')
const path = require('path')
const fs = require('fs')

//自增生成id
let maxBookCode = () => {
    let arr = []
    data.forEach((item) => {
        //遍历添加id到arr
        arr.push(item.id)
    })
    return Math.max.apply(null, arr)
}

//内存数据写入文件
let writeDataToFile = (res) => {
    fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data,null,4),(err) => {
        if(err){
            res.json({
                status:500
            })
        }
        res.send({
            status:200
        })
    })
}

//