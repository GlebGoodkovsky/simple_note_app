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

// Start of New Dark Mode JavaScript Logic

// 1. Find the theme button and the main page area (the body).
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 2. Tell the browser what to do when the theme button is clicked.
themeToggle.addEventListener('click', () => {
    // This is like a light switch. It adds the "dark-mode" style if it's off, 
    // or removes it if it's on. This action is what makes the CSS change all the colors.
    body.classList.toggle('dark-mode');

    // 3. After switching the style, update the button icon and save the choice.
    if (body.classList.contains('dark-mode')) {
        // If the page is now in dark mode, change the button to a moon icon.
        themeToggle.textContent = '🌙';
        // Also, save the word 'dark' in the browser's memory so it remembers the choice for next time.
        localStorage.setItem('theme', 'dark');
    } else {
        // If the page is back in light mode, change the button to a sun icon.
        themeToggle.textContent = '☀️';
        // And save the word 'light' in the browser's memory.
        localStorage.setItem('theme', 'light');
    }
});

// 4. This part runs every time the page first loads.
function applySavedTheme() {
    // Look in the browser's memory to see if a theme choice was saved from a previous visit.
    const savedTheme = localStorage.getItem('theme');
    
    // If the browser remembers the user chose 'dark' mode last time...
    if (savedTheme === 'dark') {
        // ...then turn on dark mode and show the moon icon right away.
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
    }
    // We don't need to do anything for light mode, because the page starts that way by default.
}

// 5. Finally, run the code we just wrote to check for a saved theme.
applySavedTheme();

// End of New Dark Mode JavaScript Logic