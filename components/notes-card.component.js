function deleteNote(e) {
    const { noteId } = e.target.dataset
    const noteCard = document.getElementById(noteId);
    noteCard.remove();
    notes = notes.filter(n => n.id != noteId)
}

const NotesCardComponent = (note) => {
    
    const colorPickerChangeHandler = ({colorCode, colorName}) => {
        newNote.color = {colorCode, colorName}
        const noteCard = document.getElementById(`${note.id}`)
        noteCard.style.backgroundColor = colorCode
    }

    
    return `
        <div class="notes-card ${note.color.colorName}" id="${note.id}">
            <div class="notes-card-title">
                ${note.title}
            </div>
            <div class="notes-card-body line-clamp">
                ${note.body}
            </div>
            <div class="notes-card-labels">
                ${note.labels.map(lable => LabelComponent(lable)).join("")}
            </div>
            <div class="card-footer notes-card-footer">
                <div class="d-flex">
                    ${ColorPickerComponent(colorPickerChangeHandler)}
                    <button class="btn btn-secondary">Label</button>
                </div>
                <div>
                    <button class="btn btn-danger" 
                        data-note-id="${note.id}"
                        onclick="deleteNote(event)">Delete</button>
                </div>
            </div>
        </div>
    `
}