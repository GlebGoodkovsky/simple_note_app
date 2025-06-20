
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
'''

- `body`: This styles the whole page. It sets a cleaner font and uses the `display: flex` rules as a simple way to center everything horizontally.
- `#notes-list li`: This styles every note that gets created. It adds a little space between the notes (`margin-top`) and a little space inside each note's box (`padding`).
- `#add-button`: This finds the button and just adds a little empty space above it to separate it from the text box.

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

  notesList.appendChild(newNote);

  noteInput.value = "";

});
```

1. **Finding the HTML Parts:** The first three lines find the text box, the button, and the list from the HTML page and give them simple nicknames (`noteInput`, `addButton`, `notesList`) so our script can use them easily.

2. **Listening for a Click:** The line `addButton.addEventListener('click', ...)` tells the button to "listen for a click." When it hears one, it runs all the code inside the `{}`. That code does a simple job in order:
- It gets the text from the input box.
- It creates a new, blank list item (`<li>`).
- It puts the user's text inside that list item.
- It puts the new list item on the page.
- It clears the text box for the next note.

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