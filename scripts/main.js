const notesListWapper = document.getElementById('notes-list-wrapper');

const createNoteComponent = CreateNoteComponent()
createNoteComponent.render('create-notes-wrapper')

const notesSearchInput = NotesSearchInput()
notesSearchInput.render('search-bar')

// Save notes in local storage to fetch on site load
const saveDataToLocal = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Load preserved notes from localstorage
const loadSavedData = () => {
    const cards = notes.map(note => NotesCardComponent(note))
    notesListWapper.innerHTML = cards.join("");
}

window.addEventListener('unload', saveDataToLocal)
window.addEventListener('load', loadSavedData)