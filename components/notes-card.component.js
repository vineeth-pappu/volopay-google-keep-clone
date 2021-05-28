const NotesCardComponent = (note) => {
    return `
        <div class="notes-card">
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
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    `
}