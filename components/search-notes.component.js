function searchNotes(e) {
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
        })
        .map(note => NotesCardComponent(note))
        
        notesListWapper.innerHTML = cards.join("");
        
    } else {
        const cards = notes.map(note => NotesCardComponent(note))
        notesListWapper.innerHTML = cards.join("");
    }

}

const NotesSearchInput = () => {
    
    const HTML = `
        <input type="search" name="search" id="search" placeholder="Search" autocomplete="off" oninput="searchNotes(event)">
    `
    
    const render = id => document.getElementById(id).innerHTML = HTML
    
    return {
        render
    }
}