# JavaScript Intermediate Lecture 10: DOM (Document Object Model) Creating And Deleting Elements Using Javascript

## Topics Covered:

1. **Create Elements Using Javascript**
2. **Add Class And Id to Element**
3. **Add Content Into Element**
4. **Adding Styles Into Newly Created Element**
5. **Adding Child Element Inside Parent Element**

## Explanations:

### 1. Create Elements Using JavaScript

When working with the DOM, JavaScript provides the capability to dynamically create HTML elements. The `document.createElement` method allows you to instantiate a new HTML element. For instance, if you want to create a `div` element, you can use:

```javascript
const newElement = document.createElement('div');
```

This new element is now a JavaScript object, and you can manipulate it before appending it to the DOM.

### 2. Add Class and ID to Element

To enhance the styling and identification of dynamically created elements, you can assign classes and IDs to them. Instead of using `setAttribute`, the modern approach involves directly manipulating the `className` and `id` properties:

```javascript
newElement.className = 'my-class';
newElement.id = 'my-id';
```

This approach is more concise and aligns with modern JavaScript practices.

### 3. Add Content into Element

After creating an element, you may want to populate it with content. You can achieve this by using the `textContent` property or by creating a text node and appending it to the element:

```javascript
const textNode = document.createTextNode('This is some content');
newElement.appendChild(textNode);
```

This ensures that the content is added as text within the element.

### 4. Adding Styles into Newly Created Element

Styling dynamically created elements can be accomplished using the `style` property. You can set various style attributes such as color, font size, etc. directly:

```javascript
newElement.style.color = 'blue';
newElement.style.fontSize = '16px';
```

This allows you to apply styles programmatically to the newly created element.

### 5. Adding Child Element Inside Parent Element

To integrate the newly created element into the DOM structure, you can append it as a child to an existing element. The `appendChild` method is commonly used for this purpose:

```javascript
const parentElement = document.getElementById('parent-container');
parentElement.appendChild(newElement);
```

This adds the new element as a child inside the specified parent element, ensuring proper DOM hierarchy.

By employing these techniques, you can dynamically create, style, and insert elements into your web page, providing a flexible and interactive user experience.

# Conclusion

In conclusion, the JavaScript Intermediate Lecture 10 on DOM (Document Object Model) - Creating and Deleting Elements using JavaScript covered essential concepts for dynamically manipulating the structure of web pages. Here's a summary of the key points:

1. **Create Elements Using JavaScript:**
   - Utilize `document.createElement` to dynamically generate HTML elements.
   - Instantiating a new element allows for flexibility in adding content, styling, and other properties programmatically.

2. **Add Class and ID to Element:**
   - Enhance the styling and identification of elements by directly manipulating the `className` and `id` properties.
   - This approach is more concise and aligns with modern JavaScript practices.

3. **Add Content into Element:**
   - Populate elements with content using the `textContent` property or by creating a text node.
   - `document.createTextNode` creates a text node, which can then be appended to the element.

4. **Adding Styles into Newly Created Element:**
   - Apply styles to elements using the `style` property.
   - Set various style attributes such as color, font size, etc., directly within the JavaScript code.

5. **Adding Child Element Inside Parent Element:**
   - Integrate dynamically created elements into the DOM structure by appending them as children to existing elements.
   - The `appendChild` method is commonly used for this purpose.

These techniques empower developers to build dynamic and interactive web pages, allowing for the creation of elements on-the-fly and their seamless integration into the document structure. Adopting modern JavaScript practices, such as directly manipulating properties like `className` and `id`, contributes to cleaner and more readable code. Overall, understanding these concepts is crucial for effective DOM manipulation and responsive web development.