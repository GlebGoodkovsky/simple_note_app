//simple note app creation

let notes = [];

function addNote(text_of_my_note) {
  notes.push(text_of_my_note);
}

function listNotes() {
  notes.forEach(function(one_note) {
    console.log(one_note);
  });
}