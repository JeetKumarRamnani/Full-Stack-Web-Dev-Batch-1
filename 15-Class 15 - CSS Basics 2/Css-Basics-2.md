## CSS Basics Lecture 2 : Best Practices,Selectors,Comments AND Background

### Topics Covered:

1. **Which Is The Best Way To Write CSS And Why (inline, internal, or external)?**
2. **What Do You Mean By Selectors In CSS?**
3. **Purpose Of Selectors**
4. **Types Of Selectors In CSS**
5. **Simple/Basic Selectors In CSS (Type/Element, Class, ID, Universal)**
6. **How To Add Comments In CSS**
7. **Single And Multiline Comments In CSS**


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

  A "simple selector" in CSS refers to a selector that targets one or more HTML elements based on a specific criterion, such as element type, class, ID, or other attributes. Simple selectors are the most fundamental building blocks of CSS selectors and are used to apply styles to specific elements on a web page.

Here's a breakdown of what is meant by a "simple selector" in the context of CSS:

1. **Element Type Selector (Type Selector):**
   - A simple selector that targets HTML elements based on their element type. For example, targeting all `<p>` elements on a page using the `p` selector.

2. **Class Selector:**
   - A simple selector that targets elements with a specific class attribute. It is denoted by a period (.) followed by the class name. For instance, targeting all elements with the class "highlight" using the `.highlight` selector.

3. **ID Selector:**
   - A simple selector that targets a specific element with a unique ID attribute. It is denoted by a hash (#) followed by the ID name. For example, targeting an element with the ID "header" using the `#header` selector.

4. **Universal Selector:**
   - A simple selector that selects all elements on the page. It is denoted by an asterisk (*). This selector is used when you want to apply a style rule to every element.

Simple selectors are combined with other CSS selectors to create more complex and specific selection criteria. For example, you can combine an element type selector with a class selector to target specific elements with a particular element type and class, like `p.highlight` to target paragraphs with the "highlight" class. These simple selectors provide flexibility and granularity in styling web page elements.

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
