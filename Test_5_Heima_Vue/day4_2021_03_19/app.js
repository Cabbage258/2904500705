//导入
    const express = require('express')
    const app = express()
    const cors = require('cors')
    const router = express.Router()

//注册
    app.use(cors())
//配置解析数据
    app.use(express.urlencoded({extended:false}))


//注册
    app.use('/',router.get('/username',(req,res) => {
        if(req.body.username == 'admin'){
            return res.send({msg:'重复!'})
        }else{
            return res.send({msg:'可用!'})
        }
    })
    )
//
app.listen(80,() => {
    console.log('http://localhost:80')
})