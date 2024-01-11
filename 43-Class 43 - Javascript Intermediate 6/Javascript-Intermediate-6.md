# JavaScript Intermediate Lecture 6: OBJECTS Intermediate 3

## Topics Covered:

1. **Chaining Of Methods:**
2. **Array Methods Revision**
3. **Date Object And Its Methods**

## Explanations:

### 1. Chaining of Methods:

In JavaScript, chaining methods is a powerful and concise way to perform a sequence of operations on an object. When a method returns an object, you can immediately call another method on that returned object. This helps in writing cleaner and more readable code.

#### Example with Chaining:
Chaining methods in JavaScript allows you to call multiple methods on an object in a single line. Here's an example using a `car` object:

```javascript
let car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
  start: function() {
    console.log('Engine started');
    return this; // Return the object for chaining
  },
  drive: function() {
    console.log('Car is now moving');
    return this; // Return the object for chaining
  },
  stop: function() {
    console.log('Car stopped');
    return this; // Return the object for chaining
  }
};

// Chaining methods
car.start().drive().stop();
```

#### Example without Chaining:
Without chaining, each method is called separately:

```javascript
let car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
  start: function() {
    console.log('Engine started');
  },
  drive: function() {
    console.log('Car is now moving');
  },
  stop: function() {
    console.log('Car stopped');
  }
};

// Without chaining methods
car.start();
car.drive();
car.stop();
```

Chaining provides a more concise and readable way to perform sequential operations on an object.

### 2. Array Methods Revision:

When it comes to array methods that don't require a callback function, some fundamental ones include:

- **`length`**: Returns the number of elements in an array.

  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const length = numbers.length; // 5
  ```

- **`concat`**: Combines two or more arrays.

  ```javascript
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]
  ```

- **`indexOf` and `lastIndexOf`**: Return the index of the first/last occurrence of an element in an array.

  ```javascript
  const numbers = [1, 2, 3, 4, 2];
  const firstIndex = numbers.indexOf(2); // 1
  const lastIndex = numbers.lastIndexOf(2); // 4
  ```

### 3. Date Object and Its Methods:

The `Date` object in JavaScript is used for working with dates and times. Some of its methods include:

```javascript
const currentDate = new Date();

// Get methods
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // Month is zero-based
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Set methods
currentDate.setFullYear(2023);
currentDate.setMonth(5); // June
currentDate.setDate(15);
currentDate.setHours(12);
currentDate.setMinutes(30);
currentDate.setSeconds(45);
```

Understanding the `Date` object is crucial for handling dates and times in JavaScript applications.

These topics provide a comprehensive understanding of method chaining, essential array methods, and the usage of the `Date` object.


the `getDay` method of the `Date` object in JavaScript returns the day of the week as a number, where Sunday is 0, Monday is 1, and so on, up to Saturday, which is represented as 6. Here's the breakdown:

- Sunday: 0
- Monday: 1
- Tuesday: 2
- Wednesday: 3
- Thursday: 4
- Friday: 5
- Saturday: 6

So when you use `getDay()`, you get a number representing the day of the week, and you can use that number to index into an array or perform any other logic you need.