const notesListWapper = document.getElementById('notes-list-wrapper');

const cards = notes.map(note => NotesCardComponent(note))

notesListWapper.innerHTML = cards.join("");


const createNoteComponent = CreateNoteComponent()
createNoteComponent.render('create-notes-wrapper')

const notesSearchInput = NotesSearchInput()
notesSearchInput.render('search-bar')