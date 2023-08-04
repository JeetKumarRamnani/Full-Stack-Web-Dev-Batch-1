### Lecture 8 Element Types, User Agent, File Paths, HTML Bookmarks,Identifiers, and Multimedia Tags

In this lecture, we will cover various topics related to web development, including elements in HTML, user agents, file paths, HTML bookmarks, and multimedia tags. Let's dive into each topic:

#### Table of Contents

1. What Actually Are Elements?
2. User Agent
3. Default Styles Given by User Agent/Browser to the Elements
4. Types of Elements (Block and Inline)
5. ID and Class Attributes (Identifying Elements)
6. ID vs. Class
7. HTML Bookmarks
8. Multipage Website (Web Connecting Multiple Pages with Hypertext)
9. Quotation and Cite Tags
10. File Path
11. Types of File Paths (Absolute and Relative Path)
12. Absolute vs. Relative Path
13. Multimedia Tags and Their Attributes
14. Favicon Icon
15. HTML Entities

Now, let's explain each topic in detail:

1. **What Actually Are Elements?**
   Elements are fundamental building blocks in HTML that define the structure and content of a webpage. They are represented by tags and usually consist of an opening tag, content, and a closing tag. Elements can be as simple as a paragraph `<p>` or more complex, like tables `<table>` or forms `<form>`.

2. **User Agent**
   A user agent is a piece of information sent by the web browser when it requests a webpage from a server. It identifies the software and device used to access the website. User agents typically include details about the browser, operating system, and device type.
   A user agent is a relatively short bit of text that (attempts to) describe the Software/Browser (the "Agent") that is making the request to a website. Web browsers include the user agent string in the requests they make to websites. The User Agent often includes descriptions of the Operating System and Device Type that the Browser/Agent is running on.

3. **Default Styles Given by User Agent/Browser to the Elements**
   Browsers apply default styles to various HTML elements to ensure consistent rendering across different websites. For example, headings may be bold, links may be blue, and paragraphs may have a certain font size.

4. **Types of Elements (Block and Inline)**
   Elements can be categorized as block-level or inline based on how they interact with other elements. Block-level elements start on a new line and occupy the full width available, while inline elements only take up as much space as necessary within a line.

5. **ID and Class Attributes (Identifying Elements)**
   Both ID and class attributes are used to identify and target specific HTML elements for styling or JavaScript interactions. IDs are unique, meaning they can only be used once on a page, while classes can be used multiple times.

   Note: The id name is case sensitive!

   Note: The id name must contain at least one character, cannot start with a number, and must not contain whitespaces (spaces, tabs, etc.).

6. **ID vs. Class**
   ID and class attributes serve similar purposes, but their main difference lies in their uniqueness. IDs must be unique on the page, while classes can be applied to multiple elements.

7. **HTML Bookmarks**
   HTML bookmarks are used to allow readers to jump to specific parts of a webpage easily. Bookmarks are created with the `id` attribute and can be linked to using anchor tags `<a>`.

8. **Multipage Website (Web Connecting Multiple Pages with Hypertext)**
   A multipage website refers to a website that consists of multiple interconnected web pages, each accessible through hyperlinks. Hypertext enables users to navigate between pages by clicking on links.

9. **Quotation and Cite Tags**
   Quotation and citation tags in HTML include `<blockquote>`, `<q>`, `<abbr>`, `<address>`, `<cite>`, and `<bdo>`. These tags are used to define and format quotations, abbreviations, addresses, and citations in a webpage.

10. **File Path**
    A file path describes the location of a file within a website's folder structure. It is used when linking to external files such as web pages, images, style sheets, and JavaScripts.

File paths are used when linking to external files, like:

- Web pages
- Images
- Style sheets
- JavaScripts

11. **Types of File Paths (Absolute and Relative Path)**
    There are two types of file paths:

    - Absolute Path: It provides the complete path from the root directory to the file.
    - Relative Path: It specifies the path relative to the current document or file.

12. **Absolute vs. Relative Path**
    The main difference between absolute and relative paths is that absolute paths start from the root directory, while relative paths start from the current directory.

13. **Multimedia Tags and Their Attributes**

    _What is Multimedia?_
    Multimedia comes in many different formats. It can be almost anything you can hear or see, like images, music, sound, videos, records, films, animations, and more.

    Web pages often contain multimedia elements of different types and formats.
    HTML provides multimedia tags like `<img>`, `<video>`, `<audio>`, and `<iframe>` to embed images, videos, audio, and external web content into webpages. These tags have various attributes to control their behavior.

<!-- Image tag -->
<img src="image.jpg" alt="A beautiful image">

<!-- Video tag -->
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

<!-- Audio tag -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio tag.
</audio>

<!-- Iframe tag -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="640" height="360"></iframe>

14. **Favicon Icon**
    A favicon is a small icon displayed in the browser's address bar or tab for a website. It is typically saved as a `.ico` file and can be specified using the `<link>` tag in the HTML head section.

15. **HTML Entities**
    HTML entities are special characters represented using their entity names or codes. For example, `&lt;` represents the less-than sign `<`, and `&copy;` represents the copyright symbol ©.

#### Assignments:

1. Create a simple HTML page containing different types of HTML elements, including headings, paragraphs, images, and links. Apply custom styles to these elements using both class and ID selectors in CSS.

2. Build a multipage website with at least three interconnected pages. Each page should have a navigation menu allowing users to move between the pages easily.

3. Add multimedia elements to one of the pages in your multipage website. Include an image, a video, an audio file, and an embedded iframe with external content.

4. Create an HTML page with a blockquote and a citation to showcase the usage of quotation and cite tags.

5. Add a favicon to your website so that it appears in the browser tab when users visit your site.

6. Experiment with different HTML entities to display special characters in your webpage.

Remember to use proper file paths when linking to external resources, and organize your files neatly in a folder structure for the website.
