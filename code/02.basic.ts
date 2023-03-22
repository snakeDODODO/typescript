// 声明一个变量a,同时指定他的类型为number，指定类型为小写，否则会变成另外的一种变量
let a: number

// a的类型设置为了number，在以后的使用过程中a的值只能是数字，被限定为number类型之后，赋值为出number类型其他外的值都会报错
a = 10
a = 33

// 声明完变量直接进行赋值
// let c: boolean = false

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型监测
let c = false
c = true




// JS中的函数是不考虑参数的类型和个数
// function sum(a,b){
//   return a + b
// }

// console.log(sum('123',456));

function sum(a: number,b:number) :number{
  return a + b
}

let result = sum(123,456)