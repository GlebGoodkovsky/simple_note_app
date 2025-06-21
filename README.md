
# Simple Note App
---
### 🚀 Live Demo

**This project is a live website! You can try it right now:**

### [➡️ Click here to use the Simple Note App ⬅️](https://glebgoodkovsky.github.io/simple_note_app/)

---
This is an interesting project I'm making in order to experiment, learn, and develop my programing skills. It started as a console-only script and has now evolved into a simple, interactive web application.

---
## Features
- A clean web interface built with HTML, CSS, and JavaScript.
- Add new notes via a text input and a button.
- Instantly see your notes appear on the page.

Over time, I'm planning to slowy add more features.

---
## How to Use
This project is deployed using GitHub Pages. Just click the "Live Demo" link above to use the app directly in your browser. There is no need to download or install anything.

---
## How It Works
The app is built with three simple files working together:
*   **`index.html`**: Provides the structure and skeleton of the page.
*   **`styles.css`**: Adds all the styling to make it look nice.
*   **`simple_note_app.js`**: Contains the logic, or the "brain," that makes the app interactive.

---
### Code explained
---
#### CSS

```css
body {
    font-family: sans-serif;
    align-items: center;
    display: flex;
    flex-direction: column;
}

#notes-list li {
    margin-top: 5px;
    padding: 6px;
}

#add-button {
    margin-top: 8px;
}

#notes-list button {
    margin-left: 10px;
    cursor: pointer;
    color: red;
    background-color: rgb(255, 227, 227);
    border-color: coral;
}
```

- `body`: Styles the whole page. Uses a clean font and centers everything with flexbox.
- `#notes-list li`: Adds space between notes and a bit of padding inside each one.
- `#add-button`: Adds space above the "Add" button so it's not squished against the input box.
- `#notes-list button`: Styles the delete button. Pushes it away from the note text, makes the cursor a pointer, and gives it red-ish colors so it stands out.

---
#### HTML

```html
<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="styles.css">

<head>
    <title>Simple Note App</title>
</head>

<body>
    <h1>My Notes</h1>
    
    <input id="note-input" placeholder="Type a note...">
    
    <button id="add-button">Add</button>
    
    <ul id="notes-list"></ul>

    <script src="simple_note_app.js"></script>
</body>

</html>
```

- This HTML code builds the skeleton of the page.
- It creates the visible parts: a title (`<h1>`), a text box (`<input>`), a button (`<button>`), and an empty list (`<ul>`).
- The `id` on each element (like `id="note-input"`) is a unique "name tag". These name tags are very important because they are how our JavaScript finds and controls these specific parts.
- The `<link>` tag connects our CSS file for styling, and the `<script>` tag connects our JavaScript file, which is the "brain" of the app.

---
#### JavaScript

```js
const noteInput = document.getElementById('note-input');
const addButton = document.getElementById('add-button');
const notesList = document.getElementById('notes-list');

addButton.addEventListener('click', function() {
    const userText = noteInput.value;
    const newNote = document.createElement('li');
    newNote.textContent = userText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener('click', function() {
     newNote.remove();
    });

  newNote.appendChild(deleteButton);
  notesList.appendChild(newNote);
  noteInput.value = "";

});
```

1. **Getting the page elements:**
The first three lines grab the input box, the add button, and the list from the page and give them short names so we can use them easily.

2. **When you click the button:**
The code listens for a click on the "Add" button. When you click it, it does all the steps below.

3. **Making a new note:**
It grabs the text from the input box and makes a new list item (`<li>`) with that text.

4. **Adding delete button:**
It also makes a new button that says "Delete". When you click it, the note gets removed.

5. **Showing it on the page:**
The delete button is added to the note, then the full note (text + delete button) is added to the list. The input box is cleared so you're ready to type the next note.


---
## How to use

Using the live app is simple:

1. Click the "Live Demo" link at the top of this page.
2. Type a note into the text box.
3. Click the "Add" button.
4. Your note will instantly appear on the page below!

---
## A Note on the Learning Process

I want to be transparent about how this project was created. While the JavaScript code here was written with the help of an AI assistant, my goal is not just to have an AI build an app for me. I am using it as a tool to practice and genuinely understand the fundamentals.

My process involves asking for small, simple pieces of code and, most importantly, getting clear and simple explanations for what each line does, so I can learn in the process step by step. This project is my way of learning how to code *with* AI, not just getting a final product from it, and its a way to learn how to code in general, since I am new. It's helping me grasp the basics so I can eventually write this kind of code myself, or write with AI, but understand what it.

---

Feel free to let me know suggestions of what I can add/modify to improve this simple code

---