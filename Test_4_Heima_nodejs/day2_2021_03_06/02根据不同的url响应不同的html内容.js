//导入
    const http = require('http')
//创建web服务器实例
    const server = http.createServer()
//监听客户端发送过来的网络请求
    server.on('request', (req, res) => {
        let content = '<h1>404 not Found</h1>'
        if(req.url === "/index.html" || req.url === "/"){
            content = "<h1>index.html</h1>"
        }else if(req.url === "/about.html"){
            content = "<h1>about.html</h1>"
        }

        res.setHeader('Content-Type', 'text/html;charst=utf-8')
        res.end(content)
    })
//启动服务器
    server.listen(80,() => {
        console.log('http://127.0.0.1:80')
    })
