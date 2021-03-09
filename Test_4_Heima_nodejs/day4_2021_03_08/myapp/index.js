//导入express挂载到app
    const express = require('express')
    const app = express()
//注册路由模块
    const router = require('./route-module')
//注册路由模块
    app.use(router)
