# Javascript Basics Lecture 11 : Control Structures Part 5 - Functions Part 1

## Topics Covered:

1. **What Does It Mean By Code Reuseablity**
2. **Block Of Code With A Name**
3. **What Are Functions**
4. **Purpose Of Functions**
5. **Declaring And Defining The Functions**
6. **Naming Conventions For Functions**
7. **Execute/Invoke/Call The Functions**
8. **Function with static values**
9. **Function with dynamic values**
10. **Arguments And Parameteres And There Differences**

## Explanations:

### 1. What Does It Mean By Code Reusability:

Code reusability is a programming concept that emphasizes writing code in a way that it can be used multiple times in different parts of a program or even in different programs. Functions are a primary mechanism for achieving code reusability in JavaScript.

Example:
```javascript
// Reusable function to calculate the square of a number
function calculateSquare(number) {
  return number * number;
}

// Using the function in different parts of the program
let result1 = calculateSquare(5); // 25
let result2 = calculateSquare(8); // 64
```

### 2. Block Of Code With A Name:

A block of code with a name refers to a set of instructions grouped together under a specific name or identifier. In JavaScript, this is achieved using functions. Functions allow you to encapsulate a sequence of statements into a single unit, making the code modular and easier to manage.

Example:
```javascript
// Defining a function named 'greet'
function greet() {
  console.log("Hello, world!");
}

// Calling the 'greet' function
greet();
```

### 3. What Are Functions:

Functions are blocks of code in JavaScript that are designed to perform a specific task. They consist of a set of statements, and they can take input parameters and return a value. Functions are fundamental for structuring and organizing code.

### 4. Purpose Of Functions:

The main purposes of functions include code organization, modularity, and code reuse. By defining functions, you can break down a program into smaller, manageable parts, making it easier to understand and maintain. Functions also promote a more efficient and modular development process.

### 5. Declaring And Defining The Functions:

- **Declaration:**
  ```javascript
  function sayHello() {
    console.log("Hello!");
  }
  ```

- **Definition:**
  ```javascript
  let add = function(a, b) {
    return a + b;
  };
  ```

### 6. Naming Conventions For Functions:

Follow camelCase naming conventions for functions, where the first word is lowercase and subsequent words are capitalized. This promotes readability and consistency in your code.

Example:
```javascript
function calculateAreaOfCircle(radius) {
  // function body
}
```

### 7. Execute/Invoke/Call The Functions:

To execute or invoke a function, you use its name followed by parentheses. This triggers the code inside the function to run.

Example:
```javascript
sayHello(); // Calling the 'sayHello' function
```

### 8. Function with static values:

Functions can have static values, meaning they always perform the same set of instructions when called.

Example:
```javascript
function greet() {
  console.log("Welcome!");
}

greet(); // Outputs: Welcome!
```

### 9. Function with dynamic values:

Functions can also accept parameters to work with dynamic values. Parameters are variables that store the values passed to the function when it is called.

Example:
```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Outputs: Hello, John!
```

### 10. Arguments And Parameters And Their Differences:

- **Parameters:** These are placeholders in the function definition. They act as variables representing the values that the function expects.
  ```javascript
  function add(x, y) {
    return x + y;
  }
  ```

- **Arguments:** These are the actual values passed to the function when it is called. They correspond to the parameters in the function definition.
  ```javascript
  let result = add(3, 5); // Here, 3 and 5 are arguments passed to the 'add' function.
  ```

Understanding the difference between parameters and arguments is crucial for working with functions effectively.

# Conclusion:

In conclusion, this lecture on JavaScript basics provided a comprehensive understanding of control structures and functions. The key takeaways from the lecture include:

1. **Block Of Code With A Name:**
   - Functions serve as named blocks of code, facilitating modularity and code organization.

2. **Code Reusability:**
   - Functions enable code reusability, allowing the same set of instructions to be employed in various parts of a program.

3. **Functions:**
   - Functions are fundamental units of code in JavaScript, promoting organization, modularity, and efficiency.

4. **Purpose Of Functions:**
   - Functions contribute to code organization, modularity, and reusability, enhancing overall code quality.

5. **Declaring And Defining Functions:**
   - Functions are declared using the `function` keyword and defined with a set of statements or function expressions.

6. **Naming Conventions For Functions:**
   - Follow camelCase naming conventions for functions to maintain readability and consistency.

7. **Execute/Invoke/Call The Functions:**
   - Functions are executed by calling their name, triggering the execution of the code within.

8. **Function with Static Values:**
   - Functions can have static values, executing the same instructions consistently.

9. **Function with Dynamic Values:**
   - Functions can accept parameters for handling dynamic inputs, enhancing flexibility.

10. **Arguments And Parameters:**
    - Parameters are placeholders, and arguments are the actual values passed during function invocation.

Understanding these foundational concepts is crucial for mastering JavaScript. Functions play a pivotal role in structuring code, fostering reusability, and improving overall code maintainability. As you delve deeper into JavaScript, these principles will serve as a solid groundwork for exploring advanced topics and programming practices.