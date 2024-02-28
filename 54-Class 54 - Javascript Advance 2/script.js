//Arrow Function

// function jeet(){
//     console.log("Hello From Normal Function")
// }

// jeet();

// let jeet = function (){
//         console.log("Hello from normal function ")
// }

// jeet();




// let jeet = ()=>{
//   console.log("Hello From Arrow Function")
// }

// jeet();





// let myFun = function (){
//     return "Jeet"
// }

// let myFun = () => "Jeet";

// console.log(myFun());






// let myFun  = function (para){
//     console.log(para)
// }

// myFun("jeet")

// let myFun2 = para => console.log(para)


// myFun2("Jeet")




// let myFun = function(para1){
//     console.log(para1)
// }

// myFun("JEET")

// let myFun2= para1 => console.log(para1);
// myFun2("Kumar")





// function sum(){
//     let result = 0;
//     for(let val of arguments){
//         result += val
//     }

//     console.log(result)

// }

// sum(10,20,30,40,50,60,10,20,30)






// let btn = document.querySelector("#btn");

// btn.addEventListener("click",function(e){
//     console.log(e.target.style.backgroundColor ="red")
// })







// let userInput = prompt("Insert Your Name")
// console.log(userInput)






let userNameInput = document.querySelector("#userName")
let textFromUser = document.querySelector("#textFromUser")

userNameInput.addEventListener("change",function(e){
    // console.log("Key was released")
    console.log(e)
    console.log(e.data)

    textFromUser.innerText = e.target.value;

})




