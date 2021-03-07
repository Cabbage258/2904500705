//定义补零函数
function padZero(n){
    return n > 9 ? n : '0' + n
}
//定义格式化时间方法dateFormat
function dateFormat(dateStr){
    const toDate = new Date(dateStr)
    //获取年月日
    const y = toDate.getFullYear(),m = padZero(toDate.getMonth() + 1),d = padZero(toDate.getDate());
    //获取时分秒
    const hh = padZero(toDate.getHours()),mm = padZero(toDate.getMinutes()),ss = padZero(toDate.getSeconds())
    //返回日期
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
module.exports = {
    dateFormat
}