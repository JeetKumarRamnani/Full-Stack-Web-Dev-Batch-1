# JavaScript Advance Lecture 6: Getters And Setters,Static Keyword,Use Strict,Rest AND Spread Operators 

## Topics Covered:

1. **Accessors Properties**
2. **Getters And Setters**
3. **Instanceof Operator**
4. **What Is Static Keyword In Javascript**
5. **What Is Use Strict In Javascript**
6. **Rest And Spread Operators Why We Use Them**

## Explanations:

### 1. Accessors Properties

Accessors properties in JavaScript are methods that get and set the values of an object. They are used to define custom behavior when getting or setting a property's value. Accessors consist of two types: getters and setters.

```javascript
let obj = {
  _value: 0,
  get value() {
    return this._value;
  },
  set value(newValue) {
    this._value = newValue;
  }
};

console.log(obj.value); // Outputs: 0
obj.value = 10;
console.log(obj.value); // Outputs: 10
```

### 2. Getters And Setters

Getters and setters are special methods used to get and set the values of an object's properties. They allow for controlled access to object properties and enable validation or computation during property access.

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    this.radius = value / 2;
  }
}

let circle = new Circle(5);
console.log(circle.diameter); // Outputs: 10

circle.diameter = 12;
console.log(circle.radius); // Outputs: 6
```

### 3. Instanceof Operator

The `instanceof` operator in JavaScript is used to check if an object is an instance of a particular class or constructor function.

```javascript
class Car {}
let myCar = new Car();

console.log(myCar instanceof Car); // Outputs: true
console.log(myCar instanceof Object); // Outputs: true (all objects are instances of Object)
```

### 4. Static Keyword

The `static` keyword in JavaScript is used to define static methods or properties that belong to the class itself, rather than to instances of the class.

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 10)); // Outputs: 15
```

### 5. Use Strict

The `"use strict"` directive is used to enable a strict mode in JavaScript, which helps catch common coding mistakes and prevents certain actions that are considered bad practice.

```javascript
"use strict";

x = 10; // This will cause a ReferenceError in strict mode
```

### 6. Rest And Spread Operators

The rest (`...`) and spread (`...`) operators in JavaScript are used to work with arrays and function arguments.

#### Rest Operator

The rest operator (`...`) is used to gather remaining arguments into an array.

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4)); // Outputs: 10
```

#### Spread Operator

The spread operator (`...`) is used to spread elements of an array or iterable object into individual elements.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];

console.log(combined); // Outputs: [1, 2, 3, 4, 5, 6]
```

These topics provide essential functionality and understanding for working with JavaScript objects, classes, strict mode, and array manipulation using rest and spread operators.

## Conclusion

In conclusion, the advanced JavaScript lecture covered several important topics:

1. **Accessors Properties**: These are methods used to get and set the values of an object, allowing for custom behavior during property access.

2. **Getters And Setters**: Special methods that enable controlled access to object properties, providing validation or computation during property access.

3. **Instanceof Operator**: Used to check if an object is an instance of a specific class or constructor function.

4. **Static Keyword**: Defines static methods or properties belonging to the class itself, rather than instances of the class.

5. **Use Strict**: A directive that enables strict mode in JavaScript, catching common mistakes and preventing bad practices.

6. **Rest And Spread Operators**: The rest (`...`) operator gathers remaining arguments into an array, while the spread (`...`) operator spreads elements of an array or iterable object into individual elements.

These concepts are fundamental for writing robust and efficient JavaScript code, especially when working with objects, classes, function arguments, and maintaining code quality using strict mode. Understanding and applying these concepts can greatly enhance your JavaScript programming skills.