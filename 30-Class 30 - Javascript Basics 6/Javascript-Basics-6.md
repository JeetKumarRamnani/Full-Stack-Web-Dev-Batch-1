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

**Conclusion:**
In this JavaScript Basics lecture, we've explored fundamental concepts that are essential for anyone looking to become proficient in JavaScript. We've discussed the versatile `+` operator and its behavior with both numbers and strings, learned about the concept of concatenation for joining strings effectively, and gained insights into type coercion, a key aspect of JavaScript. Additionally, we've covered comparison operators that are crucial for making logical decisions in your code. By understanding these concepts, you're well on your way to becoming a skilled JavaScript developer.






