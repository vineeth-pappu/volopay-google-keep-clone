const emptyNote = {
    id: "",
    title: "",
    body: "",
    color: {},
    labels: [],
    author: ""
}

let newNote = { ...emptyNote }

const CreateNoteComponent = () => {
    
    const init = () => {
        const createNoteBtn = document.getElementById('create-note-btn');
        const createNoteTitle = document.getElementById('create-note-title');
        const createNoteBody = document.getElementById('create-note-body');
        
        const resetCreateNoteInputValues = () => {
            createNoteBody.value = createNoteTitle.value = ""
            const createNoteCard = document.getElementById('create-note-card')
            createNoteCard.style.backgroundColor = "#fff"
            newNote = {...emptyNote}
        }
        
        const createNote = (e) => {
            if (!createNoteBody.value && !createNoteTitle.value) return;
            
            newNote.id = `note-${notes.length + 1}`;
            console.log('create new note', newNote);
            notes.push(newNote);
            const newNoteCard = NotesCardComponent(newNote);
            notesListWapper.innerHTML += newNoteCard;
            
            resetCreateNoteInputValues()
        }
        
        const inputChangeHandler = e => newNote[e.target.name] = e.target.value

        createNoteTitle.addEventListener('change', inputChangeHandler);
        createNoteBody.addEventListener('change', inputChangeHandler);
        createNoteBtn.addEventListener('click', createNote);
    }

    const colorPickerChangeHandler = ({colorCode, colorName}) => {
        newNote.color = {colorCode, colorName}
        const createNoteCard = document.getElementById('create-note-card')
        createNoteCard.style.backgroundColor = colorCode
    }

    
    const HTML = `
        <div class="create-note-card" id="create-note-card">
            <div class="card-header">
                <div class="create-note-card-title">
                    <textarea name="title" id="create-note-title" placeholder="Title"></textarea>
                </div>
            </div>
            <div class="card-body">
                <div class="create-note-card-body">
                    <textarea name="body" id="create-note-body" placeholder="Take a note..."></textarea>
                </div>
            </div>
            <div class="card-footer">
                <div class="d-flex">
                    ${ColorPickerComponent(colorPickerChangeHandler)}
                    <button class="btn btn-secondary">Label</button>
                </div>
                <div>
                    <button class="btn" id="create-note-btn">Create</button>
                </div>
            </div>
        </div>
    
    `
        
    const render = id => {
        document.getElementById(id).innerHTML = HTML;
        init()
    }
    
    return {
        render
    }
}
