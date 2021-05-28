const notesListWapper = document.getElementById('notes-list-wrapper');

const cards = notes.map(note => NotesCardComponent(note))

notesListWapper.innerHTML = cards.join("");


const createNoteComponent = CreateNoteComponent()
createNoteComponent.render('create-notes-wrapper')

const searchInput = document.getElementById('search')
searchInput.addEventListener('input', function searchNotes(e) {
    const searchValue = e.target.value
    
    if (searchValue) {
        const cards = notes.filter(n => {
            if (
                n.title.includes(searchValue) ||
                n.body.includes(searchValue)
            ) {
                return true
            } else {
                return false
            }
        }).map(note => NotesCardComponent(note))
        notesListWapper.innerHTML = cards.join("");
        
    } else {
        const cards = notes.map(note => NotesCardComponent(note))
        notesListWapper.innerHTML = cards.join("");
    }

})