# JavaScript Intermediate Lecture 7: OBJECTS Intermediate 4

## Topics Covered:

1. **What Is Callback Function**
2. **Why Is Callback Function Very Important To Understand**
3. **setInterval Function**
4. **setTimeOut Function**
5. **Number Object**
6. **Multiple Ways Of Converting String To Number**
7. **Math Object**
8. **Math Is Not A Regular Method It Dont Have A Constructor**
9. **Math Object Methods**

## Explanations:

### 1. Callback Function:

A callback function is a function that is passed as an argument to another function and is executed after the completion of an asynchronous operation. Here's a detailed example:

```javascript
// Example of a callback function
function fetchData(callback) {
  // Simulating an asynchronous operation (e.g., fetching data from an API)
  setTimeout(() => {
    const data = "Some fetched data";
    callback(data);
  }, 1000);
}

// Using the callback function
fetchData((result) => {
  console.log("Data received:", result);
});
```

In this example, `fetchData` simulates an asynchronous operation (like an API call) and takes a callback function as an argument. After the asynchronous operation completes, it calls the provided callback function with the fetched data.

### 2. Why Is Callback Function Very Important To Understand:

Understanding callback functions is crucial for handling asynchronous operations in JavaScript. They allow us to control the flow of the program when dealing with tasks that take time to complete. Here's an extended example:

```javascript
// Example: Asynchronous operation with callback
function asyncOperation(callback) {
  setTimeout(() => {
    console.log("Async operation completed.");
    callback();
  }, 2000);
}

console.log("Start");
asyncOperation(() => {
  console.log("Callback executed after async operation.");
});
console.log("End");
```

In this example, the `asyncOperation` function simulates an asynchronous task. The program continues executing other tasks while waiting for the asynchronous operation to complete. The callback is then executed when the async operation finishes.

### 3. setInterval Function:

`setInterval` is a function that repeatedly calls a specified function or executes a code snippet at a defined time interval. Here's a more detailed example:

```javascript
// Example: Using setInterval for a timer
let seconds = 0;
const timer = setInterval(() => {
  console.log(`${seconds} seconds passed`);
  seconds++;

  if (seconds === 5) {
    clearInterval(timer); // Stop the timer after 5 seconds
    console.log("Timer stopped.");
  }
}, 1000);
```

In this example, `setInterval` is used to create a timer that logs the number of seconds passed. The interval is set to 1000 milliseconds (1 second), and the timer stops after 5 seconds using `clearInterval`.

### 4. setTimeOut Function:

`setTimeout` is a function that executes a specified function or a code snippet after a specified delay. Let's explore this with an in-depth example:

```javascript
// Example: Using setTimeout for delayed execution
console.log("Start");
setTimeout(() => {
  console.log("Delayed code executed after 2 seconds");
}, 2000);
console.log("End");
```

In this example, the program logs "Start," schedules the specified code to run after a 2-second delay using `setTimeout`, and then logs "End." The delayed code executes asynchronously after the specified delay.

### 5. Number Object:

The `Number` object in JavaScript represents numerical values. It provides methods and properties for working with numbers. Let's delve into the details:

```javascript
// Example: Number object and its methods
const num = 42.5678;
console.log(Number.isInteger(num)); // Check if the number is an integer
console.log(num.toFixed(2)); // Format the number with two decimal places
```

In this example, `Number.isInteger` checks if the number is an integer, and `toFixed` formats the number with two decimal places.

### 6. Multiple Ways Of Converting String To Number:

Converting a string to a number can be done using various methods like `parseInt()`, `parseFloat()`, `Number()`, or unary plus `+`. Here's a comprehensive example:

```javascript
// Example: Different ways to convert a string to a number
const strNumber = "123";

console.log(parseInt(strNumber)); // Using parseInt
console.log(parseFloat(strNumber)); // Using parseFloat
console.log(Number(strNumber)); // Using Number constructor
console.log(+strNumber); // Using unary plus
```

In this example, each method is demonstrated for converting the string "123" to a number.

### 7. Math Object:

The `Math` object provides mathematical operations and constants in JavaScript. Let's explore its various methods:

```javascript
// Example: Using Math object methods
const value = 4.567;

console.log(Math.round(value)); // Round to the nearest integer
console.log(Math.floor(value)); // Round down to the nearest integer
console.log(Math.ceil(value)); // Round up to the nearest integer
```

Here, `Math.round()`, `Math.floor()`, and `Math.ceil()` demonstrate rounding methods provided by the `Math` object.

### 8. Math Is Not A Regular Method It Dont Have A Constructor:

Unlike other objects in JavaScript, the `Math` object doesn't have a constructor, and you can't create instances of it. Attempting to do so will result in an error:

```javascript
// Example: Attempting to create an instance of Math (which is not allowed)
// This will result in an error: "TypeError: Math is not a constructor"
// const mathInstance = new Math();
```

### 9. Math Object Methods:

The `Math` object offers various methods for mathematical operations. Here are a few examples:

```javascript
// Example: Using various Math object methods
console.log(Math.sqrt(25)); // Square root
console.log(Math.sin(Math.PI / 2)); // Sine of 90 degrees (in radians)
console.log(Math.random()); // Random number between 0 (inclusive) and 1 (exclusive)
```

In this example, `Math.sqrt`, `Math.sin`, and `Math.random` showcase different methods provided by the `Math` object.

These detailed examples should provide a comprehensive understanding of the topics covered in your JavaScript intermediate lecture on Objects. Feel free to explore and experiment with the code to enhance your understanding further!

Certainly! Let's add a conclusion summarizing the key takeaways from the entire lecture:

### Conclusion:

In this intermediate JavaScript lecture, we delved into essential concepts related to objects and various functionalities available in the language. Let's recap the key points covered:

1. **Callback Functions:**
   - Callback functions are crucial for handling asynchronous operations.
   - They enable the execution of functions after the completion of asynchronous tasks, facilitating better control over program flow.

2. **setInterval and setTimeout:**
   - `setInterval` is used for repeatedly executing a function at defined intervals.
   - `setTimeout` allows the execution of a function after a specified delay.

3. **Number Object:**
   - The `Number` object in JavaScript provides methods and properties for working with numerical values.

4. **String to Number Conversion:**
   - Various methods like `parseInt()`, `parseFloat()`, `Number()`, and unary plus `+` can be used to convert strings to numbers.

5. **Math Object:**
   - The `Math` object offers mathematical operations and constants in JavaScript.
   - It provides methods for rounding, trigonometry, logarithms, and more.

6. **Math Object Conclusion:**
   - The `Math` object doesn't have a constructor, and instances can't be created.
   - It serves as a utility object, providing a collection of static methods for common mathematical operations.

In conclusion, understanding callback functions is pivotal for handling asynchronous tasks, and familiarity with functions like `setInterval` and `setTimeout` enhances our ability to manage time-related events. The `Number` object aids in numerical manipulations, and various methods enable smooth string-to-number conversion. The `Math` object acts as a powerful mathematical tool, offering a range of operations without the need for instantiation.

As you continue your journey in JavaScript, these concepts will serve as a solid foundation for handling asynchronous programming, numerical operations, and mathematical computations. Embrace these tools to write more efficient and robust JavaScript code. Happy coding!