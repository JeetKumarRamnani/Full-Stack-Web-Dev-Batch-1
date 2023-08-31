### Lecture 9 Multipage Site,File Paths,Quotations,HTML Entities and Multimedia Tags

#### Table of Contents

1. Multipage Website (Web Connecting Multiple Pages with Hypertext)
2. Quotation and Cite Tags
3. File Path
4. Types of File Paths (Absolute and Relative Path)
5. Absolute vs. Relative Path
6. Multimedia Tags and Their Attributes
7. Favicon Icon
8. HTML Entities

9. **Multipage Website (Web Connecting Multiple Pages with Hypertext)**
   A multipage website refers to a website that consists of multiple interconnected web pages, each accessible through hyperlinks. Hypertext enables users to navigate between pages by clicking on links.

10. **Quotation and Cite Tags**
    Quotation and citation tags in HTML include `<blockquote>`, `<q>`, `<abbr>`, `<address>`, `<cite>`, and `<bdo>`. These tags are used to define and format quotations, abbreviations, addresses, and citations in a webpage.
11. **File Path**
    A file path describes the location of a file within a website's folder structure. It is used when linking to external files such as web pages, images, style sheets, and JavaScripts.

File paths are used when linking to external files, like:

- Web pages
- Images
- Style sheets
- JavaScripts

4. **Types of File Paths (Absolute and Relative Path)**
   There are two types of file paths:

   - Absolute Path: It provides the complete path from the root directory to the file.
   - Relative Path: It specifies the path relative to the current document or file.

5. **Absolute vs. Relative Path**
   The main difference between absolute and relative paths is that absolute paths start from the root directory, while relative paths start from the current directory.

6. **Multimedia Tags and Their Attributes**

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

</video>

<!-- Audio tag -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio tag.
</audio>

<!-- Iframe tag -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="640" height="360"></iframe>

7. **Favicon Icon**
   A favicon is a small icon displayed in the browser's address bar or tab for a website. It is typically saved as a `.ico` file and can be specified using the `<link>` tag in the HTML head section.

8. **HTML Entities**
   HTML entities are special characters represented using their entity names or codes. For example, `&lt;` represents the less-than sign `<`, and `&copy;` represents the copyright symbol ©.

#### Assignments:

1. Create a simple HTML page containing different types of HTML elements, including headings, paragraphs, images, and links. Apply custom styles to these elements using both class and ID selectors in CSS.

2. Build a multipage website with at least three interconnected pages. Each page should have a navigation menu allowing users to move between the pages easily.

3. Add multimedia elements to one of the pages in your multipage website. Include an image, a video, an audio file, and an embedded iframe with external content.

4. Create an HTML page with a blockquote and a citation to showcase the usage of quotation and cite tags.

5. Add a favicon to your website so that it appears in the browser tab when users visit your site.

6. Experiment with different HTML entities to display special characters in your webpage.

Remember to use proper file paths when linking to external resources, and organize your files neatly in a folder structure for the website.
