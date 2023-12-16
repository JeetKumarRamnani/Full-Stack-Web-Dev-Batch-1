// console.log('hello world');

// var myVar = "jeet" //line of code , instruction , statement ye kya karte hain koi na koi action peform karte hain

// console.log(2+2+4+5*10+100+20+10)

// console.log("Hello" + (2+2) + "Jeet")

// var myValue = 20;

// console.log(myValue);

// // Declaration

// var myVar;
// //Define KARDIA MATLAB USKE ANDAR KOI NA KOI VALUE DAAL DI HAI
// myVar = "Jeet"

// var myVar2 = "Kashif" //Declaration and defination both at the same time

// console.log(myVar)

//Manipulation Matlab variable ke sath khelna matlab uski state ke sath ya halat ke sath  khelna

// var temp = 104; //past state of variable

// temp = 98; //past state

// temp= 100; //current state

//Block
// {} //this is a block
// block start hota hai opening curly braces se or end hota hai closing curly braces se
// console.log("hello")
// console.log("bye")

//block ham use karte hain statements ko group karne ke lie taake ham unse koi specific kara sakein
// {

//   console.log("hello")
// console.log("bye")
// }

//Scope SCOPE Ka simple matlab ye hai ke aapka variable kahan tak accessible hai  do tareeqe ke scopes hote hain global yaani har jagah accessible and local yaani ek boundary ya ham kahein ek block ke andar hi accessible hoga

// var jet = 20; //global scope

// function name() {
//   var jet = 30; //local scope
//   console.log(jet);
// }
// name();
// console.log(jet)

//Compile time cheaking and run time cheaking

// console.log(1)
// console.log(2)

// console.log(3)

// cosole.log(4) //Run time error

// console.log(5)

// console.log(6)

// console.log(7)

// var myVar = 12; //in javascript

// int myVar1 = 12//in c++ ya java ya c langauge

// myVar1 = "jeet"; //this is not allowed in java,c++ ya c language

// var myName = 12;
// // myName = '12+12' "" ''

// console.log(myName);
// console.log('My Name Is "Jeet" ');
// console.log(typeof myVar)

//Implicit and explicit
// myName = "jeet" //javascript khud se var keyword lagadegi matlab implicitly kam hoga

// var myName2 = "Kashif" //Maine khud se var lagadia matlab explicitly kam horaha

// console.log(12+"12") //This is called implicit type conversion iska dusra name hai type cohersion
//Dynamic vs static and strongly vs weekly typed langauge

// var myName = "jeet"
// myName= 12;

// var myName=10;
// var MyName=20;

// console.log(myName,MyName)

//Operators Operands and operation

//Javascript ke andar hote hain 3 tareeqe ke operators

//Unary Operators single operand
//Binary Operators 2 operands
//Ternary Operators 3 operands

//Unary Operator
var myNum = 2;

// ++ -- these are operators
// myNum++; unary increament operator
// myNum = myNum + 1;

// myNum++; // 3
// myNum++; // 4
// myNum++; // 5
// console.log(myNum)

// -- Unary Decrement Operator
// myNum = myNum -1;
// myNum--; //1
// myNum--; //0
// myNum--; //-1
// myNum--; //-2
// myNum--; //-3
// myNum--; //-4

// console.log(myNum)
//Operation
// jab operand or operator sath milte hain tab hota hai operation

// Binary Operator Mein AAPKO CHAIYE hote hain 2 operands

// var operand1 = 11;
// var operand2 = 5;

// var operand3 = 20;
// var operand4= 10;

// // console.log(operand1 % operand2);
// // boolean hamesha hamein true ya false

//  console.log(false || true)

// console.log(4+5-10)
// console.log(2+2/10*10)

// console.log(2+"2")

// var stdone = 1;
// var stdtwo = 2;

// var stdthree = 3;

// var stdfour = 4;

// var stdfine = 5;

// var stdmarks = [1, 2, 3, 4, 5];

// console.log(stdone);
// console.log(stdmarks[4]);

// console.log(true)

// switch(2){
//   case 2:
//   // 2===2
//   console.log("two")
//   break;

//   case 3:
//   // 3===3
//   console.log("three")
//   break;

//   default:
//   console.log("i am default")
// }

// if (true) {
//   if (false) {
//     if (true) {
//       console.log('i am executed finally');
//     }
//   }
// }

// string is set of character
// "" //empty string
// " " //space  bhi ek character count hota hai
// // ! unary not operator
// if (!false) {
//   console.log('jab true hoga main print hojahunga');
// }

//Loops

// console.log("jeet")
// console.log("jeet")
// console.log("jeet")
// console.log("jeet")
// console.log("jeet")
// console.log("jeet")

// for (var i = 1; i < 7; i++) {
//   console.log('jeet');
// }
// console.log('sasa');
// for (var i = 0; i >= 0; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

// console.log('Sasa');

// Functions
// var myvar;
// myvar=10
// function myFunc() {
//   console.log('jeet');
//   console.log('kashif');
//   console.log('hanif');
//   console.log('khizra');
// }
// // console.log("Hello")
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();

// console.log('jeet');
//   console.log('kashif');
//   console.log('hanif');
//   console.log('khizra');

//   console.log('jeet');
//   console.log('kashif');
//   console.log('hanif');
//   console.log('khizra');

//   console.log('jeet');
//   console.log('kashif');
//   console.log('hanif');
//   console.log('khizra');

//   console.log('jeet');
//   console.log('kashif');
//   console.log('hanif');
//   console.log('khizra');

//   console.log('jeet');
//   console.log('kashif');
//   console.log('hanif');
//   console.log('khizra');

//Function Arguments And Parameters

// function addition(value1, value2) {
//   console.log(value1, value2);
//   console.log(value1 + value2);
// }

// // nan matlab not a number

// console.log("hellow")

// addition(10,20);
// addition(50,20);
// addition(100,200);
// addition(500,500);

//Function With Return

// function myName() {
//   console.log('sasas');
//   return 'khizra';
//   console.log('return ke neeche kuch bhi print nainhota');
// }
// // console.log(myName());
// var returnedValue = myName();
// console.log(returnedValue);

// function addition(val1, val2) {
//   return val1 + val2;
// }

// console.log(addition(2, 5));
