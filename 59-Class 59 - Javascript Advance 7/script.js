document.title = "Javascript Advance 7";

// // ...arg
// // k ye kahan pe use horahe hain usse hamein pata chalta hai ke ye rest operator hai ya ye spread operator hai

// //Rest Operator

// // function jeet(){
// //         console.log(arguments)
// // }

// // // console.log(jeet.name)
// // // console.log(jeet.length)
// // // console.dir(jeet)
// // jeet(1,2,3,4,5,6)

// // function jeet(...param){
// //     let result = 0;
// //     // for(let i=0; i<param.length; i++){
// //     //         result+=param[i];
// //     // }
// //     param.forEach(function(value){
// //         result+=value;
// //     })

// //     console.log(result)

// // }


// // jeet(1,2,3,4,5,6,7,8,9,10)


// // function jeet(value1,value2){
// //     console.log(value1,value2,arguments)
// // }

// // jeet(1,2,3,4,5,6,7,8,9,10)


// // function jeet(value1,value2,...param){
// //     console.log(value1,value2,param)
// // }

// // jeet(1,2,3,4,5,6,7,8,9,10)




// // function jeet(value1,value2,...param){
// //     console.log(value1,value2,param)
// // }

// // jeet(1,2,3,4,5,6,7,8,9,10)




// // let arr1 = [1,2]
// // let testArray = [...arr1];
// // testArray.push("jeet")
// // let arr2 = [3,4]
// // let arr3 = arr1.concat(arr2)
// // let arr3 = [...arr1]

// // console.log(arr3)
// // console.log("testArray",testArray,"originalArray",arr1)







// // let arr1= [1,2]
// // let arr2 = [3,4]
// // // let arr3 = arr1.concat(arr2)
// // let arr3 = [...arr1,...arr2]

// // console.log(arr3)




// // let obj1 = {
// //     name:"hanif",
// //     age:25,


// // }


// // let obj2 = {
// //   ...obj1,
// //    nationality: "Pakistan",
// //    name:"jeet"
// // }

// // console.log("oBJECT 2",obj2)
// // console.log("Object1",obj1)







// // let obj1 ={
// //     name:"hanif",
// //     age: 25,
// //     name:"sadiq"
// // }

// // console.log(obj1)






// //     let arr =[1,2,3,4]

// //    let result = [];

// //    arr.forEach(function(value){

// //     result.push(value)

// //     })

// //     let result2 = arr.map(function(value){
// //         return value*2;
// //     })

// //     let result3 = arr.map(value=>value*2)


// //     // console.log(arr)

// //     console.log(result)
// //     console.log(result2)
// //     console.log(result3)



// // let arr = [1,2,3,4,5,6,7,8,9,10]
// // // let result =[]
// // // arr.forEach(function(value){
// // //         if(value%2==0){
// // //             result.push(value)
// // //         }

// // // })
// // let result = arr.filter(function(value){
// //     return value%2==0
// // })


// // console.log(result)




// // const books = [
// //     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
// //     { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
// //     { title: '1984', author: 'George Orwell', year: 1949 },
// //     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
// //     { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
// // ];

// // const modernBooks = books.filter(function(book){
// //     return book.year > 1950
// // });

// // console.log(modernBooks);







// // let arr = [1,2,3,4,5,6,7,8,9,10]


// // function jeet(...param){
// //     let result = 0;
// //     console.log(param)
// //     // for(let i=0; i<param.length; i++){
// //     //         result+=param[i];
// //     // }
// //     param.reduce(function(totalValue,value){
// //             console.log(totalValue+value)
// //     })

// //     // console.log(result)

// // }


// // jeet(1,2,3,4,5,6,7,8,9,10)





// // let arr = [1,2,3,4,5]

// // let result =arr.reduce(function(result,value){        

// //     return result+value
// // })

// // console.log(result)


// // function jeet(...param){
// //     let result = 0;
// //     // for(let i=0; i<param.length; i++){
// //     //         result+=param[i];
// //     // }
// //     param.forEach(function(value){
// //         result+=value;
// //     })

// //     console.log(result)

// // }




// // let str = "my name is jeet"

// // console.log(str.toUpperCase())


// // console.log(2+4+6+10+20)
// // console.log(false)





// let str = "my name is jeet"

// console.log(str.toUpperCase()
//                .split(" ")
//                .join(" ")
//                .toLowerCase())











// let arr = [1,2,3,4,5,6,7,8,9,10]

// let result = arr.map(value=>value*value)
//                 .filter(value=> value%2==0)
//                 .reduce((acc,curr)=>acc+curr)


// console.log(result)










