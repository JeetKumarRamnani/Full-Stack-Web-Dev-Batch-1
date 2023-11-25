## Javascript Basics Lecture 9 : Control Structures Part 3- Loops,Types Of Loops,Jumping Statements,Infinite Loop

### Topics Covered:

1. **What does word Loop Means**
2. **What Are Loops**
3. **Why We Need Loops**
4. **Type Of Loops**
5. **Jumping Statements**
6. **Infinite Loop**
7. **Why You Should Never Use Infinite Loop**

## Explanations:

### 1. What does the word Loop mean?

In programming, a loop is a control structure that allows a set of instructions to be repeated multiple times. It enables the execution of a block of code repeatedly until a certain condition is met.

### 2. What Are Loops?

Loops are programming constructs that enable the repetitive execution of a block of code. They consist of three main components:

- **Initialization:** Setting up the loop control variable.
- **Condition:** Defining the condition that must be true for the loop to continue.
- **Update:** Modifying the loop control variable in each iteration to eventually satisfy the condition.

### 3. Why We Need Loops

Loops are essential for automating repetitive tasks, reducing redundancy in code, and making programs more efficient. Instead of writing the same code over and over again, a loop allows you to execute a set of instructions with minimal code.

### 4. Type Of Loops

#### a. **for loop:**

Executes a block of code a specified number of times.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}
```

#### b. **while loop:**

Repeats a block of code while a specified condition is true.

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
}
```

#### c. **do-while loop:**

Similar to a while loop, but it always executes the block of code at least once.

```javascript
let i = 0;
do {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```

### 5. Jumping Statements

#### a. **break:**

Exits the loop prematurely.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // exits the loop when i is 3
  }
  console.log(i); // Output: 0, 1, 2
}
```

#### b. **continue:**

Skips the rest of the loop code and continues with the next iteration.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // skips iteration when i is 2
  }
  console.log(i); // Output: 0, 1, 3, 4
}
```

### 6. Infinite Loop

An infinite loop is a loop that runs indefinitely because the loop condition is always true.

```javascript
while (true) {
  // Code that runs indefinitely
}
```

### 7. Why You Should Never Use Infinite Loop

Infinite loops should be avoided because they can lead to a program becoming unresponsive, consuming excessive system resources, and potentially crashing the application. They are usually unintentional and can be the result of a programming error. Care should be taken to ensure that loop conditions are designed to eventually evaluate to false to prevent infinite loops.
