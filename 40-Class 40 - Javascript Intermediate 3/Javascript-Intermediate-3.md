# Javascript Intermediate Lecture 3 : OBJECTS Basics 3

## Topics Covered:

1. **this Keyword In Javascript And Its Purpose**
2. **What Do You Mean By Blueprint In Programming World**
3. **What is Constructor Function**
4. **new Keyword In Javascript And Its Purpose**
5. **Difference Between Factory And Constructor Function**
6. **Inbuilt/Predefined OBJECTS In Javascript**
7. **Object.Create Method**

## Explanations:

# Javascript Intermediate Lecture 3: OBJECTS Basics 3

### 1. **`this` Keyword In JavaScript and Its Purpose:**

In JavaScript, the `this` keyword refers to the object that is currently executing the function. Its value is determined by how a function is called, and it provides a way to access the object that a function is a method of. In the context of an object method, `this` refers to the object the method is called on.

Example:

```javascript
const car = {
  brand: 'Toyota',
  getModel: function() {
    console.log(`Model of the car: ${this.brand}`);
  }
};

car.getModel(); // Output: Model of the car: Toyota
```

### 2. **What Do You Mean By Blueprint In The Programming World:**

In programming, a blueprint refers to a design or template for creating objects. It defines the structure and behavior of objects but is not an object itself. In JavaScript, blueprints are often created using constructor functions or classes.

### 3. **Constructor Function:**

A constructor function in JavaScript is a function that is used to create and initialize objects. It is called with the `new` keyword, and it typically assigns values to properties within the object using the `this` keyword. Constructor functions serve as blueprints for creating multiple instances of similar objects.

Example:

```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const myCar = new Car('Toyota', 'Camry');
```

### 4. **`new` Keyword In JavaScript and Its Purpose:**

The `new` keyword in JavaScript is used to create instances of user-defined objects. When a function is called with `new`, a new object is created, and `this` inside the function refers to that new object. It is commonly used with constructor functions.

Example:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person('John', 25);
```

### 5. **Difference Between Factory And Constructor Function:**

- **Constructor Function:**
  - Used with the `new` keyword.
  - Creates and initializes a new object.
  - `this` refers to the newly created object.

- **Factory Function:**
  - Returns a new object.
  - Does not require the use of `new`.
  - Can be more flexible in terms of object creation.

### 6. **Inbuilt/Predefined Objects In JavaScript:**

JavaScript provides several built-in or predefined objects that serve various purposes. Examples include `Array`, `String`, `Math`, `Date`, and more. These objects have built-in properties and methods that can be used to perform common operations.

Example:

```javascript
const myArray = [1, 2, 3];
console.log(myArray.length); // Output: 3
```

### 7. **Object.Create Method:**

The `Object.create()` method in JavaScript is used to create a new object with the specified prototype object and properties. It allows for explicit control over the prototype of the created object.

Example:

```javascript
const personProto = {
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

const john = Object.create(personProto);
john.name = 'John';
john.greet(); // Output: Hello, John!
```

### Conclusion:

In this lecture, we covered essential concepts related to objects in JavaScript. We explored the `this` keyword, understood the concept of blueprints in programming, delved into constructor functions and the `new` keyword, compared factory and constructor functions, discussed some inbuilt objects in JavaScript, and introduced the `Object.create()` method. Understanding these concepts is crucial for effective object-oriented programming in JavaScript.