const CreateNoteComponent = () => {
    
    const newNote = {
        title: "",
        body: "",
        color: "#ccc",
        labels: ["lab 1", "lab 2"],
        author: "user_1"
    }
    
    const init = () => {
        const createNoteBtn = document.getElementById('create-note-btn');
        const createNoteTitle = document.getElementById('create-note-title');
        const createNoteBody = document.getElementById('create-note-body');
        
        const createNote = (e) => {
            const newNoteCard = NotesCardComponent(newNote);
            notesListWapper.innerHTML += newNoteCard;
        }
        
        const inputChangeHandler = e => newNote[e.target.name] = e.target.value

        createNoteTitle.addEventListener('change', inputChangeHandler);
        createNoteBody.addEventListener('change', inputChangeHandler);
        createNoteBtn.addEventListener('click', createNote);
    }
    
    const render = id => {
        document.getElementById(id).innerHTML = HTML;
        init()
    }

    
    const HTML = `
        <div class="create-note-card">
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
                    <div class="color-picker">
                        <button class="btn btn-secondary">Color</button>
                        <div class="color-picker-options">
                            <div class="color bg-white"></div>
                            <div class="color bg-red"></div>
                            <div class="color bg-orange"></div>
                            <div class="color bg-yellow"></div>
                            <div class="color bg-darkblue"></div>
                            <div class="color bg-blue"></div>
                            <div class="color bg-teal"></div>
                            <div class="color bg-green"></div>
                        </div>
                    </div>
                    <button class="btn btn-secondary">Label</button>
                </div>
                <div>
                    <button class="btn" id="create-note-btn">Create</button>
                </div>
            </div>
        </div>
    
    `
    
    return {
        render
    }
}
