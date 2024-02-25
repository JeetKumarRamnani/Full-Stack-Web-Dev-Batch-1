# JavaScript Advance Lecture 1: ECMASCRIPT,ES6,Scopes,Local And Global Scope,Function & Block Scope,Hoisting 

## Topics Covered:

1. **Revision Of Scope**
2. **Two Types Of Scopes**
    - **Global Scope**
    - **Local Scope**
3. **What Is ECMA Script And Why Javascript Is Called AS Ecmascript**
4. **What is ECMAscript 2015/ES6 And Why It Is So Popular Then Other Versions Of ECMAscript**
5. **List of Ecmascript 6/ES6/ES2015 Features**
6. **Two Types Of Local Scopes In Javascript**
    - **Block Scope**
    - **Function Scope**
7. **Different Ways Of Initializing Variable In Javascript**
8. **Difference Between var,let and const**
9. **Difference Between let And const**
10. **Hoisting In Javscript**

## Explanations:

1. **Revision Of Scope**:
   - Scope in JavaScript refers to the accessibility of variables. It determines where in your code a particular variable can be accessed.
   
   ```javascript
   var globalVar = "I'm a global variable";

   function foo() {
       var localVar = "I'm a local variable";
       console.log(globalVar); // Accessible
   }

   console.log(globalVar); // Accessible
   console.log(localVar); // Not accessible - throws ReferenceError
   ```

2. **Two Types Of Scopes**:
    - **Global Scope**: Variables declared outside of any function or block.
    - **Local Scope**: Variables declared within a function or block.
   
3. **What Is ECMA Script And Why JavaScript Is Called As ECMAScript**:

    ECMAScript (European Computer Manufacturers Association Script) is a standardized scripting language specification upon which JavaScript is based. JavaScript is often referred to as ECMAScript because it is the most popular and widely used implementation of the ECMAScript standard.

    The standardization of ECMAScript ensures that different implementations of the language (such as JavaScript in browsers, Node.js, etc.) adhere to a common set of rules and features. This allows developers to write code that works consistently across various platforms and environments.

    JavaScript was originally developed by Brendan Eich at Netscape Communications Corporation in 1995. In 1997, Netscape submitted JavaScript to ECMA International for standardization, resulting in the ECMAScript specification.

    JavaScript and ECMAScript are essentially synonymous terms, with JavaScript being the most prominent implementation of the ECMAScript standard. Other implementations, such as ActionScript (used in Adobe Flash), also adhere to the ECMAScript standard.

    In summary, JavaScript is called ECMAScript because it is based on the ECMAScript specification, which defines the syntax and semantics of the language. This standardization ensures interoperability and consistency across different implementations of the language.
   
4. **What Is ECMAScript 2015/ES6 And Why It Is So Popular Than Other Versions Of ECMAScript**:

   ECMAScript 2015, also known as ES6 (ECMAScript 6), is a significant update to the ECMAScript standard, introducing numerous new features and improvements to the JavaScript language. ES6 brought about a major evolution in JavaScript development, making the language more powerful, expressive, and developer-friendly. Here's why ES6 became so popular compared to previous versions of ECMAScript:

1. **Introduction of Modern Features**: ES6 introduced many modern language features that developers had long been requesting. These features brought JavaScript more in line with other programming languages and made complex tasks easier to accomplish.

2. **Enhanced Developer Productivity**: With features like arrow functions, template literals, and destructuring assignments, ES6 significantly improved developer productivity. These features allowed developers to write cleaner, more concise code with less boilerplate.

3. **Improved Code Readability**: ES6 introduced syntax enhancements that improved code readability and maintainability. Features like classes, modules, and enhanced object literals made it easier to organize and structure code.

4. **Better Support for Asynchronous Programming**: ES6 introduced promises, arrow functions, and async/await syntax, making asynchronous programming in JavaScript more intuitive and less error-prone. This helped developers write cleaner and more understandable asynchronous code.

5. **Compatibility with Modern Development Practices**: ES6 aligned JavaScript with modern development practices and patterns. It provided solutions to common JavaScript pain points and allowed developers to adopt best practices more easily.

6. **Backward Compatibility**: ES6 was designed to be backward compatible with existing JavaScript code. This means that developers could gradually adopt ES6 features in their projects without needing to rewrite their entire codebase.

7. **Widespread Adoption and Tooling Support**: ES6 gained widespread adoption among developers and was supported by popular JavaScript frameworks, libraries, and tools. This helped accelerate its adoption and encouraged developers to upgrade their projects to use ES6 features.

Overall, ECMAScript 2015 (ES6) marked a significant milestone in the evolution of JavaScript, bringing about a modernization of the language and empowering developers to write more efficient, maintainable, and expressive code. Its popularity stemmed from its ability to address longstanding limitations of JavaScript and provide solutions to common development challenges.
   
5. **List of ECMAScript 6/ES6/ES2015 Features**:
   - ES6 introduced many new features and syntax improvements:
    1. Arrow Functions
    2. Template Literals
    3. Destructuring Assignment
    4. Classes
    5. let and const
    6. Spread and Rest Operators
    7. Promises
    8. Async/Await
    9. more....

6. **Two Types Of Local Scopes In JavaScript**:
   - **Block Scope**: Introduced with `let` and `const`, variables declared within a block are scoped to that block.
   - **Function Scope**: Variables declared with `var` are scoped to the function they are declared in.

7. **Different Ways Of Initializing Variable In JavaScript**:
   - Variables in JavaScript can be initialized using `var`, `let`, or `const` keywords.

   ```javascript
   var a = 10;
   let b = 20;
   const c = 30;
   ```

8. **Difference Between var, let, and const**:
   - `var` has function scope and can be redeclared and reassigned.
   - `let` has block scope and can be reassigned but not redeclared.
   - `const` has block scope and cannot be redeclared or reassigned after initialization.
   
   ```javascript
   var x = 10;
   let y = 20;
   const z = 30;

   // Redeclaration
   var x = 100; // Valid
   let y = 200; // Invalid - SyntaxError: Identifier 'y' has already been declared
   const z = 300; // Invalid - SyntaxError: Identifier 'z' has already been declared

   // Reassignment
   x = 1000; // Valid
   y = 2000; // Valid
   z = 3000; // Invalid - TypeError: Assignment to constant variable.
   ```

9. **Difference Between let And const**:
   - `let` allows variable values to be reassigned, while `const` does not allow reassignment after initialization.

   ```javascript
   let count = 10;
   count = 20; // Valid

   const PI = 3.14;
   PI = 3.14159; // Invalid - TypeError: Assignment to constant variable.
   ```

10. **Hoisting In JavaScript**:
    - Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.
    - Only declarations are hoisted, not initializations.

    ```javascript
    console.log(hoistedVar); // undefined
    var hoistedVar = "I am hoisted";

    // The above code is interpreted as:
    var hoistedVar;
    console.log(hoistedVar); // undefined
    hoistedVar = "I am hoisted";
    ```

### Conclusion

    In this lecture, we delved into the advanced concepts of JavaScript, focusing on ECMAScript, ES6 features, scopes, variable declaration, and hoisting. Here's a recap of what we covered:

    - **Scope**: We revised the concepts of local and global scope in JavaScript, understanding how variables are accessible within different contexts.
    - **ECMAScript**: Explored the relationship between JavaScript and ECMAScript, understanding why JavaScript is often referred to as ECMAScript.
    - **ECMAScript 2015 (ES6)**: Discussed the significance of ES6, its popularity, and its key features that enhance JavaScript's functionality and readability.
    - **Local Scopes**: Differentiated between block scope and function scope, highlighting how variables declared with `let`, `const`, and `var` behave within different scopes.
    - **Variable Initialization**: Explored the various ways to initialize variables in JavaScript using `var`, `let`, and `const`.
    - **Difference Between `var`, `let`, and `const`**: Compared and contrasted the behaviors of `var`, `let`, and `const` keywords in terms of scoping, redeclaration, and reassignment.
    - **Hoisting**: Explained the concept of hoisting in JavaScript, where variable and function declarations are moved to the top of their containing scope during compilation.

    Understanding these advanced JavaScript concepts is crucial for writing cleaner, more efficient, and less error-prone code. By mastering these concepts, developers can leverage the full power of JavaScript to build robust and scalable applications.