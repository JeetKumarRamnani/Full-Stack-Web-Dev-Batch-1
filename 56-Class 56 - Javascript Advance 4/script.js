//Destructuring 

// const arr = [1,2,3,4,5,6,7,8,9,10]

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// let four = arr[3];
// let five = arr[4];
// let six = arr[5];
// let seven = arr[6];
// let eight = arr[7];
// let nine = arr[8];
// let ten = arr[9];

// let [one,two,three,four,five,six,seven,eight,nine,ten] = arr; 

// console.log(one,two,three,four,five,six,seven,eight,nine,ten)


// const arr = [1,2,3,4,5]

// let one = arr[0];
// let four = arr[3];

// let [one,,,four,] = arr;

// console.log(one,four)










// const arr = [1,2,3,4,5]

// let [,two,,five] = arr;

// console.log(two,five)




// Object Destructuring 

// const obj = {
//     name: "jeet kumar",
//     age: 28,
//     nationality: "Pakistan"
// }


// // let myName = obj.name;
// // let myNationality = obj.nationality;
// // alias
// let {name:myName,nationality:myNationality} = obj;

// // console.log(name,nationality)

// console.log(myName,myNationality)






// const obj = {
//     name:"saad",
//     nationality:"pakistani",
//     age:29,
//     std:"low"
// }

// let {name:myName,age:myAge,std="high"} =obj;


// console.log(myName,myAge,std)


// const arr = [1,2,3,4,5]
// arr.push(10)
// arr.toString()
// console.log(arr)

// function Person(name,age){
//         this.name = name;
//         this.age = age;
//         // this.getFullName = function(){
//         //     return this.name;
//         // }
// }

// Person.prototype.getFullName = function(){
//     return this.name;
// }


// const person1 = new Person("Jeet",28)
// const person2 = new Person("Kapil",29)
// const person3 = new Person("Yasir",29)


// console.log(person1.getFullName())
// console.log(person2.getFullName())
// console.log(person3)
// console.log(person2)




// const myMethods = {
//     running(){
//         return "I am Running fast"
//     },
//     talking(){
//         return "I am Talking"
//     }
// }


// var jeet1 = Object.create(myMethods)
// var jeet2 = {

//     __proto__ : myMethods

// }

// var hamza = {
//     __proto__ : myMethods

// }


// var saad = {
//     __proto__ : myMethods
// }



// console.log(jeet1,jeet2,saad,hamza)
// console.log(jeet1.running())
// console.log(jeet2.running())

// console.log(saad.running())
// console.log(hamza.running())











// console.log(document)
// var div = document.createElement("div")










// let obj = {
//     firstName: "jeet",
//     lastName: "Kumar"
// }
// let obj2 ={
//     firstName:"Jatendar",
//     __proto__: obj,
// }

// let obj3 ={
//     lastName:"Ramnani",
//     cast:"lohana",
//     __proto__:obj2
// }

// console.log(obj2.cast)

// console.log(obj.__proto__.__proto__)








// var str = new String("Sasasa")
// console.dir(str)


// var arr = []
// console.log(arr)


// function jeet(){

// }

// console.dir(jeet)





// var str = new String("Jeet     ")


// String.prototype.perfectLength =function(){
//     return this.trim().length
//    }

//    String.prototype.indexOf = "I aM jEET"
//    String.prototype.trim = "I aM trim"

// // console.log(str.perfectLength())
// // console.log(str.indexOf)
// // console.log(str.trim)

// console.log(str)



var obj = {

}

Object.prototype.jeet = function(){
    console.log("Hello I aM aVAILABLE everywhHere")
}

// console.log(obj.__proto__ == Object.prototype)
// console.log(obj.__proto__)
// console.log(Object.prototype)

String.prototype.kumar = function(){
    console.log("i am with string only")
}

Array.prototype.lohana = function(){
    console.log("i am only accessible to arrays")
}

var str= "sasasa"
str.kumar();
str.jeet();
// str.lohana();
var arr = []
console.log(arr)
arr.lohana();
// arr.kumar();
arr.jeet();
// obj.prototype.jeet = function(){
//     return "hey"
// }

var obj2 ={

}

console.log(obj2.jeet())


