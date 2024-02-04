# JavaScript Intermediate Lecture 12: DOM - For..in,forEach Loop,Multiple Ways Of Accessing Elements,Parent Child And Sibling Methods To Access

## Topics Covered:

1. **for..In Loop**
2. **forEach Loop**
3. **Difference Between for..in And for..Of Loop**
4. **Directly Accessing Element Of Dom Using ID Attribute Value**
5. **Parent Methods**
   - **parent.firstChild & parent.firstElementChild**
   - **parent.lastChild & parent.lastElementChild**
   - **parent.replaceChild**
   - **parent.removeChild**
   - **parent.insertBefore**
   - **Difference Between parent.appendChild And parent.insertBefore Method**
   - **parent.children Property**
   - **Difference Between parent.children & parent.childNodes**
6. **Children and Siblings Methods**
   - **children.parentElement & children.parentNode**
   - **sibling.nextSibling & sibling.nextElementSibling**
   - **sibling.previousSibling & sibling.previousElementSibling**
7. **A Very Short Introduction Of Events**
   - **inline Events**
   - **element.event property to add event**

## Explanations:

### 1. for..In Loop:

The `for..in` loop is used to iterate over the properties of an object. In the context of the DOM, it can be used to iterate over the properties of an HTML element.

```javascript
let person = { name: "John", age: 30 };

for (let key in person) {
  console.log(key, person[key]);
}
```

### 2. forEach Loop:

The `forEach` loop is specifically designed for arrays. It executes a provided function once for each array element.

```javascript
let numbers = [1, 2, 3, 4];

numbers.forEach(function (number) {
  console.log(number);
});
```

### 3. Difference Between for..in And for..Of Loop:

### `for..in` Loop:

- **Usage:**
  - Used for iterating over the properties (keys) of an object.
  - Not specifically designed for arrays, but can be used with arrays to iterate over indices.

- **Example:**
  ```javascript
  let obj = { a: 1, b: 2, c: 3 };

  for (let key in obj) {
    console.log(key); // Outputs: a, b, c
  }
  ```

- **Note:**
  - It may not guarantee the order of iteration for object properties.

### `for..of` Loop:

- **Usage:**
  - Specifically designed for iterating over iterable objects like arrays, strings, maps, sets, etc.
  - Provides a simpler syntax for iterating over values, rather than indices.

- **Example:**
  ```javascript
  let arr = [1, 2, 3];

  for (let value of arr) {
    console.log(value); // Outputs: 1, 2, 3
  }
  ```

- **Note:**
  - Ensures the order of iteration based on the order of elements in the iterable.

### Conclusion:

In summary, the main difference lies in their intended use and the types of objects they are best suited for. `for..in` is used for iterating over object properties, while `for..of` is tailored for iterating over values in iterable objects. When working with arrays, it's generally recommended to use `for..of` for its simplicity and predictability.

### 4. Directly Accessing Element Of DOM Using ID Attribute Value:

```html
<!DOCTYPE html>
<html>
<body>

<div id="myDiv">Hello World!</div>

<script>
  let element = document.getElementById("myDiv");
  console.log(element.innerHTML); // Outputs: Hello World!
</script>

</body>
</html>
```

### 5. Parent Methods:

### 1. `parent.firstChild` & `parent.firstElementChild`:

- **`parent.firstChild`:**
  - Returns the first child node of the parent, including text nodes.
  
- **`parent.firstElementChild`:**
  - Returns the first child element of the parent, excluding text nodes.

### 2. `parent.lastChild` & `parent.lastElementChild`:

- **`parent.lastChild`:**
  - Returns the last child node of the parent, including text nodes.

- **`parent.lastElementChild`:**
  - Returns the last child element of the parent, excluding text nodes.

### 3. `parent.replaceChild`:

- **Usage:**
  - Replaces a child node of the parent with a new node.

### 4. `parent.removeChild`:

- **Usage:**
  - Removes a child node from the parent.

### 5. `parent.insertBefore`:

- **Usage:**
  - Inserts a new node before a specified existing child node.

### 6. Difference Between `parent.appendChild` And `parent.insertBefore` Method:

- **`parent.appendChild`:**
  - Appends a new child node to the end of the parent's child nodes.

- **`parent.insertBefore`:**
  - Inserts a new child node before a specified existing child node.

### 7. `parent.children` Property:

- **Usage:**
  - Returns a live HTMLCollection of child elements of the parent.

### 8. Difference Between `parent.children` & `parent.childNodes`:

- **`parent.children`:**
  - Returns only the child elements of the parent, excluding text nodes.

- **`parent.childNodes`:**
  - Returns all child nodes of the parent, including both elements and text nodes.

```javascript
let childElement = document.getElementById("childElement");

// Parent methods
let parentElement = childElement.parentElement;
let firstChild = parentElement.firstElementChild;
let lastChild = parentElement.lastElementChild;

// Replace, remove, insert
let newElement = document.createElement("div");
parentElement.replaceChild(newElement, childElement);
parentElement.removeChild(childElement);
parentElement.insertBefore(newElement, firstChild);

// Children properties
let children = parentElement.children;
let childNodes = parentElement.childNodes;
```
### Conclusion:

Understanding these parent methods provides a powerful toolkit for navigating and manipulating the DOM structure. Whether you need to access specific child elements, replace or remove nodes, or understand the differences between child elements and nodes, these methods offer versatile ways to interact with the DOM hierarchy.

### 6. Children and Siblings Methods:

Let's dive into the details of the "Children and Siblings Methods" covered in the JavaScript Intermediate Lecture 12:

### 1. `children.parentElement` & `children.parentNode`:

- **`children.parentElement`:**
  - Returns the parent element of the collection of child elements.

- **`children.parentNode`:**
  - Returns the parent node of the collection of child elements, including text nodes.

### 2. `sibling.nextSibling` & `sibling.nextElementSibling`:

- **`sibling.nextSibling`:**
  - Returns the next sibling node of the given sibling, including text nodes.

- **`sibling.nextElementSibling`:**
  - Returns the next sibling element node of the given sibling, excluding text nodes.

### 3. `sibling.previousSibling` & `sibling.previousElementSibling`:

- **`sibling.previousSibling`:**
  - Returns the previous sibling node of the given sibling, including text nodes.

- **`sibling.previousElementSibling`:**
  - Returns the previous sibling element node of the given sibling, excluding text nodes.

```javascript
let targetElement = document.getElementById("targetElement");

// Children methods
let parent = targetElement.parentNode;
let siblings = Array.from(parent.children);
let nextSibling = targetElement.nextElementSibling;
let previousSibling = targetElement.previousElementSibling;

// Events
targetElement.onclick = function() {
  console.log("Element clicked!");
};
```
### Conclusion:

These children and siblings methods provide efficient ways to navigate the DOM, either to access parent elements or to move between sibling nodes. Understanding the differences between nodes and element nodes is crucial, especially when dealing with text nodes in the DOM structure. These methods empower developers to traverse and manipulate the DOM hierarchy with precision.

### 7. A Very Short Introduction Of Events:
In simple terms, events in JavaScript are things that happen on a webpage, like clicking a button, moving the mouse, or pressing a key. When these events occur, JavaScript can be used to make the webpage respond, like showing a message or changing something on the page. Events allow websites to feel interactive and do things in response to what users are doing.

### 1. Inline Events:

- **Definition:**
  - Inline events involve specifying event handlers directly within the HTML markup using attributes like `onclick`, `onmouseover`, etc.

- **Example:**
  ```html
  <button onclick="handleClick()">Click me</button>
  
  <script>
    function handleClick() {
      alert("Button clicked!");
    }
  </script>
  ```

### 2. `element.event` Property to Add Event:

- **Usage:**
  - Event handlers can be added dynamically in JavaScript using the `element.event` property, where `event` represents the specific event (e.g., `click`, `mouseover`).

- **Example:**
  ```html
  <button id="myButton">Click me</button>

  <script>
    let button = document.getElementById("myButton");

    button.onclick = function() {
      alert("Button clicked!");
    };
  </script>
  ```

### Conclusion:

Events in JavaScript allow developers to respond to user actions or other occurrences on a webpage. Inline events provide a quick way to attach event handlers directly in the HTML, while the `element.event` property allows for dynamic attachment of event handlers in JavaScript code. Understanding these basic concepts is fundamental to handling user interactions and creating interactive web pages.

## Conclusion Of Whole Lecture:

In this lecture, we covered various ways of iterating over elements in JavaScript, accessing elements in the DOM using different methods, and introduced the basics of handling events. Understanding these concepts is crucial for manipulating and interacting with the DOM effectively in web development.