const noteInput = document.getElementById('note-input');
const addButton = document.getElementById('add-button');
const notesList = document.getElementById('notes-list');

// This adds the `saveNotes` helper function and begins defining the `buildNote` helper,
// which creates the main list item and the text span for a note.
//new code
const saveNotes = () => {
  const noteTexts = Array.from(notesList.querySelectorAll('span')).map(span => span.textContent);
  localStorage.setItem('notes', JSON.stringify(noteTexts));
};

const buildNote = (text) => {
    const newNote = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
//new code end here

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";

// This adds the event listener to the "Edit" button.
//new code
    editButton.addEventListener('click', () => {
//new code end here

        if (editButton.textContent === "Edit") {
            textSpan.contentEditable = true;
            textSpan.focus();
            editButton.textContent = "Save";
        } else {
            textSpan.contentEditable = false;
            editButton.textContent = "Edit";

// This calls the save function to ensure that any change from an edit is saved to the browser.
//new code
            saveNotes(); // Save when an edit is finished
//new code end here
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

// This adds the event listener to the "Delete" button and makes sure the change is saved.
//new code
    deleteButton.addEventListener('click', () => {
        newNote.remove();
        saveNotes(); // Save when a note is deleted
    });
//new code ends here

    newNote.appendChild(textSpan);
    newNote.appendChild(editButton);
    newNote.appendChild(deleteButton);
    notesList.appendChild(newNote);

// This line closes the `buildNote` helper function.
//new code
};
//new code ends here

addButton.addEventListener('click', function() {
    const userText = noteInput.value.trim();
    if (userText === "") {
        return;
    }
  
// These two lines now use our new helper functions to create a note on the page and then save the list.
//new code
    buildNote(userText);
    saveNotes(); 
//new code ends here

    noteInput.value = "";
});

// This final new line loads any saved notes from the browser when the page first opens.
// new code to add
JSON.parse(localStorage.getItem('notes') || '[]').forEach(note => buildNote(note));
// END of new code to add