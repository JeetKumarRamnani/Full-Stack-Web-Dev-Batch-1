# Lecture 11: HTML FORM

## Table of Contents

1. [What Are HTML Forms?](#what-are-html-forms)
2. [Why Do We Use Forms?](#why-do-we-use-forms)
3. [HTML Form Elements](#html-form-elements)
   - [\<form\>](#form)
   - [\<fieldset\>](#fieldset)
   - [\<legend\>](#legend)
   - [\<label\>](#label)
   - [\<input\>](#input)
     - [Input Types](#input-types)
       - [Text](#text)
       - [Password](#password)
       - [Email](#email)
       - [Number](#number)
       - [Checkbox](#checkbox)
       - [Radio](#radio)
       - [Date](#date)
       - [Submit](#submit)
   - [\<select\>](#select)
   - [\<datalist\>](#datalist)
   - [\<option\>](#option)
   - [\<optgroup\>](#optgroup)
   - [\<textarea\>](#textarea)
   - [\<button\>](#button)

## What Are HTML Forms?

HTML forms are a fundamental part of web development that allow users to input data and interact with a website. They provide a structured way to collect and submit information from users.

## Why Do We Use Forms?

Forms are used to gather various types of user input, such as text, selections, and buttons. They enable interactions like user registration, login, search, and more.

## HTML Form Elements

### \<form\>

The `<form>` tag defines an HTML form that collects user input. It can have various attributes like `action` and `method` that determine where the form data is sent and how it's processed.

### \<fieldset\>

The `<fieldset>` tag groups related form elements together and provides a visual grouping effect. It's often used with the `<legend>` tag to provide a title for the fieldset.

### \<legend\>

The `<legend>` tag defines a caption for the `<fieldset>` element. It provides context and description for the group of related form elements.

### \<label\>

The `<label>` tag is used to associate a label with an input element. It improves accessibility and user experience by making it clear what each input field represents.

### \<input\>

The `<input>` tag is used to create various types of input fields within a form.

#### Input Types

##### Text

```html
<input type="text" name="username" placeholder="Username" />
```

The text input allows users to enter single-line text.

##### Password

```html
<input type="password" name="password" placeholder="Password" />
```

The password input masks the entered text for secure password input.

##### Email

```html
<input type="email" name="email" placeholder="Email" />
```

The email input validates and formats email addresses.

##### Number

```html
<input type="number" name="age" min="18" max="99" />
```

The number input allows numeric input within a specified range.

##### Checkbox

```html
<input type="checkbox" name="subscribe" checked />
```

Checkboxes allow users to select one or more options from a list.

##### Radio

```html
<input type="radio" name="gender" value="male" /> Male
<input type="radio" name="gender" value="female" /> Female
```

Radio buttons allow users to select a single option from a list.

##### Date

```html
<input type="date" name="birthdate" />
```

The date input provides a date picker for selecting dates.

##### Submit

```html
<input type="submit" value="Submit" />
```

The submit button is used to send the form data to the server for processing.

### \<select\>

The `<select>` tag creates a dropdown list from which users can select one option.

### \<datalist\>

The `<datalist>` tag provides a predefined list of options for an input element, improving user experience.

### \<option\>

The `<option>` tag defines an option within a `<select>` element.

### \<optgroup\>

The `<optgroup>` tag groups related `<option>` elements within a `<select>`.

### \<textarea\>

The `<textarea>` tag creates a multi-line text input area for longer text inputs.

### \<button\>

The `<button>` tag creates clickable buttons that can trigger various actions within the form.

### \<form\>

```html
<form action="/submit" method="post">
  <!-- Form content goes here -->
</form>
```

The `<form>` element defines a form that can be submitted to the server for processing.

### \<fieldset\>

```html
<fieldset>
  <legend>Personal Information</legend>
  <!-- Input fields go here -->
</fieldset>
```

The `<fieldset>` groups related form elements together for better organization.

### \<legend\>

```html
<fieldset>
  <legend>Personal Information</legend>
  <!-- Input fields go here -->
</fieldset>
```

The `<legend>` element provides a caption for the grouped fields within a `<fieldset>`.

### \<label\>

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" />
```

The `<label>` associates a text label with an input element.

### \<input\>

#### Text

```html
<label for="username">Username:</label>
<input
  type="text"
  id="username"
  name="username"
  placeholder="Enter your username"
/>
```

Allows users to input single-line text.

#### Password

```html
<label for="password">Password:</label>
<input
  type="password"
  id="password"
  name="password"
  placeholder="Enter your password"
/>
```

Enables secure password input.

#### Email

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="Enter your email" />
```

Validates and formats email addresses.

#### Number

```html
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="18" max="99" />
```

Allows numeric input within a specified range.

#### Checkbox

```html
<label>
  <input type="checkbox" name="subscribe" checked />
  Subscribe to newsletter
</label>
```

Lets users select one or more options from a list.

#### Radio

```html
<label>
  <input type="radio" name="gender" value="male" checked />
  Male
</label>
<label>
  <input type="radio" name="gender" value="female" />
  Female
</label>
```

Allows users to select a single option from a list.

#### Date

```html
<label for="birthdate">Birthdate:</label>
<input type="date" id="birthdate" name="birthdate" />
```

Provides a date picker for selecting dates.

#### Submit

```html
<input type="submit" value="Submit" />
```

Triggers form submission to the server.

### \<select\>

```html
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="usa">United States</option>
  <option value="canada">Canada</option>
  <option value="uk">United Kingdom</option>
</select>
```

Creates a dropdown list for selecting one option.

### \<datalist\>

```html
<label for="browser">Browser:</label>
<input list="browsers" id="browser" name="browser" />
<datalist id="browsers">
  <option value="chrome"></option>
  <option value="firefox"></option>
  <option value="safari"></option>
  <option value="edge"></option>
</datalist>
```

Provides a predefined list of options for an input element.

### \<textarea\>

```html
<label for="comments">Comments:</label>
<textarea id="comments" name="comments" rows="4" cols="50"></textarea>
```

Creates a multi-line text input area.

### \<button\>

```html
<button type="button">Click Me</button> <button type="submit">Submit</button>
```

Creates clickable buttons with different purposes.

---
