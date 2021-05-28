const notesListWapper = document.getElementById('notes-list-wrapper');

const cards = notes.map(note => NotesCardComponent(note))

notesListWapper.innerHTML = cards.join("");