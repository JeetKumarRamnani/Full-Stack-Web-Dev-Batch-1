# JavaScript Advance Lecture 7: Rest AND Spread Operator,Advance Array Methods,JSON And Its Benifits

## Topics Covered:

1. **Rest And Spread Operator**
2. **Advance Array Methods**
    - **Map**
    - **Filter**
    - **Reduce**
3. **Difference Between Map And ForEach Method**
4. **How Data Trasnported/Sent And Recied From A Server**
5. **What Is JSON And Its Purpose**
6. **What Was We Were Using Before JSON**
7. **Why JSON Was Introduced And What Problem It Solved**
8. **JSON Methods In Javascript To Work With It**

## Explanations:

### 1. Rest and Spread Operator

#### Rest Operator
The rest parameter allows you to represent an indefinite number of arguments as an array. It is denoted by three dots `...`. Here's an example:

```javascript
function sum(...args) {
  return args.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

In this example, the `sum` function takes any number of arguments and calculates their sum using the rest parameter `...args`.

#### Spread Operator
The spread operator allows you to expand elements of an array or object. It is also denoted by three dots `...`. Here's an example with arrays:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
```

In this example, the spread operator `...arr1` expands the elements of `arr1` into `arr2`.

### 2. Advanced Array Methods

#### Map
The `map` method creates a new array by applying a function to each element of the original array. It does not mutate the original array. Example:

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6]
```

#### Filter
The `filter` method creates a new array with elements that pass a certain condition defined by a callback function. Example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // Output: [2, 4]
```

#### Reduce
The `reduce` method applies a function against an accumulator and each element in the array to reduce it to a single value. Example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, current) => total + current, 0);

console.log(sum); // Output: 15
```

### 3. Difference Between Map and ForEach Method

The `map` method returns a new array with the results of calling a provided function on every element in the calling array. In contrast, the `forEach` method executes a provided function once for each array element.

```javascript
const numbers = [1, 2, 3];
const squaredMap = numbers.map(num => num * num);

console.log(squaredMap); // Output: [1, 4, 9]

const squaredForEach = [];
numbers.forEach(num => squaredForEach.push(num * num));

console.log(squaredForEach); // Output: [1, 4, 9]
```

### 4. Data Transported/Sent and Received From a Server

Data is typically transported between a client and a server using protocols like HTTP or WebSocket. When a client sends data to a server, it can be done through HTTP requests like GET, POST, PUT, DELETE, etc. The server processes these requests and sends back responses, usually in the form of JSON data.

### 5. JSON and Its Purpose

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. Its purpose is to transmit data between a server and a web application. JSON is based on key-value pairs and supports arrays and nested objects.

### 6. What Was Used Before JSON

Before JSON, XML (eXtensible Markup Language) was commonly used for data interchange. However, XML is more verbose and complex compared to JSON, making JSON a more popular choice for web development due to its simplicity and ease of use.

### 7. Why JSON Was Introduced and What Problem It Solved

JSON was introduced to address the need for a simpler, more lightweight data interchange format compared to XML. It solved the problem of verbosity and complexity, making data transmission more efficient and easier to handle in web applications.

### 8. JSON Methods in JavaScript to Work With It

JavaScript provides built-in methods to work with JSON data:

- `JSON.parse()`: Converts a JSON string into a JavaScript object.
- `JSON.stringify()`: Converts a JavaScript object into a JSON string.

Example:

```javascript
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: John

const personObject = { name: 'Alice', age: 25 };
const jsonStringified = JSON.stringify(personObject);

console.log(jsonStringified); // Output: {"name":"Alice","age":25}
```

These methods are crucial for handling JSON data when sending/receiving data to/from a server or when working with JSON APIs.