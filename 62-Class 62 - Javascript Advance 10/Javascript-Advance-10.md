# JavaScript Advance Lecture 10: Browser Storage 

## Topics Covered:

1. **onchange Event**
2. **Difference Between input And onchange Event**
3. **Browser Storage To Store Data**
    **Local Storage**
    **Session Storage**
4. **Difference Between Local And Session Storage**
5. **Why We Need Local Storage**
6. **Methods Of Local Storage**
    **localstorage.setItem**
    **localstorage.getItem**
    **localstorage.removeItem**
    **localstorage.clear**

## Explanations:

### 1. **onchange Event**

The `onchange` event in JavaScript is triggered when the value of an `<input>`, `<select>`, or `<textarea>` element changes and the element loses focus. It's commonly used to perform actions when a user makes a selection or changes the input value in a form field.

```html
<input type="text" id="myInput" onchange="myFunction()">
<script>
function myFunction() {
  alert("The input value has changed!");
}
</script>
```

### 2. **Difference Between input And onchange Event**

The `input` event is triggered every time the value of an `<input>`, `<select>`, or `<textarea>` element changes, including when the user types or deletes a character. On the other hand, the `onchange` event is triggered only when the value of the element changes and the element loses focus (e.g., clicking outside the input field).

### 3. **Browser Storage To Store Data**

#### Local Storage

Local Storage is a feature in modern web browsers that allows you to store key-value pairs persistently within the user's browser even after the browser is closed and reopened.

```javascript
// Storing data in local storage
localStorage.setItem("username", "John");

// Retrieving data from local storage
let username = localStorage.getItem("username");
console.log(username); // Outputs: John
```

#### Session Storage

Session Storage is similar to Local Storage but stores data only for the duration of the page session. Once the user closes the browser tab or window, the data is cleared.

```javascript
// Storing data in session storage
sessionStorage.setItem("theme", "dark");

// Retrieving data from session storage
let theme = sessionStorage.getItem("theme");
console.log(theme); // Outputs: dark
```

### 4. **Difference Between Local And Session Storage**

The main difference is in the persistence of data:
- Local Storage: Data persists even after the browser is closed and reopened.
- Session Storage: Data is cleared when the browser tab or window is closed.

### 5. **Why We Need Local Storage**

Local Storage is useful for storing data that you want to persist across browser sessions, such as user preferences, settings, or cached data. It allows websites to remember user preferences without relying on cookies or server-side storage.

### 6. **Methods Of Local Storage**

#### `localStorage.setItem(key, value)`

This method sets a key-value pair in the local storage.

```javascript
localStorage.setItem("username", "John");
```

#### `localStorage.getItem(key)`

This method retrieves the value associated with a given key from local storage.

```javascript
let username = localStorage.getItem("username");
console.log(username); // Outputs: John
```

#### `localStorage.removeItem(key)`

This method removes the key-value pair associated with the specified key from local storage.

```javascript
localStorage.removeItem("username");
```

#### `localStorage.clear()`

This method clears all key-value pairs from local storage.

```javascript
localStorage.clear();
```

These methods allow you to manipulate data in the local storage, making it easy to store and retrieve information within the user's browser.