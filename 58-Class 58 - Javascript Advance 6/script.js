// let obj = {
//     firstName: "Jeet",
//     lastName: "Kumar",
//     age: 28,

//   get fullName(){
//         console.log(`My Name Is ${this.firstName.toUpperCase()} ${this.lastName} And My Age Is ${this.age}`)
//     },

//     set fullName(value){
//         if(value.length>5){
//         console.log(value.split(" "))
//         this.firstName = value.split(' ')[0];
//         this.lastName = value.split(' ')[1];
//     }else{
//         console.log("Error: Please Insert name Above Then 5 Characters")
//     }
//     }

// }

// obj.firstName = "Hanif"
// obj.fullName("Kapil Dass")
// obj.fullName = "Kapil Dass";
// console.log(obj.firstName)
// console.log(obj.lastName)

// // console.log(obj)










// var arr = [1,2,3,4,5]
// arr.length = 0;
// console.log(arr.length)





//Instance Of Operator


// let str = new String("Hello I AM A String")
// console.log(str)
// console.log(str instanceof String)
// console.log(str instanceof Object)
// console.log(str instanceof Array)

// let arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr instanceof String) //false
// console.log(arr instanceof Object) //true
// console.log(arr instanceof Array) //true


// let obj = {}
// console.log(obj)
// console.log(obj instanceof String) //false
// console.log(obj instanceof Object) //true
// console.log(obj instanceof Array) //false



// function MyConstructor(name){
//     this.name = name

// }

// let kumar = new MyConstructor("Jeet Kumar")

// console.log(kumar)
// console.log(kumar instanceof MyConstructor) // true
// console.log(kumar instanceof String) // false
// console.log(kumar instanceof Object) // true
// console.log(kumar instanceof Array) // false






// class MyClass{
//     constructor(name){
//         this.name = name
//     }
// }

// let lohana = new MyClass("Kapil Dass")

// console.log(lohana)
// console.log(lohana instanceof MyClass) // true
// console.log(lohana instanceof String) // false
// console.log(lohana instanceof Object) // true
// console.log(lohana instanceof Array) // false




// class MyClass{
       
//   static fullName(){
//         console.log("Hello I AM JEET Kumar")
//     }
// }

// let myObj = new MyClass();
// console.log(myObj)
// MyClass.fullName()


// console.log(Math)
// console.log(Math.random())










// class MyClass{
//     static fullName(){
//         console.log("bla bla")
//     }
// }

// let obj= new MyClass()


// class MyClass2 extends MyClass{

// }
// let obj2= new MyClass2()
// console.log(obj2)
// // obj2.fullName()

// MyClass2.fullName()





// "use strict"


// console.log(add)
// add = 20;

// var add;



// myFun(10,20,30)

// function myFun(a,b,c){
//     console.log(a+b+c)
// }






// "use strict"

// add = 10;
// jeet()
// function jeet(){

// }









// function kapil(){
//     add =25;
//    console.log(add)
// }

// function jeet(){
//     "use strict"
//       add =20;
//     console.log(add)
// }


// kapil()
// jeet()







//Rest And Spread Operator

// ...arg

// function jeet(value1,value2){
//     console.log(arguments)
// }

// jeet(1,2,3)

//Jab aap in 3 dots ko as a parameter use karrhe ho tab woh rest operator kehlata hai 

// function kumar(value1,value2,...baqaya){
// console.log(baqaya)
// }

// kumar(1,2,3,4,5,6,7,8,9,10)










// let arr1 = [1,2]
// let arr2 = [3,4];

// let combinedArr = [...arr1,...arr2] 

// console.log(combinedArr)







// let arr = [1,2];
// let arr2= arr;
// arr2.pop()
// console.log(arr)
// console.log(arr2)








let obj= {
    name:"jeet",
    age: 28,
   
}

let obj2 = {...obj,name:"kapil"}

console.log(obj)
console.log(obj2)









