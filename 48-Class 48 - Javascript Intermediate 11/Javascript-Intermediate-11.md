# JavaScript Intermediate Lecture 11: DOM - Deleting Elements, Getting and Setting Attributes, for...of, for...in, forEach Loop

## Topics Covered:

1. **Deleting/Removing Elements Using Javascript**
2. **Multiple Ways Of Adding Content Into Element**
   - **innerHTML**
   - **innerText**
   - **textContent**
3. **Getting Attributes Of An Element**
4. **Setting Attributes Of An Element**
5. **Different Types Of Loops In Javascript**
   - **for...of Loop**
   - **for...in Loop**
   - **forEach Loop**

## Explanations:

## 1. Deleting/Removing Elements Using JavaScript

### Code:

```javascript
// HTML:
// <div id="myElement">Hello, World!</div>

// JavaScript:
let elementToRemove = document.getElementById("myElement");
elementToRemove.remove();
```

### Explanation:

The `remove()` method is used to remove an HTML element from the DOM. In this example, we select an element with the id "myElement" and remove it from the document.

## 2. Multiple Ways Of Adding Content Into Element

### a. `innerHTML`

### Code:

```javascript
// HTML:
// <div id="myDiv"></div>

// JavaScript:
let myDiv = document.getElementById("myDiv");
myDiv.innerHTML = "<p>This is innerHTML content</p>";
```

### b. `innerText`

### Code:

```javascript
// HTML:
// <div id="myDiv"></div>

// JavaScript:
let myDiv = document.getElementById("myDiv");
myDiv.innerText = "This is innerText content";
```

### c. `textContent`

### Code:

```javascript
// HTML:
// <div id="myDiv"></div>

// JavaScript:
let myDiv = document.getElementById("myDiv");
myDiv.textContent = "This is textContent content";
```

### Explanation:

- `innerHTML`: Sets or gets the HTML content within an element.
- `innerText`: Sets or gets the text content of an element, excluding HTML tags.
- `textContent`: Similar to `innerText`, but it returns the text content of all elements, including script and style elements.

## 3. Getting Attributes Of An Element

### Code:

```javascript
// HTML:
// <a id="myLink" href="https://example.com" target="_blank">Visit Example</a>

// JavaScript:
let myLink = document.getElementById("myLink");
let hrefValue = myLink.getAttribute("href");
let targetValue = myLink.getAttribute("target");

console.log("Href:", hrefValue);
console.log("Target:", targetValue);
```

### Explanation:

The `getAttribute()` method is used to get the value of the specified attribute of an element. In this example, we retrieve the "href" and "target" attributes of the anchor (`<a>`) element.

## 4. Setting Attributes Of An Element

### Code:

```javascript
// HTML:
// <img id="myImage" src="image.jpg" alt="My Image">

// JavaScript:
let myImage = document.getElementById("myImage");
myImage.setAttribute("src", "new-image.jpg");
myImage.setAttribute("alt", "Updated Image Alt Text");
```

### Explanation:

The `setAttribute()` method is used to set the value of a specified attribute of an element. In this example, we update the "src" and "alt" attributes of an image (`<img>`) element.

## 5. Different Types Of Loops In JavaScript

### a. `for...of Loop`

### Code:

```javascript
let fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

### b. `for...in Loop`

### Code:

```javascript
let person = { name: "John", age: 30, job: "Developer" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

### c. `forEach Loop`

### Code:

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});
```

### Explanation:

- `for...of`: Iterates over iterable objects like arrays, strings, etc., providing the values.
- `for...in`: Iterates over the properties of an object, providing the keys/index.
- `forEach`: Executes a provided function once for each array element.

## Conclusion:

In this JavaScript Intermediate Lecture focused on the Document Object Model (DOM), we delved into essential concepts and techniques for dynamic web page manipulation. Here's a detailed conclusion:

### 1. **Deleting/Removing Elements:**
   - Utilized the `remove()` method to eliminate HTML elements from the DOM.
   - Example showcased removing an element with a specific id, demonstrating the simplicity of this operation.

### 2. **Multiple Ways Of Adding Content Into Element:**
   - Explored three methods – `innerHTML`, `innerText`, and `textContent` – for adding content to HTML elements.
   - `innerHTML` provides a way to manipulate HTML content directly.
   - `innerText` allows for setting or retrieving the text content of an element, excluding HTML tags.
   - `textContent` retrieves text content, including script and style elements.

### 3. **Getting Attributes Of An Element:**
   - Used `getAttribute()` to retrieve attribute values from an HTML element.
   - Illustrated with an example fetching the "href" and "target" attributes from an anchor (`<a>`) element.

### 4. **Setting Attributes Of An Element:**
   - Employed `setAttribute()` to modify attribute values of an HTML element.
   - Demonstrated updating the "src" and "alt" attributes of an image (`<img>`) element.

### 5. **Different Types Of Loops In JavaScript:**
   - Covered three types of loops: `for...of`, `for...in`, and `forEach`.
   - `for...of` loop iterates over iterable objects, providing values directly.
   - `for...in` loop iterates over object properties, supplying keys or indices.
   - `forEach` loop is specialized for arrays, executing a provided function for each element.

### **Conclusion Remarks:**
   - Understanding these DOM manipulation techniques is foundational for web development.
   - Efficiently adding, removing, and modifying elements dynamically enhances user experience and interactivity.
   - Retrieving and setting attributes allows for dynamic handling of element properties.
   - Various loops offer flexibility in iterating over different data structures, contributing to code conciseness and readability.

### **Key Takeaway:**
   - Mastery of these DOM concepts empowers developers to create dynamic, responsive, and interactive web applications. 
   - Continuous practice and experimentation are encouraged to solidify understanding and proficiency in applying these techniques.