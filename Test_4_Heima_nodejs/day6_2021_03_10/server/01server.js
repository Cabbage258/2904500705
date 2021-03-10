const express = require('express');
const app = express();
//1.配置post请求解析器
app.use(express.urlencoded({extended:false}))
//静态资源托管
app.use(express.static('./public'))


const router = require('./02router')
app.use('/api',router)

app.listen(80,()=>{
    console.log('http://127.0.0.1:80')
})