const noteInput = document.getElementById('note-input');
const addButton = document.getElementById('add-button');
const notesList = document.getElementById('notes-list');

// New: Get references to sorting UI elements and create timestamp storage
//new code starts here
const sortMethodSelect = document.getElementById('sort-method');
const sortButton = document.getElementById('sort-button');
const noteTimestamps = {}; // Object to store note creation times
//new code ends here

const saveNotes = () => {

// New: Enhanced saving to include note IDs and timestamps
//new code starts here
  const noteData = Array.from(notesList.children).map(note => ({
    text: note.querySelector('span').textContent, // Note content
    id: note.dataset.id, // Unique identifier
    timestamp: noteTimestamps[note.dataset.id] // Creation time
  }));
  
  localStorage.setItem('notes', JSON.stringify(noteData)); // Save full data
//new code ends here

};

const buildNote = (text) => {
    const newNote = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = text;

// New: Add unique ID and track creation time
//new code starts here
    const noteId = 'note-' + Date.now(); // Generate unique ID
    newNote.dataset.id = noteId; // Attach to DOM element
    noteTimestamps[noteId] = Date.now(); // Store creation time
//new code ends here

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

// New: Sorting functionality implementation
//new code starts here
function sortNotes() {
    const method = sortMethodSelect.value; // Get selected sort method
    const notes = Array.from(notesList.children); // Convert to array
    
    // Compare notes based on selected criteria
    notes.sort((a, b) => {
        const aText = a.querySelector('span').textContent.toLowerCase();
        const bText = b.querySelector('span').textContent.toLowerCase();
        const aTime = noteTimestamps[a.dataset.id]; // Get note A time
        const bTime = noteTimestamps[b.dataset.id]; // Get note B time
        
        // Apply different comparison methods
        switch(method) {
            case 'newest': return bTime - aTime; // Newest first
            case 'oldest': return aTime - bTime; // Oldest first
            case 'a-z': return aText.localeCompare(bText); // Alphabetical
            case 'z-a': return bText.localeCompare(aText); // Reverse alpha
            default: return 0; // No change
        }
    });
    
    // Re-add notes in sorted order
    notes.forEach(note => notesList.appendChild(note));
    saveNotes(); // Persist new order
}

// Connect sort button to sorting function
sortButton.addEventListener('click', sortNotes);
//new code ends here

addButton.addEventListener('click', function() {
    const userText = noteInput.value.trim();
    if (userText === "") {
        return;
    }

    buildNote(userText);
    saveNotes(); 

    noteInput.value = "";
});

// Modified: Enhanced note loading with timestamp restoration
//new modified code starts here
const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
savedNotes.forEach(note => {
    buildNote(note.text); // Recreate note
    if (note.id) {
        noteTimestamps[note.id] = note.timestamp; // Restore timestamp
    }
});
//new modified code ends here