Sure, here's the content formatted in Markdown:

```markdown
# JavaScript Intermediate Lecture 13: DOM - Right Way Of Selecting Elements, API, Web API

## Topics Covered:

1. **Dom Is Not A Part Of Javascript Language**
2. **Web API**
3. **What Does It Mean By API**
4. **Selecting Elements The Right Way**
5. **Methods For Selecting Elements**
   - `document.getElementById`
   - `document.getElementsByTagName`
   - `document.getElementsByClassName`
6. **Method For Selecting Elements Using CSS Selectors**
   - `document.querySelector`
   - `document.querySelectorAll`
7. **Difference Between `querySelector` & `querySelectorAll` Methods**

## Explanations:

**1. Dom Is Not A Part Of Javascript Language:**
   - The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of HTML and XML documents as a tree-like structure, allowing programs to manipulate the structure, style, and content of web pages.
   - While JavaScript interacts heavily with the DOM to create dynamic and interactive web pages, the DOM itself is not part of the JavaScript language. Instead, it's provided by the browser environment in which JavaScript runs.

**2. Web API:**
   - Web APIs are sets of rules and protocols that allow different software applications to communicate with each other. In the context of web development, Web APIs refer to interfaces provided by web browsers to enable interaction with web features like DOM manipulation, AJAX, and more.
   - These APIs provide methods and properties that JavaScript can use to interact with web pages, such as accessing and modifying the DOM, making HTTP requests, handling events, etc.

**3. What Does It Mean By API:**
   - API stands for Application Programming Interface. It defines a set of rules, protocols, and tools for building software applications. APIs specify how software components should interact, allowing different software systems to communicate with each other.
   - In the context of web development, APIs often refer to the interfaces provided by web browsers, servers, or other services that allow developers to interact with them programmatically.

**4. Selecting Elements The Right Way:**
   - Selecting elements in the DOM is a fundamental task in web development, and doing it efficiently can improve performance and maintainability of code.
   - There are several methods provided by the DOM API for selecting elements, and choosing the right method depends on the specific requirements of the task at hand.

**5. Methods For Selecting Elements:**
   - `document.getElementById`: Selects a single element by its unique ID attribute.

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Example - getElementById</title>
   </head>
   <body>
       <div id="myDiv">Hello World!</div>
       <script>
           const myDiv = document.getElementById("myDiv");
           console.log(myDiv.textContent); // Output: Hello World!
       </script>
   </body>
   </html>
   ```

   - `document.getElementsByTagName`: Selects a collection of elements by their tag name.

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Example - getElementsByTagName</title>
   </head>
   <body>
       <ul>
           <li>Apple</li>
           <li>Orange</li>
           <li>Banana</li>
       </ul>
       <script>
           const listItems = document.getElementsByTagName("li");
           for (let item of listItems) {
               console.log(item.textContent);
           }
           // Output:
           // Apple
           // Orange
           // Banana
       </script>
   </body>
   </html>
   ```

   - `document.getElementsByClassName`: Selects a collection of elements by their class name.

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Example - getElementsByClassName</title>
   </head>
   <body>
       <div class="box">Box 1</div>
       <div class="box">Box 2</div>
       <div class="box">Box 3</div>
       <script>
           const boxes = document.getElementsByClassName("box");
           for (let box of boxes) {
               console.log(box.textContent);
           }
           // Output:
           // Box 1
           // Box 2
           // Box 3
       </script>
   </body>
   </html>
   ```

**6. Method For Selecting Elements Using CSS Selectors:**
   - `document.querySelector`: Selects the first element that matches a specified CSS selector.

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Example - querySelector</title>
   </head>
   <body>
       <div class="box">Box 1</div>
       <div class="box">Box 2</div>
       <div class="box">Box 3</div>
       <script>
           const firstBox = document.querySelector(".box");
           console.log(firstBox.textContent); // Output: Box 1
       </script>
   </body>
   </html>
   ```

   - `document.querySelectorAll`: Selects all elements that match a specified CSS selector and returns them as a NodeList.

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Example - querySelectorAll</title>
   </head>
   <body>
       <div class="box">Box 1</div>
       <div class="box">Box 2</div>
       <div class="box">Box 3</div>
       <script>
           const allBoxes = document.querySelectorAll(".box");
           allBoxes.forEach(box => {
               console.log(box.textContent);
           });
           // Output:
           // Box 1
           // Box 2
           // Box 3
       </script>
   </body>
   </html>
   ```

**7. Difference Between `querySelector` & `querySelectorAll` Methods:**
   - `querySelector` returns the first element that matches the specified CSS selector, while `querySelectorAll` returns a NodeList containing all elements that match the selector.
   - `querySelector` stops searching after finding the first match, while `querySelectorAll` gathers all matches.
   - `querySelector` is more useful when you only need to manipulate the first matched element, while `querySelectorAll` is useful when you need to work with multiple elements that match a selector.

These topics cover the basics of selecting elements in the DOM using JavaScript and provide insight into the various methods available for this purpose. Understanding these concepts is essential for effective DOM manipulation in web development.
```
