//· 导入http模块
//· 创建web服务器实例
//· 为服务器实例绑定 request 事件,监听客户端的请求
//· 启动服务器

//导入http模块
    const http = require('http')
//创建web服务器实例
//调用http,createServer()方法,快速创建一个web服务器实例
    const server = http.createServer()
//为服务器实例绑定request事件,监听客户端发送过来的网络请求
    server.on('request',(req,res) => {
        console.log('Someone visit our web server.')
    })
//调用服务器实例的.listen()方法,启动当前的web服务器实例
    //启动服务器
    server.listen(80,() => {
        console.log('server running at http://127.0.0.1')
    })
//req请求对象
    //只要服务器接收到了客户端的请求,就会调用server.on()为服务器绑定的request事件处理函数
