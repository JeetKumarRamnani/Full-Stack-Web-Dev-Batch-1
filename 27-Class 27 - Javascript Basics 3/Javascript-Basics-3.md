## Javascript Basics Lecture 3 : Datatypes,Rules Of Namming,Casing,Strongly Vs Weekly,Explicit Vs Implicit,Static Vs Dynamic Typing

### Topics Covered:

1. **What Are Datatypes??**
2. **Purpose Of Datatypes??**
3. **How Many Datatypes are Available In Javascript??**
4. **What does It Mean By Explicit And Implicit**
5. **What Is Strongly And Weekly Typed Language**
6. **What Does it mean by Static And Dynamic Typing**
7. **What does it mean by case sensitivity why javascript is called case insensitive language**
8. **what does it mean by casing**
9. **What is camel casing,pascal casing,kebab casing and snake casing**
10. **What type of casing javascript follows**
11. **What Does It Mean By Reserved Keyword/Words In Javascript In general programming languages world**
12. **Rules Of Namming In Javascript**

## Explanations:

**1. What Are Datatypes?**

In programming, data types are a fundamental concept that defines the kind of data a variable can hold. Data types specify the size and format of values, which determine the operations that can be performed on them. They help the computer understand how to interpret and manipulate data. Common data types in programming languages include integers, floating-point numbers, characters, strings, and more.

**2. Purpose Of Datatypes?**

The purpose of data types in programming is to:

- Ensure data integrity: Data types help maintain the consistency and accuracy of data by defining what kind of values a variable can hold. For example, an integer variable cannot hold a string value, thus preventing unexpected data errors.

- Optimize memory usage: Data types determine how much memory a variable or data structure requires. Choosing the appropriate data type for a variable can help optimize memory usage and improve program efficiency.

- Enable type-specific operations: Different data types support various operations. For instance, you can perform arithmetic operations on numeric data types but not on strings. Data types allow the compiler or interpreter to enforce these rules.

**3. How Many Datatypes are Available In Javascript?**

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

**4. What does It Mean By Explicit And Implicit**

- **Explicit Type Conversion (Casting):** This involves converting a value from one data type to another using explicit instructions provided by the programmer. For example, in JavaScript, you can use functions like `parseInt()` and `toString()` to explicitly convert between data types.

- **Implicit Type Conversion (Type Coercion):** In this case, the language automatically converts data from one type to another when needed. For instance, when you add a number and a string in JavaScript, the string is implicitly converted to a number for the operation.

**5. What Is Strongly And Weekly Typed Language**

- **Strongly Typed Language:** In a strongly typed language, strict rules are enforced regarding data types. Variables must be explicitly declared with a specific data type, and operations are limited to those defined for that type. JavaScript is a weakly typed language, which means it's more permissive regarding data type conversions.

- **Weakly Typed Language:** In a weakly typed language, data type conversion is often implicit, allowing for more flexible operations. JavaScript is a weakly typed language, which means it performs type coercion to facilitate operations between different data types.

**6. What Does it mean by Static And Dynamic Typing**

- **Static Typing:** In a statically typed language, variable data types are determined at compile time. Once a variable is declared with a specific data type, it cannot change. Examples of statically typed languages include Java and C++.

- **Dynamic Typing:** In a dynamically typed language, variable data types are determined at runtime. You can change the data type of a variable during the execution of the program. JavaScript is an example of a dynamically typed language.

**7. What does it mean by case sensitivity, why JavaScript is called a case-insensitive language**

- **Case Sensitivity:** Case sensitivity means that a programming language distinguishes between uppercase and lowercase letters in variable names and identifiers. In a case-sensitive language, "myVar" and "myvar" would be treated as two different variables.

- **JavaScript and Case Sensitivity:** JavaScript is a case-sensitive language, which means it treats "myVar" and "myvar" as two distinct identifiers. This can be important when naming variables, functions, or object properties because JavaScript will treat "MyVar" and "myVar" differently.

**8. What does it mean by casing**

- **Casing:** Casing refers to the convention used for naming variables, functions, and other identifiers in a programming language. Common casing styles include camelCase, PascalCase (or UpperCamelCase), kebab-case, and snake_case.

**9. What is camel casing, Pascal casing, kebab casing, and snake casing**

- **Camel Case:** Camel case is a naming convention where each word or abbreviation in a compound identifier is capitalized except for the first word, which starts with a lowercase letter. For example, "myVariableName" or "calculateTotalValue".

- **Pascal Case (Upper Camel Case):** In Pascal case, the first letter of each word is capitalized, including the first word. For example, "MyClassName" or "CalculateTotalValue".

- **Kebab Case:** Kebab case separates words with hyphens ("-"). It's commonly used in URLs and file names. For example, "my-file-name" or "page-not-found".

- **Snake Case:** Snake case separates words with underscores ("\_"). It's often used in variable and function names in some programming languages. For example, "my_variable_name" or "calculate_total_value".

**10. What type of casing JavaScript follows**

JavaScript typically follows the **camel case** naming convention. It is a common practice in JavaScript to name variables and functions using camel case, where the first word starts with a lowercase letter, and subsequent words are capitalized, as in "myVariableName" or "calculateTotalValue".

**11. What Does It Mean By Reserved Keyword/Words In Javascript**

Reserved keywords or words in JavaScript are special words that have predefined meanings and cannot be used as variable names or identifiers because they are reserved for specific purposes in the language. Examples of reserved keywords in JavaScript include "if," "else," "for," "function," "var," "let," "const," and many more.

**12. Rules Of Naming In Javascript**

When naming variables, functions, or other identifiers in JavaScript, you should follow these rules:

- Must start with a letter, underscore (\_), or dollar sign ($).
- Subsequent characters can be letters, digits, underscores, or dollar signs.
- Names are case-sensitive.
- Avoid using reserved keywords.
- Use descriptive and meaningful names for clarity and maintainability.
- Follow a consistent naming convention (e.g., camelCase).
