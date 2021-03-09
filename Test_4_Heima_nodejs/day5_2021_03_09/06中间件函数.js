const express = require('express')
const app = express()
/*
/定义一个中间件函数
const a = (req,res,next) => {
    console.log('一个中间件函数')
    next()
}
//注册全局生效的中间件函数
app.use(a)
*/
//简版中间件
app.use((req,res,next) => {
    req.query.startTime = Date.now()
    console.log('上传时间' + req.query.startTime)
    next()
})

app.get('/',(req,res) => {
    res.send('a 1' + req.query.startTime)
})
app.get('/user',(req,res) => {
    res.send('a 2')
})



app.listen(80,() => {
    console.log('express server running at http://127.0.0.1:80')
})