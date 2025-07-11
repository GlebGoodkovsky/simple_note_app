
# Simple Note App
---
### 🚀 Live Demo

**This project is a live website! You can try it right now:**

### [➡️ Click here to use the Simple Note App ⬅️](https://glebgoodkovsky.github.io/simple_note_app/)

---
### ⚠️ Important Notes
- **Data Security**: Notes are stored in your browser's local storage and are **not encrypted**. Please don't store sensitive personal information.
- **Hard Refresh**: After updates, perform a hard refresh to load the latest version:
  - **Windows/Linux**: `Ctrl + Shift + R`
  - **Mac**: `Command + Shift + R`
- **Data Reset**: Major updates may require clearing browser data for the app to work properly

---
This is an interesting project I'm making in order to experiment, learn, and develop my programing skills. It started as a console-only script and has now evolved into a simple, interactive web application.

---
## Features
- A clean web interface built with HTML, CSS, and JavaScript
- Add new notes via a text input and a button
- Add, Edit, and Delete notes with ease
- Sort notes by: Newest First, Oldest First, A-Z, or Z-A
- Notes are automatically saved in your browser - they persist after closing
- Responsive design that works on different screen sizes

Over time, I'm planning to slowly add more features.

---
## How to Use

1. Click the Live Demo link at the top of this page
2. Type a note into the text box and click the Add button
3. To edit a note:
   - Click Edit to make the text editable
   - Make your changes
   - Click Save to confirm
4. To delete a note: Click Delete
5. **To sort notes**:
   - Select a sorting method from the dropdown
   - Click the Sort button
6. Notes remain after reloading or closing the tab

## How It Works
The app is built with three simple files working together:
*   **`index.html`**: Page structure and elements
*   **`styles.css`**: Visual styling and layout
*   **`simple_note_app.js`**: Interactive functionality and logic

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

#notes-list button {
    margin-left: 10px;
    cursor: pointer;
}

#notes-list .edit-btn {
    color: green;
    background-color: rgb(208, 255, 200);
    border-radius: 3px;
    border: 1px solid darkseagreen;
}

#notes-list .delete-btn {
    color: red;
    background-color: rgb(255, 227, 227);
    border-radius: 3px;
    border: 1px solid coral;
}

#sort-controls {
    margin: 15px 0;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
}

#sort-button {
    padding: 5px 10px;
    cursor: pointer;
    background-color: #e0e0ff;
    border: 1px solid #a0a0ff;
    border-radius: 3px;
}
```
- `body`: Styles the whole page. Uses a clean font and centers everything with flexbox.
- `#notes-list li`: Adds space between notes and a bit of padding inside each one.
- `#add-button`: Adds space above the "Add" button so it's not squished against the input box.
- `#notes-list button`: This is a general style that applies to all buttons in our notes list. It gives them some space and makes the mouse cursor a pointer.
- `#notes-list .edit-btn`: This is a specific style for the Edit button. It looks for any element with the class `.edit-btn` inside our notes list and gives it green "safe" colors.
- `#notes-list .delete-btn`: This is a specific style for the Delete button, giving it red "danger" colors. These specific rules override any general styles.
- `#sort-controls`: This is a new container for our sorting dropdown and button. It adds spacing and background styling.
- `#sort-button`: This is a new style for the Sort button. It gives it a distinct look with a light blue background.

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
    
    <div id="input-container">
        <input id="note-input" placeholder="Type a note...">
        <button id="add-button">Add</button>
    </div>

<div id="sort-controls">
    <label for="sort-method">Sort by:</label>
    <select id="sort-method">
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
    </select>
    <button id="sort-button">Sort</button>
</div>

    <ul id="notes-list"></ul>

    <script src="simple_note_app.js"></script>
    
</body>
</html>
```

- This HTML code builds the skeleton of the page.
- It creates the visible parts: a title (`<h1>`), a text box (`<input>`), a button (`<button>`), and an empty list (`<ul>`).
- The id on each element (like `id="note-input"`) is a unique "name tag". These name tags are very important because they are how our JavaScript finds and controls these specific parts.
- The `<link>` tag connects our CSS file for styling, and the `<script>` tag connects our JavaScript file, which is the "brain" of the app.
- New Sorting Interface: We've added a dropdown menu (`<select>`) with sorting options and a Sort button. These are contained in a `<div>` with `id="sort-controls"` for styling.

---
#### JavaScript

```js
const noteInput = document.getElementById('note-input');
const addButton = document.getElementById('add-button');
const notesList = document.getElementById('notes-list');

const sortMethodSelect = document.getElementById('sort-method');
const sortButton = document.getElementById('sort-button');
const noteTimestamps = {};

const saveNotes = () => {

  const noteData = Array.from(notesList.children).map(note => ({
    text: note.querySelector('span').textContent,
    id: note.dataset.id,
    timestamp: noteTimestamps[note.dataset.id]
  }));
  
  localStorage.setItem('notes', JSON.stringify(noteData));
};

const buildNote = (text) => {
    const newNote = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = text;

    const noteId = 'note-' + Date.now();
    newNote.dataset.id = noteId;
    noteTimestamps[noteId] = Date.now();


    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.addEventListener('click', () => {
        if (editButton.textContent === "Edit") {
            textSpan.contentEditable = true;
            textSpan.focus();
            editButton.textContent = "Save";
        } else {
            textSpan.contentEditable = false;
            editButton.textContent = "Edit";
            saveNotes();
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener('click', () => {
        newNote.remove();
        saveNotes();
    });

    newNote.appendChild(textSpan);
    newNote.appendChild(editButton);
    newNote.appendChild(deleteButton);
    notesList.appendChild(newNote);

};

function sortNotes() {
    const method = sortMethodSelect.value;
    const notes = Array.from(notesList.children);
    
    notes.sort((a, b) => {
        const aText = a.querySelector('span').textContent.toLowerCase();
        const bText = b.querySelector('span').textContent.toLowerCase();
        const aTime = noteTimestamps[a.dataset.id];
        const bTime = noteTimestamps[b.dataset.id];
        
        switch(method) {
            case 'newest': return bTime - aTime;
            case 'oldest': return aTime - bTime;
            case 'a-z': return aText.localeCompare(bText);
            case 'z-a': return bText.localeCompare(aText);
            default: return 0;
        }
    });
    
    notes.forEach(note => notesList.appendChild(note));
    saveNotes();
}

sortButton.addEventListener('click', sortNotes);
addButton.addEventListener('click', function() {
    const userText = noteInput.value.trim();
    if (userText === "") {
        return;
    }

    buildNote(userText);
    saveNotes(); 

    noteInput.value = "";
});

const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
savedNotes.forEach(note => {
    buildNote(note.text);
    if (note.id) {
        noteTimestamps[note.id] = note.timestamp;
    }
});
```

1. Creating Our Tools (Helper Functions): The code creates several tools to make the app work:
   - saveNotes(): This is our "Saver" tool. It takes a snapshot of all the notes and saves them to browser storage. It now saves additional information: unique IDs and creation timestamps.
   - buildNote(): This is our "Note Blueprint". It builds complete notes with text, Edit and Delete buttons. It now adds unique IDs and timestamps to each note.
   - sortNotes(): This is a new tool for sorting. It rearranges notes based on the selected method (newest, oldest, A-Z, Z-A).
  
2. Using the Tools (Adding and Sorting Notes):
   - When you click "Add":
     - It grabs the text you typed
     - Uses buildNote() to create a new note
     - Saves with saveNotes()
   - When you click "Sort":
     - It checks which sorting method you selected
     - Rearranges notes based on either text or creation time
     - Saves the new order with saveNotes()

3. Waking Up the App (Loading Notes): When the page loads:
   - It checks browser storage for saved notes
   - Uses buildNote() to recreate each note
   - Restores original timestamps for accurate sorting
   - Notes reappear exactly as you left them

4. Tracking Note Creation:
   - Each note gets a unique ID based on creation time
   - Creation times are stored for sorting purposes
   - This allows accurate sorting by "newest" and "oldest"

---
## How to use

1. Click the Live Demo link at the top of this page
2. Type a note into the text box and click the Add button
   > Tip: Press Enter after typing to add a note quickly
3. To edit a note:
   - Click Edit to make the text editable
   - Make your changes
   - Click Save to confirm
4. To delete a note: Click Delete
5. **To sort notes**:
   - Select a sorting method from the dropdown
   - Click the Sort button
   > For example, select 'Newest First' and click Sort to see your most recent notes at the top.
6. Notes remain after reloading or closing the tab

---
## A Note on the Learning Process

I want to be transparent about how this project was created. While the JavaScript code here was written with the help of an AI assistant, my goal is not just to have an AI build an app for me. I am using it as a tool to practice and genuinely understand the fundamentals.

My process involves asking for small, simple pieces of code and, most importantly, getting clear and simple explanations for what each line does, so I can learn in the process step by step. This project is my way of learning how to code *with* AI, not just getting a final product from it, and its a way to learn how to code in general, since I am new. It's helping me grasp the basics so I can eventually write this kind of code myself, or write with AI, but understand what it.

---

Feel free to let me know suggestions of what I can add/modify to improve this simple code

---