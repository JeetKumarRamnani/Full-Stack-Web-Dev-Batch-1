# JavaScript Advance Lecture 2: Arrow Function,Hoisting,Form Handling,Different Keyboard Events To Handle Forms

## Topics Covered:

1. **Arrow Function And Its Benifits**
2. **Event Object**
3. **Ways Of Taking Input From User In Javascript**
4. **Difference Between keydown,keyup and keypress event**
5. **Difference Between input and change event**

## Explanations:

### 1. Arrow Function And Its Benefits

Arrow functions are a concise way to write functions in JavaScript. They provide a shorter syntax compared to traditional function expressions and do not bind their own `this`, `arguments`, `super`, or `new.target`. The syntax looks like this:

```javascript
const myFunction = (param1, param2) => {
  // function body
};
```

Benefits of arrow functions include:

- **Shorter Syntax**: Arrow functions allow you to write more concise code, especially for simple functions.
- **Lexical `this` Binding**: Arrow functions do not have their own `this` context; instead, they inherit `this` from the surrounding code. This can be useful in avoiding issues related to the `this` keyword in traditional functions.

### 2. Event Object

The Event object in JavaScript represents an event that occurs in the DOM (Document Object Model). It contains properties and methods related to the event being triggered. Event handlers in JavaScript receive an Event object as an argument, which they can use to get information about the event and perform actions accordingly.

Example:

```javascript
element.addEventListener('click', function(event) {
  // event handling code
});
```

### 3. Ways Of Taking Input From User In JavaScript

There are several ways to take input from users in JavaScript:

- **Using `prompt()`**: This displays a dialog box with a message and an input field, allowing the user to enter data.
- **Using HTML Forms**: HTML forms can be used to collect user input and submit it to a server-side script for processing.
- **Using Input Elements**: You can create input elements like `<input>`, `<textarea>`, and `<select>` in HTML and then access their values using JavaScript.
- **Using Event Handlers**: You can attach event listeners to DOM elements to capture user input events like `click`, `change`, `keydown`, etc.

### 4. Difference Between `keydown`, `keyup` and `keypress` Events

- **`keydown`**: This event occurs when a key is pressed down.
- **`keyup`**: This event occurs when a key is released.
- **`keypress`**: This event occurs when a key that produces a character value is pressed down.

The main difference between them is the timing: `keydown` and `keyup` fire when the key is pressed and released, respectively, while `keypress` fires when the key generates a character value.

### 5. Difference Between `input` and `change` Event

- **`input` Event**: This event fires whenever the value of an `<input>`, `<textarea>`, or `<select>` element changes. It is triggered immediately after the value is changed by the user.
- **`change` Event**: This event also fires when the value of an `<input>`, `<textarea>`, or `<select>` element changes, but it fires when the element loses focus after its value has been changed. It doesn't fire until the user has finished making their selection or input.

The main difference is the timing of when they are triggered: `input` is more immediate, firing as soon as the value changes, while `change` waits until the element loses focus.

## Conclusion:

In this advanced JavaScript lecture, we delved into several crucial concepts and techniques:

1. **Arrow Functions**: We explored the concise syntax and benefits of arrow functions, highlighting their shorter syntax and lexical `this` binding, which can help in writing cleaner and more maintainable code.

2. **Event Handling**: Understanding the Event object and its usage in event handling allowed us to capture and respond to user interactions effectively. This is fundamental for creating dynamic and interactive web applications.

3. **Input Methods**: We discussed various methods for taking input from users, including `prompt()`, HTML forms, input elements, and event handlers. Each method has its use cases and advantages depending on the context of the application.

4. **Keyboard Events**: By distinguishing between `keydown`, `keyup`, and `keypress` events, we gained insight into how to respond to keyboard interactions precisely, enabling us to build more responsive and intuitive interfaces.

5. **Form Events**: Exploring the differences between `input` and `change` events provided us with a deeper understanding of how to handle form input efficiently, considering factors such as immediacy of feedback and user interaction flow.

In summary, mastering these concepts equips us with the skills necessary to develop sophisticated JavaScript applications, ensuring robust event handling, smooth user interactions, and enhanced overall user experience.