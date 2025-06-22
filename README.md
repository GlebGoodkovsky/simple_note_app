
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
}

#notes-list .edit-btn {
    color: green;
    background-color: rgb(208, 255, 200);
    border-color: darkseagreen;
}

#notes-list .delete-btn {
    color: red;
    background-color: rgb(255, 227, 227);
    border-color: coral;
}
```

- `body`: Styles the whole page. Uses a clean font and centers everything with flexbox.
- `#notes-list li`: Adds space between notes and a bit of padding inside each one.
- `#add-button`: Adds space above the "Add" button so it's not squished against the input box.
- `#notes-list button`: This is a general style that applies to all buttons in our notes list. It gives them some space and makes the mouse cursor a pointer.
- `#notes-list .edit-btn`: This is a **specific** style for the Edit button. It looks for any element with the class `.edit-btn` inside our notes list and gives it green "safe" colors.
- `#notes-list .delete-btn`: This is a **specific** style for the Delete button, giving it red "danger" colors. These specific rules override any general styles.

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
  const userText = noteInput.value.trim();
  if (userText === "") {
      return; 
  }

  const newNote = document.createElement('li');
  const textSpan = document.createElement('span');
  textSpan.textContent = userText; 

  const editButton = document.createElement('button'); 
  editButton.textContent = "Edit";
  editButton.className = "edit-btn";

  editButton.addEventListener('click', function() {
    if (editButton.textContent === "Edit") {
        textSpan.contentEditable = true;
        textSpan.focus();
        editButton.textContent = "Save";
    } else {
        textSpan.contentEditable = false;
        editButton.textContent = "Edit";
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";

  deleteButton.addEventListener('click', function() {
    newNote.remove();
  });

  newNote.appendChild(textSpan);
  newNote.appendChild(editButton);
  newNote.appendChild(deleteButton);
  notesList.appendChild(newNote);

  noteInput.value = "";
});
```

1. **Getting the page elements**: The first three lines grab the input box, the add button, and the list from the page and give them short names so we can use them easily.
2. **When you click the button**: The code listens for a click on the "Add" button. When you click it, it does all the steps below.
3. **Checking the text**: It grabs the text from the input box and cleans it up with `.trim()`. If the text is empty, it stops so a blank note can't be added.
4. **Making the note parts**: It creates the elements needed for a full note:
   - A list item (`<li>`) as the main container.
  - A `<span>` to hold only the note's text. This is important because it lets us edit the text without affecting the buttons.
  - An "Edit" button.
  - A "Delete" button.
5. **Tagging the buttons**: It gives each button a `className` (`"edit-btn"` and `"delete-btn"`). This is how the CSS file knows which button gets the green style and which gets the red style.
6. **Adding the button brains**:
   - **Edit Button**: It teaches the Edit button how to work. When clicked, it checks if it says "Edit". If so, it makes the text editable and changes its own text to "Save". If it says "Save", it does the opposite.
   - **Delete Button**: It tells the Delete button to remove the entire note (`<li>`) when clicked.
7. **Showing it on the page**: It assembles the note by putting the text, Edit button, and Delete button inside the list item (`<li>`). Then it adds the finished note to the page and clears the input box.

---
## How to use

Using the live app is simple:

1. Click the "Live Demo" link at the top of this page.
2. Type a note into the text box.
3. Click the "Add" button.
4. Your note will instantly appear with "Edit" and "Delete" buttons.
5. Click "Edit" to change your note's text, then click "Save".
6. Click "Delete" to remove the note forever.

---
## A Note on the Learning Process

I want to be transparent about how this project was created. While the JavaScript code here was written with the help of an AI assistant, my goal is not just to have an AI build an app for me. I am using it as a tool to practice and genuinely understand the fundamentals.

My process involves asking for small, simple pieces of code and, most importantly, getting clear and simple explanations for what each line does, so I can learn in the process step by step. This project is my way of learning how to code *with* AI, not just getting a final product from it, and its a way to learn how to code in general, since I am new. It's helping me grasp the basics so I can eventually write this kind of code myself, or write with AI, but understand what it.

---

Feel free to let me know suggestions of what I can add/modify to improve this simple code

---