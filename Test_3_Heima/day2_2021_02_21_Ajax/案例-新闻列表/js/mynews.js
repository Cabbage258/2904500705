$(function(){
    //定义补领函数
    function fixZero(num){
        if(num < 10){
            return '0' + num
        }else{
            return num
        }
    }
    //定义过滤器
        template.defaults.imports.dateFormat = function(a){
            let b = new Date(a)
            let year = b.getFullYear(),month = fixZero(b.getMonth()+ 1),day = fixZero(b.getDate())
            let hours = fixZero(b.getHours()), minutes = fixZero(b.getMinutes()), seconds = fixZero(b.getSeconds())
            return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
        }
    //获取新闻列表数据
    //封装
    //调用,读取数据
    getNewsList()
    function getNewsList(){
        $.ajax({
            //默认发送get,省略
            //type:'get',
            //请求接口地址
            url:'http://www.liulongbin.top:3006/api/news',
            //data无,省略
            //data:{},
            //成功时执行内部函数,ret为返回数据
            success:function(ret){
                console.log(ret)
                //声明一个变量,将渲染好的html结构的字符串赋值给
                const abc = template('tpl-news',ret)
                //添加到DOM
                $('#news-list').html(abc)
            },
            error:function(err){
                //错误时执行
                alert('获取新闻数据失败')
            },
        })
    }
})