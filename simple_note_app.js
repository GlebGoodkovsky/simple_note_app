const noteInput = document.getElementById('note-input');
const addButton = document.getElementById('add-button');
const notesList = document.getElementById('notes-list');

addButton.addEventListener('click', function() {

  const userText = noteInput.value;

  const newNote = document.createElement('li');

  newNote.textContent = userText;

//new code down

// Step 1: build a button in the browser's memory.
// Right now a empty button is made, it's blank and not on the page yet.
const deleteButton = document.createElement('button');

// Step 2: write the word "Delete" on the face of the button.
deleteButton.textContent = "Delete";

// Step 3: give the button its one and only instruction.
// this basicaly tells it: "Wait for someone to click you."
deleteButton.addEventListener('click', function() {

  // When the click happens, button deletes the note it's attached to
  newNote.remove();
});

// Step 4: this takes our button and place it onto the end of the new note.
newNote.appendChild(deleteButton);

//new code ends here

  notesList.appendChild(newNote);

  noteInput.value = "";

});

