const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

//允许跨域资源共享
const cors = require('cors')
app.use(cors())

//解析 post 表单数据的中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

//定义 secret 密钥,建议将密钥命名为 secretKey
const secretKey = 'cabbage'

//注册将jwt字符串解析还原成JSON对象的中间件
//只要配置成功了 express-jwt 这个中间件,就可以把解析出来的用户信息,挂载到 req.user 属性上
//unless为白名单设置,在正则范围内的接口不需要验证密钥
app.use(expressJWT({secret:secretKey}).unless({path:[/^\/api\//]}))

//登录接口
app.post('/api/login',(req,res) => {
    //将req.body请求体中的数据,转存为userinfo常量
    const userinfo = req.body
    //登录失败
    if (userinfo.username !== 'admin' || userinfo.password !== '123456') return res.send({status:400,message:'登录失败!'})

    //登录成功
    //登录成功后调用jwt.sigh()方法生成JWT字符串,并通过token属性发送给客户端
    //参数1 用户的信息对象,参数2 加密的密钥,参数3 配置对象,可以配置当前token的有效期
    //密码不能加密到token字符中
    const tokenStr = jwt.sign({username: userinfo.username},secretKey,{expiresIn:'5m'})
    res.send({
        status:200,
        message:'登陆成功!',
        token:tokenStr      //发送给客户端的token字符串
    })
})

//有权限的API接口
app.get('/admin/getinfo',(req,res) => {
    //使用req.user 获取用户信息,并使用 data 属性将用户信息发送给客户端
    console.log(req.user)
    res.send({
        status:200,
        message:'获取用户信息成功!',
        data:req.user   //发送给客户端的用户信息
    })
})

//使用全局错误处理中间件,捕获解析JWT失败后产生的错误
app.use((err,req,res,next) => {
    if (err.name === 'UnauthorizedError') return res.send({status:401,message:'无效的token'})
    res.send({
        status:500,
        message:'未知的错误'
    })
})


app.listen(80,() => {
    console.log('http://127.0.0.1:80')
})
