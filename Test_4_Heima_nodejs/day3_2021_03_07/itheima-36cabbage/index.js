//导入dateFormat模块和htmlEscape模块
const dateFormat = require('./src/dateFormat')
const htmlEscape = require('./src/htmlEscape')

//将这两个成员暴露给外部
    module.exports = {
        ...dateFormat,
        ...htmlEscape
    }