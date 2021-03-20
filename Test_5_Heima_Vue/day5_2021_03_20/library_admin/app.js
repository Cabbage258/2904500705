    const express = require('express')
    const cors = require('cors')
    const app = express()
    //跨域
    app.use(cors())
    //解析
    app.use(express.urlencoded({ extended: false}))
    //注册获取列表
    app.get('/getlist',(req, res) => {
        res.send({
            status:0,
            message:'获取图书列表成功!',
        })
    })

    //注册添加
    app.post('/addlist',(req,res) => {
        res.send({
            status:0,
            message:'添加图书成功!',
            data:''
        })
    })

    //注册删除
    app.post('/deletelist',(req,res) => {
        res.send({
            status:0,
            message:'删除图书成功!',
            data:''
        })
    })

    //





    app.listen(80,() => {
        console.log('http://127.0.0.1:80')
    })