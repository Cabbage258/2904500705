const mysql = require('mysql')
//创建数据库连接对象
const db = mysql.createPool({
    host:'127.0.0.1',   //数据库的ip地址
    user:'root',        //登录数据库的账号
    password:'root',    //登录数据库的密码
    database:'my_db_01' //指定要操作哪个数据库
})

/*
//测试mysql模块是否正常工作
db.query('select 2',(err,results) => {
    //mysql 模块工作期间报错了
    if (err) return console.log(err.message)
    //能够成功执行sql语句
    console.log(results)
})
*/

/*
//使用mysql模块查询
const sqlStr = 'select * from users'
db.query(sqlStr,(err,results) => {
    if (err) return console.log(err.message)
    console.log(results)
})
*/

/*
//使用mysql模块插入数据
//1.
const newUser = {username:'badwoman',password:'203954'}
//定义待执行的sql语句
//?为占位符
const sqlStr= 'insert into users (username,password) values (?,?)'
//执行sql语句
db.query(sqlStr,[newUser.username,newUser.password],(err,results) => {
    if (err) return console.log(err.message)
    //results.affectedRows  共1行受到影响,表示插入数据成功
    if(results.affectedRows === 1){
        console.log('插入数据成功!')
    }
})
//2.简
const user = {username:'jack',password:'123456'}
const sqlStr = 'insert into users set ?'
db.query(sqlStr,user,(err,results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1){
        console.log('插入数据成功!')
    }
})
*/

/*
//使用mysql模块更新数据
//1.
const user = {id:1,username:'aaa',password:'123456'}
const sqlStr = 'update users set username=?,password=? where id=?'
db.query(sqlStr,[user.username,user.password,user.id],(err,results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1){
        console.log('更新成功!')
    }
})
//2.简
const user = {id:1,username:'bbb',password:'123456'}
const sqlStr = 'update users set ? where id=?'
db.query(sqlStr,[user,user.id],(err,results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1){
        console.log('更新成功!')
    }
    //if (results.affectedRows === 1) return console.log('插入数据成功!')
})
*/

/*
//使用mysql模块删除数据
const sqlStr = 'delete from users where id=?'
db.query(sqlStr,3,(err,results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1){
        console.log('删除数据成功!')
    }
})


//标记删除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr,[1,1],(err,results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1){
        console.log('标记删除成功!')
    }
})*/