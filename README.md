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
2. Type a note and click Add or press Enter
3. **To edit a note**:
   - Click on the note text
   - Make your changes
   - Press Enter or click outside to save
4. **To delete a note**:
   - Hover over the note
   - Click the 🗑️ icon that appears
5. **To sort notes**:
   - Choose a sort method from the dropdown
   - Click the Sort button
6. Notes automatically save and persist after closing

## How It Works
The app is built with three core files:
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
    max-width: 615px;
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
```

- `body`: Styles the whole page with centered content
- `#input-container`: Container for input field and Add button (rounded)
- `#note-input`: Text field for new notes (rounded with padding)
- `#add-button`: Add note button (consistent rounded style)
- `#sort-controls`: Sorting dropdown and button container (rounded)
- `#notes-list li`: Note container with rounded corners and shadow
- `#notes-list li span`: Text area with proper padding and wrapping
- `.delete-btn`: Trash bin icon (appears on hover with animation)
- `*:focus`: Removes default focus outlines for cleaner UI
- `Hover effects`: Notes lift slightly with enhanced shadow

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

- Clean HTML structure with semantic elements
- Input container for note creation
- Sorting controls with dropdown and button
- Notes list container where notes appear
- Linked CSS and JavaScript files
- Responsive meta tag for mobile devices

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
```

1. Core Functions:
   - saveNotes(): Saves all notes to browser storage
   - buildNote(): Creates new note elements with unique IDs
   - sortNotes(): Handles sorting based on selected method

2. Note Interactions:
   - Click note text to enter edit mode
   - Press Enter or click outside to save changes
   - Hover over note to reveal delete button (🗑️)
   - Click 🗑️ to instantly delete note

3. Data Handling:
   - Notes saved with IDs and creation timestamps
   - Sorting uses timestamps for date-based ordering
   - All changes automatically persist after actions

4. Initialization:
   - Loads saved notes on page load
   - Restores creation timestamps for accurate sorting
   - Sets up event listeners for buttons

---
## How to use

1. Add Note: Type text → Click Add or press Enter
2. Edit Note: Click note → Edit text → Press Enter
3. Delete Note: Hover over note → Click 🗑️ icon
4. Sort Notes: Choose method → Click Sort
5. All changes save automatically and persist

---
## A Note on the Learning Process

I want to be transparent about how this project was created. While the JavaScript code here was written with the help of an AI assistant, my goal is not just to have an AI build an app for me. I am using it as a tool to practice and genuinely understand the fundamentals.

My process involves asking for small, simple pieces of code and, most importantly, getting clear and simple explanations for what each line does, so I can learn in the process step by step. This project is my way of learning how to code *with* AI, not just getting a final product from it, and its a way to learn how to code in general, since I am new. It's helping me grasp the basics so I can eventually write this kind of code myself, or write with AI, but understand what it.

---

Feel free to let me know suggestions of what I can add/modify to improve this simple code

---