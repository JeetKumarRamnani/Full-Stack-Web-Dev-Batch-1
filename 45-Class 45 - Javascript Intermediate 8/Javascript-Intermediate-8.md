# JavaScript Intermediate Lecture 8: BOM (Browser Object Model)

## Topics Covered:

1. **What Is BOM(Browser Object Model)**
2. **Window Object In Depth**
3. **History Object**
4. **Navigator Object**
5. **Screen Object**

## Explanations:

### 1. What Is BOM (Browser Object Model):

The Browser Object Model (BOM) is a set of objects provided by web browsers to interact with the browser itself. It allows JavaScript to communicate with and control the browser environment. The main object in the BOM is the `window` object, which represents the browser window.

#### `window` Object:

The `window` object is the top-level object in the BOM and represents the browser window. It contains various properties and methods for manipulating the browser.

##### Methods:

- **`alert(message)`**: Displays an alert dialog with the specified message.
  ```javascript
  window.alert("Hello, World!");
  ```

- **`prompt(message, default)`**: Displays a dialog box that prompts the user for input.
  ```javascript
  let userInput = window.prompt("Enter your name:", "John Doe");
  ```

- **`confirm(message)`**: Displays a dialog box with a specified message and OK/Cancel buttons.
  ```javascript
  let userConfirmed = window.confirm("Are you sure you want to proceed?");
  ```

### 2. Window Object In Depth:

The `window` object is a crucial part of the BOM, and it represents the browser window or frame.

#### Properties:

- **`window.innerWidth`**: Returns the inner width of the browser window.
  ```javascript
  let innerWidth = window.innerWidth;
  ```

- **`window.innerHeight`**: Returns the inner height of the browser window.
  ```javascript
  let innerHeight = window.innerHeight;
  ```

##### Methods:

- **`window.open(url, name, features)`**: Opens a new browser window or a new tab.
  ```javascript
  let newWindow = window.open("https://www.example.com", "_blank");
  ```

- **`window.close()`**: Closes the current browser window.
  ```javascript
  window.close();
  ```

### 3. History Object:

The `history` object allows you to navigate through the user's session history.

#### Properties:

- **`history.length`**: Returns the number of elements in the session history.
  ```javascript
  let historyLength = history.length;
  ```

##### Methods:

- **`history.back()`**: Moves the browser back one page in the session history.
  ```javascript
  history.back();
  ```

- **`history.forward()`**: Moves the browser forward one page in the session history.
  ```javascript
  history.forward();
  ```

### 4. Navigator Object:

The `navigator` object provides information about the browser.

#### Properties:

- **`navigator.userAgent`**: Returns the user-agent string for the browser.
  ```javascript
  let userAgent = navigator.userAgent;
  ```

### 5. Screen Object:

The `screen` object provides information about the user's screen.

#### Properties:

- **`screen.width`**: Returns the width of the user's screen.
  ```javascript
  let screenWidth = screen.width;
  ```

- **`screen.height`**: Returns the height of the user's screen.
  ```javascript
  let screenHeight = screen.height;
  ```

These objects and their properties/methods provide JavaScript with the capability to interact with the browser environment and gather information about the user's system and browsing history.