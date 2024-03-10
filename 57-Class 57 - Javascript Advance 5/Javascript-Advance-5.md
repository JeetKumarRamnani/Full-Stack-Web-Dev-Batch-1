# JavaScript Advance Lecture 5: OOPS - Object Oriented Programming 

## Topics Covered:

1. **What Does It Mean By Programming Paradigm**
2. **What Is OOPS (Object Oriented Programming) Paradigm**
3. **What Does It Mean By Term Syntatic Sugar**
4. **Javascript Is Basically A Prototype Based Language**
5. **4 Main Pillars/Principles Of OOPS**
    - **Encapsulation**
    - **Inheritance**
    - **Abstraction**
    - **Polymorphism**
6. **What Does It Mean By Class**
7. **What Does It Mean By Instance Of Class**
8. **Encapsulation**
9. **Inheritence In OOPS**
10. **Abstraction**
11. **Polymorphism**

## Explanations:

### 1. Programming Paradigm with Examples:
A programming paradigm is a style or way of programming, providing guidelines and principles for designing code. Examples of programming paradigms include procedural programming, object-oriented programming (OOP), functional programming, and more.

**Example:**
In procedural programming, the focus is on writing functions or procedures that perform specific tasks. For example:

```javascript
// Procedural Programming Example
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
```

### 2. OOPS (Object Oriented Programming) Paradigm:
OOP is a programming paradigm based on the concept of "objects", which can contain data in the form of fields (attributes or properties) and code in the form of procedures (methods or functions). It allows for the organization of code into reusable components.

### 3. Syntactic Sugar:
Syntactic sugar refers to syntax within a programming language that is designed to make things easier to read or to express. It doesn't add any new functionality but provides a more convenient way of writing code.

**Example:**
In JavaScript, arrow functions are a syntactic sugar for writing anonymous functions more concisely:

```javascript
// Syntactic Sugar Example
const add = (a, b) => a + b;
```

### 4. JavaScript as a Prototype-Based Language:
JavaScript is a prototype-based language, which means objects can inherit properties and methods from other objects.

### 5. Four Main Pillars/Principles of OOPS:
   - **Encapsulation:** Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit (class). It hides the internal state of an object from the outside world and only exposes the necessary functionalities.
   
   - **Inheritance:** Inheritance is a mechanism where a new class inherits properties and methods from an existing class. It promotes code reusability and allows for creating a hierarchy of classes.
   
   - **Abstraction:** Abstraction is the process of hiding the complex implementation details and showing only the essential features of an object. It helps in managing complexity by providing a simplified interface.
   
   - **Polymorphism:** Polymorphism allows objects to be treated as instances of their parent class. It enables a single interface to be used for objects of different classes, providing flexibility and extensibility.

### 6. Class:
A class is a blueprint for creating objects with predefined properties and methods. It serves as a template for creating objects.

**Example:**
```javascript
// Class Example
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const rectangle1 = new Rectangle(5, 3);
console.log(rectangle1.calculateArea()); // Output: 15
```

### 7. Instance of Class:
An instance of a class is an object created from that class. It has access to the properties and methods defined in the class.

### 8. Encapsulation:
Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit (class). It helps in controlling the access to the data and prevents it from being modified directly.

### 9. Inheritance in OOPS:
Inheritance is a mechanism where a new class (subclass) inherits properties and methods from an existing class (superclass). It promotes code reuse and allows for creating a hierarchy of classes.

**Example:**
```javascript
// Inheritance Example
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks`);
    }
}

const dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.speak(); // Output: Buddy barks
```

### 10. Abstraction:
Abstraction is the process of hiding the complex implementation details and showing only the essential features of an object. It helps in managing complexity by providing a simplified interface.

### 11. Polymorphism:
Polymorphism allows objects to be treated as instances of their parent class. It enables a single interface to be used for objects of different classes, providing flexibility and extensibility.

These explanations and examples should provide a solid understanding of Object-Oriented Programming concepts in JavaScript. Let me know if you need further clarification on any topic!

### Conclusion:

In this advanced JavaScript lecture, we covered the fundamental concepts of Object-Oriented Programming (OOP) and its application in JavaScript. We started by understanding programming paradigms, where OOP stands as one of the prominent paradigms. OOP emphasizes the organization of code into reusable objects, each encapsulating data and behaviors.

We explored the four main principles of OOP: Encapsulation, Inheritance, Abstraction, and Polymorphism, which serve as the pillars of OOP. Encapsulation enables data hiding and abstraction, ensuring the integrity of an object's internal state. Inheritance promotes code reuse and the creation of class hierarchies, allowing subclasses to inherit properties and methods from their parent classes. Abstraction simplifies complex implementations by exposing only essential features, while polymorphism enables objects to be treated uniformly through a shared interface.

JavaScript, being a prototype-based language, implements these OOP principles through prototypes and constructor functions. The introduction of ES6 introduced class syntax, making OOP concepts more familiar to developers coming from traditional OOP languages like Java or C++.

Understanding OOP principles is crucial for writing maintainable, scalable, and organized code. By leveraging encapsulation, inheritance, abstraction, and polymorphism, developers can create robust and flexible JavaScript applications.

As you continue your journey in JavaScript development, remember to apply these OOP principles judiciously to design elegant and efficient solutions to complex problems. Practice and experimentation will solidify your understanding of OOP concepts and enhance your proficiency in JavaScript programming.