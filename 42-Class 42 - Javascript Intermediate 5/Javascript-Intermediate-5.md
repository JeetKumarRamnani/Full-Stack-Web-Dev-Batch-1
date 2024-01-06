# JavaScript Intermediate Lecture 5: OBJECTS Intermediate 2

## Topics Covered:

1. **Predefined Objects Revision:**
   - Recap of predefined objects in JavaScript.
   - Examples and use cases for global objects like `Math`, `Date`, and `JSON`.
   - Brief overview of other built-in objects like `RegExp`, `Error`, and `Global`.

2. **String Object Methods Revision:**
   - Overview of the `String` object in JavaScript.
   - **String Methods:**
      - `length`: Returns the length of the string.
      - `charAt(index)`: Returns the character at the specified index.
      - `concat(string2, string3, ...)`: Combines two or more strings.
      - `toUpperCase()` and `toLowerCase()`: Converts a string to uppercase or lowercase.
      - `trim()`: Removes whitespace from both ends of a string.
      - `substring(startIndex, endIndex)`: Extracts a portion of a string.
      - `indexOf(substring, start)`: Returns the index of the first occurrence of a substring.
      - `lastIndexOf(substring, start)`: Returns the index of the last occurrence of a substring.
      - `replace(searchValue, replaceValue)`: Replaces a specified value with another value.
      - `split(separator, limit)`: Splits a string into an array of substrings.
      - `charAt()`, `charCodeAt()`, and `fromCharCode()`: Working with individual characters and their Unicode values.

3. **Array and Its Most Commonly Used Methods:**
   - Overview of the `Array` object in JavaScript.
   - **Array Methods:**
      - `push(element1, element2, ...)`: Adds one or more elements to the end of an array.
      - `pop()`: Removes the last element from an array and returns it.
      - `unshift(element1, element2, ...)`: Adds one or more elements to the beginning of an array.
      - `shift()`: Removes the first element from an array and returns it.
      - `length`: Returns the number of elements in an array.
      - `forEach(callback)`: Executes a provided function once for each array element.
      - `map(callback)`: Creates a new array with the results of calling a provided function on every element.
      - `filter(callback)`: Creates a new array with elements that pass a test implemented by the provided function.
      - `reduce(callback, initialValue)`: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
      - `splice(startIndex, deleteCount, item1, item2, ...)`: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
      - `slice(startIndex, endIndex)`: Returns a shallow copy of a portion of an array.
    
4. **Mutative And Non-Mutative Array Methods:**

## Explanations:

1. **Predefined Objects Revision:**
   - Recap of the purpose and usage of predefined objects.
   - Examples demonstrating the functionality of global objects like `Math`, `Date`, and `JSON`.
   - Brief explanation of less commonly used objects like `RegExp`, `Error`, and `Global`.

2. **String Object Methods Revision:**
   - Detailed explanation of each string method:
      - `length`: Obtaining the length of a string.
      - `charAt(index)`: Accessing individual characters in a string.
      - `concat(string2, string3, ...)`: Combining multiple strings.
      - `toUpperCase()` and `toLowerCase()`: Changing case.
      - `trim()`: Removing unnecessary whitespace.
      - `substring(startIndex, endIndex)`: Extracting substrings.
      - `indexOf(substring, start)`: Finding the position of a substring.
      - `lastIndexOf(substring, start)`: Finding the last occurrence of a substring.
      - `replace(searchValue, replaceValue)`: Substituting one value for another.
      - `split(separator, limit)`: Breaking a string into an array.
      - `charAt()`, `charCodeAt()`, and `fromCharCode()`: Handling individual characters and their Unicode values.

3. **Array and Its Most Commonly Used Methods:**
   - Explanation of each array method:
      - `push()`, `pop()`, `unshift()`, `shift()`: Modifying the beginning and end of an array.
      - `length`: Determining the number of elements in an array.
      - `forEach(callback)`: Iterating through array elements.
      - `map(callback)`: Creating a new array based on existing elements.
      - `filter(callback)`: Filtering elements based on a condition.
      - `reduce(callback, initialValue)`: Aggregating array elements into a single value.
      - `splice(startIndex, deleteCount, item1, item2, ...)`: Modifying array contents in place.
      - `slice(startIndex, endIndex)`: Extracting a portion of an array without modifying the original.
    
4. **Mutative And Non-Mutative Array Methods:**
    In JavaScript, array methods can be categorized into mutative (or destructive) and non-mutative (or non-destructive) based on their behavior. Mutative methods modify the original array, while non-mutative methods return a new array without modifying the original one. Here are examples of both types:

### Mutative (Destructive) Array Methods:

1. **`push()`** - Adds one or more elements to the end of an array and returns the new length of the array.

    ```javascript
    let arr = [1, 2, 3];
    arr.push(4);
    console.log(arr); // [1, 2, 3, 4]
    ```

2. **`pop()`** - Removes the last element from an array and returns that element.

    ```javascript
    let arr = [1, 2, 3];
    let poppedValue = arr.pop();
    console.log(arr);         // [1, 2]
    console.log(poppedValue); // 3
    ```

3. **`splice()`** - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

    ```javascript
    let arr = [1, 2, 3, 4, 5];
    arr.splice(2, 2, 'a', 'b');
    console.log(arr); // [1, 2, 'a', 'b', 5]
    ```

### Non-Mutative (Non-Destructive) Array Methods:

1. **`concat()`** - Combines two or more arrays and returns a new array without modifying the existing ones.

    ```javascript
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let newArr = arr1.concat(arr2);
    console.log(newArr); // [1, 2, 3, 4, 5, 6]
    ```

2. **`slice()`** - Returns a shallow copy of a portion of an array into a new array.

    ```javascript
    let arr = [1, 2, 3, 4, 5];
    let slicedArr = arr.slice(1, 4);
    console.log(slicedArr); // [2, 3, 4]
    ```

3. **`map()`** - Creates a new array by applying a function to each element of an existing array.

    ```javascript
    let arr = [1, 2, 3];
    let newArr = arr.map(item => item * 2);
    console.log(newArr); // [2, 4, 6]
    ```

By understanding whether a method is mutative or non-mutative, you can choose the appropriate one based on your requirements and avoid unintended side effects on your data.


