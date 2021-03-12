const express = require('express')
const app = express()
const session = require('express-session')
app.use(session({
    secret : 'zero',                //secret 属性的值可以为任意字符串
    resave:false,               //固定写法
    saveUninitialized: true     //固定写法
}))

app.listen(80,() => {
    console.log('http://127.0.0.1:80')
})