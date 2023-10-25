## Javascript Basics Lecture 2 : Terminolgies Used Around Javascript

### Topics Covered:

1. **What approach/sequence javascript follows to execute/run the code**
2. **What does it mean by syntax**
3. **What is statement**
4. **What is expression**
5. **Difference between expression and statment**
6. **What does it mean by values**
7. **What is a variable (container for values)**
8. **What does it Mean by declaration**
9. **What does it mean by defination**
10. **What does it mean by manipulation**
11. **What does it mean by block**
12. **What does it mean by block of code**
13. **what is scope?**
14. **Need of scope in programming languages**
15. **How many scopes are there in javascript**

## Explanations:

1. **What approach/sequence JavaScript follows to execute/run the code**:
   JavaScript follows a sequential execution model, which means it processes code from top to bottom. It ensures that statements are executed in the order they appear in the code.

   Example:

   ```javascript
   console.log("First");
   console.log("Second");
   console.log("Third");
   ```

2. **What does it mean by syntax**:
   Syntax in JavaScript refers to the set of rules that define how programs written in the language should be structured. It's like the grammar of the language, ensuring that your code is written correctly.

   Example:

   ```javascript
   // Correct Syntax
   let x = 10;

   // Incorrect Syntax
   let x 10; // Missing assignment operator (=)
   ```

3. **What is a statement**:
   A statement in JavaScript is a complete line of code that performs a specific action. Statements can be variable declarations, function calls, loops, or conditionals.

   Example:

   ```javascript
   let age = 25; // Variable declaration statement
   console.log("Hello, World!"); // Function call statement
   ```

4. **What is an expression**:
   An expression is a piece of code that produces a value. It can be as simple as a variable or a more complex combination of variables, operators, and functions.

   Example:

   ```javascript
   let x = 5;
   let y = 3;
   let result = x + y; // An expression that produces a value (8)
   ```

5. **Difference between expression and statement**:
   An expression produces a value, while a statement is a line of code that performs an action. An expression can be part of a statement.

   Example:

   ```javascript
   let x; // Statement (variable declaration)
   x = 10; // Statement (assignment)
   let y = x * 2; // Statement with an expression
   ```

6. **What does it mean by values**:
   Values in JavaScript are the fundamental data entities. These can be numbers, strings, booleans, arrays, and objects. Values are what expressions produce.

   Example:

   ```javascript
   let name = "Alice"; // "Alice" is a string value
   let age = 25; // 25 is a numeric value
   ```

7. **What is a variable (container for values)**:
   A variable is a named container used to store values. It allows you to work with and manipulate data in your code.

   Example:

   ```javascript
   let score = 100; // Variable 'score' stores the value 100
   let playerName = "Bob"; // Variable 'playerName' stores the string "Bob"
   ```

8. **What does it mean by declaration**:
   Declaration is the act of introducing a variable to JavaScript by specifying its name. It may or may not include an initial value.

   Example:

   ```javascript
   let temperature; // Declaration without an initial value
   let speed = 55; // Declaration with an initial value
   ```

9. **What does it mean by definition**:
   Definition involves both declaring a variable and providing it with an initial value.

   Example:

   ```javascript
   let fruit; // Declaration
   fruit = "apple"; // Definition with an initial value
   ```

10. **What does it mean by manipulation**:
    Variable manipulation refers to changing the value stored in a variable during the program's execution.

    Example:

    ```javascript
    let count = 5; // Declaration and definition
    count = count + 1; // Manipulating by adding 1
    ```

11. **What does it mean by block**:
    A block is a group of statements enclosed within curly braces `{}`. It's often used to group statements together for control flow purposes.

    Example:

    ```javascript
    if (condition) {
      // This is a block
      // Multiple statements can be placed here
      console.log("Inside the block");
    }
    ```

12. **What does it mean by block of code**:
    A block of code refers to the code enclosed within a pair of curly braces `{}`. It's used to create a scope and to group multiple statements to be executed together.

    Example:

    ```javascript
    {
      // This is a block of code
      let a = 10;
      let b = 20;
      console.log(a + b);
    }
    ```

13. **What is scope**:
    Scope in JavaScript defines where variables are accessible and where their values are looked up. It can be global or local to a function or block.

    Example:

    ```javascript
    let globalVar = "I am global"; // Global scope

    function exampleFunction() {
      let localVar = "I am local"; // Local scope
      console.log(globalVar); // Accessing the global variable is allowed
    }

    console.log(localVar); // This will result in an error because localVar is not accessible here.
    ```

14. **Need of scope in programming languages**:
    Scopes are essential to manage variable visibility and prevent naming conflicts. They ensure that variables are isolated and don't interfere with each other in different parts of the code.

15. **How many scopes are there in JavaScript**:
    JavaScript has two main types of scope: global scope (accessible everywhere) and local scope (restricted to a specific function or block). Additionally, JavaScript also has block scope for variables declared using `let` and `const` within curly braces `{}`.

These explanations and examples should help you understand these JavaScript terminologies in depth.
