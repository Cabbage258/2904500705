$(function(){
var myChart = echarts.init(document.getElementById('main1'));
var option = {
    backgroundColor: 'transparent',
    title: {
        text: '点位分布统计',
        left: 50,
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
        radius: '50%',
        center: ['50%', '50%'],
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
        ].sort(function(a, b) {
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
})