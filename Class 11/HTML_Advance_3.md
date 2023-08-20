# Lecture 11: HTML FORM

## Table of Contents

1. What Are HTML Forms?
2. Why Do We Use Forms?
3. What Is Form Validation?
4. HTML Form Elements
5. Impotance Of name Attribute
6. Importance Of Type Attribute
7. Importance Of Label Element

   - `<form>`
   - `<fieldset>`
   - `<legend>`
   - `<label>`
   - `<input>`
     - Text
     - Password
     - Email
     - Number
     - Checkbox
     - Radio
     - Date
     - Submit
     - image
     - file
   - `<select>`
   - `<datalist>`
   - `<option>`
   - `<optgroup>`
   - `<textarea>`
   - `<button>`

   Attributes Related To Form And Its Elements:
   action,method,target,for,selected,type,name,value,readonly,disabled,required,placeholder,min,max,minlength,maxlength,rows,cols,multiple,size

---

## HTML Forms

HTML forms are interactive sections within a webpage that allow users to input and submit data. They consist of various form elements such as text fields, checkboxes, radio buttons, and buttons. When users fill out a form and submit it, the data is sent to a server for processing.

## Why Do We Use Forms?

Forms are used to gather user input, such as login information, user preferences, feedback, and more. They provide a structured way to collect and submit data from users to a server, enabling various types of user interactions on a website.

## Form Validation

Form validation is the process of ensuring that the data entered into a form meets specified criteria before it is submitted. This prevents incorrect or incomplete data from being sent to the server. Validation can be done on the client side using JavaScript or on the server side to ensure data integrity and security.

## HTML Form Elements

- `<form>`: The `<form>` element defines an HTML form that can contain various input elements. It establishes the structure and behavior of the form.

- `<fieldset>`: The `<fieldset>` element groups related form elements together and helps in organizing and styling the form's content.

- `<legend>`: The `<legend>` element provides a caption or description for the `<fieldset>` element, explaining its purpose or context.

- `<label>`: The `<label>` element is used to associate a text label with a form element, improving accessibility and user experience.

- `<input>`: The `<input>` element is used to create various types of input fields within a form.

  # Input Types

  - **Text**

    ```html
    <input type="text" name="username" />
    ```

    A single-line text input field for general text entry.

  - **Password**

    ```html
    <input type="password" name="password" />
    ```

    A text input field where the entered characters are masked for password entry.

  - **Email**

    ```html
    <input type="email" name="email" required />
    ```

    An input field specifically for entering an email address, with built-in validation and the "required" attribute.

  - **Number**

    ```html
    <input type="number" name="quantity" min="1" max="100" />
    ```

    An input field for entering numeric values, with optional minimum and maximum values.

  - **Checkbox**

    ```html
    <input type="checkbox" name="subscribe" value="yes" />
    ```

    A checkbox that allows users to select one or multiple options, with the "value" attribute defining the value when checked.

  - **Radio**

    ```html
    <input type="radio" name="gender" value="male" /> Male
    <input type="radio" name="gender" value="female" /> Female
    ```

    Radio buttons for selecting a single option from a group, with the same "name" attribute grouping them together.

  - **Date**

    ```html
    <input type="date" name="dob" />
    ```

    An input field for selecting a date from a date picker.

  - **Submit**

    ```html
    <input type="submit" value="Submit" />
    ```

    A button that submits the form when clicked, with the "value" attribute defining the button text.

  - **Image**

    ```html
    <input type="image" src="submit-button.png" alt="Submit" />
    ```

    An image that acts as a clickable button to submit the form, with the "src" attribute specifying the image source.

  - **File**
    ```html
    <input type="file" name="upload" />
    ```
    An input field that allows users to upload files from their device, with the "name" attribute for form data handling.

- `<select>`: The `<select>` element creates a dropdown list from which users can choose one option.

- `<datalist>`: The `<datalist>` element provides a list of predefined options that can be used with an associated input element.

- `<option>`: The `<option>` element defines an option within a `<select>` element or a `<datalist>` element.

- `<optgroup>`: The `<optgroup>` element groups related `<option>` elements within a `<select>` element.

- `<textarea>`: The `<textarea>` element creates a multi-line text input field, suitable for longer text entries.

- `<button>`: The `<button>` element creates a clickable button that can perform actions like submitting the form or triggering JavaScript functions.

---

## 5. Importance of the `name` Attribute

The `name` attribute in HTML forms uniquely identifies input elements, enabling accurate data submission and processing on servers. It ensures proper association of user inputs and aids in server-side handling, allowing effective data organization. This attribute is vital for data integrity, JavaScript manipulation, and server scripting, enhancing form reliability and communication between users and servers.

## 6. Importance of the `type` Attribute

The `type` attribute in HTML input elements determines their functionality and expected data format. It guides user interactions, displaying appropriate input methods and enabling form validation. By defining input behaviors, such as text, numbers, or dates, this attribute tailors user experience, ensures accurate data collection, and supports client-side data validation.

## 7. Importance of the `label` Element

The `<label>` element in HTML forms associates text labels with input elements, improving usability and accessibility. It clarifies the purpose of input fields and aids screen readers, benefiting users with disabilities. The `for` attribute links labels to inputs, expanding clickable areas and enhancing touch device interaction. Overall, the `<label>` element enhances form understanding, user-friendliness, and inclusivity.

# List Of Attributes Which Are Used With Form Elements

Sure, here are the attributes with brief definitions for each form element:

**Form Element (`<form>`):**

- `action`: Specifies the URL where the form data should be sent.
- `method`: Defines the HTTP method for sending form data (e.g., GET or POST).
- `target`: Specifies where to display the response after form submission.
- `onsubmit`: Specifies a script to run when the form is submitted.

**Label Element (`<label>`):**

- `for`: Connects the label to a specific input element using its `id` attribute.

**Option Element (`<option>`):**

- `selected`: Marks the option as pre-selected when the page loads.

**Input Element (`<input>`):**

- `type`: Specifies the type of input (e.g., text, checkbox, radio, etc.).
- `name`: Identifies the input when sending form data to the server.
- `value`: Sets the initial value of the input element.
- `readonly`: Prevents user input but allows data display.
- `disabled`: Disables the input so it can't be interacted with.
- `required`: Requires the user to fill in the input before submitting.
- `placeholder`: Provides a hint or example value for the input.
- `min`: Specifies the minimum value for numeric inputs.
- `max`: Specifies the maximum value for numeric inputs.
- `minlength`: Sets the minimum length for text inputs.
- `maxlength`: Sets the maximum length for text inputs.
- `checked`: Pre-selects a checkbox or radio input.

**Textarea Element (`<textarea>`):**

- `name`: Identifies the textarea when sending form data to the server.
- `readonly`: Prevents user input but allows data display.
- `disabled`: Disables the textarea so it can't be interacted with.
- `required`: Requires the user to fill in the textarea before submitting.
- `placeholder`: Provides a hint or example value for the textarea.
- `minlength`: Sets the minimum length for textarea content.
- `maxlength`: Sets the maximum length for textarea content.
- `rows`: Specifies the visible number of rows in the textarea.
- `cols`: Specifies the visible number of columns in the textarea.

**Select Element (`<select>`):**

- `name`: Identifies the select element when sending form data to the server.
- `disabled`: Disables the select element so it can't be interacted with.
- `required`: Requires the user to make a selection before submitting.
- `multiple`: Allows multiple options to be selected.
- `size`: Specifies the number of visible options in the select box.
