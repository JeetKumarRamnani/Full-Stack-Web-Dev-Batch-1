# JavaScript Advance Lecture 4: Inheritance,Prototypal Inheritance,Destructuring 

## Topics Covered:

1. **What Is Destructuring In Javascript**
2. **Array Destructuring**
3. **Object Destructuring**
4. **What Is Inheritence In Programming World**
5. **What Is Prototype In Javascript And Its Purpose**
6. **Prototypal Inheritance**
7. **Prototype Chain**
8. **Prototype Vs __Proto__**

## Explanations:

### 1. What Is Destructuring In Javascript:

Destructuring in JavaScript is a convenient way of extracting multiple values from data stored in arrays or objects, and assigning them to variables in a concise and readable manner. It allows you to pull out specific values from arrays or properties from objects into distinct variables, which can be quite useful for simplifying code and improving readability.

### 2. Array Destructuring:

Array destructuring allows you to extract values from arrays into variables using a syntax that resembles array literals. You can specify the variables you want to assign the array elements to inside square brackets `[]` on the left side of the assignment operator `=`. For example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const [a, b, , c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 4
```

### 3. Object Destructuring:

Object destructuring allows you to extract properties from objects and assign them to variables using a syntax similar to object literals. You specify the property names you want to extract inside curly braces `{}` on the left side of the assignment operator `=`. For example:

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

const { firstName, age } = person;

console.log(firstName); // John
console.log(age); // 30
```

### 4. What Is Inheritance In Programming World:

Inheritance is a fundamental concept in object-oriented programming where a class (or constructor function) can inherit properties and methods from another class. It allows for code reuse and the creation of a hierarchy of classes where child classes inherit behavior from parent classes.

### 5. What Is Prototype In Javascript And Its Purpose:

In JavaScript, every object has an internal property called a prototype. It is a reference to another object from which the object inherits properties. The prototype object is essentially a template object that contains methods and properties that are shared among all instances of a particular type of object.

The purpose of the prototype is to enable inheritance and allow objects to share behavior and data without duplicating code.

### 6. Prototypal Inheritance:

Prototypal inheritance is a mechanism in JavaScript where objects can inherit properties and methods from other objects (prototypes). In JavaScript, objects inherit from other objects directly, rather than through classes like in classical inheritance systems.

When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it, it looks up the prototype chain until it finds the property or method or reaches the end of the chain (which is usually the built-in `Object.prototype`).

### 7. Prototype Chain:

The prototype chain is the mechanism by which JavaScript objects inherit properties and methods from their prototype objects. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it, it looks up the prototype chain, following the `[[Prototype]]` link from one object to another until it finds the property or method or reaches the end of the chain.

Each object in JavaScript has a `[[Prototype]]` property, which points to its prototype object. By default, this property references `Object.prototype`, but you can explicitly set it to another object using the `Object.create()` method or by using constructor functions and the `prototype` property.

Understanding the prototype chain is essential for working effectively with JavaScript's prototypal inheritance system.

These concepts are fundamental to understanding JavaScript's object-oriented programming model and can greatly enhance your ability to write clean, efficient, and maintainable code.

### 8. Prototype vs __Proto__ :

The concepts of `prototype` and `__proto__` (often referred to as dunder proto) are related but distinct in JavaScript. Let's explore each:

### Prototype:

In JavaScript, every object has a property called `prototype`, which is essentially a reference to another object. This `prototype` object is used as a blueprint for creating new objects through inheritance. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it, it checks the object's prototype, and so on, until it finds the property or reaches the end of the prototype chain.

### Example:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John');
john.sayHello(); // Output: Hello, my name is John
```

Here, `Person.prototype` is the prototype object for all instances created with the `Person` constructor function. The `sayHello` method is defined on `Person.prototype`, and `john` inherits this method through the prototype chain.

### \_\_proto\_\_:

The `__proto__` property is an internal property of JavaScript objects that references the object's prototype. It is a non-standard way to access an object's prototype and should be avoided in production code in favor of `Object.getPrototypeOf()` and `Object.setPrototypeOf()` methods.

### Example:

```javascript
const person = {
  name: 'John'
};

const student = {
  major: 'Computer Science'
};

// Set student's prototype to person
student.__proto__ = person;

console.log(student.name); // Output: John
```

In this example, `student.__proto__` is set to `person`, so `student` inherits the `name` property from `person`.

### Prototype vs. \_\_proto\_\_:

- `prototype` is a property of constructor functions and is used to set up inheritance between objects created by the constructor.
- `__proto__` is an internal property of all JavaScript objects and is used to access an object's prototype directly.

In summary, while both `prototype` and `__proto__` are related to prototypal inheritance in JavaScript, `prototype` is used to establish inheritance between objects, while `__proto__` is an internal property that provides access to an object's prototype. It's generally recommended to use `prototype` for defining inheritance and `Object.getPrototypeOf()` and `Object.setPrototypeOf()` for working with prototypes directly.

### Conclusion:

In this lecture, we delved into some advanced JavaScript concepts that are crucial for understanding the language's powerful features and patterns. 

We began by exploring **destructuring**, a handy technique for extracting values from arrays and objects with concise syntax, making code more readable and expressive.

Next, we discussed the concept of **inheritance** in the programming world, which allows classes or objects to inherit properties and methods from other classes or prototypes, enabling code reuse and creating hierarchies of related objects.

We then dove into the concept of **prototypes** in JavaScript, which underlies its unique approach to inheritance through the prototype chain. Understanding prototypes is essential for leveraging JavaScript's prototypal inheritance model effectively.

By mastering these concepts—destructuring, inheritance, and prototypes—you'll be better equipped to write elegant, maintainable JavaScript code that takes full advantage of the language's capabilities.

Continued practice and exploration of these topics will deepen your understanding and proficiency in JavaScript programming, empowering you to build more robust and scalable applications.