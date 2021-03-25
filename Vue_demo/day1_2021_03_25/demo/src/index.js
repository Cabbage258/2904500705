//入口文件
//导入jq
import $ from 'jquery'
//导入样式
import './1.css'




//jq样式设置 测试jq导入
$(function () {
    $('li:odd').css('background-color', 'cyan')
    $('li:even').css('background-color', 'greenyellow')
})

//构造函数person
class Person {
    static info = 'aaa'
}

console.log(Person.info)
//

//导入vue构造函数
import Vue from 'vue'
//导入vue单文件组件
import App from './components/App.vue'

//创建vue实例对象
const vm = new Vue({
    //指定vm实例要控制的页面区域
    el:'#app',
    data:{},
    //设置渲染组件到指定的el区域中
    //h为render的形参createElement,也是一个函数,用来构建/创建App组件
    //通过createElement将App构建出来,再渲染到vm控制的区域
    render:h => h(App)
})
