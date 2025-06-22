const noteInput = document.getElementById('note-input');
const addButton = document.getElementById('add-button');
const notesList = document.getElementById('notes-list');

addButton.addEventListener('click', function() {
  const userText = noteInput.value.trim();
  if (userText === "") {
      return; 
  }

  const newNote = document.createElement('li');

// new code

// This creates an invisible box called a <span> and puts the user's note text inside it.
const textSpan = document.createElement('span');
textSpan.textContent = userText; 

// This creates a new button and makes its visible text say "Edit".
const editButton = document.createElement('button'); 
editButton.textContent = "Edit";
editButton.className = "edit-btn";

// This tells the edit button to listen for a click and run the code below when it happens.
editButton.addEventListener('click', function() {

    // This checks what the button says. If "Edit", it makes the text editable and changes the
    // button to "Save". Otherwise, it makes the text non-editable and changes it back to "Edit".
    if (editButton.textContent === "Edit") {
        textSpan.contentEditable = true;
        textSpan.focus();
        editButton.textContent = "Save";
    } else {
        textSpan.contentEditable = false;
        editButton.textContent = "Edit";
    }
});

//new code ends here

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";


deleteButton.addEventListener('click', function() {
  newNote.remove();
});

//new code

// This assembles the note by putting the text box and the edit button inside the main list item (the <li>).
newNote.appendChild(textSpan);
newNote.appendChild(editButton);

//new code ends here

newNote.appendChild(deleteButton);
notesList.appendChild(newNote);

noteInput.value = "";

});