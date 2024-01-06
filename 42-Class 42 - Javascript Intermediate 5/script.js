// console.log('Javascript Intermediate 5');
// console.log(" my name is \t jeet ")

// var userDefinedObject = {
//   name: 'jeet',
//   add(a, b) {
//     return a + b;
//   },
// };

// var result = userDefinedObject.add(4, 4);

// console.log(result);

//Predefined Objects

//String Object
//Array Object
//Date Object
//Math Object
//Document Object
//Window

// var str = 'HElLo My Name My Is Jeet';
// var str2 = 'i live in hyderabad';

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.indexOf('My'));
// console.log(str.lastIndexOf('My'));
// console.log(str + ' ' + str2 + ' ' + 'which is in pakistan');
// console.log(str.concat(' ', str2, ' ', 'which is in pakistan'));

// var str = 'hello-i-am-jeet-kumar';
// console.log(str.slice(-6, -1));
// console.log(str.substring(0, 5));
// console.log(str.substr(0,5))
// console.log(str.trim());
// console.log(str.trim());
// console.log(str.trim());
// console.log(str);

// console.log(str.split("-"));

//Array And Its Methods

// var arr = [1, 2, 3];
// var arr2 = new Array(1, 2, 3);
// console.log(arr);
// Array Methods
//push method
//pop method
//shift
//unshift
//slice
//concat
//join
//splice

// var arr = [1, 2, 3, 4, 5];

// arr.push(6);
// arr.push(7);
// arr.push(8);
// arr.push(9);

// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();

// var arr = [1, 2, 3, 4, 5];
// arr.unshift(0);
// arr.shift();
// arr.shift();

// console.log(arr);

// var str = 'hello g'
// console.log(str.toUpperCase());
// console.log(str)

// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(1, 4);
// console.log(slicedArr); // [2, 3, 4]
// console.log(arr);

// var arr = [1, 2, 3, 4, 5, 6];
// // console.log(arr.splice(2, 4, 'jeet'));
// // console.log(arr)
// console.log(arr.pop());
// console.log(arr);

//Count Characters And Words In A String

function countCharAndWords() {
    var userString = 'Hello I AM JEET KUMAR';
    var charCount = userString.length;
    var wordCount = userString.split(' ').length;
    console.log(userString);
    console.log('Characters Are ' + charCount);
    console.log('Words Are ' + wordCount);
  }
  
  countCharAndWords();
  