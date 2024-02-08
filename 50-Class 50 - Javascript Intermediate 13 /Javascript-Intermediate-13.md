# JavaScript Intermediate Lecture 13: DOM - Right Way Of Selecting Elements, API, Web API

## Topics Covered:

1. **appendChild Vs append**
2. **insertAdjacentElement, insertAdjacentHTML, And insertAdjacentText**
3. **Dom Is Not A Part Of Javascript Language**
4. **Web API**
5. **What Does It Mean By API**
6. **Selecting Elements The Right Way**
7. **Methods For Selecting Elements**
   - `document.getElementById`
   - `document.getElementsByTagName`
   - `document.getElementsByClassName`
8. **Method For Selecting Elements Using CSS Selectors**
   - `document.querySelector`
   - `document.querySelectorAll`
9. **Difference Between `querySelector` & `querySelectorAll` Methods**

## Explanations:

**1. appendChild Vs append:**
   - `appendChild`: This method is used to append a node as the last child of a specified parent node. It takes a single argument, which is the node to be appended.
   - `append`: This method is used to append one or more nodes or a DOMString as children of a specified parent node. It can take multiple arguments, each representing a node or a DOMString to be appended.

**2. insertAdjacentElement, insertAdjacentHTML, And insertAdjacentText:**
   - `insertAdjacentElement`: Inserts a given element node at a specified position relative to the element it is invoked upon.
   - `insertAdjacentHTML`: Inserts a given string of HTML or XML at a specified position relative to the element it is invoked upon.
   - `insertAdjacentText`: Inserts a given text into the element at a specified position relative to the element it is invoked upon.

**3. Dom Is Not A Part Of Javascript Language:**
   - The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of HTML and XML documents as a tree-like structure, allowing programs to manipulate the structure, style, and content of web pages.
   - While JavaScript interacts heavily with the DOM to create dynamic and interactive web pages, the DOM itself is not part of the JavaScript language. Instead, it's provided by the browser environment in which JavaScript runs.

**4. Web API:**
   - Web APIs are sets of rules and protocols that allow different software applications to communicate with each other. In the context of web development, Web APIs refer to interfaces provided by web browsers to enable interaction with web features like DOM manipulation, AJAX, and more.
   - These APIs provide methods and properties that JavaScript can use to interact with web pages, such as accessing and modifying the DOM, making HTTP requests, handling events, etc.

**5. What Does It Mean By API:**
   - API stands for Application Programming Interface. It defines a set of rules, protocols, and tools for building software applications. APIs specify how software components should interact, allowing different software systems to communicate with each other.
   - In the context of web development, APIs often refer to the interfaces provided by web browsers, servers, or other services that allow developers to interact with them programmatically.

**6. Selecting Elements The Right Way:**
   - Selecting elements in the DOM is a fundamental task in web development, and doing it efficiently can improve performance and maintainability of code.
   - There are several methods provided by the DOM API for selecting elements, and choosing the right method depends on the specific requirements of the task at hand.

**7. Methods For Selecting Elements:**
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

**8. Method For Selecting Elements Using CSS Selectors:**
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

**9. Difference Between `querySelector` & `querySelectorAll` Methods:**
   - `querySelector` returns the first element that matches the specified CSS selector, while `querySelectorAll` returns a NodeList containing all elements that match the selector.
   - `querySelector` stops searching after finding the first match, while `querySelectorAll` gathers all matches.
   - `querySelector` is more useful when you only need to manipulate the first matched

 element, while `querySelectorAll` is useful when you need to work with multiple elements that match a selector.

**Conclusion:**
In this lecture, we delved into the DOM manipulation techniques and the right ways of selecting elements. We discussed the distinction between `appendChild` and `append`, as well as the various methods for inserting elements, HTML, and text into the DOM. Furthermore, we clarified that while JavaScript interacts heavily with the DOM, it's crucial to understand that the DOM itself is not a part of the JavaScript language but rather provided by the browser environment. We explored the concept of Web APIs, which enable communication between different software applications, particularly focusing on the Web APIs provided by browsers for web development tasks. Finally, we covered different methods for selecting elements in the DOM, including `getElementById`, `getElementsByTagName`, `getElementsByClassName`, `querySelector`, and `querySelectorAll`, highlighting their differences and best use cases. Understanding these fundamental concepts is pivotal for proficient DOM manipulation and efficient web development practices.
```
