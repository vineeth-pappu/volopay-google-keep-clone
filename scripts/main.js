const notesListWapper = document.getElementById('notes-list-wrapper');

const cards = notes.map(note => NotesCardComponent(note))

notesListWapper.innerHTML = cards.join("");


const createNoteBtn = document.getElementById('create-note-btn');
const createNoteTitle = document.getElementById('create-note-title');
const createNoteBody = document.getElementById('create-note-body');

createNoteBtn.addEventListener('click', function createNote(e) {
    
    const newNote = {
        title: createNoteTitle.value,
        body: createNoteBody.value,
        color: "#ccc",
        labels: ["lab 1", "lab 2"],
        author: "user_1"
    }
    
    const newNoteCard = NotesCardComponent(newNote);
    
    notesListWapper.innerHTML += newNoteCard;
})