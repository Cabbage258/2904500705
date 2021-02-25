$(function () {
    //初始化右侧滚动条
    //定义在scroll.js中
    resetui()
    //给发送按钮注册点击事件
    $('#btnSend').on('click', function () {
        //获取输入信息
        const text = $('#ipt').val().trim()
        //非空判断
        if (text.length == 0) return
        //将用户已输入内容点击提交后展示
        $('#talk_list').append(`<li class="right_word"><img src="img/person02.png" /> <span>${text}</span></li>`)
        //清空用户已输入内容
        $('#ipt').val('')
        resetui()
        getMsg(text)
    })

    function getMsg(text) {
        $.ajax({
            //type: 'get',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text,
            },
            success: function (ret) {
                if (ret.message === 'success') {
                    //获取服务器返回的数据
                    //console.log(ret)
                    const rbtText = ret.data.info.text
                    //将获取到的数据展示在左侧
                    $('#talk_list').append(`<li class="left_word"><img src="img/person01.png" /> <span>${rbtText}</span></li>`)
                    getVoice(rbtText)
                    resetui()
                }
            },
            error: function () {
                alert('未知错误')
            },
        })
    }

    function getVoice(text) {
        $.ajax({
            //type: 'get',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {text: text},
            success: function (ret) {
                if (ret.status == 200) {
                    //console.log(ret)
                    const voiceUrl = ret.voiceUrl
                    //audio播放器,设置autoplay后,只需给src属性地址即可自动播放
                    $('#voice').attr('src', voiceUrl)
                }
            }
        })
    }

    $('#ipt').on('keyup', function (e) {
        //console.log(e.keyCode)
        if (e.keyCode == 13) {
            $('#btnSend').click()   //自动触发点击事件
        }
    })
})