(function () {
    //flxBox1_3数据图
    var myChart = echarts.init(document.getElementById('main1'));
    var option = {
        backgroundColor: 'transparent',
        title: {
            text: '点位分布统计',
            left: 10,
            top: 40,
            textStyle: {
                color: '#fff',
                fontSize: 24
            }
        },

        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 500,
            max: 600,
            inRange: {
                //colorLightness: [0, 1]
            }
        },
        series: [{
            name: '点位总数',
            type: 'pie',
            radius: [1, 55],
            center: ['40%', '50%'],
            color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: [{
                value: 200,
                name: '云南'
            },
                {
                    value: 300,
                    name: '北京'
                },
                {
                    value: 300,
                    name: '山东'
                },
                {
                    value: 300,
                    name: '河北'
                },
                {
                    value: 200,
                    name: '江苏'
                },
                {
                    value: 300,
                    name: '浙江'
                },
                {
                    value: 400,
                    name: '四川'
                },
                {
                    value: 600,
                    name: '湖北'
                }
            ].sort(function (a, b) {
                return null
            }),
            roseType: 'radius',

            label: {
                normal: {
                    formatter: ['{b|{b}}'].join('\n'),
                    rich: {
                        b: {
                            fontSize: 15,
                            height: 40
                        },
                    },
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgb(98,137,169)',
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20,

                }
            },
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, 0.8)',
                    shadowBlur: 50,
                }
            }
        }]
    };
    myChart.setOption(option);
    //flxBox1_2
    $('')
    //flxBox1_2Content
    $('.flxBox1_2Content1').each(function () {
        var rows = $(this)
            .children()
            .clone();
        $(this).append(rows)
    })
    //
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
(function () {
    var myChart = echarts.init(document.getElementById('main2'));
    var data = [2001,1850,1700,1550,1400,
        {
            value:'1200',
            itemStyle:{
                color:'#25405e'
            }

        }
        ,{
            value:'1200',
            itemStyle:{
                color:'#25405e'
            }

        },{
            value:'1200',
            itemStyle:{
                color:'#25405e'
            }
        },1000,800,650,500,350];
    var option = {
        title: {
            text: '全国用户总量统计'
        },
        tooltip:{
            trigger:'item'
        },
        xAxis: [
            {
                type:'category',
                data:['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick:{
                    alignWithLabel:false,
                    show:false
                },
                axisLabel:{
                    color:'#4c9bfd'
                },
                nameTextStyle:{
                    padding:[0,15]
                }
            }],
        yAxis: [
            {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
            }
        ],
        grid:{
            show:true,
            borderColor:'rgba(0,240,255,.3)',
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            {
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#01f5f3'},
                            {offset: 1, color: '#0e65bc'}
                        ]
                    )
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#04dae9'},
                                {offset: 1, color: 'darkblue'}
                            ]
                        )
                    }
                },
                data: data,
                candlestick:{
                    barWidth:'50'
                }
            },

        ]
    };
    myChart.setOption(option);
})();
(function(){
    var myChart = echarts.init(document.getElementById('main3'));
    var option = {
        color:['transparent','transparent','transparent',
            new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#04dae9'},
                    {offset: 1, color: 'darkblue'}
                ]
            )],
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: ['64%', '70%'],
                labelLine: {
                    show: false,
                },
                hoverOffset:0,
                data: [
                    {value: 100},
                    {value: 100},
                    {value: 100},
                    {value: 100}
                ]
            },
        ]
    };
    myChart.setOption(option);
}())