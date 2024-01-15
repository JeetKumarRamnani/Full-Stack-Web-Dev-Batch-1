# JavaScript Assignments Class 44

## Assignment No. 1: Title Case Converter Function

### Problem Statement:

Create a JavaScript function `convertToTitleCase` that takes a string as an argument and converts it into title case (capitalizes the first letter of each word). Ensure the function handles different cases, including strings with leading or trailing spaces.

### Function Signature:

```javascript
function convertToTitleCase(inputString) {
    // Your code here
}
```

### Submission Guidelines:

Submit the JavaScript script or file containing the implementation of the `convertToTitleCase` function. Include comments, test cases, and explanations for any key aspects of the code. Submit before the specified deadline.

### Example:

```javascript
var result = convertToTitleCase("hello world");
console.log(result);
// Expected Output: "Hello World"
```

---

## Assignment No. 2: Time-Based Greeting Function

### Problem Statement:

Optimize and enhance the existing `getGreeting` function, which provides a time-based greeting. Refactor the code for improved readability, handle edge cases gracefully, and test the function with various times of the day.

### Original Function:

```javascript
function getGreeting() {
  // Original code here
}

var greeting = getGreeting();
console.log(greeting);
```

### Submission Guidelines:

Submit the optimized JavaScript script or file with the modified `getGreeting` function. Include comments, test cases, and explanations for any changes made. Submit before the specified deadline.

### Expected Output:

```javascript
// Varies based on the current time of day
```

---

## Assignment No. 3: Current Day of the Week Function

### Problem Statement:

Create a JavaScript function, `getCurrentDayOfWeek`, that returns the current day of the week. Utilize the JavaScript `Date` object, store days of the week in an array, and ensure the function handles errors or unexpected scenarios. Test the function with different dates.

### Function Signature:

```javascript
function getCurrentDayOfWeek() {
  // Your code here
}

var currentDay = getCurrentDayOfWeek();
console.log("Today is " + currentDay);
```

### Submission Guidelines:

Submit the JavaScript script or file containing the implementation of the `getCurrentDayOfWeek` function. Include comments, test cases, and explanations for any key aspects of the code. Submit before the specified deadline.

### Expected Output:

```javascript
// Varies based on the current day
```

---

## Assignment No. 4: Console-Based Digital Clock in 24-Hour Format

### Problem Statement:

Develop a console-based digital clock in 24-hour format using JavaScript. Continuously display the current time in the format HH:MM:SS in the console. Handle different cases and ensure continuous updating.

### Submission Guidelines:

Submit a JavaScript file (e.g., `digitalClock.js`) containing the code for the console-based digital clock. Include comments, test cases, and explanations for key aspects of the code. Submit before the specified deadline.

### Expected Output:

```javascript
// Run the script and observe continuous updates in the console
```

---

## Assignment No. 5: Console-Based Digital Clock in 12-Hour Format

### Problem Statement:

Develop a console-based digital clock in 12-hour format using JavaScript. Continuously display the current time in the format hh:mm:ss AM/PM in the console. Handle different cases and ensure continuous updating.

### Submission Guidelines:

Submit a JavaScript file (e.g., `digitalClock12hr.js`) containing the code for the console-based digital clock. Include comments, test cases, and explanations for key aspects of the code. Submit before the specified deadline.

### Expected Output:

```javascript
// Run the script and observe continuous updates in the console
```

---

## Assignment No. 6: Find Max and Min Values

### Problem Statement:

Create a JavaScript function `findMaxMin` that takes a variable number of numeric arguments and finds the maximum and minimum values among them using the `Math` methods. Handle different cases gracefully and provide comments to explain the logic.

### Function Signature:

```javascript
function findMaxMin() {
    // Your code here
}
```

### Submission Guidelines:

Submit a JavaScript file (e.g., `findMaxMin.js`) containing the code for the `findMaxMin` function. Include comments, test cases, and explanations for key aspects of the code. Submit before the specified deadline.

### Expected Output:

```javascript
var result = findMaxMin(3, 7, 1, 9, 4);
console.log(result);
// Expected Output: { max: 9, min: 1 }

result = findMaxMin(10, 15, "20", 5);
console.log(result);
// Expected Output: { max: 15, min: 5 }
```

---

## Assignment No. 7: Math Object Exploration

### Problem Statement:

Create a JavaScript program that explores and demonstrates the usage of various methods available in the `Math` object.

Cover a range of methods, showcasing their functionalities. Include comments to explain the purpose and functionality of each method.

### Function Signature:

```javascript
function exploreMathObject() {
    // Your code here
}
```

### Submission Guidelines:

Submit a JavaScript file (e.g., `exploreMathObject.js`) containing the code for the `exploreMathObject` function. Include comments, test cases, and explanations for key aspects of the code. Submit before the specified deadline.

### Expected Output:

```javascript
// Run the script and observe the output of the exploreMathObject function
```

---

## Final Assignment: Higher-Order Functions and Callbacks

### Problem Statement:

Create a JavaScript program that leverages higher-order functions and callback functions. The program should demonstrate the concept of passing functions as arguments and using them within higher-order functions.

### Function Signature:

```javascript
function performOperation(num1, num2, operationCallback) {
    // Your code here
}

function displayResult(message, value) {
    // Your code here
}

// Example usage
var result1 = performOperation(5, 3, addition);
displayResult("Addition Result", result1);

var result2 = performOperation(4, 6, multiplication);
displayResult("Multiplication Result", result2);
```

### Submission Guidelines:

Submit a JavaScript file (e.g., `higherOrderCallback.js`) containing the code for the `performOperation`, callback functions, and `displayResult`. Include comments, test cases, and explanations for key aspects of the code. Submit before the specified deadline.

### Expected Output:

```javascript
var result1 = performOperation(5, 3, addition);
displayResult("Addition Result", result1);
// Expected Output: "Addition Result: 8"

var result2 = performOperation(4, 6, multiplication);
displayResult("Multiplication Result", result2);
// Expected Output: "Multiplication Result: 24"
```

Please note that some assignments involve continuous updating (e.g., digital clocks), so the expected output may vary based on the current time or script execution.
