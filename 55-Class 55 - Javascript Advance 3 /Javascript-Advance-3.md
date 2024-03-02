# JavaScript Advance Lecture 3: Hoisting,Template Literal,String Interpolation,Default Parameter 

## Topics Covered:

1. **Hoising In Javascript**
2. **Hoisting Of Var Made Variables vs let and const**
3. **Hoisting Of Function Declaration Vs Function Expression**
4. **Template Literal**
5. **String Interpolation**
6. **Default Parameter**

## Explanations:

### 1. Hoisting In JavaScript

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations.

```javascript
console.log(x); // undefined
var x = 5;
```

This code behaves as if it were written like this:

```javascript
var x;
console.log(x); // undefined
x = 5;
```

### 2. Hoisting Of `var` Made Variables vs `let` and `const`

Variables declared with `var` are hoisted to the top of their function scope or global scope, while `let` and `const` are hoisted to the top of their block scope but are not initialized until the line of code where the declaration is.

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

### 3. Hoisting Of Function Declaration Vs Function Expression

Function declarations are hoisted entirely, meaning they can be called before they are declared.

```javascript
foo(); // "Hello, world!"

function foo() {
  console.log("Hello, world!");
}
```

Function expressions, however, are not hoisted in the same way.

```javascript
bar(); // TypeError: bar is not a function
var bar = function() {
  console.log("Hello, world!");
};
```

### 4. Template Literal

Template literals are string literals allowing embedded expressions. They are enclosed by the backtick (\`\`) character instead of double or single quotes.

```javascript
const name = "John";
console.log(`Hello, ${name}!`); // "Hello, John!"
```

### 5. String Interpolation

String interpolation is the process of evaluating string literals containing one or more placeholders, which are replaced with their corresponding values.

```javascript
const a = 10;
const b = 20;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // "The sum of 10 and 20 is 30"
```

### 6. Default Parameter

Default parameters allow parameters to have default values if no value or undefined is passed.

```javascript
function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}

greet(); // "Hello, World!"
greet("John"); // "Hello, John!"
```

## Conclusion

Understanding hoisting in JavaScript is crucial for writing efficient and bug-free code. Remember that hoisting differs between `var`, `let`, and `const` declarations. Template literals and string interpolation provide more flexibility and readability when working with strings. Default parameters offer a convenient way to handle optional arguments in functions. These concepts collectively enhance your understanding and usage of JavaScript.