## 安装
```
npm install itheima-36cabbage
```
## 导入
```
const tools = require('itheima-36cabbage')
```
## 格式化时间
```
//调用 dateFormate对时间进行格式化
const dtStr = tools.dateFormat(new Date())
//结果 2016-04-03 20:39:54
console.log(dtStr)
```
## 转义HTML中的特殊字符
```
//待转换的HTML字符串
const htmlStr = '<h1 title='203954'>S6第一个王者<span>203954 </span></h1>'
//调用htmlEscape方法进行转换
const str = tools.htmlEscape(thmlStr)
//转换的结果 <h1 title='203954'>S6第一个王者<span>203954&nbsp;</span></h1>
console.log(str)
```
## 还原HTML中的特殊字符
```
//待还原的HTML字符串
const str2 = tools.htmlUnEscape(str)
//输出的结果 <h1 title='203954'>S6第一个王者<span>203954 </span></h1>
console.log(str2)
```

## 开源协议
#### **ISC**