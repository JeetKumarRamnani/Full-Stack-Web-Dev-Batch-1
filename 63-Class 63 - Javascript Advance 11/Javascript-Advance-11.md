# JavaScript Advance Lecture 11: Modules,Import & Export,Name And Default Exports

## Topics Covered:

1. **Remaining Form Elements Value**
2. **eval() Method**
3. **What Are Modules In Javascript**
4. **require Keyword**
5. **Import And Export Keywords**
6. **Named Exports**
7. **Default Exports**

## Explanations:

### 1. Remaining Form Elements Value
When you're working with forms in JavaScript, sometimes you want to get the values of the remaining elements in a form that are not explicitly being accessed. For example, if you have a form with multiple input fields but you're only capturing values from a few of them, you might want to extract the values of the remaining fields.

Here's a code example that demonstrates how you can achieve this:

```html
<form id="myForm">
  <input type="text" name="firstName" value="John">
  <input type="text" name="lastName" value="Doe">
  <input type="text" name="email" value="john.doe@example.com">
  <button onclick="getRemainingValues()">Get Remaining Values</button>
</form>

<script>
function getRemainingValues() {
  const form = document.getElementById('myForm');
  const formData = new FormData(form);
  
  // Loop through all form elements
  for (let [name, value] of formData.entries()) {
    console.log(name, value);
  }
}
</script>
```

In this example, the `getRemainingValues` function retrieves all the values from the form elements using the `FormData` API and logs them to the console.

### 2. `eval()` Method
The `eval()` method in JavaScript is used to evaluate or execute a string as if it were JavaScript code. While `eval()` can be powerful, it's generally not recommended to use it due to security risks, performance issues, and potential for unexpected behavior.

Here's a basic example of `eval()`:

```javascript
let x = 10;
let y = 20;
let code = 'x + y';
let result = eval(code);
console.log(result); // Output: 30
```

### 3. What Are Modules In JavaScript
Modules in JavaScript are a way to organize code into separate files or modules, each with its own scope. This helps in managing code complexity, improving reusability, and maintaining a clean codebase.

Here's an example of a simple module:

```javascript
// math.js (module)
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

### 4. `require` Keyword
In older versions of JavaScript (e.g., CommonJS used in Node.js), the `require` keyword is used to import modules. However, in modern JavaScript (ES6+), `require` is not used in browsers but is still relevant in Node.js environments.

Here's an example of using `require` in Node.js:

```javascript
const math = require('./math'); // Assuming math.js is in the same directory
console.log(math.add(5, 3)); // Output: 8
```

### 5. Import And Export Keywords
ES6 introduced the `import` and `export` keywords for module management in JavaScript. `import` is used to import functionalities from other modules, while `export` is used to export functionalities from a module.

Here's an example of using `import` and `export`:

```javascript
// math.js (module)
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from './math'; // Importing the add function from math.js
console.log(add(5, 3)); // Output: 8
```

### 6. Named Exports
Named exports allow you to export multiple functions or variables from a module using their names. You import these named exports using their corresponding names.

Here's an example:

```javascript
// math.js (module)
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// main.js
import { add, subtract } from './math'; // Importing specific functions from math.js
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

### 7. Default Exports
Default exports allow you to export a single function, object, or value as the default export of a module. When importing a default export, you don't need to use curly braces `{}`.

Here's an example:

```javascript
// math.js (module)
export default function add(a, b) {
  return a + b;
}

// main.js
import add from './math'; // Importing the default export from math.js
console.log(add(5, 3)); // Output: 8
```

These explanations and code examples should give you a solid understanding of modules, imports, exports, and related concepts in JavaScript. Let me know if you have any specific questions or need further clarification on any topic!