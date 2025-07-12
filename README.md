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
This is an interesting project I'm making in order to experiment, learn, and develop my programing skills. It started as a console-only script and has now evolved into a simple, interactive web application with a clean modern UI.

---
## Features
- Clean web interface with rounded corners and subtle shadows
- Dark/Light mode toggle with theme persistence
- Add new notes via text input and Add button
- Click to edit notes directly in place
- Delete notes with the 🗑️ icon that appears on hover
- Sort notes by: Newest First, Oldest First, A-Z, or Z-A
- Automatic saving in browser's local storage
- Notes persist after closing/reopening browser
- Responsive design works on all screen sizes
- Smooth animations and hover effects

Over time, I'm planning to slowly add more features.

---
## How to Use

1. Click the Live Demo link at the top
2. **To change the theme**: Click the ☀️/🌙 icon in the top right corner.
3. Type a note and click Add or press Enter.
4. **To edit a note**:
   - Click on the note text
   - Make your changes
   - Press Enter or click outside to save
5. **To delete a note**:
   - Hover over the note
   - Click the 🗑️ icon that appears
6. **To sort notes**:
   - Choose a sort method from the dropdown
   - Click the Sort button
7. All changes save automatically and persist.

## How It Works
The app is built with three core files:
*   **`index.html`**: Page structure and elements
*   **`styles.css`**: Visual styling, layout, and theme colors
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

#input-container {
    background-color: #f5f5f5;
    margin: 20px 0;
    padding: 18.5px;
    border-radius: 40px;
    width: 80%;
    max-width: 600px;
    display: flex;
    gap: 10px;
}

#note-input {
    flex: 1;
    padding: 10px 15px;
    border-radius: 20px;
    border: 1px solid #ddd;
}

#add-button {
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #e0edff;
    border: 1px solid #9fa8ff;
    cursor: pointer;
}

#sort-controls {
    margin: 15px 0;
    margin-top: -10px;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 40px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 80%;
    max-width: 620px;
}

#sort-button {
    padding: 5px 10px;
    cursor: pointer;
    background-color: #e0edff;
    border: 1px solid #a0a9ff;
    border-radius: 15px;
}

*:focus {
    outline: none !important;
}

#notes-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 590px;
    padding: 0;
    margin: 0 auto;
    list-style-type: none;
}

#notes-list li {
    margin-top: 12px;
    padding: 0;
    border-radius: 40px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background-color: #fff;
    transition: all 0.3s ease;
    border: 1px solid #e0e0e0;
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-right: 50px;
}

#notes-list li span {
    display: block;
    width: 100%;
    word-wrap: break-word;
    white-space: pre-wrap;
    padding: 15px 20px;
    box-sizing: border-box;
    cursor: pointer;
}

#notes-list li:hover {
    background-color: #f4f7fa;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

#notes-list li.editing {
    box-shadow: 0 0 0 2px #4a90e2;
    background-color: #f0f7ff;
}

.delete-btn {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.3;
    transition: all 0.3s ease;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 18px;
}

#notes-list li:hover .delete-btn {
    opacity: 1;
    background-color: #fcdee2;
}

.delete-btn:hover {
    transform: translateY(-50%) scale(1.1);
}

.delete-btn:active {
    transform: translateY(-50%) scale(0.95);
}

#theme-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

#theme-toggle:hover {
    transform: scale(1.1);
}

body.dark-mode {
    background-color: #121212;
    color: #e0e0e0;
}

body.dark-mode #input-container,
body.dark-mode #sort-controls {
    background-color: #1e1e1e;
    border: 1px solid #333;
}

body.dark-mode #note-input {
    background-color: #252525;
    color: #e0e0e0;
    border: 1px solid #444;
}

body.dark-mode #note-input::placeholder {
    color: #888;
}

body.dark-mode #add-button,
body.dark-mode #sort-button {
    background-color: #2a3a57;
    border: 1px solid #4a5f8a;
    color: #e0e0e0;
}

body.dark-mode #notes-list li {
    background-color: #1e1e1e;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    border: 1px solid #333;
}

body.dark-mode #notes-list li:hover {
    background-color: #2c2c2c;
    box-shadow: 0 5px 10px rgba(0,0,0,0.4);
}

body.dark-mode #notes-list li.editing {
    background-color: #2a3a57;
    box-shadow: 0 0 0 2px #5a9ce2;
}

body.dark-mode #notes-list li:hover .delete-btn {
    background-color: #5c2a32;
}
```

- `body`: Sets up the basic page layout, centering all content in a single column.
- `#input-container` & `#sort-controls`: Create the rounded, bar-like containers for adding and sorting notes.
- `#note-input`, `#add-button`, `#sort-button`: Styles the text field and buttons with consistent rounded corners and colors for the light theme.
- `#notes-list li`: Defines the look of each individual note: rounded, with a background color and a subtle shadow.
- `#notes-list li span`: Styles the text inside the note, allowing it to wrap to new lines and making it clickable.
- `#notes-list li:hover`: Creates the "lift" effect, making the note float up with a stronger shadow when you mouse over it.
- `#notes-list li.editing`: Applies a blue "glow" around a note to indicate that you are currently editing it.
- `.delete-btn`: Styles the 🗑️ icon. It is normally faded and positioned on the right side of the note.
- `#notes-list li:hover .delete-btn`: Makes the delete button become fully visible and get a colored background when you hover over its note.
- `#theme-toggle`: Positions and styles the ☀️/🌙 theme-switching button in the top-right corner.
- `body.dark-mode ...`: A block of rules that completely changes the app's colors. When dark mode is active, these styles override the default light theme for every element.
- `transition: ...`: Adds smooth, 0.3-second animations for all color changes, making the switch between light and dark mode feel fluid.
- `*:focus`: Removes the default blue outline that appears when clicking on buttons or inputs, creating a cleaner look.

---
#### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Note App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>My Notes</h1>    
        <button id="theme-toggle">☀️</button>
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

- `<h1>My Notes</h1>`: This simply puts the "My Notes" title at the very top of the page.
- `<button id="theme-toggle">`: This creates the sun/moon button. We give it a unique name (id="theme-toggle") so our JavaScript "brain" knows exactly which button to listen to for clicks.
- `<div id="input-container">`: This is a "box" that holds the text field where you type your notes and the "Add" button right next to it.
- `<div id="sort-controls">`: This is another "box" that holds the sorting dropdown menu and the "Sort" button.
- `<ul id="notes-list">`: This is a blank, empty list that acts as a placeholder. It’s like a blank page waiting to be filled. Our JavaScript code will add every note you create into this list.
- **Connecting the Files:**
  - The `<link>` tag is like putting on clothes; it connects our `styles.css` file to add all the colors and styling.
  - The `<script>` tag is like adding a brain; it connects our `simple_note_app.js` file to make the buttons and all the features actually work.
- **Mobile Friendly Line**: The `<meta name="viewport" ...>` line is a special instruction for mobile devices. It tells phones and tablets to show the website correctly so it fits the screen and doesn't look tiny.

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

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        delete noteTimestamps[noteId];
        newNote.remove();
        saveNotes();
    });
    
    newNote.appendChild(deleteButton);
    newNote.appendChild(textSpan);

    newNote.addEventListener('click', (e) => {
        if (!newNote.classList.contains('editing') && e.target !== deleteButton) {
            newNote.classList.add('editing');
            textSpan.contentEditable = true;
            textSpan.focus();
            
            const range = document.createRange();
            const sel = window.getSelection();
            range.selectNodeContents(textSpan);
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    });

    textSpan.addEventListener('blur', () => {
        newNote.classList.remove('editing');
        textSpan.contentEditable = false;
        saveNotes();
    });

    textSpan.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            textSpan.blur();
        }
    });

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
    if (userText === "") return;
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

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
});

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
    }
}

applySavedTheme();
```

**1. The Recipe for a Single Note (buildNote)**
This is the master instruction for creating one note. Every time a note is made, it gets all of these features built-in:
- **An ID and Timestamp:** It's given a unique ID and the exact time it was created, which is used for sorting.
- **A working Trash Can:** A 🗑️ button is attached. When you click it, the note instantly disappears from the screen and the app's memory is updated.
- **Click-to-Edit:** You can click anywhere on the note's text to start editing it.
- **Auto-Save on Edit:** The note automatically saves your changes as soon as you press `Enter` or click somewhere else.

**2. The App's Memory (`saveNotes` & Loading)**
- This part handles saving and loading.
- **Saving:** After any action—adding, editing, deleting, or sorting—the code immediately saves a snapshot of all your current notes to the browser's memory.
- **Loading:** When you first open the app, it reads that memory and uses the buildNote recipe to put all your notes back on the screen, exactly as you left them.

**3. The Organizer (`sortNotes`)**
- When you click the "Sort" button, this instruction looks at your choice in the dropdown menu (like "Newest First" or "A-Z").
- It then physically rearranges all the notes on your screen to match that order.

**4. The Light Switch (Theme Logic)**
- This handles the dark and light modes.
- It watches for clicks on the ☀️/🌙 button to instantly flip the page's colors.
- It also remembers your theme choice, so when you come back to the app later, it will automatically open in the theme you prefer.

**5. How the Buttons are Connected**
- The code connects all these instructions to the right buttons.
- The **"Add" button** uses the `buildNote` recipe to make a new note.
- The **"Sort" button** uses the `sortNotes` instruction to rearrange everything.
- The **Theme Toggle** uses the light switch instructions.

---
## A Note on the Learning Process

I want to be transparent about how this project was created. While the JavaScript code here was written with the help of an AI assistant, my goal is not just to have an AI build an app for me. I am using it as a tool to practice and genuinely understand the fundamentals.

My process involves asking for small, simple pieces of code and, most importantly, getting clear and simple explanations for what each line does, so I can learn in the process step by step. This project is my way of learning how to code *with* AI, not just getting a final product from it, and its a way to learn how to code in general, since I am new. It's helping me grasp the basics so I can eventually write this kind of code myself, or write with AI, but understand what it.

---

Feel free to let me know suggestions of what I can add/modify to improve this simple code

---