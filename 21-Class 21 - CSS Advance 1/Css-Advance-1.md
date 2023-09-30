## CSS Advance Lecture 1 : Flexbox,1D Layouts,Parent Controls The Child,Parent Properties,Child Properties

### Topics Covered:

1. **What Is Flexbox**
2. **What Do You Mean By 1D Layouts**
3. **Flexbox Gives Ability To Parent Container To Control The Position Of Their Children**
4. **What Does It Mean By Flex Container And Flex Items**
5. **One Property To Make Flex Container And Flex Items**
6. **Main And Cross Axis**
7. **Main And Cross Axis Works According To Direction; If You Change The Flex Direction, Main AND Cross Axis Will Also Change**
8. **Flex Container Properties**
    - `display: flex`
    - `flex-direction`
    - `flex-wrap`
    - `justify-content`
    - `align-items`
    - `align-content`

9. **Flex Item Properties**
    - `flex`
    - `order`
    - `align-self`
10. **Horizontal Direction (Main Axis) And Vertical Direction (Cross Axis) Properties**



## Explanations:

### 1. What Is Flexbox:
   - Flexbox, short for Flexible Box Layout, is a CSS layout model that provides an efficient way to design one-dimensional layouts. It allows you to distribute space and align items in a container, even when their sizes are unknown or dynamic.

### 2. What Do You Mean By 1D Layouts:
   - 1D layouts refer to layouts that are designed along a single axis, either horizontally or vertically. Flexbox is particularly suited for creating such one-dimensional layouts.

### 3. Flexbox Gives Ability To Parent Container To Control The Position Of Their Children:
   - With Flexbox, the parent container has the ability to control the arrangement and positioning of its child elements. This makes it easier to create responsive and adaptive layouts.

### 4. What Does It Mean By Flex Container And Flex Items:
   - In Flexbox, there are two key components: the flex container and flex items. The flex container is the parent element that holds one or more flex items. Flex items are the child elements inside the flex container.

### 5. One Property To Make Flex Container And Flex Items:
   - The `display: flex` property is used to turn an element into a flex container. All its immediate child elements become flex items by default.

### 6. Main And Cross Axis:
   - In Flexbox, there are two axes: the main axis and the cross axis. The main axis is determined by the `flex-direction` property and is the primary direction for laying out items. The cross axis is perpendicular to the main axis.

### 7. Main And Cross Axis Works According To Direction; If You Change The Flex Direction, Main AND Cross Axis Will Also Change:
   - The main axis and cross axis orientation depends on the value of the `flex-direction` property. Changing this property will also change the orientation of these axes.

### 8. Flex Container Properties:
   - `display: flex`: Converts an element into a flex container.
   - `flex-direction`: Defines the main axis direction (row, row-reverse, column, column-reverse).
   - `flex-wrap`: Determines whether flex items should wrap to the next line when the container overflows.
   - `justify-content`: Controls the alignment of items along the main axis.
   - `align-items`: Aligns items along the cross axis within the container.
   - `align-content`: Aligns multiple lines of items along the cross axis.

### 9. Flex Item Properties:
   - `flex`: Sets the flex grow, flex shrink, and flex basis of an item.
   - `order`: Specifies the order in which items are displayed within the container.
   - `align-self`: Overrides the `align-items` property for a specific flex item.

### 10. Horizontal Direction (Main Axis) And Vertical Direction (Cross Axis) Properties:
    - These properties, such as `justify-content` and `align-items`, help you control the positioning of items on the main and cross axes, allowing for precise layout control.

Flexbox is a powerful tool for creating responsive and dynamic layouts, and understanding these concepts and properties is essential for mastering its use in CSS.