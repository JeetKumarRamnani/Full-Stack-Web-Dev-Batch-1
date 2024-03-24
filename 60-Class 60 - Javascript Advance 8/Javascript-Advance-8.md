# JavaScript Advance Lecture 8: JSON And Its Benifits

## Topics Covered:

1. **How Data Trasnported/Sent And Recied From A Server**
2. **What Is JSON And Its Purpose**
3. **What Was We Were Using Before JSON**
4. **Why JSON Was Introduced And What Problem It Solved**
5. **JSON Methods In Javascript To Work With It**

## Explanations:

### 1. Data Transported/Sent and Received From a Server

Data is typically transported between a client and a server using protocols like HTTP or WebSocket. When a client sends data to a server, it can be done through HTTP requests like GET, POST, PUT, DELETE, etc. The server processes these requests and sends back responses, usually in the form of JSON data.

### 2. JSON and Its Purpose

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. Its purpose is to transmit data between a server and a web application. JSON is based on key-value pairs and supports arrays and nested objects.

### 3. What Was Used Before JSON

Before JSON, XML (eXtensible Markup Language) was commonly used for data interchange. However, XML is more verbose and complex compared to JSON, making JSON a more popular choice for web development due to its simplicity and ease of use.

### 4. Why JSON Was Introduced and What Problem It Solved

JSON was introduced to address the need for a simpler, more lightweight data interchange format compared to XML. It solved the problem of verbosity and complexity, making data transmission more efficient and easier to handle in web applications.

### 5. JSON Methods in JavaScript to Work With It

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
