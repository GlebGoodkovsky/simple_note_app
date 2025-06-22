const noteInput = document.getElementById('note-input');
const addButton = document.getElementById('add-button');
const notesList = document.getElementById('notes-list');

addButton.addEventListener('click', function() {

//new code

  //This grabs the text from the input box and uses .trim() to shave off any blank spaces from the beginning or end.
  const userText = noteInput.value.trim();

  //This line checks if the cleaned-up text is now empty. If it is, return; stops the entire function immediately. No note is made, no button is created. It just stops.
  if (userText === "") {
      return; 
  }

//new code ends here

  const newNote = document.createElement('li');
  newNote.textContent = userText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";

deleteButton.addEventListener('click', function() {
  newNote.remove();
});

newNote.appendChild(deleteButton);
notesList.appendChild(newNote);
noteInput.value = "";

});