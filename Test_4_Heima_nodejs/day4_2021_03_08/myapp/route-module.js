//导入express模块
const express = require('express')
//使用express模块的Router方法,实例化一个路由对象
const router = express.Router()
//挂载具体的路由
//请求为get且url地址为        时,调用函数
router.get('/user/list',(req,res) => {
    res.send('Get uer list.')
})
//请求为post且url地址为       时,调用函数
router.post('/user/add',(req,res) => {
    res.send('Add new user.')
})
//成员router暴露给外部
module.exports = router