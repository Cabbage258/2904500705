//路由模块
const express = require('express')
const a = require('./05handler')
//实例化一个路由对象
const router = express.Router()
//挂载
router.get('/user/list',a.list)
router.post('/user/add',a.user)
//成员暴露给外部
module.exports = router
console.log(a.list())