//simple note app creation

//let notes = [];

//function addNote(text_of_my_note) {
//  notes.push(text_of_my_note);
//}

//function listNotes() {
//  notes.forEach(function(one_note) {
//    console.log(one_note);
//  });
//}

//prevous code, now Ill make new code

//this is second version of the updated code

//-----------------------------------------------------------------------------------------

// Part 1: finding HTML elements.

const noteInput = document.getElementById('note-input'); //This tells our script: Find the text box on the page from the html script
const addButton = document.getElementById('add-button'); //This tells our script: Find the button on the page.from the html script
const notesList = document.getElementById('notes-list'); //This tells our script: Find the empty list on the page from the html script

// Part 2: Tell the button to listen for a click.

addButton.addEventListener('click', function() {

  // When the button is clicked, this code will be executed in order

  // 1. Get the text the user typed in the box
  const userText = noteInput.value;

  // 2. Create a new, empty list item
  const newNote = document.createElement('li');

  // 3. Put the user's text inside the new list item
  newNote.textContent = userText;

  // 4. Put the new list item onto the page (inside our <ul>)
  notesList.appendChild(newNote);

  // 5. Clear the text box so it's empty for the next note
  noteInput.value = "";

});





