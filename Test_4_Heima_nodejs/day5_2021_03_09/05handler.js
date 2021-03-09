//路由挂载响应模块
//响应get请求函数
const list = (req,res) => {
    res.send('get user list')
}
//响应post请求函数
const user = (req,res) => {
    res.send('add new user')
}
module.exports = {
    list,
    user,
}
console.log(module.exports)