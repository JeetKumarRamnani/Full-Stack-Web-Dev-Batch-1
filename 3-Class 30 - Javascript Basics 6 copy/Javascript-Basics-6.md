## Javascript Basics Lecture 6 : Concatination,+ Operator,Type Coersion,Comparision Operator

### Topics Covered:

1. **Different Colors Of + Operator**
2. **What does it mean by concatination**
3. **Tyep Coersion**
4. **Comparision Operators**

## Explanations:

### 1. Different Colors Of + Operator:

In JavaScript, the `+` operator has different behaviors based on the data types it's used with:

- When used with numbers, it performs addition.
- When used with strings, it concatenates them.
- When used with one or more strings and a number, it performs type coercion, converting the number to a string and then concatenating.

Example:

```javascript
var num1 = 5;
var num2 = 10;
var result = num1 + num2; // Addition
console.log(result); // Output: 15

var str1 = "Hello, ";
var str2 = "world!";
var greeting = str1 + str2; // Concatenation
console.log(greeting); // Output: "Hello, world!"

var age = 25;
var message = "I am " + age + " years old."; // Type coercion and concatenation
console.log(message); // Output: "I am 25 years old."
```

### 2. What does it mean by concatenation?

Concatenation in JavaScript refers to the process of combining two or more strings into a single string. This is often done using the `+` operator, which can be used to join strings together. Here's an example:

```javascript
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"
```

In this example, we've concatenated the `firstName` and `lastName` variables to create the `fullName` variable.

### 3. Type Coercion:

Type coercion in JavaScript refers to the automatic conversion of data types when performing operations. It's important to be aware of how JavaScript handles type coercion to avoid unexpected behavior. For example, when you use the `+` operator to combine a string and a number, JavaScript will automatically convert the number to a string.

### 4. Comparison Operators:

Comparison operators in JavaScript are used to compare values and return a Boolean result (either `true` or `false). Here are some common comparison operators:

- `==` (equality): Compares if two values are equal, but does type coercion.
- `===` (strict equality): Compares if two values are equal and checks if they have the same data type.
- `!=` (inequality): Compares if two values are not equal, but does type coercion.
- `!==` (strict inequality): Compares if two values are not equal and checks if they have different data types.
- `>` (greater than): Checks if the left operand is greater than the right operand.
- `<` (less than): Checks if the left operand is less than the right operand.
- `>=` (greater than or equal to): Checks if the left operand is greater than or equal to the right operand.
- `<=` (less than or equal to): Checks if the left operand is less than or equal to the right operand.

Examples:

```javascript
var num1 = 5;
var num2 = 10;
console.log(num1 == num2); // Output: false
console.log(num1 < num2); // Output: true
console.log(num1 === "5"); // Output: false (strict equality)
```

### 5. What Does It Mean By Control Structures:

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

### 6. Ways To Implement Control Structures:

The main ways to implement control structures in JavaScript are:

- Conditional Statements: These include `if`, `else if`, `else`, and `switch` statements for making decisions based on conditions.
- Loops: JavaScript provides `for`, `while`, and `do...while` loops for executing code repeatedly.

### 7. What Is Condition:

A condition in JavaScript is a statement or expression that evaluates to either `true` or `false`. Conditions are used in control structures to determine the flow of the program. For example, in an `if` statement, the condition is evaluated, and if it's `true`, the code block inside the `if` is executed.

Example:

```javascript
var age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}
```

In this example, `age >= 18` is the condition that determines whether the person is an adult or not.

### 8. What Are Conditional Statements:

Conditional statements are used to execute different blocks of code based on whether a specified condition is `true` or `false`. Common conditional statements in JavaScript include `if`, `else if`, `else`, and `switch`. These statements help you make decisions in your code.

### 9. What is if statement:

An `if` statement is a conditional statement in JavaScript that allows you to execute a block of code if a specified condition is `true`. If the condition is `false`, the code block inside the `if` statement is skipped.

Example:

```javascript
var temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
}
```

In this example, the code inside the `if` statement will not be executed because the temperature is not greater than 30.

### 10. What is Else Statement:

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

### 11. What is if/else statements:

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

### 12.if/else and else/if:

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

These topics cover essential aspects of JavaScript programming, enabling you to make decisions and control the flow of your code. Understanding them is crucial for writing effective JavaScript programs.







5. **What Does It Mean By Control Structures**
6. **Ways To Implement Control Structures**
7. **What Is Condition**
8. **What Are Conditional Statments**
9. **What is if statement**
10. **What is Else Statement**
11. **What is if/else statements**
12. **if/else and else/if**