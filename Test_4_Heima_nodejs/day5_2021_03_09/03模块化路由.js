const express = require('express')
const app = express()
const router = require('./04router')
//注册
app.use('/api/',router)
app.listen(80,() => {
    console.log('express server running at http://127.0.0.1:80')
})
