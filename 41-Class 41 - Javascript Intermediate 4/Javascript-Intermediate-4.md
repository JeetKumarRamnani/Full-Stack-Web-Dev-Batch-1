# Javascript Intermediate Lecture 4 : OBJECTS Intermediate 4

## Topics Covered:

1. **Constructor Revision**
2. **What Does Built-in/Predefined Objects Means**
3. **Commonly Used Predefined Objects**
   - String Object
   - Array Object
   - Date Object
   - Math Object
   - Document Object
   - Window Object
4. **Advantages of Predefined Objects**
5. **Strings Object**
   - Creating String Objects
   - String Properties
   - String Methods:
     - `charAt()`
     - `concat()`
     - `indexOf()`
     - `slice()`
     - `toUpperCase()`
     - `toLowerCase()`
     - and more...

## Explanations:

Certainly! Let's dive into each topic in detail.

### 1. **Constructor Revision:**

In JavaScript, a constructor is a function used for creating and initializing objects. Objects in JavaScript can be created using constructor functions with the `new` keyword. A constructor typically defines properties and methods that will be common to all instances of an object. It is a way to create and initialize objects of a particular type.

Example:

```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating an instance using the constructor
let person1 = new Person("John", 25);
```

### 2. **What Does Built-in/Predefined Objects Mean:**

Built-in or predefined objects are objects that are already part of the JavaScript language. These objects provide essential functionalities and are readily available for use without the need for explicit definition. They are integral to the language and cover a wide range of operations.

### 3. **Commonly Used Predefined Objects:**

#### - **String Object:**

The String object is used to represent and manipulate sequences of characters. It has various properties and methods for working with strings.

#### - **Array Object:**

The Array object is used to store and manipulate collections of elements. It provides methods for adding, removing, and manipulating elements in an array.

#### - **Date Object:**

The Date object is used for working with dates and times. It provides methods to get and set the year, month, day, hour, minute, second, and millisecond.

#### - **Math Object:**

The Math object provides mathematical operations and constants. It includes functions like `Math.random()`, `Math.floor()`, `Math.ceil()`, etc.

#### - **Document Object:**

The Document object represents the HTML document in the browser. It provides methods to manipulate the content and structure of the document.

#### - **Window Object:**

The Window object represents the browser window. It provides methods for interacting with the browser, such as opening new windows, navigating to URLs, and more.

### 4. **Advantages of Predefined Objects:**

- **Efficiency:** Predefined objects are optimized and implemented in the core of the JavaScript engine, ensuring efficient performance.
- **Consistency:** Using predefined objects promotes consistency across different JavaScript applications.
- **Widespread Use:** Predefined objects provide commonly used functionalities, reducing the need for developers to reinvent the wheel.

### 5. **Strings Object:**

#### - **Creating String Objects:**

```javascript
let str = new String("Hello");
```

#### - **String Properties:**

- `length`: Returns the length of the string.

#### - **String Methods:**

- **`charAt(index)`**: Returns the character at the specified index.
- **`concat(str1, str2, ...)`**: Concatenates two or more strings.
- **`indexOf(substring)`**: Returns the index of the first occurrence of a substring.
- **`slice(start, end)`**: Extracts a portion of the string.
- **`toUpperCase()`**: Converts the string to uppercase.
- **`toLowerCase()`**: Converts the string to lowercase.
- and more...

Example:

```javascript
let greeting = "Hello, World!";
let firstChar = greeting.charAt(0); // Returns 'H'
let newString = greeting.concat(" How are you?"); // Concatenates two strings
let index = greeting.indexOf("World"); // Returns the index of 'World'
let slicedString = greeting.slice(0, 5); // Returns 'Hello'
let upperCaseString = greeting.toUpperCase(); // Returns 'HELLO, WORLD!'
```

These methods and properties make it easy to work with and manipulate strings in JavaScript.
