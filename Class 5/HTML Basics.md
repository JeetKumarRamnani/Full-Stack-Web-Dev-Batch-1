### Lecture 1: Introduction to HTML

#### Topics Covered:

- What is HTML?
- History Of HTML?
- Basic structure of an HTML document
- Root Element
- Doctype Declaration What Is It
- HTML elements and tags
- Difference Between Element And Tags?
- Case Sensitive Vs Case Insensitive
- Headings, paragraphs, and line breaks

## Hyper Text Markup Language (HTML)

HTML, which stands for Hypertext Markup Language, is the standard language used to create and format web pages. It is the backbone of the World Wide Web, allowing users to access and view content on the internet through web browsers.

- **Hyper:** The term "Hyper" refers to hypertext, which is a method of organizing and linking information within a document or a set of documents. Unlike traditional linear text, hypertext allows users to navigate non-sequentially, jumping from one piece of content to another through hyperlinks. Hyperlinks are elements within a document that point to another location, whether it's within the same document or to an entirely different document. HTML allows the creation of hyperlinks using anchor (`<a>`) tags.

- **Text:** In the context of HTML, "Text" refers to the content that is displayed on a web page. This content can include headings, paragraphs, lists, and other textual elements. HTML is primarily responsible for defining the structure of text-based content on the web.

- **Markup:** "Markup" refers to the process of adding special instructions or tags to text to define its structure and presentation. In HTML, tags are used to mark up the content and provide instructions to web browsers on how to display it. Tags are enclosed in angle brackets (`< >`) and can be either opening tags, such as `<h1>`, or closing tags, such as `</h1>`. The content between the opening and closing tags is affected by the markup.
  In simple terms, markup is the process of using special symbols (tags) to define the structure of a document. HTML uses these tags to specify the elements and layout of a webpage, making it easier for web browsers to interpret and display the content correctly.
  (Aasan Alfazon Me Baat Itni Hai Ke Jisme Aap Tags Jaise Cheezein Use Karrhe Ho Page Ka Structure Banane K Lie Usi Lannguage Ko Markup Language Kehte Hain HTML Mein Ham Special Anotations Yaani Ke Tags Use Karte Hain Jinki Specific Meaning Hoti Hai)

- **Language:** "Language" signifies that HTML is a formalized set of rules and syntax used to create web pages. It provides a standardized way for web developers to structure and present content in a manner that can be interpreted and rendered by web browsers.

In summary, **HTML (Hyper Text Markup Language)** is a markup language that enables the creation and structuring of web content, including text, images, multimedia, and hyperlinks. By using HTML tags, developers define the organization and presentation of content, allowing users to navigate between documents through hyperlinks and experience non-linear, interconnected information on the World Wide Web.

## History of HTML

The history of HTML can be traced back to the early development of the internet.
Here's an overview of its history:

1. **Early beginnings (1989-1993):**
   HTML's origins can be traced back to the work of Sir Tim Berners-Lee, a British scientist working at CERN (European Organization for Nuclear Research). In 1989, Berners-Lee proposed the idea of a system that would allow researchers to share and access documents over the internet. This led to the development of the first web browser, called "WorldWideWeb" (later renamed "Nexus"), and the first web server. In 1990, the first webpage was created, which was essentially a basic HTML document.

2. **HTML Versions:**

   - HTML 1.0: The earliest version of HTML was never formally standardized and was very simple, with limited capabilities. It allowed for basic structuring of text, headings, and lists was published in 1993
   - HTML 2.0: This version was published in 1995 and introduced more elements like images and form controls. It also defined the basic structure of an HTML document.
   - HTML 3.2: Published in 1997, this version brought additional features like tables and support for scripting languages like JavaScript.
   - HTML 4.0 and 4.01: These versions, released in 1997 and 1999 respectively, further expanded the capabilities of HTML with support for style sheets and multimedia content.
   - XHTML: This version, introduced in 2000, was an XML-based reformulation of HTML 4.01, adhering to stricter syntax rules and aiming for greater compatibility with other XML tools.

3. **XHTML and HTML5 (2000s):**
   In the early 2000s, there was a push toward XHTML, which was expected to be the future of web development. However, XHTML's stricter syntax made it challenging for developers, and it never fully replaced HTML. Meanwhile, the web was evolving rapidly, and the need for more advanced and flexible features led to the development of the Web Hypertext Application Technology Working Group (WHATWG) in 2004. They began work on a new version of HTML, which would become HTML5.

4. **HTML5 (2014):**
   HTML5 was designed to address the limitations of previous HTML versions and to accommodate the changing landscape of the internet, including multimedia support and mobile devices. It introduced numerous new elements, attributes, and APIs, making it easier for developers to create interactive and multimedia-rich web pages without relying heavily on plugins like Flash. HTML5 also brought improvements to web forms and introduced support for offline web applications.

5. **Ongoing Development:**
   HTML5 has been continuously updated and refined since its initial release. New features and improvements are added as part of the Living Standard, which means it is continually evolving to meet the changing needs of the web and its users.

Throughout its history, HTML has been a fundamental technology in enabling the growth of the internet and the development of the World Wide Web. It has played a significant role in shaping the way we access and interact with information online.

4. **Root Element:** The outermost element in an HTML document is the root element. In HTML5, it's typically the `<html>` element. All other elements are descendants of this root element.

## Document Type Declaration (DOCTYPE) in HTML

The Document Type Declaration (DOCTYPE) in HTML is a crucial component that informs web browsers about the version and type of markup language used in an HTML document. It acts as a directive to browsers, instructing them on how to interpret and render the content of the web page.

### Purpose of DOCTYPE:

The main purpose of the DOCTYPE is to enable browsers to render web pages accurately and consistently. Different versions of HTML have distinct syntax and rules, and browsers need to know which version is being used in the document to display it correctly. By including the DOCTYPE declaration, web developers ensure that browsers interpret the document using the appropriate rules and rendering engines.

### Syntax of DOCTYPE:

In HTML, the DOCTYPE declaration is placed at the very beginning of an HTML document, before any other content or elements. The basic syntax is as follows:

<!DOCTYPE html>

The above syntax is used for HTML5 documents. For older versions of HTML, the DOCTYPE declaration may vary. For example, for HTML 4.01 Transitional, the declaration would be:

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

### HTML5 and DOCTYPE:

With the introduction of HTML5, the DOCTYPE declaration has been greatly simplified. The HTML5 DOCTYPE declaration (`<!DOCTYPE html>`) is case-insensitive and backward-compatible. This means that modern browsers will recognize the DOCTYPE even if it is in lowercase (`<!doctype html>`).

### Impact on Browser Rendering:

The DOCTYPE declaration has a significant impact on how browsers interpret and display web pages. Without a valid DOCTYPE, browsers may fall back to a "quirks mode" rendering, which emulates older, non-standard behavior. This can lead to inconsistent rendering across different browsers and versions.

By providing a valid DOCTYPE, web developers ensure that their HTML documents are interpreted in "standards mode," where browsers adhere to the appropriate specifications, resulting in consistent rendering and improved compatibility.

In conclusion, the Document Type Declaration (DOCTYPE) is a critical element in HTML that specifies the version and type of markup language used in an HTML document. It enables browsers to render web pages correctly and consistently, ensuring a better user experience across various browsers and devices. For modern HTML documents, the HTML5 DOCTYPE declaration (`<!DOCTYPE html>`) is the recommended and simplified approach.

**Element:** Building block of a webpage, represents content or structure (e.g., paragraph, image).

**Tags:** Special codes (in angle brackets) defining element's start and end, enabling browser interpretation (e.g., <p> for paragraph).

**Case-sensitive**: Case-sensitive means that the computer cares about uppercase and lowercase letters, so "Word" and "word" are different.

**Case-insensitive**: Case-insensitive means the computer doesn't care about uppercase and lowercase letters, treating "Word" and "word" as the same.

#### Assignments:

1. Create a simple webpage with a heading, a few paragraphs, and line breaks to format the content.
2. Build a personal introduction webpage with headings for name, education, hobbies, and a brief description under each heading.
