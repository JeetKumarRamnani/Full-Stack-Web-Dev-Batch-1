## Javascript Basics Lecture 7 : Control Structures Part 1- Conditional Statements,Conditional Expressions,If/Else,Else If,Switch Statment

### Topics Covered:

1. **What Does It Mean By Flow Of Program**
2. **What Does It Mean By Control Structures**
3. **Ways To Implement Control Structures**
4. **What Is Condition**
5. **What Are Conditional Statments**
6. **What Are Comparision Expressions**
7. **What is if statement**
8. **What is Else Statement**
9. **What is if/else statements**
10. **if/else and else/if**
11. **Switch Statment**

## Explanations:

### 1. What Does It Mean By Control Structures:

The flow of a program refers to the order in which statements or instructions are executed during the program's runtime. This flow is typically controlled by control structures such as loops, conditionals, and function calls. Understanding and designing the flow of a program is crucial for writing efficient, organized, and functional code.

Here are some key concepts related to the flow of a program:

1. **Sequential Execution:** Statements are executed in the order in which they appear in the code, from top to bottom.

2. **Conditional Execution:** Using constructs like "if" statements, the program can make decisions and execute different blocks of code based on certain conditions.

3. **Loops (Iteration):** With loops, a program can repeat a certain block of code multiple times, either until a condition is met or for a specified number of iterations.

4. **Function Calls:** Programs often consist of functions, which are reusable blocks of code. The flow of control moves in and out of functions as they are called and return values.

5. **Exception Handling:** Programs might encounter unexpected situations (exceptions) that need to be handled. Exception handling allows the program to deal with errors or unexpected conditions gracefully.

In summary, the "flow of program" refers to how the control moves through the code, transitioning from one statement or block to another based on conditions, loops, and function calls. It's a fundamental concept in programming and is crucial for creating well-organized and functional software.

### 2. What Does It Mean By Control Structures:

Control structures in JavaScript are used to control the flow of a program. They include conditional statements and loops that allow you to make decisions and repeat actions based on specific conditions.

Example of a control structure (conditional statement):

```javascript
var age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

In this example, the `if` statement is a control structure that checks the condition (age >= 18) and executes different code blocks based on the result.

### 3. Ways To Implement Control Structures:

The main ways to implement control structures in JavaScript are:

- Conditional Statements: These include `if`, `else if`, `else`, and `switch` statements for making decisions based on conditions.
- Loops: JavaScript provides `for`, `while`, and `do...while` loops for executing code repeatedly.

### 4. What Is Condition:

A condition in JavaScript is a statement or expression that evaluates to either `true` or `false`. Conditions are used in control structures to determine the flow of the program. For example, in an `if` statement, the condition is evaluated, and if it's `true`, the code block inside the `if` is executed.

Example:

```javascript
var age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}
```

In this example, `age >= 18` is the condition that determines whether the person is an adult or not.

### 5. What Are Conditional Statements:

Conditional statements are used to execute different blocks of code based on whether a specified condition is `true` or `false`. Common conditional statements in JavaScript include `if`, `else if`, `else`, and `switch`. These statements help you make decisions in your code.

### 6. What Are Comparision Expressions:

Comparison expressions, also known as comparison operators, are used to compare values in JavaScript. They evaluate to a boolean result, either `true` or `false`, depending on whether the comparison is true or false. Comparison expressions are fundamental for making decisions and controlling the flow of your code. Here are some common comparison operators in JavaScript:

1. **Equality Operator (`==`):**
   Checks if two values are equal, regardless of their data types. For example:

   ```javascript
   5 == "5"; // true
   ```

2. **Strict Equality Operator (`===`):**
   Compares values for both equality and data type. It returns `true` if both values are the same. For example:

   ```javascript
   5 === "5"; // false
   ```

3. **Inequality Operator (`!=`):**
   Checks if two values are not equal, regardless of their data types. For example:

   ```javascript
   5 != 10; // true
   ```

4. **Strict Inequality Operator (`!==`):**
   Compares values for both inequality and data type. It returns `true` if either the values or their data types are different. For example:

   ```javascript
   5 !== "5"; // true
   ```

5. **Greater Than Operator (`>`):**
   Checks if the value on the left is greater than the value on the right. For example:

   ```javascript
   10 > 5; // true
   ```

6. **Less Than Operator (`<`):**
   Checks if the value on the left is less than the value on the right. For example:

   ```javascript
   3 < 7; // true
   ```

7. **Greater Than or Equal To Operator (`>=`):**
   Checks if the value on the left is greater than or equal to the value on the right. For example:

   ```javascript
   10 >= 10; // true
   ```

8. **Less Than or Equal To Operator (`<=`):**
   Checks if the value on the left is less than or equal to the value on the right. For example:
   ```javascript
   3 <= 2; // false
   ```

These comparison expressions are crucial for creating conditional statements like `if`, `else if`, and `else` to make decisions in your JavaScript code. They allow you to determine which code paths to follow based on the evaluation of these expressions.

### 7. What is if statement:

An `if` statement is a conditional statement in JavaScript that allows you to execute a block of code if a specified condition is `true`. If the condition is `false`, the code block inside the `if` statement is skipped.

Example:

```javascript
var temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
}
```

In this example, the code inside the `if` statement will not be executed because the temperature is not greater than 30.

### 8. What is Else Statement:

The `else` statement is used in conjunction with an `if` statement to provide an alternative block of code to execute when the condition in the `if` statement is `false`.

Example:

```javascript
var hour = 14;
if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}
```

In this example, if the `hour` is less than 12, "Good morning!" is displayed; otherwise, "Good afternoon!" is displayed.

### 9. What is if/else statements:

An `if/else` statement allows you to specify two blocks of code: one to execute if the condition is `true` and another to execute if the condition is `false`.

Example:

```javascript
var grade = 75;
if (grade >= 70) {
  console.log("You passed the exam.");
} else {
  console.log("You failed the exam.");
}
```

In this example, if the `grade` is greater than or equal to 70, the message "You passed the exam." is displayed; otherwise, "You failed the exam." is displayed.

### 10.if/else and else/if:

"if/else" statements allow you to execute one block of code if a condition is true, and another block of code if the condition is false. "else if" statements (also written as "elif") let you specify multiple conditions and execute different blocks of code based on those conditions. This is helpful when you have more than two possible outcomes to consider.

Here's an example:

```javascript
let age = 25;

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}
```

In this example, we're checking the value of the `age` variable:

- If `age` is less than 18, it will print "You are a minor."
- If `age` is between 18 and 64 (inclusive), it will print "You are an adult."
- If neither of the above conditions is met (i.e., if `age` is 65 or older), it will print "You are a senior citizen."

The "if" statement is the initial condition, and the "else if" statements provide additional conditions to be checked if the previous conditions are false. The "else" statement at the end acts as a catch-all for any cases not covered by the "if" or "else if" conditions.

This way, you can handle multiple cases and execute different code blocks based on the values of variables or conditions in your program.

The `switch` statement is a control structure in JavaScript that allows you to compare a given value against multiple possible case values. It provides a more structured and organized way to handle multiple conditions and execute different code blocks based on the value's match with a case.

Here's the basic syntax of a `switch` statement:

```javascript
switch (expression) {
  case value1:
    // Code to execute if expression matches value1
    break;
  case value2:
    // Code to execute if expression matches value2
    break;
  // ...
  default:
  // Code to execute if expression doesn't match any case
}
```

- The `switch` keyword indicates the start of the switch statement.
- The `expression` is the value that you want to compare.
- Each `case` is followed by a possible value that `expression` could match.
- The `break` statement is used to exit the switch statement once a match is found. If you omit it, the code will continue to execute for subsequent cases until it reaches a `break` or the end of the switch statement.
- The `default` case is optional and is executed if none of the cases match the `expression`.

Here's an example of how the `switch` statement works:

```javascript
let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend.");
    break;
  default:
    console.log("It's a regular day.");
}
```

In this example, the `day` variable is compared to the case values. Since `day` is "Wednesday," none of the cases match, so the code in the `default` block is executed, and it logs "It's a regular day."

The `switch` statement is particularly useful when you have multiple conditions to check against a single expression. It provides a more organized and efficient way to handle such scenarios compared to using a series of `if` and `else if` statements.

These topics cover essential aspects of JavaScript programming, enabling you to make decisions and control the flow of your code. Understanding them is crucial for writing effective JavaScript programs.

**Conclusion:**

In this lecture on JavaScript basics, we covered control structures, which are essential for controlling the flow of a program. Key takeaways from this lecture include:

1. **Control Structures**: JavaScript control structures, such as conditional statements (if, else if, else) and loops, allow you to manage the flow of your program.

2. **Conditions**: Conditions are expressions that evaluate to either true or false and are used to make decisions in your code.

3. **Conditional Statements**: We explored conditional statements, which enable you to execute different code blocks based on whether a specified condition is true or false.

4. **Comparison Expressions**: Comparison operators (e.g., ==, ===, <, >) are crucial for creating conditions and determining how values relate to each other.

5. **if Statement**: The if statement is used to execute a block of code if a specific condition is true.

6. **else Statement**: The else statement is used alongside if to provide an alternative code block to execute when the condition is false.

7. **if/else Statements**: With if/else statements, you can specify two code blocks—one to execute if the condition is true and another if it's false.

8. **else if Statements**: else if statements allow you to handle multiple conditions and execute different code blocks for various scenarios.

9. **Switch Statement**: The switch statement is a structured way to compare a given value against multiple possible case values and execute specific code blocks accordingly.

By understanding and effectively using these control structures, you can create dynamic and responsive JavaScript applications, enhancing their versatility and functionality.
