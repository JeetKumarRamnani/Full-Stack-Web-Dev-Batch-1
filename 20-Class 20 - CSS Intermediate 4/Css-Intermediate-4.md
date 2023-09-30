## CSS Intermediate Lecture 4 : CSS Units,Transitions,Image Special Properties,Box-Shadow,Opacity,Visibility And Z-Index

### Topics Covered:

1. **Image Special Properties**
2. **CSS Units Basics**
3. **How Many Types Of Units Are In CSS**
4. **Absolute Vs Relative Units**
5. **How To Add Smoothness Between Transitions Of State**
6. **Transition Properties**
7. **Opacity And Visibility**
8. **Z-Index**
9. **CSS Shadows**


## Explanations:


### 1. Image Special Properties
  I apologize for any confusion earlier. Let's clarify the definitions for the image special properties "object-fit" and "object-position":

### 1. Image Special Properties - Object-Fit and Object-Position

   - **Explanation**: In CSS, "object-fit" and "object-position" are specialized properties used to control the sizing and positioning of images (or other replaced elements like videos) within their containing elements, typically `<img>` tags. 

     - **Object-Fit**:
       - `object-fit` determines how an image should be resized and fit within its container. It defines how an image fills its allotted space, especially when the aspect ratios of the image and the container differ.
       - It can take values like `fill`, `contain`, `cover`, `none`, `scale-down`, etc.
       - For example, you can use "object-fit" to make an image fill its container while preserving its aspect ratio or cropping it as needed.

        Example:
   ```css
   img {
     width: 200px;
     height: 150px;
     object-fit: cover; /* This will make the image cover the entire container, possibly cropping parts of it. */
   }
   ```

     - **Object-Position**:
       - `object-position` specifies the precise position of the image within its container when the image is smaller than the container. It is used in conjunction with "object-fit."
       - It allows you to control where within the container the image should be placed, both horizontally and vertically.
       - You can use units like pixels, percentages, or keywords like `center`, `top`, `left`, etc., to set the position.
       - For example, you can use "object-position" to center an image within its container.

       
   Example:
   ```css
   img {
     width: 200px;
     height: 150px;
     object-fit: cover;
     object-position: center top; /* This will position the image at the center horizontally and at the top vertically within the container. */
   }
   ```

   Together, these properties provide fine-grained control over how images are displayed and positioned within their containers, ensuring responsive and aesthetically pleasing designs.

### 2. CSS Units Basics
   - **Explanation**: CSS units are used to measure things on a webpage. They tell the web browser how big or small something should be. Think of them as rulers for your web design.

### 3. How Many Types Of Units Are In CSS
   - **Explanation**: In CSS, there are mainly two types of units. One type is like a fixed ruler, always the same size. The other type is more flexible and adjusts based on what's around it.

### 4. Absolute Vs Relative Units
   - **Explanation**: Absolute units are like fixed rulers. No matter what's around, they stay the same size. Relative units, on the other hand, are like rulers that change size depending on the context.


### 5. How To Add Smoothness Between Transitions Of State
   - **Explanation**: Imagine a button that changes when you hover over it. You can make this change look smooth, not sudden. This is done using transition properties. They determine how this change happens, like going from one color to another smoothly.

### 6. Transition Properties
   - **Explanation**: Transition properties are like the directors of smooth animations. They say which parts of an element should change, how long the change should take, how it should speed up or slow down, and when it should start.


### 7. Opacity And Visibility
   - **Explanation**: These two things help you control what's seen on a webpage:
     - `opacity` is like a transparency slider. It makes things see-through.
     - `visibility` is like a magic cloak. It can hide things without them disappearing.

### 8. Z-Index
   - **Explanation**: Think of web elements like cards stacked on top of each other. The `z-index` is like a label on each card, saying which card is on top and which is at the bottom. It helps control which things are in front and which are behind.

### 9. CSS Shadows
   - **Explanation**: CSS shadows give elements a bit of depth. They can make things look like they're floating above the page or cast a soft shadow like a lamp. It's like adding a 3D effect to your web design.

