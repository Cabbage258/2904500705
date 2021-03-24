const express = require('express');
const app = express();
const router = require('./router.js');
const path = require('path')
const bodyParser = require('body-parser')
//
app.use(express.static('library'))

//注册主体解析器,解析表单主体,解析json文件
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//注册路由
app.use(router)

app.listen(80,() => {
    console.log('start server completed http://127.0.0.1:80')
})