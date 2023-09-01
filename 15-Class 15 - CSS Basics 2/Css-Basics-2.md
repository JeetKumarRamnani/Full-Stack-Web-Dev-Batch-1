## CSS Basics Lecture 2 : Best Practices,Selectors,Comments AND Background

### Topics Covered:

1. **Which Is The Best Way To Write CSS And Why (inline, internal, or external)?**
2. **What Do You Mean By Selectors In CSS?**
3. **Purpose Of Selectors**
4. **Types Of Selectors In CSS**
5. **Most Used Selectors In CSS**
6. **How To Add Comments In CSS**
7. **Single And Multiline Comments In CSS**
8. **Color Property And Its Values (RGB, HEX, HSL)**
9. **Background Properties And Their Values**
10. **Shorthand Property What Does It Mean**
11. **Background Shorthand Property**

## Explanations:

1. **Which Is The Best Way To Write CSS And Why (inline, internal, or external)?**

   When writing CSS, the best approach depends on your project's requirements and needs:

   - **Inline CSS:** This is when you include your CSS directly within HTML elements using the `style` attribute. It's best suited for small, specific style changes on individual elements.

     Example:

     ```html
     <p style="color: red;">This is a red text.</p>
     ```

   - **Internal CSS:** This involves placing your CSS within a `<style>` tag in the `<head>` section of an HTML document. It's useful for smaller projects where you want to keep the styles within the HTML file.

     Example:

     ```html
     <head>
       <style>
         p {
           color: blue;
         }
       </style>
     </head>
     <body>
       <p>This is a blue text.</p>
     </body>
     ```

   - **External CSS:** In this method, you create a separate CSS file and link it to your HTML document using the `<link>` element. This is the best choice for larger projects and promotes separation of concerns.

     Example (HTML):

     ```html
     <head>
       <link rel="stylesheet" type="text/css" href="styles.css" />
     </head>
     <body>
       <p class="red-text">This is a red text.</p>
     </body>
     ```

     Example (styles.css):

     ```css
     .red-text {
       color: red;
     }
     ```

   The choice between these methods depends on factors like project size, maintainability, and reusability.

2. **What Do You Mean By Selectors In CSS?**

   In CSS, selectors are patterns used to select and target HTML elements that you want to apply styles to. Selectors are the core of CSS as they determine which elements should be affected by your CSS rules.

3. **Purpose Of Selectors**

   The purpose of selectors in CSS is to identify and target specific HTML elements so that you can apply styling rules to them. By using selectors, you can define how elements should appear in terms of their layout, color, typography, and more.

4. **Types Of Selectors In CSS**

   There are various types of selectors in CSS:

   - **Element Selectors:** These select HTML elements based on their tag names. For example, `p` selects all `<p>` elements.

   - **Class Selectors:** These select elements with a specific class attribute. For example, `.btn` selects all elements with `class="btn"`.

   - **ID Selectors:** These select elements with a specific `id` attribute. For example, `#header` selects the element with `id="header"`.

   - **Universal Selector:** `*` selects all elements on the page.

   - **Descendant Selectors:** Select elements that are descendants of another element. For example, `ul li` selects all `<li>` elements that are descendants of a `<ul>` element.

   - **Adjacent Sibling Selector:** Select an element that is immediately preceded by another element. For example, `h2 + p` selects the `<p>` immediately following an `<h2>` element.

   - **Attribute Selectors:** Select elements based on their attributes. For example, `[type="text"]` selects all elements with `type="text"`.

5. **Most Used Selectors In CSS**

   Some of the most commonly used selectors in CSS include:

   - Element selectors (e.g., `p`, `h1`, `div`)
   - Class selectors (e.g., `.btn`, `.header`)
   - ID selectors (e.g., `#navbar`, `#sidebar`)
   - Descendant selectors (e.g., `ul li`, `nav a`)
   - Pseudo-classes (e.g., `:hover`, `:active`)
   - Attribute selectors (e.g., `[href]`, `[type="checkbox"]`)

6. **How To Add Comments In CSS**

   In CSS, you can add comments to your code for documentation purposes. Comments are not displayed in the rendered webpage and are used to explain your code.

7. **Single And Multiline Comments In CSS**

   - **Single-line comments:** To add a single-line comment in CSS, use `/*` to start the comment and `*/` to end it.

     Example:

     ```css
     /* This is a single-line comment */
     ```

   - **Multiline comments:** You can also use single-line comments consecutively to create multiline comments.

     Example:

     ```css
     /*
     This is a multiline
     comment
     */
     ```

8. **Color Property And Its Values (RGB, HEX, HSL)**

   The `color` property in CSS is used to set the text color of an element. You can specify colors using various formats:

   - **RGB (Red, Green, Blue):** This format uses values between 0 and 255 for each color channel. For example, `color: rgb(255, 0, 0);` sets the text color to red.

   - **HEX (Hexadecimal):** This format represents colors using a 6-digit code preceded by a `#` symbol. For example, `color: #FF0000;` sets the text color to red.

   - **HSL (Hue, Saturation, Lightness):** This format allows you to specify colors using hue, saturation, and lightness values. For example, `color: hsl(0, 100%, 50%);` sets the text color to red.

9. **Background Properties And Their Values**

   In CSS, you can control an element's background using properties like `background-color`, `background-image`, `background-repeat`, and `background-position`. You can use these properties to set the background color, add images, control image repetition, and position the background.

10. **Shorthand Property What Does It Mean**

    A shorthand property in CSS allows you to set multiple related properties in a single declaration. For example, the `background` shorthand property combines `background-color`, `background-image`, `background-repeat`, and other background-related properties into one concise declaration.

11. **Background Shorthand Property**

    The `background` shorthand property allows you to set all background-related properties in one declaration. It has the following syntax:

    ```css
    background: [background-color] [background-image] [background-repeat]
      [background-attachment] [background-position];
    ```

    Example:

    ```css
    background: #ff0000 url("image.jpg") no-repeat fixed top right;
    ```

    This sets the background color to red, uses the image 'image.jpg' as the background image, prevents image repetition, fixes the background position, and places it at the top-right corner of the element.

These are the key concepts related to CSS and selectors, along with examples to help you understand how to use them effectively in your web development projects.
