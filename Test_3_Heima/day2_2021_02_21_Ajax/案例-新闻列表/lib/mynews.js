$(function () {
    //获取新闻列表
    getnewsList()
    function getnewsList() {
        $.get('http://www.liulongbin.top:3006/api/news', function (res) {
            //判断一下新闻获取是否成功
            console.log(res);
            if (res.status !== 200) return alert('获取新闻失败')

            //循环拿到的data数据
            // for (var i = 0; i < res.data.lnegth; i++){

            // }
            //展示数据 template(模板id,数据);
            const str = template('newsTpl', res)
            // console.log(str);
            $('#news-list').html(str)

        })
    }
    getnewsList();
})

