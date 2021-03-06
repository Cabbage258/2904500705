//导入模块
    const http = require('http');
    const fs = require('fs');
    const path = require('path');
//实例化一个web服务器
    const server = http.createServer()
//监听客户端请求数据
    server.on('request',(req,res) =>{
        let fpath = ''
        if(req.url === '/'){
            fpath = path.join(__dirname,'./clock/index.html')
        }else{
            fpath = path.join(__dirname,'/clock',req.url)
        }
        fs.readFile(fpath,'utf8',(err,dataStr) => {
            if (err) return res.end('404 Not Found')
            res.end(dataStr)
        })
    })
//启动服务器
    server.listen(80,() => {
        console.log('server running at http://127.0.0.1:80')
    })