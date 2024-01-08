# String Manipulation Assignments

## Assignment 1: String Validation

**Problem Statement:**

Write a JavaScript function named `checkCapital` that takes a string as input and checks if the provided string is in capital letters. Your function should return "Your string is valid" if the input string is entirely in uppercase; otherwise, it should return "Your string is not valid."

**Function Signature:**
```javascript
function checkCapital(inputString) {
    // Your code here
}
```

**Example:**

```javascript
// Example 1:
var result1 = checkCapital("HELLO");
console.log(result1); // Output: Your string is valid

// Example 2:
var result2 = checkCapital("Hello");
console.log(result2); // Output: Your string is not valid
```

**Instructions:**
- Create a JavaScript function as described in the problem statement.
- Test your function with at least two examples to demonstrate its correctness.
- Submit your JavaScript code.

## Assignment 2: Minimum Length Checker

**Problem Statement:**

Write a JavaScript function named `checkMinLength` that takes a string as input. The function should check if the length of the input string is less than 8 characters. If the length is less than 8, it should print or return a message stating, "Input should be greater than 8 characters."

**Function Signature:**
```javascript
function checkMinLength(inputString) {
    // Your code here
}
```

**Example:**

```javascript
// Example 1:
checkMinLength("HelloWorld"); // No output (valid input)

// Example 2:
checkMinLength("Hi"); // Output: Input should be greater than 8 characters
```

**Instructions:**
- Create a JavaScript function as described in the problem statement.
- Test your function with at least two examples to demonstrate its correctness.
- Submit your JavaScript code.

## Assignment 3: String Index Assignment

**Problem Statement:**

Write a JavaScript script that creates a string and assigns different characters to individual indices. After the assignment, print or log the resulting string. Observe whether the string changes or not. If it does not change, provide an explanation of why the string remains the same.

**Example:**

```javascript
// Your code here
```

**Instructions:**
- Write a JavaScript script that creates a string.
- Assign different characters to individual indices of the string.
- Print or log the resulting string.
- Observe the output and explain whether the string changes or remains the same.
- Submit your JavaScript code and the explanation.

## Assignment 4: Word Presence Checker

**Problem Statement:**

Write a JavaScript function named `checkWordPresence` that takes two parameters: a string and a target word. The function should check if the target word is present in the input string. If the target word is found, the function should return "Word found in the string"; otherwise, it should return "Word not found in the string."

**Function Signature:**
```javascript
function checkWordPresence(inputString, targetWord) {
    // Your code here
}
```

**Example:**

```javascript
// Example 1:
var result1 = checkWordPresence("Hello, World!", "World");
console.log(result1); // Output: Word found in the string

// Example 2:
var result2 = checkWordPresence("This is a sample sentence.", "JavaScript");
console.log(result2); // Output: Word not found in the string
```

**Instructions:**
- Create a JavaScript function as described in the problem statement.
- Test your function with at least two examples to demonstrate its correctness.
- Submit your JavaScript code.

## Assignment 5: String Slicing and Substring Extraction

**Problem Statement:**

Write a JavaScript script that creates a string and uses both the `slice` and `substring` methods to extract a portion of that string. Store the extracted substring in another variable. Additionally, experiment with negative indices in both methods to observe the behavior.

**Example:**

```javascript
// Your code here
```

**Instructions:**
- Write a JavaScript script that creates a string.
- Use the `slice` method to extract a portion of the string and store it in a new variable.
- Use the `substring` method to extract another portion of the string and store it in a different variable.
- Print or log both extracted substrings.
- Experiment with negative indices in both methods and observe the output.
- Submit your JavaScript code along with any observations made.

## Assignment 6: Character and Word Checker Function

**Problem Statement:**

Write a JavaScript function named `checkCharactersAndWords` that takes a string as input. The function should perform the following tasks:

1. Count and return the total number of characters in the string.
2. Count and return the total number of words in the string. (Assume words are separated by spaces)

**Function Signature:**
```javascript
function checkCharactersAndWords(inputString) {
    // Your code here
}
```

**Example:**

```javascript
// Example:
var inputString = "This is a sample sentence.";
var result = checkCharactersAndWords(inputString);
console.log("Total characters: " + result.characters);
console.log("Total words: " + result.words);
```

**Expected Output:**
```
Total characters: 27
Total words: 5
```

**Instructions:**
- Create a JavaScript function as described in the problem statement.
- Test your function with the provided example and additional examples to demonstrate its correctness.
- Submit your JavaScript code.

--- 
