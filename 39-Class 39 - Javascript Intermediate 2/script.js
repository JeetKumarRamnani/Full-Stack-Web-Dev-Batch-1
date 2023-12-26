// console.log('Javascript Intermediate Part 2');
// console.log('Javascript Object Basics 2');

// Adding A New Property In Object

// var obj = {
//   name: 'jeet',
//   age: 20,
// };

// obj.nationality = 'Pakistan';

// console.log(obj);

// var obj = {};
// console.log(obj);

// obj.name = 'jeet';
// obj.age = 23;

// console.log(obj);

// Removing A Property From Object

// var obj = {
//   name: 'jeet',
//   age: 20,
//   userName: function () {
//     console.log('sas');
//   },
// };

// delete obj.name;
// delete obj.age;
// delete obj.userName;
// obj.nationality = 'pakistan';

// delete obj.nationality;

// console.log(obj);

// Adding Multiple Datatype Values In Object

// var arr = [12, 'Jeet', { name: 'jeet' }, [1, 2, 3, 4], true];

// console.log(arr[0]);
// console.log(arr[2].name);
// console.log(arr[3][3]);

// var obj = {
//   name: 'jeet',

//   adress: {
//     streetNumber: 12,
//     houseNo: 50,
//     flatNo: {
//       no: 500,
//     },
//   },

//   hobbies: ['music', 'Singing', 'programming', [1, 2], { name: 'tariq' }],

//   isAlive: true,
// };
// console.log(obj.name);
// console.log(obj.adress.flatNo.no);
// console.log(obj.hobbies[3][1]);
// console.log(obj.hobbies[4].name);

//Primitive Types

// var value1 = 20;
// var value2 = 'asasasjas asjhasjashjas jshajshaas';

// Reference Types
// var jeet = {};

// var value1 = 20;
// var value2 = value1;

// console.log(value1);
// console.log(value2);

// value2 = 40;

// console.log(value1);
// console.log(value2);

// var obj1 = {
//   name: 'jeet',
//   age: 28,
// };

// var obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

// obj2.name = 'Kapil';

// console.log('objet1', obj1);
// console.log('object2', obj2);

// var value1 = 20;
// var value2 = value1;

// value2 = 30

// var obj1 = {};
// var obj2 = obj1;

// obj2.name = 'Jeet';

// console.log(obj1);
// console.log(obj2);

//Object Literal Syntax
var obj = {
    key: 'value',
  };
  
  function jeet(para1, para2) {
    return {
      name: para1,
      age: para2,
    };
  }
  
  var obj1 = jeet('Jeet', 28);
  var obj2 = jeet('Kapil', 24);
  var obj3 = jeet('sas', 24);
  var obj4 = jeet('Kapisasal', 24);
  var obj5 = jeet('Kapilsasas', 24);
  var obj6 = jeet('Kapilasasas', 24);
  var obj7 = jeet('Kapilsasa', 24);
  
  console.log(obj1);
  console.log(obj2);
  console.log(obj3);
  console.log(obj4);
  console.log(obj5);
  console.log(obj6);
  