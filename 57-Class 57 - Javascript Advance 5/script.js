// let myFun = function(){

// }

// let myFun2 = param=> "Sasasa";









// function Person(name,age){
//     this.name = name;
//     this.age = age

// }

// Person.prototype.myFun = function(){
//         console.log(this.name,this.age)
//     }

// let myObj = new Person("Jeet Kumar",28);
// let myObj2 = new Person("Hanif",25);
// myObj.myFun()

// console.log(myObj)
// console.log(myObj2)


// let obj= {
//     name:"jeet",
//     myFUn(){

//     }
// }


class Person{
    // let name;
    constructor(name,age){
            this.name = name;
            this.age = age
        }

        myFun(name){
            console.log("Parent")
        }

}

class Male extends Person{
    constructor(name,age,nationality){
        super(name,age)
    }
    myFun(name,age){
        console.log("Child")
    }
    myFun(name,age,nationality){
        console.log("Child")
    }
}


let myObj = new Male("Jeet Kumar",28,"Pakistani")
console.log(myObj)
myObj.myFun()

// function Person(name,age){
//     this.name = name;
//     this.age = age

// }
// Person.prototype.myFun = function(){
//         console.log(this.name,this.age)
//     }


// let myObj = new Person("Jeet Kumar",28)
// let myObj2 = new Person("Hanif",25)

// let myObj3 ={
//     __proto__ : myObj
// }

// console.log(myObj3.name)

// console.log(myObj)
// console.log(myObj2)

// myObj.name;





// OOPS Principles
// 4 Principles
    //Encapsualtion
    //Inheritance
    //Abstraction
    //Polymorphism


    let str = "Sasas"

    console.log(str.toUpperCase())







































