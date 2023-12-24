# Javascript Intermediate Lecture 2 : OBJECTS Basics 2

## Topics Covered:

1. **Adding A New Property In Object**
2. **Removing A Property From Object**
3. **Adding Multiple Datatype Values In Object**
4. **Primitive Value vs Reference Value**
5. **Pass By Value vs Pass By Reference**
6. **What Is THIS Keyowrd In Javascript**
7. **Factory Function**

## Explanations:

# Javascript Intermediate Lecture 2: OBJECTS Basics 2

## 1. Adding A New Property In Object

In JavaScript, objects are dynamic, which means you can add new properties to an object even after it has been created. To add a new property, you can simply use the dot notation or square bracket notation.

**Example using Dot Notation:**
```javascript
let person = {
    name: 'John',
    age: 25
};

person.gender = 'Male';
console.log(person);
```

**Example using Square Bracket Notation:**
```javascript
let person = {
    name: 'John',
    age: 25
};

person['gender'] = 'Male';
console.log(person);
```

Both examples will result in the addition of a new property `gender` to the `person` object.

## 2. Removing A Property From Object

To remove a property from an object, you can use the `delete` keyword.

**Example:**
```javascript
let person = {
    name: 'John',
    age: 25,
    gender: 'Male'
};

delete person.age;
console.log(person);
```

This will remove the `age` property from the `person` object.

## 3. Adding Multiple Datatype Values In Object

JavaScript objects can store values of different data types. This makes them versatile for representing complex structures.

**Example:**
```javascript
let person = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        zipCode: '10001'
    },
    hobbies: ['reading', 'traveling']
};
```

In this example, the `person` object contains a string (`name`), a number (`age`), an object (`address`), and an array (`hobbies`).

## 4. Primitive Value vs Reference Value

In JavaScript, variables can hold either primitive values or reference values. Primitive values include numbers, strings, booleans, etc., while objects and arrays are reference values. 

**Example:**
```javascript
let x = 10; // Primitive value
let y = [1, 2, 3]; // Reference value (Array)
```

Primitive values are stored directly in the variable, while reference values store a reference to the actual value.

## 5. Pass By Value vs Pass By Reference

JavaScript is a "pass by value" language for primitive types and a "pass by reference" language for objects. When you pass a primitive value to a function, a copy of the value is passed. When you pass an object to a function, a reference to the object is passed.

**Example:**
```javascript
function updatePrimitive(value) {
    value = 20;
}

function updateObject(obj) {
    obj.property = 'updated';
}

let num = 10;
let obj = { property: 'original' };

updatePrimitive(num);
console.log(num); // Output: 10

updateObject(obj);
console.log(obj.property); // Output: updated
```

## 6. What Is THIS Keyword In Javascript

In JavaScript, the `this` keyword refers to the object that is currently executing the function. Its value depends on how a function is called.

**Example:**
```javascript
let person = {
    name: 'John',
    greet: function() {
        console.log('Hello, ' + this.name + '!');
    }
};

person.greet(); // Output: Hello, John!
```

The value of `this` inside the `greet` function is the `person` object.

## 7. Factory Function

A factory function is a function that returns an object. It's a way to create multiple objects with similar properties and methods without using the `class` syntax.

**Example:**
```javascript
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log('Hello, ' + this.name + '!');
        }
    };
}

let person1 = createPerson('John', 25);
let person2 = createPerson('Jane', 30);

person1.greet(); // Output: Hello, John!
person2.greet(); // Output: Hello, Jane!
```

Factory functions provide a simple and flexible way to create objects with shared characteristics.

## Conclusion

Understanding object manipulation in JavaScript is crucial for building complex applications. From adding and removing properties to dealing with pass by value/reference and using the `this` keyword, these concepts lay the foundation for effective object-oriented programming. Factory functions offer a versatile approach to object creation, allowing for scalable and maintainable code. As you progress in your JavaScript journey, mastering these concepts will empower you to build robust and efficient applications.