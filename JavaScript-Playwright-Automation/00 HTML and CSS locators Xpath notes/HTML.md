# HTML Fundamentals for Playwright QA — Complete Learning Notes

## 1. Learning Objective

Understand HTML structure so I can inspect webpages, identify elements, read their attributes, and understand their relationships before learning to locate them in Playwright automation.

## 2. HTML Basics

### What is HTML?

HTML stands for **HyperText Markup Language**. It defines the structure and content of a webpage.

Example:

```html
<h2>Student Registration</h2>
<input type="text" name="username">
<button>Submit</button>
```

This HTML contains a heading, an input field, and a button.

### Important HTML terminology

| Term | Meaning | Example |
|---|---|---|
| Tag | Defines an HTML element's type | `input`, `button`, `div` |
| Element | The complete HTML element | `<button>Submit</button>` |
| Attribute | Provides additional information about an element | `id="username"` |
| Attribute name | The name of an attribute | `type` |
| Attribute value | The value assigned to an attribute | `text` |
| Visible text | Text displayed by an element | `Submit` |
| Parent | An element containing another element | `form` |
| Child | An element directly inside another element | `input` |
| Sibling | Elements sharing the same parent | Two inputs inside one `div` |

## 3. Common HTML Tags

| Tag | Purpose |
|---|---|
| `<html>` | Root element of an HTML document |
| `<head>` | Contains document metadata and resource references |
| `<title>` | Sets the document title |
| `<body>` | Contains the webpage's main content |
| `<div>` | Generic block container |
| `<section>` | Groups related content |
| `<h1>` to `<h6>` | Headings |
| `<p>` | Paragraph |
| `<a>` | Link |
| `<button>` | Button |
| `<input>` | Input control |
| `<label>` | Label for a form control |
| `<form>` | Form container |
| `<select>` | Selection control |
| `<option>` | Option inside a selection control |
| `<textarea>` | Multiline text input |
| `<span>` | Generic inline container |

## 4. HTML Attributes

Attributes provide additional information about an element and usually appear in the opening tag.

Example:

```html
<input
  id="emailInput"
  name="email"
  type="email"
  placeholder="Enter email"
>
```

| Attribute | Meaning |
|---|---|
| `id` | Identifies an element within the document |
| `class` | Assigns one or more class names |
| `name` | Gives a name to a form control |
| `type` | Specifies the type of input or button |
| `placeholder` | Displays a hint inside an input |
| `value` | Specifies an element's value |
| `href` | Specifies a link destination |
| `src` | Specifies a resource URL, such as an image |
| `alt` | Provides alternative text for an image |
| `disabled` | Disables a form control |
| `required` | Indicates that a value is required |
| `for` | Associates a label with a form control's ID |

### Example: Reading attributes

```html
<input
  id="username"
  name="user"
  type="text"
  placeholder="Enter username"
>
```

- Tag: `input`
- ID: `username`
- Name: `user`
- Type: `text`
- Placeholder: `Enter username`

Remember to distinguish an attribute's name from its value.

## 5. Visible Text

Visible text is the text displayed by an HTML element.

Example:

```html
<h2>Student Registration</h2>
<button>Save Details</button>
<a href="/login">Login</a>
```

| Element | Visible text |
|---|---|
| `<h2>` | `Student Registration` |
| `<button>` | `Save Details` |
| `<a>` | `Login` |

Important: Attribute values and visible text are different.

```html
<input placeholder="Enter email">
```

Here, `Enter email` is the placeholder attribute value. It is not ordinary text content between opening and closing tags.

## 6. Parent, Child and Sibling Relationships

Consider this HTML:

```html
<form id="registrationForm">
  <div id="personalDetails">
    <input id="firstName" name="firstName">
    <input id="lastName" name="lastName">
  </div>
  <button type="submit">Register</button>
</form>
```

### Parent and child

- `form` is the parent of `div` and `button`.
- `div` is the parent of both inputs.
- The two inputs are direct children of `div`.

### Siblings

- `firstName` and `lastName` are siblings because they share the same parent.
- The `div` and `button` are siblings because they share the `form` parent.

### Ancestor and descendant

- The `form` is an ancestor of both inputs.
- Both inputs are descendants of the `form`.

Remember: A direct child has no intermediate element between itself and its parent. A descendant can be nested several levels deep.

## 7. Browser DevTools — Inspect HTML

### Purpose

Chrome DevTools helps inspect the actual HTML rendered by a webpage.

### Practical steps

1. Open a webpage in Chrome.
2. Right-click the element you want to inspect.
3. Select **Inspect**.
4. Find the highlighted HTML element in the Elements panel.
5. Identify its tag.
6. Read its attributes and values.
7. Check its visible text, if any.
8. Examine its parent, children, and siblings.

### Example

Suppose Inspect shows:

```html
<div class="search-input" id="search-input">
  <input
    id="searchInput"
    type="search"
  >
</div>
```

The search input has:

- Tag: `input`
- ID: `searchInput`
- Type: `search`
- Placeholder: Not present in this example
- Parent: `div`
- Parent class: `search-input`
- Parent ID: `search-input`

Do not confuse the parent's ID, `search-input`, with the input's ID, `searchInput`.

## 8. HTML Practical Exercise — Student Registration

### Example webpage

```html
<section id="registrationContainer">
  <h2>Student Registration</h2>

  <div class="student-details">
    <input
      id="studentName"
      name="studentName"
      type="text"
    >

    <input
      id="studentEmail"
      name="studentEmail"
      type="email"
    >
  </div>

  <button type="submit">Register Student</button>
</section>
```

### Questions to practise

1. What is the ID of the main registration container?
2. What is the visible text of the heading?
3. What is the direct parent tag of the student name input?
4. What is the `name` attribute of the email input?
5. What is the visible text of the button?
6. Which inputs are siblings?

### Answers for this example

1. `registrationContainer`
2. `Student Registration`
3. `div`
4. `studentEmail`
5. `Register Student`
6. The `studentName` and `studentEmail` inputs

These answers apply to the example HTML above. In a real webpage, inspect the actual HTML rather than assuming the structure is the same.

## 9. Completed HTML Practice

### DevTools Inspect practice

**Recorded result: 5/5**

The practice covered identifying:
- Container tag
- Input ID
- Input type
- Button text
- Chrome DevTools Elements panel

### HTML-only Student Registration practical

**Recorded result: 6/6**

The exercise covered:
- Main container ID
- Heading text
- Direct parent tag
- Email input's `name` attribute
- Button text
- Input sibling relationships

### Overall HTML practice progress

**Recorded progress: 27/27 — 100% across six practice sets.**

The completed exercises covered:
- HTML tags and attributes
- Attribute names and values
- Visible text
- Parent and child relationships
- Sibling relationships
- Browser DevTools inspection

The real-webpage inspection exercise was the next step toward finishing the HTML fundamentals practice.

## 10. HTML Interview Quick Revision

**What is an HTML tag?**

A tag defines the type of element, such as `input`, `button`, or `div`.

**What is an HTML attribute?**

An attribute provides additional information about an element, such as `id`, `name`, or `type`.

**What is the difference between a tag and an element?**

A tag is the markup used to define an element. An element is the complete HTML structure, including its opening tag, content where applicable, and closing tag where required.

**What is the difference between a parent and a child?**

A parent contains another element. A child is directly contained by its parent.

**What are sibling elements?**

Elements that share the same parent.

**How do you inspect an element?**

Right-click the element, select Inspect, and examine it in the browser's Elements panel.

**How do you identify an element's attributes?**

Inspect its HTML opening tag and read the attribute names and values.

**How do you identify visible text?**

Inspect the element and read its text content, distinguishing it from attribute values such as `placeholder`.

## 11. Final HTML Checklist

- [x] Understand common HTML tags.
- [x] Identify attributes and their values.
- [x] Read visible text.
- [x] Understand parent and child relationships.
- [x] Identify sibling elements.
- [x] Inspect HTML using browser DevTools.
- [x] Complete the Student Registration practical.
- [x] Complete the recorded HTML practice sets.

**Status:** HTML fundamentals practice recorded as 27/27 completed. The remaining real-webpage inspection step was intended to consolidate these skills before progressing further with Playwright element locating.
