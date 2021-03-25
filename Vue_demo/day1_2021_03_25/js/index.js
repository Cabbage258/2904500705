console.log('ok')
//import导入模块  默认导入唯一  {}按需导入多个
//import  默认导入,{按需导入}  from  '模块标识符'
    import js01,{s1,s2 as ss,s3} from './js01'

/*
console.log(js01)
console.log(js01.show.__proto__)
*/

console.log(js01)
console.log(s1)
console.log(ss)
s3()