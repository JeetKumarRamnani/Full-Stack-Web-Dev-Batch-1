## Javascript Basics Lecture 8 : Control Structures Part 2- Truthy And Falsy Values,Logical Operators,Comparing Boolean,Conditional Statements,Unary Not Operator,Ternary Operator

### Topics Covered:

1. **Nested If Condition**
2. **Truthy And Falsy Values**
3. **Logical Operators**
4. **Comparing Booleans Using Logical Operators**
5. **Logical Expressions/Compound Expressions**
6. **Unary Not Operator**
7. **Ternary Operator**

## Explanations:

### 1. Nested If Else Condition

A nested if-else statement is a control flow structure in programming where an "if-else" statement is placed inside another "if" or "else" block. This creates a hierarchy of conditions, allowing for more complex decision-making based on multiple criteria.

```javascript
let age = 18;
let citizenship = "US";

if (age >= 18) {
  // The person is 18 or older
  if (citizenship === "US") {
    // The person is 18 or older and is a US citizen
    console.log("You are eligible to vote!");
  } else {
    // The person is 18 or older but is not a US citizen
    console.log("You must be a US citizen to vote.");
  }
} else {
  // The person is younger than 18
  console.log("You are not eligible to vote.");
}
```

In this example:

- The outer if statement checks if the person is 18 or older.
- If the person is 18 or older, the nested if statement checks if they are a US citizen.
- Depending on the conditions, different messages are logged to the console.

This is a basic use of nested if statements to handle different scenarios based on multiple conditions. It demonstrates how the nested structure allows you to check additional conditions based on the outcome of the outer condition.

### 2. Truthy and Falsy Values

Truthy and falsy values in JavaScript refer to the boolean evaluation of non-boolean data types. Every value in JavaScript has an inherent boolean value, which is either truthy or falsy. Understanding truthy and falsy values is crucial for making decisions in conditional statements.

Here's a breakdown of truthy and falsy values:

### Truthy Values:

1. **Non-Empty Strings:**
   Any string with at least one character is considered truthy.

2. **Numbers other than 0:**
   Numeric values, excluding 0, are considered truthy.

3. **Arrays and Objects:**
   Arrays and objects, even if empty, are considered truthy.

4. **Functions:**
   A function is truthy, regardless of its content. If a function is defined, it is considered truthy.

5. **Other Objects:**
   Any object, whether it's a custom object or a built-in one, is considered truthy.

### Falsy Values:

1. **Empty String:**
   An empty string `""` is considered falsy.

2. **Number 0:**
   The number 0 is considered falsy.

3. **`null` and `undefined`:**
   Both `null` and `undefined` are considered falsy values.

4. **NaN (Not a Number):**
   NaN, which represents an undefined or unrepresentable value in floating-point calculations, is considered falsy.

5. **Boolean `false`:**
   The boolean value `false` is, of course, falsy.

Understanding truthy and falsy values is essential for writing conditional statements and logical expressions in JavaScript. When evaluating conditions, it's often more idiomatic to check for truthiness or falsiness rather than explicit equality with `true` or `false`. This approach makes the code more flexible and readable.

### 3. Logical Operators

Logical operators in JavaScript include:

- **Logical AND (`&&`):** Returns true if both operands are true.
- **Logical OR (`||`):** Returns true if at least one operand is true.
- **Logical NOT (`!`):** Returns the opposite boolean value of the operand.

### 4. Comparing Booleans Using Logical Operators

You can use logical operators to combine and compare boolean values:

```javascript
let a = true;
let b = false;

let result1 = a && b; // Logical AND
let result2 = a || b; // Logical OR
let result3 = !a; // Logical NOT
```

### 5. Logical Expressions/Compound Expressions

Logical expressions involve combining multiple boolean values or conditions using logical operators. For example:

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}
```

### 6. Unary Not Operator

The unary NOT (`!`) operator negates the boolean value of its operand. If the operand is truthy, `!` makes it falsy, and if it's falsy, `!` makes it truthy.

```javascript
let isSunny = true;
let isNotSunny = !isSunny; // Now isNotSunny is false
```

### 7. Ternary Operator

The ternary operator (`? :`) is a concise way to write an if-else statement in a single line.

```javascript
let result = condition ? "Value if true" : "Value if false";
```

For example:

```javascript
let age = 20;
let message = age >= 18 ? "You can vote" : "You cannot vote";
console.log(message);
```

This will output "You can vote" because the condition `(age >= 18)` is true.

Understanding these concepts will help you write more expressive and concise code in JavaScript, especially when dealing with control structures and boolean logic.
