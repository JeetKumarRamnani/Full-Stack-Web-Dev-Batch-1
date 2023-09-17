## CSS Intermediate Lecture 2: Texts, Fonts,Overflow, Icons, Pseudo-classes,Links,Lists And Table

### Topics Covered:

1. **Text Properties**
    - **Font Size**: Adjusting the size of text content.
    - **Font Weight**: Controlling the thickness or boldness of text.
    - **Text Color**: Changing the color of text.
    - **Text Alignment**: Aligning text within its container.
    - **Text Decoration**: Adding underline, overline, or strikethrough to text.
    - **Text Transform**: Modifying text capitalization (e.g., uppercase, lowercase).
    - **Line Height**: Adjusting the space between lines of text.
    - **Letter Spacing**: Changing the spacing between letters.

2. **Font Properties**
    - **Font Family**: Specifying the typeface or font style.
    - **Web-safe Fonts**: Choosing fonts that are widely supported across browsers.
    - **Fallback Fonts**: Defining alternative fonts in case the primary font is unavailable.

3. **Overflow**
    - **Overflow Property**: Controlling how content that overflows its container is displayed, whether it should be hidden, visible, or scrollable.

4. **Icons for Your Website from Third-Party Sources**
    - **Using Icon Libraries**: Integrating icon sets like Font Awesome or Material Icons.
    - **Custom Icons**: Adding custom icon images to your website.
    
5. **Pseudo-classes in CSS**
    - **What Are Pseudo-classes**: Understanding pseudo-classes as selectors that define the special state of HTML elements.
    - **Common Pseudo-classes**:
        - `:hover`: Styling elements when the mouse hovers over them.
        - `:active`: Styling elements when they are clicked.
        - `:focus`: Styling elements when they are in focus (e.g., input fields).
        - `:nth-child()`: Selecting elements based on their position within a parent element.
    
6. **Links and Their Properties**
    - **Styling Links**: Customizing the appearance of hyperlinks.
    - **Link States**: Styling links in various states (e.g., normal, hover, visited, active).
    - **Link Effects**: Creating transitions and animations for links.
    - **Link Underlines**: Removing or modifying underlines in links.

7. **Tables and Their Properties**
    - **HTML Table Structure**: Understanding the basic structure of HTML tables, including `<table>`, `<tr>`, `<th>`, and `<td>` elements.
    - **Table Styling**: Applying CSS styles to tables, such as setting borders, background colors, and cell padding.
    - **Table Layout**: Controlling the width and layout of table columns.
    - **Table Borders**: Adding and customizing borders around table cells.
    - **Table Headings**: Styling table headers (`<th>`) differently from regular table cells (`<td>`).
    - **Table Row Striping**: Alternating row colors for improved readability.
    
8. **Lists and Their Properties**
    - **HTML Lists**: Understanding the three main types of HTML lists: ordered lists (`<ol>`), unordered lists (`<ul>`), and definition lists (`<dl>`).
    - **List Items**: Styling list items (`<li>`) with CSS.
    - **List Styles**: Customizing the bullet points or numbers for list items.
    - **List Positioning**: Adjusting the indentation and spacing of list items.
    - **Nested Lists**: Creating lists within lists (nested lists) and applying styles.
    - **List Markers**: Modifying the appearance of list markers (bullet points or numbers).
    - **List Counters**: Using CSS counters to create custom list numbering styles.
    

## Explanations:

1. **Text Properties**:
    - *Font Size*: This property adjusts the size of text content, making it larger or smaller as needed.
    - *Font Weight*: It controls the thickness or boldness of text, allowing you to emphasize certain words.
    - *Text Color*: Changing the color of text allows you to match it with your website's design.
    - *Text Alignment*: Text can be aligned to the left, right, center, or justified within its container.
    - *Text Decoration*: Text can be underlined, overlined, or have a strikethrough for added emphasis.
    - *Text Transform*: Altering text capitalization can make it more visually appealing.
    - *Line Height*: Adjusting line height improves readability by controlling the space between lines.
    - *Letter Spacing*: Changing letter spacing can enhance or reduce text legibility.

2. **Font Properties**:
    - *Font Family*: This property specifies the typeface or font style used for text.
    - *Web-safe Fonts*: Web-safe fonts are fonts that are widely supported across different browsers to ensure consistent text rendering.
    - *Fallback Fonts*: Define alternative fonts to maintain readability if the primary font is not available to the user.

3. **Overflow**:
    - **Overflow Property**: The `overflow` property in CSS is used to control how content that overflows its container is displayed. It determines what happens when the content inside an element exceeds the dimensions of that element's box.
    
    The `overflow` property can have several values, including:
    
    - `visible` (default): Content overflows the container without any clipping. It extends beyond the container's boundaries.
    
    - `hidden`: Content that overflows is clipped and not visible. It's effectively hidden.
    
    - `scroll`: Scrollbars are added to the container, allowing users to scroll and view the overflowing content.
    
    - `auto`: Scrollbars are added to the container only when there's overflow, otherwise, content remains visible without scrollbars.
    
    The `overflow` property is particularly useful when dealing with elements like divs, where you want to control how overflowing content is handled within a fixed-size container.

4. **Icons for Your Website from Third-Party Sources**:
    - *Using Icon Libraries*: Integrating icon libraries like Font Awesome or Material Icons simplifies the process of adding icons to your site.
    - *Custom Icons*: You can also use custom icon images and incorporate them into your website design.

5. **Pseudo-classes in CSS**:
    - *What Are Pseudo-classes*:In CSS, a pseudo-class is a keyword that is used to define a special state or behavior of an HTML element. Pseudo-classes allow you to select and style elements based on criteria that cannot be expressed using regular element selectors (like targeting all elements of a certain type or with a specific class).

The term "pseudo" means "false" or "not genuine," and in the context of CSS, it implies that you're selecting an element based on something other than its intrinsic properties, like its tag name or class. Instead, you're selecting it based on its state or interaction with the user or its position within the document structure.

Pseudo-classes are typically used to create interactive and responsive styles on web pages. For example, you can use pseudo-classes to change the color of a link when a user hovers over it, style a button when it's being clicked, or format form input fields when they receive focus.

Some common pseudo-classes include `:hover`, `:active`, `:focus`, and `:nth-child()`. These pseudo-classes allow you to apply styles to elements based on user interactions (like hovering or clicking) or based on their position within a parent element.

 - *Common Pseudo-classes*: Examples include `:hover` for styling elements on mouse hover, `:active` for styling when clicked, `:focus` for styling focused elements, and `:nth-child()` for selecting elements based on their position.
Here's a brief explanation of a few common pseudo-classes:

- `:hover`: Styles an element when the mouse pointer is placed over it.
- `:active`: Styles an element when it is being activated, typically when it's clicked.
- `:focus`: Styles an element when it gains focus, such as an input field when clicked or tabbed into.
- `:nth-child()`: Selects elements based on their position within a parent element, allowing you to style every nth child element.

Pseudo-classes are a fundamental part of CSS and are essential for creating dynamic and user-friendly web designs.
   

6. **Links and Their Properties**:
    - *Styling Links*: Customizing link styles helps them blend seamlessly with your website's design.
    - *Link States*: Different link states (normal, hover, visited, active) can be styled differently to provide user feedback and improve usability.
    - *Link Effects*: You can add transitions and animations to links to enhance the user experience.
    - *Link Underlines*: Modifying or removing underlines in links can give your design a unique look while still indicating clickable elements.



7. **Table Properties**:
        1. `border`: Specifies the width and style of the border around table elements.
        2. `border-collapse`: Determines how table borders are rendered, with options like `collapse` to merge adjacent borders.
        3. `background-color`: Sets the background color of the table or specific table elements.
        4. `padding`: Adds space inside table cells, controlling the distance between content and cell borders.
        5. `margin`: Sets the external spacing around the table.
        6. `width`: Defines the width of the table or its cells.
        7. `font-size`: Specifies the size of text within table cells.
        8. `font-weight`: Controls the thickness or boldness of text within table cells.
        9. `color`: Sets the text color within table cells.

8. **List Properties**:
        1. `list-style-type`: Specifies the type of marker used for list items (e.g., bullets, numbers, or custom markers).
        2. `list-style-image`: Allows you to use a custom image as the marker for list items.
        3. `list-style-position`: Determines whether the list markers appear inside or outside the list items.
        4. `margin`: Sets the spacing outside of list items, affecting the list's overall layout.
        5. `padding`: Adds space inside list items, controlling the distance between content and item borders.
        6. `background-color`: Sets the background color of list items or the list itself.
        7. `color`: Defines the text color within list items.
        8. `font-size`: Specifies the size of text within list items.
        9. `font-weight`: Controls the thickness or boldness of text within list items.

These properties allow you to style tables and lists to match your website's design and improve readability and user experience.