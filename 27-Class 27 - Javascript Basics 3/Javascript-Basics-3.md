## Javascript Basics Lecture 3 : Datatypes,Rules Of Namming,Casing,Strongly Vs Weekly,Explicit Vs Implicit,Static Vs Dynamic Typing

### Topics Covered:

1. **What does it mean by compile time cheaking??**
2. **What does it mean by runtime cheaking??**
3. **What Are Datatypes??**
4. **Purpose Of Datatypes??**
5. **How Many Datatypes are Available In Javascript??**
6. **What does It Mean By Explicit And Implicit**
7. **What Does it mean by Static And Dynamic Typing**
8. **What Is Strongly And Weekly Typed Language**
9. **What does it mean by case sensitivity why javascript is called case insensitive language**
10. **what does it mean by casing**
11. **What is camel casing,pascal casing,kebab casing and snake casing**
12. **What type of casing javascript follows**
13. **What Does It Mean By Reserved Keyword/Words In Javascript In general programming languages world**
14. **Rules Of Namming In Javascript**

## Explanations:

1. **Compile-Time Checking:**

Compile-time checking, often referred to as static checking, occurs during the compilation phase of a program. It involves the analysis of the source code by the compiler to catch errors and ensure that the program adheres to the language's syntax and semantics. Here's what it means:

- **Type Checking:** One of the main aspects of compile-time checking is type checking. The compiler verifies that the data types used in the code are consistent and compatible with the operations being performed. If there are type-related errors, such as trying to assign a string to an integer variable in a statically typed language, the compiler will catch these errors and report them as compile-time errors.

- **Syntax Verification:** The compiler checks the program's syntax to ensure it follows the rules of the programming language. It looks for syntax errors, such as missing semicolons, unmatched parentheses, or incorrect keyword usage. If any syntax errors are found, the compiler reports them during the compilation process.

- **Static Analysis:** The compiler performs various static analyses to detect potential issues, such as unreachable code, uninitialized variables, or unused variables and functions. This analysis helps improve code quality and performance.

- **Optimizations:** During compile-time checking, the compiler can also perform various code optimizations to improve the program's efficiency. This includes removing dead code, inlining functions, and optimizing data storage.

Compile-time checking ensures that a program is well-structured, adheres to language rules, and is free from certain types of errors before the program is executed. It helps catch and fix issues early in the development process.

2. **Runtime Checking:**

Runtime checking, also known as dynamic checking, occurs while a program is executing. It involves evaluating the behavior of the program during its runtime. Here's what it means:

- **Type Checking:** In dynamically typed languages or weakly typed languages, type checking occurs at runtime. The data types are checked when operations are executed, and conversions or coercions might happen implicitly. If there's a type-related error, it won't be caught until the program is actually running, potentially resulting in runtime errors.

- **Dynamic Semantics:** During runtime checking, the program's dynamic semantics are evaluated. This includes checking conditions, handling exceptions, and ensuring that variables have valid values at the time of their use. If a variable is used before it's assigned a value or if a division by zero occurs, these errors are detected at runtime.

- **Dynamic Binding:** In languages with dynamic binding, the determination of which function or method to call is made at runtime, based on the actual type of the object being operated on. This allows for late binding and polymorphism but involves runtime checking to resolve these calls.

Runtime checking is essential for handling situations that cannot be fully determined at compile time, such as user input or data received from external sources. It's also crucial for enforcing dynamic behaviors like polymorphism and late binding. However, it carries the risk of runtime errors and the potential for reduced performance due to the need for real-time checks.

**3. What Are Datatypes?**

In programming, data types are a fundamental concept that defines the kind of data a variable can hold. Data types specify the size and format of values, which determine the operations that can be performed on them. They help the computer understand how to interpret and manipulate data. Common data types in programming languages include integers, floating-point numbers, characters, strings, and more.

**4. Purpose Of Datatypes?**

The purpose of data types in programming is to:

- Ensure data integrity: Data types help maintain the consistency and accuracy of data by defining what kind of values a variable can hold. For example, an integer variable cannot hold a string value, thus preventing unexpected data errors.

- Optimize memory usage: Data types determine how much memory a variable or data structure requires. Choosing the appropriate data type for a variable can help optimize memory usage and improve program efficiency.

- Enable type-specific operations: Different data types support various operations. For instance, you can perform arithmetic operations on numeric data types but not on strings. Data types allow the compiler or interpreter to enforce these rules.

**5. How Many Datatypes are Available In Javascript?**

JavaScript has several data types, including:

- **Primitive Data Types:**

  - Number: Represents numeric values.
  - String: Represents text.
  - Boolean: Represents true or false values.
  - Undefined: Represents a variable that has been declared but hasn't been assigned a value.
  - Null: Represents the intentional absence of any object value.
  - Symbol: Represents a unique and immutable value.
  - BigInt: Represents large integers.

- **Reference Data Types:**
  - Object: Represents complex data structures, including arrays, functions, and custom objects.
  - Array: A special type of object used to store lists of values.
  - Function: A callable object that can be defined and invoked.

**6. What does It Mean By Explicit And Implicit**

- **Explicit Type Conversion (Casting):** This involves converting a value from one data type to another using explicit instructions provided by the programmer. For example, in JavaScript, you can use functions like `parseInt()` and `toString()` to explicitly convert between data types.

- **Implicit Type Conversion (Type Coercion):** In this case, the language automatically converts data from one type to another when needed. For instance, when you add a number and a string in JavaScript, the string is implicitly converted to a number for the operation.

**7. What Does it mean by Static And Dynamic Typing**

- **Static Typing:** In a statically typed language, variable data types are determined at compile time. Once a variable is declared with a specific data type, it cannot change. Examples of statically typed languages include Java and C++.

- **Dynamic Typing:** In a dynamically typed language, variable data types are determined at runtime. You can change the data type of a variable during the execution of the program. JavaScript is an example of a dynamically typed language.

**8. What Is Strongly And Weekly Typed Language**

- **Weakly Typed Language (Dynamic Typing):**

- In a weakly typed language, also known as dynamically typed language, data types are more flexible.
- Variables can change their data type during runtime.
- Type checking occurs at runtime, which means the type of a variable is determined when the program is running and can change as the program executes.
- Weakly typed languages often perform implicit type conversion (coercion) to allow operations between different data types. For example, you can concatenate a number and a string without explicit conversion.
- Examples of weakly typed languages include JavaScript and PHP.

- **Strongly Typed Language (Static Typing):**

- In a strongly typed language, also known as statically typed language, data types are more rigid.
- Variables are assigned a specific data type at compile-time and cannot change during runtime.
- Type checking occurs at compile-time, which means the type of a variable is determined and verified before the program runs. This can catch type-related errors at an early stage.
- Strongly typed languages often require explicit type conversion (casting) to perform operations between different data types. For example, you need to explicitly convert a string to a number before performing arithmetic operations.
- Examples of strongly typed languages include Java, C++, and Swift.

In summary, the key difference is when type checking occurs and how flexible the language is in terms of allowing operations between different data types. Weakly typed languages perform type checking at runtime and allow more implicit type conversions, whereas strongly typed languages perform type checking at compile-time and require more explicit type conversions.


**9. What does it mean by case sensitivity, why JavaScript is called a case-sensitive language**

- **Case Sensitivity:** Case sensitivity means that a programming language distinguishes between uppercase and lowercase letters in variable names and identifiers. In a case-sensitive language, "myVar" and "myvar" would be treated as two different variables.

- **JavaScript and Case Sensitivity:** JavaScript is a case-sensitive language, which means it treats "myVar" and "myvar" as two distinct identifiers. This can be important when naming variables, functions, or object properties because JavaScript will treat "MyVar" and "myVar" differently.

**10. What does it mean by casing**

- **Casing:** Casing refers to the convention used for naming variables, functions, and other identifiers in a programming language. Common casing styles include camelCase, PascalCase (or UpperCamelCase), kebab-case, and snake_case.

**11. What is camel casing, Pascal casing, kebab casing, and snake casing**

- **Camel Case:** Camel case is a naming convention where each word or abbreviation in a compound identifier is capitalized except for the first word, which starts with a lowercase letter. For example, "myVariableName" or "calculateTotalValue".

- **Pascal Case (Upper Camel Case):** In Pascal case, the first letter of each word is capitalized, including the first word. For example, "MyClassName" or "CalculateTotalValue".

- **Kebab Case:** Kebab case separates words with hyphens ("-"). It's commonly used in URLs and file names. For example, "my-file-name" or "page-not-found".

- **Snake Case:** Snake case separates words with underscores ("\_"). It's often used in variable and function names in some programming languages. For example, "my_variable_name" or "calculate_total_value".

**12. What type of casing JavaScript follows**

JavaScript typically follows the **camel case** naming convention. It is a common practice in JavaScript to name variables and functions using camel case, where the first word starts with a lowercase letter, and subsequent words are capitalized, as in "myVariableName" or "calculateTotalValue".

**13. What Does It Mean By Reserved Keyword/Words In Javascript**

Reserved keywords or words in JavaScript are special words that have predefined meanings and cannot be used as variable names or identifiers because they are reserved for specific purposes in the language. Examples of reserved keywords in JavaScript include "if," "else," "for," "function," "var," "let," "const," and many more.

**14. Rules Of Naming In Javascript**

When naming variables, functions, or other identifiers in JavaScript, you should follow these rules:

- Must start with a letter, underscore (\_), or dollar sign ($).
- Subsequent characters can be letters, digits, underscores, or dollar signs.
- Names are case-sensitive.
- Avoid using reserved keywords.
- Use descriptive and meaningful names for clarity and maintainability.
- Follow a consistent naming convention (e.g., camelCase).
