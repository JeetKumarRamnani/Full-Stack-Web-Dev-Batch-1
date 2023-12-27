// console.log('Javascript Intermediate 3');
// console.log('Object Basics 3');

//Object Literal

// var obj = {
//   name: 'jeet',
//   age: 28,
// };

// var obj1 = {
//   name: 'kapil',
//   age: 30,
// };

// Factory Function

// function factoryFunction(para1, para2) {
//   var obj = {
//     name: para1,
//     age: para2,
//   };

//   return obj;
// }

// var obj1 = factoryFunction('jeet', 28);
// var obj2 = factoryFunction('kapil', 30);
// var obj3 = factoryFunction('ajmal', 40);
// var obj4 = factoryFunction('Saad', 50);
// var obj5 = factoryFunction('hanif', 60);
// var obj6 = factoryFunction('hamza', 70);

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);
// console.log(obj5);
// console.log(obj6);

// alert('tthsasas');
// function jeet() {
//   console.log(this);
// }

// jeet();

// var obj = {
//   name: 'jeet',
//   showMyName: function () {
//     console.log(this.name);

//   },
// };

// obj.showMyName();

// var obj = {
//   name: 'jeet',
//   // showMyName: function () {
//   //   console.log(this.name);
//   // },
//   showMyName() {
//     console.log(this.name);
//   },

// };

// obj.showMyName();

// var obj = {
//   name: 'Jeet',
//   age: 28,
//   nationality: 'Pakistan',

//   //Hello My Name Is Jeet Kumar My Age iS 28 And I Live In Pakistan

//   showMyName() {
//     console.log(
//       'Hello My Name Is ' +
//         this.name +
//         ' Kumar My Age Is ' +
//         this.age +
//         ' I Live In ' +
//         this.nationality
//     );
//   },
// };

// obj.showMyName();

//Constructor Function

// Pascal Case

// showMyName -- camelCasing
// ShowMyName -- PascalCase

// function factoryFunction(para1, para2) {
//   var obj = {
//     name: para1,
//     age: para2,
//   };

//   return obj;
// }

// function MyConstructorFunction(name, age) {
//   this.myName = name;
//   this.myAge = age;
//   this.showMyName = function () {
//     console.log(this.myName, this.myAge);
//   };
// }

// var obj1 = new MyConstructorFunction('Jeet', 28);
// var obj2 = new MyConstructorFunction('kapil', 28);

// console.log(obj1);
// console.log(obj2);
// obj1.showMyName();
// obj2.showMyName();

// console.log(Object());

// var obj = new Object.create({});
// obj.name = 'jeet';

// console.log(obj);

// var obj = {
//   name: 'jeet',
// };

// var obj2 = Object.create(obj);

// console.log(obj2.name);

// var str = 'hejejasjas ';

// var str1 = new String('easjaskjasjsaj');
// console.log(str);
// console.log(str1);
