# HTML Fundamentals --- Complete Notes from Lingaraj's Handwritten Notebook

**Source:** *HTML handwriting notes from Lingaraj.pdf* (21 scanned
pages)

These notes reorganize the concepts and examples in the handwritten
notebook into Markdown. Examples are typed for readability. Where a
handwritten example is unclear or uses outdated HTML, a short
clarification is included without changing the underlying topic.

------------------------------------------------------------------------

## 1. What is HTML? --- Page 1

**HTML** stands for **HyperText Markup Language**.

-   HTML is the standard markup language used to create webpages.
-   It describes the structure and content of a webpage.
-   HTML consists of elements represented by tags.
-   Elements tell the browser how to structure content such as headings,
    paragraphs, links, images, and forms.
-   The browser reads HTML and renders the webpage.

### What is an HTML document?

An HTML document is a text document written using HTML markup.

-   An HTML document generally starts with `<!DOCTYPE html>`.
-   The document's HTML content is enclosed by `<html>` and `</html>`.
-   The document usually contains a `<head>` section and a `<body>`
    section.

------------------------------------------------------------------------

## 2. `<!DOCTYPE html>` Declaration --- Page 2

`<!DOCTYPE html>` is the document type declaration.

-   It tells the browser that the document uses modern HTML.
-   It helps the browser render the page in standards mode.
-   It is placed at the beginning of an HTML document.
-   It is a declaration, not a normal HTML element.
-   It is not case-sensitive in HTML, although the lowercase form is
    conventional.

Example:

``` html
<!DOCTYPE html>
```

------------------------------------------------------------------------

## 3. What is an HTML Element? --- Page 2

An HTML element is usually made up of:

1.  An opening tag
2.  Content
3.  A closing tag

General structure:

``` html
<tagname>Content</tagname>
```

Example:

``` html
<h2>This is a heading</h2>
<p>This is a paragraph.</p>
```

The text between the opening and closing tags is the element's content.

### Void elements

Some HTML elements do not have closing tags because they do not wrap
content. Examples include:

``` html
<br>
<img src="photo.jpg" alt="Photo">
<input type="text">
```

------------------------------------------------------------------------

## 4. Nested HTML Elements --- Pages 2--3

An HTML element can contain other HTML elements. These are called
**nested elements**.

Example:

``` html
<body>
  <h2>This is a heading</h2>
  <p>This is a paragraph.</p>
</body>
```

-   `<body>` is the parent of the heading and paragraph.
-   `<h2>` and `<p>` are child elements of `<body>`.
-   The heading and paragraph are siblings because they share the same
    parent.

### Points to remember

-   Most HTML elements can contain other elements, subject to HTML
    content rules.
-   Elements should be properly nested.
-   Elements should not overlap their opening and closing tags.
-   Void elements such as `<img>`, `<input>`, and `<br>` do not wrap
    child content.

------------------------------------------------------------------------

## 5. HTML Attributes --- Page 3

HTML elements can have **attributes**. Attributes provide additional
information about an element and are written in the opening tag.

Example:

``` html
<p title="More information">Hover over this paragraph.</p>
<a href="https://example.com">Visit example</a>
<img src="photo.jpg" alt="A photo">
```

Attributes usually use a name/value pair:

``` html
name="value"
```

Examples of common attributes:

-   `id`
-   `class`
-   `name`
-   `type`
-   `href`
-   `src`
-   `alt`
-   `title`
-   `value`
-   `placeholder`

### Points to remember

-   Put attributes in the opening tag.
-   Quote attribute values; double quotes are a common convention.
-   Some attributes are Boolean attributes, such as `disabled` and
    `required`.
-   An element can have multiple attributes.

Example:

``` html
<input id="email" name="email" type="email" placeholder="Enter email">
```

------------------------------------------------------------------------

## 6. Basic HTML Document Structure --- Page 4

``` html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Tutorial</title>
  </head>
  <body>
    <p>My first HTML document.</p>
  </body>
</html>
```

### Main parts

-   `<!DOCTYPE html>` --- declares a modern HTML document.
-   `<html>` --- root element of the document.
-   `<head>` --- contains document metadata and resource references.
-   `<title>` --- sets the title shown in the browser tab.
-   `<body>` --- contains the webpage's main visible content.

### `<head>` versus `<body>`

The `<head>` generally contains information *about* the document, such
as its title, metadata, stylesheets, and scripts. The `<body>` contains
the content displayed as part of the webpage.

------------------------------------------------------------------------

## 7. HTML Headings --- Page 5

HTML has six heading levels, from `<h1>` to `<h6>`.

``` html
<h1>Most important heading</h1>
<h2>Second-level heading</h2>
<h3>Third-level heading</h3>
<h4>Fourth-level heading</h4>
<h5>Fifth-level heading</h5>
<h6>Least prominent heading</h6>
```

-   `<h1>` is the highest-level heading.
-   `<h6>` is the lowest-level heading.
-   Browsers provide default heading styles and sizes.
-   CSS can change heading appearance.
-   Choose heading levels according to the document's structure, not
    only their default size.

Example:

``` html
<h1>Welcome</h1>
<h2>Course Details</h2>
<h3>Java</h3>
```

------------------------------------------------------------------------

## 8. HTML Paragraphs --- Pages 5--6

The `<p>` element defines a paragraph.

``` html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

-   Browsers normally display a paragraph as a block of text.
-   Browsers add space before and after paragraphs by default.
-   Extra spaces and line breaks typed inside ordinary HTML source are
    generally collapsed when rendered.

### Example

``` html
<p>
  Welcome to the HTML lesson.
  This text belongs to the same paragraph.
</p>
```

------------------------------------------------------------------------

## 9. HTML Line Breaks --- Page 6

The `<br>` element inserts a line break within text.

``` html
<p>
  Welcome to Karnataka.<br>
  Welcome to Bengaluru.
</p>
```

Use `<br>` when a line break is part of the content, such as an address
or a poem. Do not use repeated `<br>` elements to create page layout or
large vertical gaps; use CSS for layout and spacing.

`<br>` is a void element and does not require a closing tag.

------------------------------------------------------------------------

## 10. The `<pre>` Element --- Page 6

The `<pre>` element represents preformatted text. Whitespace and line
breaks inside it are preserved by the browser, subject to normal HTML
parsing rules.

``` html
<pre>
Welcome to HTML.
    This line has indentation.
This is another line.
</pre>
```

It is useful for text where spacing and line breaks matter, such as code
examples or ASCII text.

------------------------------------------------------------------------

## 11. HTML Text Formatting Elements --- Page 7

The notebook lists these text-formatting elements:

  -----------------------------------------------------------------------
  Element                             Purpose
  ----------------------------------- -----------------------------------
  `<b>`                               Draws attention through bold
                                      presentation without adding
                                      importance by itself

  `<strong>`                          Marks text as strongly important

  `<i>`                               Marks text in an alternate voice or
                                      mood; browsers usually render it in
                                      italics

  `<em>`                              Marks stress emphasis

  `<small>`                           Represents side comments or small
                                      print

  `<del>`                             Represents deleted text

  `<sub>`                             Represents subscript text

  `<sup>`                             Represents superscript text

  `<mark>`                            Highlights text for reference or
                                      relevance
  -----------------------------------------------------------------------

Examples:

``` html
<p><b>Bold text</b></p>
<p><strong>Important text</strong></p>
<p><i>Alternate voice</i></p>
<p><em>Emphasized text</em></p>
<p><small>Small print</small></p>
<p><del>Deleted text</del></p>
<p>H<sub>2</sub>O</p>
<p>x<sup>2</sup></p>
<p><mark>Highlighted text</mark></p>
```

### Example: Combining formatting

``` html
<p>
  Welcome to <strong>Kalyana</strong>.
  <em>Learn HTML</em> step by step.
</p>
```

Use semantic elements such as `<strong>` and `<em>` according to
meaning, not just visual appearance.

------------------------------------------------------------------------

## 12. Inline Styling with the `style` Attribute --- Page 7

The `style` attribute applies CSS declarations directly to an element.

Syntax:

``` html
<tagname style="property: value;">
  Content
</tagname>
```

Example:

``` html
<p style="font-size: 20px; color: red;">Hello</p>
```

-   `font-size` changes text size.
-   `color` changes text color.
-   Each CSS declaration uses a property and value.
-   Declarations are separated by semicolons.

Inline styles are useful for simple demonstrations, but larger projects
usually use CSS classes or external stylesheets to keep styling
maintainable.

------------------------------------------------------------------------

## 13. The `<div>` Element --- Page 8

The `<div>` element is a generic block-level container used to group
content.

``` html
<div>
  <h2>Section heading</h2>
  <p>This is a section.</p>
</div>
```

Uses:

-   Group related HTML elements.
-   Organize page sections.
-   Apply CSS to a group of elements.
-   Provide a container for layout or scripting.

Example with inline styling:

``` html
<div style="color: red;">
  <h3>Section One</h3>
  <p>This is a section.</p>
</div>

<div style="color: blue;">
  <h3>Section Two</h3>
  <p>This is another section.</p>
</div>
```

A `<div>` has no special meaning by itself. Use semantic elements such
as `<section>`, `<nav>`, or `<main>` when they better describe the
content.

------------------------------------------------------------------------

## 14. The `<span>` Element --- Page 9

The `<span>` element is a generic inline container for text or other
phrasing content.

``` html
<p>
  Hello <span style="color: green;">Lingaraj</span>.
</p>
```

Uses:

-   Group a small part of text.
-   Apply styling to a portion of a sentence.
-   Mark a section of inline content for scripting.

### Difference between `<div>` and `<span>`

-   `<div>` is a generic block-level container.
-   `<span>` is a generic inline container.

Example:

``` html
<p>
  Hello <span style="color: green;">Lingaraj</span>.
</p>
```

The `span` can style the name without making it a separate block.

------------------------------------------------------------------------

## 15. HTML Links --- Pages 9--10

The `<a>` element creates a hyperlink.

Basic syntax:

``` html
<a href="URL">Link text</a>
```

Example:

``` html
<a href="https://www.kalyana.com">Kalyana</a>
```

-   `<a>` is the anchor element.
-   `href` specifies the destination.
-   The text between the tags is the visible link text.

### Open a link in a new tab

``` html
<a href="https://www.kalyana.com" target="_blank">
  Kalyana
</a>
```

`target="_blank"` normally opens the destination in a new browsing
context, commonly a new tab.

For security, modern browsers generally treat `_blank` links as having
`noopener` behavior. Explicitly using `rel="noopener"` is also a clear
convention.

``` html
<a href="https://www.kalyana.com"
   target="_blank"
   rel="noopener">
  Kalyana
</a>
```

### Link to another HTML file

``` html
<a href="dreams.html">Dreams</a>
```

The link points to a file named `dreams.html`, assuming that path exists
relative to the current page.

### Open a link at a specified location

The notebook includes the idea of using a link to jump to a particular
part of a page. This can be done with a fragment identifier:

``` html
<a href="#contact">Go to Contact</a>

<h2 id="contact">Contact</h2>
```

The `href="#contact"` points to the element whose ID is `contact`.

### Link with a tooltip

The `title` attribute can provide advisory information when a user
hovers over a link.

``` html
<a href="https://www.kalyana.com"
   title="This is Kalyana's website">
  Kalyana
</a>
```

The title is an attribute, not the link's visible text.

------------------------------------------------------------------------

## 16. HTML Images --- Page 11

The `<img>` element embeds an image in a webpage.

Basic syntax:

``` html
<img src="image.jpg" alt="Description of the image">
```

-   `src` specifies the image resource.
-   `alt` provides alternative text for users who cannot see the image
    and for situations where the image cannot be displayed.
-   `<img>` is a void element; it does not use a closing tag.

### Example with dimensions

``` html
<img
  src="kalyana.jpg"
  alt="Kalyana logo"
  width="300"
  height="200"
>
```

### Example with inline styling

``` html
<img
  src="kalyana.jpg"
  alt="Kalyana logo"
  style="width: 300px; height: 200px;"
>
```

The notebook demonstrates using `src`, `alt`, `width`, and `style`. In
practice, provide meaningful alternative text when the image conveys
information. For decorative images, an empty `alt=""` may be
appropriate.

------------------------------------------------------------------------

## 17. HTML Tables --- Pages 11--12

HTML tables represent tabular data arranged in rows and columns.

### Common table elements

  Element       Purpose
  ------------- ------------------------------------
  `<table>`     Defines the table
  `<caption>`   Gives the table a title or caption
  `<thead>`     Groups header rows
  `<tbody>`     Groups the main data rows
  `<tr>`        Defines a table row
  `<th>`        Defines a header cell
  `<td>`        Defines a data cell

### Example

``` html
<table>
  <caption>Course Details</caption>
  <thead>
    <tr>
      <th>Number</th>
      <th>Category</th>
      <th>Course</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Commerce</td>
      <td>Accounting</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Arts</td>
      <td>Journalism</td>
    </tr>
  </tbody>
</table>
```

### Important points

-   A table contains rows represented by `<tr>`.
-   Header cells generally use `<th>`.
-   Ordinary data cells use `<td>`.
-   `<caption>` identifies the table's caption.
-   `<thead>` and `<tbody>` help organize the table's structure.

Use tables for data, not as the primary technique for webpage layout.

------------------------------------------------------------------------

## 18. HTML Lists --- Pages 13--14

The notebook covers three list types:

1.  Unordered lists
2.  Ordered lists
3.  Description lists

### 18.1 Unordered list

Use `<ul>` for a list where item order is not the main point. Items use
`<li>`.

``` html
<ul>
  <li>Core Java</li>
  <li>SQL Tutorial</li>
  <li>Python</li>
</ul>
```

Browsers usually display unordered-list items with bullets.

### 18.2 Ordered list

Use `<ol>` for an ordered sequence. Items use `<li>`.

``` html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

Browsers usually number the items.

### 18.3 Description list

Use `<dl>` for a list of terms and their descriptions.

-   `<dl>` defines the description list.
-   `<dt>` defines a term or name.
-   `<dd>` provides its description.

``` html
<dl>
  <dt>Core Java</dt>
  <dd>Java fundamentals</dd>

  <dt>SQL Tutorial</dt>
  <dd>Working with relational data</dd>
</dl>
```

### Combined example

``` html
<h2>Unordered List</h2>
<ul>
  <li>Core Java</li>
  <li>SQL Tutorial</li>
  <li>Python</li>
</ul>

<h2>Ordered List</h2>
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>

<h2>Description List</h2>
<dl>
  <dt>HTML</dt>
  <dd>Markup language for webpages</dd>
</dl>
```

------------------------------------------------------------------------

## 19. HTML Iframes --- Page 15

An `<iframe>` embeds another HTML page or browsing context inside the
current page.

Basic syntax:

``` html
<iframe src="URL" title="Description"></iframe>
```

Example:

``` html
<iframe
  src="about.html"
  title="About page"
  width="600"
  height="400">
</iframe>
```

Uses:

-   Embed another webpage.
-   Display supported embedded content.
-   Place a separate browsing context inside the current page.

### Important points

-   `src` specifies the page to embed.
-   `title` helps users of assistive technologies understand the
    embedded content.
-   `width` and `height` specify dimensions.
-   Some websites prevent embedding through security policies.
-   Cross-origin restrictions can limit how the parent page interacts
    with the iframe's document.

### Notebook examples

The notebook uses an iframe to embed an HTML file and shows width,
height, and border-related styling.

------------------------------------------------------------------------

## 20. HTML Forms --- Pages 16--17

An HTML form collects user input.

The `<form>` element groups controls that can submit information.

``` html
<form action="/submit" method="post">
  <!-- Form controls go here -->
</form>
```

### Common form elements

  Element        Purpose
  -------------- -----------------------------------
  `<form>`       Defines the form
  `<label>`      Labels a form control
  `<input>`      Accepts input of different types
  `<textarea>`   Accepts multiline text
  `<select>`     Provides a selection control
  `<option>`     Defines an option inside a select
  `<button>`     Defines a button

### Example: Basic form

``` html
<form action="/submit" method="post">
  <label for="name">Enter your name:</label>
  <input type="text" id="name" name="name">

  <button type="submit">Submit</button>
</form>
```

### The `label` element

A label describes a form control.

``` html
<label for="email">Email:</label>
<input id="email" name="email" type="email">
```

The label's `for` value should match the input's `id`.

### The `input` element

`<input>` creates a control whose behavior depends on its `type`
attribute.

``` html
<input type="text" name="username">
<input type="password" name="password">
```

The notebook includes examples of text fields, password fields, and
other form controls.

------------------------------------------------------------------------

## 21. Form Practice Exercises --- Page 17

### Exercise 1: Add a button input

Task: Add an input with type `button` and value `OK`.

``` html
<input type="button" value="OK">
```

### Exercise 2: Add two radio buttons

Task: Add two radio buttons with the same `name`, `gender`.

``` html
<input type="radio" name="gender" value="male">
<input type="radio" name="gender" value="female">
```

Using the same name groups the radio buttons so that the user can select
one option in that group.

For a complete form, add visible labels to explain each choice.

------------------------------------------------------------------------

## 22. HTML Form Elements --- Pages 17--18

### 22.1 `<label>`

Defines a label for a form control.

``` html
<label for="course">Choose a course:</label>
```

### 22.2 `<input>`

Defines an input control.

``` html
<input type="text" name="course">
```

### 22.3 `<select>`

Defines a selection control, usually a dropdown.

``` html
<select name="course">
  <option value="java">Java</option>
  <option value="python">Python</option>
</select>
```

### 22.4 `<textarea>`

Defines a multiline text input.

``` html
<textarea name="comments" rows="5" cols="30"></textarea>
```

-   `rows` suggests the visible number of text lines.
-   `cols` suggests the visible width in character units.

### 22.5 `<button>`

Defines a button.

``` html
<button type="button">Click Me</button>
```

The notebook also mentions the `onclick` attribute for handling a click.
For example:

``` html
<button type="button" onclick="alert('Hello')">Click Me</button>
```

For larger applications, event listeners in JavaScript are generally
easier to maintain than inline event-handler attributes.

### 22.6 `<datalist>`

Provides predefined suggestions for an input.

``` html
<label for="browser">Choose a browser:</label>
<input id="browser" name="browser" list="browsers">

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Edge">
</datalist>
```

The user can type a value and may select one of the suggestions.

------------------------------------------------------------------------

## 23. Complete Form Example --- Pages 18--19

The notebook includes a course-registration form containing a name,
gender, course, comments, and buttons. This is a cleaned-up equivalent:

``` html
<!DOCTYPE html>
<html>
<head>
  <title>HTML Form</title>
</head>
<body>
  <h2>Welcome to Kalyana</h2>

  <form action="/submit" method="post">
    <label for="studentName">Enter your name:</label>
    <input
      type="text"
      id="studentName"
      name="studentName"
      placeholder="Enter your name"
    >

    <p>Choose your gender:</p>
    <label>
      <input type="radio" name="gender" value="male">
      Male
    </label>

    <label>
      <input type="radio" name="gender" value="female">
      Female
    </label>

    <br><br>

    <label for="course">Choose a course:</label>
    <select id="course" name="course">
      <option value="">Select a course</option>
      <option value="java">Java</option>
      <option value="python">Python</option>
      <option value="accounting">Accounting</option>
    </select>

    <br><br>

    <label for="comments">Comments:</label>
    <textarea
      id="comments"
      name="comments"
      rows="5"
      cols="30"
      placeholder="Write your comments here">
    </textarea>

    <br><br>

    <button type="submit">Submit Form</button>
    <button type="reset">Reset</button>
  </form>
</body>
</html>
```

This example demonstrates the form structure and controls covered in the
notebook. A working form also needs a suitable server endpoint or
client-side handling.

------------------------------------------------------------------------

## 24. Form Attributes --- Page 19

### 24.1 `action`

Specifies where the form data should be sent when the form is submitted.

``` html
<form action="/submit">
```

### 24.2 `target`

Specifies where the response to the form submission should be displayed.

``` html
<form action="/submit" target="_blank">
```

### 24.3 `method`

Specifies the HTTP method used for form submission.

``` html
<form action="/submit" method="post">
```

Common values:

-   `get` --- sends form data as URL query parameters for a normal GET
    submission.
-   `post` --- sends form data in the request body.

### 24.4 `name`

Provides a name for the form element.

``` html
<form name="registrationForm">
```

### 24.5 `autocomplete`

Controls whether the browser may offer autocomplete assistance for form
fields.

``` html
<form autocomplete="on">
```

The notebook notes that autocomplete can be set to `on` or `off`.

------------------------------------------------------------------------

## 25. HTML Input Types --- Pages 19--20

The notebook lists these input types:

  Input type         Purpose
  ------------------ -----------------------------------------
  `text`             Single-line text input
  `password`         Password entry field
  `submit`           Submits the form
  `reset`            Resets controls to their initial values
  `radio`            Selects one option from a radio group
  `checkbox`         Selects or clears an independent option
  `button`           General button control
  `color`            Color picker
  `date`             Date input
  `file`             File selection
  `hidden`           Hidden form control
  `number`           Numeric input
  `email`            Email-oriented input
  `range`            Slider control
  `search`           Search-oriented text field
  `tel`              Telephone-number-oriented text field
  `url`              URL-oriented input
  `time`             Time input
  `month`            Month and year input
  `week`             Week and year input
  `datetime-local`   Local date and time input

### Examples

``` html
<input type="text" name="name">
<input type="password" name="password">
<input type="number" name="age">
<input type="email" name="email">
<input type="date" name="date">
<input type="file" name="file">
<input type="hidden" name="token" value="123">
<input type="checkbox" name="terms">
<input type="radio" name="gender" value="male">
<input type="range" name="volume">
<input type="search" name="search">
<input type="tel" name="phone">
<input type="url" name="website">
<input type="time" name="time">
<input type="month" name="month">
<input type="week" name="week">
<input type="datetime-local" name="meeting">
```

The browser's appearance and validation behavior depend on the input
type and browser implementation.

------------------------------------------------------------------------

## 26. HTML Input Attributes --- Pages 20--21

The notebook describes the following input attributes.

### 26.1 `value`

Specifies an input's initial value.

``` html
<input type="text" name="name" value="Rahul">
```

### 26.2 `readonly`

Specifies that the value can be viewed but not edited by the user
through normal interaction.

``` html
<input type="text" name="name" value="Rahul" readonly>
```

A read-only control can still generally receive focus and its value is
submitted with the form if it has a name.

### 26.3 `disabled`

Disables the control.

``` html
<input type="text" name="name" disabled>
```

Disabled controls are generally not submitted with the form and do not
behave like ordinary interactive controls.

### 26.4 `size`

Specifies the visible width of certain text inputs in character units.

``` html
<input type="text" name="name" size="30">
```

This does not specify the maximum number of characters that can be
entered.

### 26.5 `maxlength`

Specifies the maximum number of characters allowed in supported
text-like inputs.

``` html
<input type="text" name="name" maxlength="20">
```

### 26.6 `required`

Specifies that the user must provide a value before a normal form
submission can succeed.

``` html
<input type="text" name="name" required>
```

### Additional useful form examples

``` html
<input type="text" name="name" value="Rahul" size="30">
<input type="password" name="password" minlength="8" required>
<input type="number" name="age" value="25" min="1" max="100">
<input type="date" name="date" value="2026-10-11">
```

The notebook also mentions `min` and `max` for numeric or date-related
controls. Their exact behavior depends on the input type.

------------------------------------------------------------------------

## 27. HTML Concepts at a Glance

  -----------------------------------------------------------------------
  Concept                             Key point
  ----------------------------------- -----------------------------------
  HTML                                Defines webpage structure and
                                      content

  `<!DOCTYPE html>`                   Declares the document type

  `<html>`                            Root element

  `<head>`                            Document metadata and resource
                                      references

  `<title>`                           Browser-tab title

  `<body>`                            Main page content

  HTML element                        Usually opening tag, content, and
                                      closing tag

  Nested elements                     Elements inside other elements

  Attributes                          Additional information in an
                                      opening tag

  Headings                            `<h1>` through `<h6>`

  Paragraph                           `<p>`

  Line break                          `<br>`

  Preformatted text                   `<pre>`

  Text formatting                     `<strong>`, `<em>`, `<del>`,
                                      `<sub>`, `<sup>`, and others

  Inline style                        CSS declarations in the `style`
                                      attribute

  `<div>`                             Generic block container

  `<span>`                            Generic inline container

  Links                               `<a href="...">`

  Images                              `<img src="..." alt="...">`

  Tables                              `<table>`, `<tr>`, `<th>`, `<td>`

  Lists                               `<ul>`, `<ol>`, `<dl>`

  Iframes                             `<iframe>`

  Forms                               `<form>`

  Form controls                       `<input>`, `<select>`,
                                      `<textarea>`, `<button>`

  Form submission                     `action`, `method`, `target`

  Input configuration                 `type`, `value`, `readonly`,
                                      `disabled`, `required`, and others
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 28. HTML Checklist for Playwright QA

Use this checklist when inspecting a real webpage:

-   [ ] Identify the element's tag.
-   [ ] Identify its attributes and their values.
-   [ ] Distinguish visible text from attribute values.
-   [ ] Find the element's parent.
-   [ ] Identify its direct children and siblings.
-   [ ] Recognize whether the element is a form control.
-   [ ] Understand the control's input type.
-   [ ] Inspect the element in browser DevTools.
-   [ ] Read the actual rendered HTML rather than guessing.
-   [ ] Understand the page structure before writing automation
    locators.

**End of notes.**

The topics above follow the 21-page handwritten notebook, from HTML
basics and document structure through links, images, tables, lists,
iframes, forms, form attributes, and input types.
