const express = require('express');

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('ok')
})
router.post('/login',(req,res)=>{
    const body = req.body
    //帐号admin,密码123456
    if(body.username === 'admin' && body.password === '123456'){
        res.send({
            status:0,
            message:'登录成功!',
            data:body,
        })}else{
            res.send({
                status:1,
                message:'登录失败!',

            })
        }
})
module.exports = router
