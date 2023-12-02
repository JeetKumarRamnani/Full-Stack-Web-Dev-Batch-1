# Javascript Basics Lecture 12 : Control Structures Part 6- Functions Part 2

## Topics Covered:

1. **Previous Class Revision On Functions**
2. **Return Keyword In Functions**
3. **Points To Remember About Return Keyword**
4. **Function Expression**
5. **Anonymous Function**
6. **Prebuilt Functions**
7. **User Defined Functions**
8. **Difference Between Prebuilt And User defined Functions**

## Explanations:

### 1. **Previous Class Revision On Functions:**

- This section could involve a brief recap of fundamental concepts like function declaration, parameters, and arguments.

### 2. **Return Keyword In Functions:**

- The `return` keyword is used to specify the value that a function should return.
- Example:
  ```javascript
  function addNumbers(a, b) {
    return a + b;
  }
  let result = addNumbers(5, 7);
  console.log(result); // Output: 12
  ```

### 3. **Points To Remember About Return Keyword:**

- Discuss the significance of the `return` keyword: - It ends the function's execution.
- It specifies the value to be returned.

  #### Functions Without a Return Statement:

  - If a function doesn't have a return statement or the return statement doesn't include any value, the function implicitly returns undefined.

  #### Execution After Return:

  - Code after the return statement within a function is not executed. Once the function returns a value, it's done.

  #### Not Always Necessary:

  - Not all functions need a return statement. Some functions are designed to perform actions (side effects) without producing a return value.

### 4. **Function Expression:**

- Function expressions involve defining a function as part of an expression.
- Example:
  ```javascript
  const multiply = function (a, b) {
    return a * b;
  };
  let product = multiply(3, 4);
  console.log(product); // Output: 12
  ```

### 5. **Anonymous Function:**

- Anonymous functions are function expressions without a function name.
- Example:
  ```javascript
  const greet = function (name) {
    return `Hello, ${name}!`;
  };
  console.log(greet("John")); // Output: Hello, John!
  ```

### 6. **Built-in/Predefined Functions:**

- These are functions that are provided by the JavaScript programming language itself.

- Also known as predefined functions or native functions.
They serve common tasks and are readily available for use without the need for additional code.
- Examples: `alert()`, `prompt()`, `parseInt()`, etc.
- Code Example:
  ```javascript
  let num = "42";
  console.log(parseInt(num)); // Output: 42
  ```

### 7. **User Defined Functions:**

- User-defined functions are functions created by the developer.
- Example:
  ```javascript
  function square(num) {
    return num * num;
  }
  console.log(square(4)); // Output: 16
  ```

### 8. **Difference Between built-in And User Defined Functions:**

#### Built-in Functions:

- **Source:** Part of the JavaScript language.
- **Availability:** Readily provided by the language.
- **Purpose:** Covers common, general-purpose tasks.
- **Examples:** `parseInt()`, `Math.random()`.
- **Usage:** Ready to use without additional coding.

#### User-Defined Functions:

- **Source:** Created by the developer.
- **Availability:** Requires explicit programmer implementation.
- **Purpose:** Tailored for specific, custom tasks.
- **Examples:** Custom functions like calculating area.
- **Usage:** Enhances code organization and reusability.

### Conclusion:

- Summarize the key takeaways from the lecture:
  - Understanding the `return` keyword in functions.
  - Differentiating between function expressions and declarations.
  - Grasping the concept of anonymous functions.
  - Recognizing the utility of both prebuilt and user-defined functions.

This recap should provide a comprehensive understanding of the topics covered in your lecture on Functions Part 2. Encourage students to practice these concepts through coding exercises to reinforce their learning.
