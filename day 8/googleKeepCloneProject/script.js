const addNoteContainer = document.getElementById('add-note')
const addIconContainer = document.getElementById("add-icon-container")
const addIcon = document.getElementById('add-icon')
const allNotesContainer = document.getElementById("notes-container")

const addNote = () => {
    const notesHtml = `
    <div class="note-container">
                    <div class="edit-delete-container">
                        <textarea placeholder="Text Title"></textarea>
                        <i class="fa-solid fa-pen-to-square edit-icon"></i>
                        <i class="fa-solid fa-trash-can delete-icon"></i>
                    </div>
                    <textarea class="text" placeholder="Type Your Notes Here......."></textarea>
                </div>
    `
    



    allNotesContainer.insertAdjacentHTML('beforeend', notesHtml)

    let deleteBtn = allNotesContainer.querySelectorAll('.delete-icon')
    let editBtn = 


    
    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {

            e.target.parentElement.parentElement.remove()
            
            
        }) 
    })
}


addNoteContainer.addEventListener(('click'), addNote)

addNoteContainer.addEventListener('mouseover', () => {
    
    addIcon.className = "fa-solid fa-chevron-right"
})

addNoteContainer.addEventListener('mouseleave', () => {
    addIcon.className = "fa-solid fa-plus"
    
})


