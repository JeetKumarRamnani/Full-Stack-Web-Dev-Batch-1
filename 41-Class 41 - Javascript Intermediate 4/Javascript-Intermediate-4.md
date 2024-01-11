# Javascript Intermediate Lecture 4 : OBJECTS Intermediate 1

## Topics Covered:

1. **Constructor Revision**
2. **What Does Built-in/Predefined Objects Means**
3. **Commonly Used Predefined Objects**
   - String Object
   - Array Object
   - Date Object
   - Math Object
   - Document Object
   - Window Object
4. **What Is String**
5. **Strings Are Immutable**
6. **String Manipulation**
7. **Escape Sequence**
8. **Strings Object**
   - Creating String Objects
   - String Properties
   - String Methods:
     - `charAt()`
     - `concat()`
     - `indexOf()`
     - `slice()`
     - `toUpperCase()`
     - `toLowerCase()`
     - and more...

## Explanations:

### 1. **Constructor Revision:**

- **Explanation:** Constructors in JavaScript are special functions used to create and initialize objects. They define properties and behaviors for object instances. When a constructor is invoked with the `new` keyword, it creates a new object and sets `this` to reference that object.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("John", 25);
```

### 2. **What Does Built-in/Predefined Objects Mean:**

- **Explanation:** Built-in or predefined objects are part of the JavaScript language and provide essential functionalities. They are ready to use without explicit definition. These objects are fundamental to the language and cover a range of operations, making them integral for various tasks.

### 3. **Commonly Used Predefined Objects:**

- **String Object:** Represents and manipulates sequences of characters.
- **Array Object:** Stores and manipulates collections of elements.
- **Date Object:** Deals with dates and times.
- **Math Object:** Provides mathematical operations and constants.
- **Document Object:** Represents the HTML document in the browser.
- **Window Object:** Represents the browser window.

### 4. **What Is String:**

- **Explanation:** A string is a sequence of characters, typically used to represent text. In JavaScript, strings can be created using single or double quotes.

```javascript
let greeting = "Hello, World!";
```

### 5. **Strings Are Immutable:**

- **Explanation:** Strings in JavaScript are immutable, meaning their values cannot be changed once created. Operations on strings, like concatenation or manipulation, create new strings rather than modifying the original.

### 6. **String Manipulation:**

- **Explanation:** String manipulation involves changing, combining, or extracting parts of a string. Common operations include concatenation, slicing, and converting case.

```javascript
let str1 = "Hello";
let str2 = "World";
let greeting = str1 + ", " + str2 + "!";
```

### 7. **Escape Sequence:**

- **Explanation:** Escape sequences are special characters in strings preceded by a backslash (`\`). They are used to represent characters that are difficult to include directly in a string, such as newline (`\n`) or tab (`\t`).

```javascript
let message = "This is a line\nbreak";
```

### 8. **Strings Object:**

- **Creating String Objects:**

  ```javascript
  let str = new String("Hello");
  ```

- **String Properties:**

  - `length`: Returns the length of the string.

- **String Methods:**
  - **`charAt(index)`**: Returns the character at the specified index.
  - **`concat(str1, str2, ...)`**: Concatenates two or more strings.
  - **`indexOf(substring)`**: Returns the index of the first occurrence of a substring.
  - **`slice(start, end)`**: Extracts a portion of the string.
  - **`toUpperCase()`**: Converts the string to uppercase.
  - **`toLowerCase()`**: Converts the string to lowercase.
  - and more...

These topics collectively provide a comprehensive understanding of constructors, predefined objects, and string manipulation in JavaScript. They lay the groundwork for effective object-oriented programming and handling textual data in web development.

### Conclusion:

In this intermediate JavaScript lecture, we covered essential topics related to constructors, predefined objects, and in-depth details about strings. Understanding these concepts is pivotal for any JavaScript developer striving to build robust and efficient applications.

**Key Highlights:**

1. **Constructor Revision:**

   - Constructors are functions that initialize objects.
   - They define properties and behaviors for object instances.

2. **Built-in/Predefined Objects:**

   - Essential objects provided by JavaScript for various tasks.
   - Ready-to-use, enhancing efficiency and consistency.

3. **Commonly Used Predefined Objects:**

   - String, Array, Date, Math, Document, and Window objects are fundamental for different operations.

4. **What Is String:**

   - A sequence of characters used to represent text.
   - Created using single or double quotes.

5. **Strings Are Immutable:**

   - Strings cannot be altered once created.
   - Operations create new strings.

6. **String Manipulation:**

   - Involves operations like concatenation, slicing, and case conversion.
   - Utilizes various methods for effective manipulation.

7. **Escape Sequence:**

   - Special characters preceded by a backslash.
   - Used for representing characters that are hard to include directly.

8. **Strings Object:**
   - String object provides additional methods for string manipulation.
   - Offers properties like `length` and methods like `charAt()`, `concat()`, etc.

**Conclusion:**

Mastering these concepts empowers developers to create well-structured, efficient, and scalable JavaScript code. Constructors and predefined objects form the backbone of object-oriented programming, while string manipulation is crucial for handling textual data. As you apply these concepts in your projects, you'll build a strong foundation for advanced JavaScript development.
