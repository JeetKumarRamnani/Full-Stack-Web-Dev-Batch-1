# JavaScript Advance Lecture 9: Form Handling And Validation

## Topics Covered:

1. **What Is Form Handling**
2. **What Does It Mean By Validation**
3. **Types Of Validation**
    **Client Side Validation**
    **Server Side Validation**
4. **What Is Form Validation**
5. **Form Related Events**
6. **Default Behavior Of Form When Submmited**

## Explanations:

### 1. What Is Form Handling?

Form handling refers to the process of capturing user input through HTML forms and processing that input using JavaScript or server-side scripts. This involves collecting data from the user, validating it, and taking appropriate actions based on the input.

### 2. What Does It Mean By Validation?

Validation is the process of ensuring that user input meets certain criteria or rules before it is accepted as valid data. This is crucial for maintaining data integrity and preventing errors or malicious inputs.

### 3. Types Of Validation:

#### a. Client-Side Validation:
Client-side validation is performed using JavaScript in the user's web browser. It helps improve user experience by providing instant feedback to users without needing to submit the form.

```html
<form id="myForm" onsubmit="return validateForm()">
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button type="submit">Submit</button>
</form>

<script>
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return false;
    }

    return true;
}
</script>
```

In this example, the `validateForm` function checks if the username and password fields are empty and alerts the user if they are.

#### b. Server-Side Validation:
Server-side validation is performed on the server after the form is submitted. It provides an additional layer of security and ensures that only valid data is processed.

```javascript
// Node.js example using Express framework
app.post('/submitForm', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Please enter both username and password.');
    }

    // Process the form data
    res.send('Form submitted successfully!');
});
```

In this Node.js and Express example, the server checks if the username and password fields are empty before processing the form data.

### 4. What Is Form Validation?

Form validation refers to the process of validating user input to ensure that it meets specified criteria, such as required fields, correct format (e.g., email address), or acceptable values.

### 5. Form Related Events:

#### a. Submit Event:
The `submit` event is triggered when a form is submitted either by clicking a submit button or by pressing Enter within a form field.

```html
<form id="myForm" onsubmit="handleSubmit(event)">
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button type="submit">Submit</button>
</form>

<script>
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form data here
    // Example: check if username and password are filled
}
</script>
```

In this example, `event.preventDefault()` is used to prevent the default form submission behavior, allowing custom validation logic to be executed.

### 6. Default Behavior Of Form When Submitted:

By default, when a form is submitted, the browser sends a POST request to the server with the form data. The page may then be redirected or refreshed based on the server's response.

```html
<form action="/submitForm" method="POST">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit">Submit</button>
</form>
```

In this form example, the data will be sent to the server endpoint `/submitForm` using the POST method when the form is submitted.


