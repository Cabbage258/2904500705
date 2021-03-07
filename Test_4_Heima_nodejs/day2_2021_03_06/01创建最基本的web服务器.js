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
    //req请求对象
        //只要服务器接收到了客户端的请求,就会调用server.on()为服务器绑定的request事件处理函数
        //使用如下方式在事件处理函数中访问与客户端相关的数据或属性
        //reg.url是客户端请求的URL地址
        //req.method是客户端请求的method类型
        const str = `你的url地址为 ${req.url}, 请求类型是 ${req.method}`
        console.log(str)
    //res响应对象
        //解决中文乱码问题,设置响应头
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        //内容响应给客户端
        res.end(str)
        })
//调用服务器实例的.listen()方法,启动当前的web服务器实例
    //启动服务器0
    server.listen(80,() => {
        console.log('server running at http://127.0.0.1:80')
    })



