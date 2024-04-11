function addNote() {
    var title = document.getElementById('noteTitle').value;
    var content = document.getElementById('noteContent').value;
    var color = document.getElementById('noteColor').value;

    if (title.trim() === '' || content.trim() === '') {
        alert('Please enter both title and content for the note.');
        return;
    }

    var note = document.createElement('div');
    note.className = 'stickyNote';
    note.style.backgroundColor = color;
    note.innerHTML = `
        <h2>${title}</h2>
        <textarea readonly>${content}</textarea>
        <button onclick="editNote(this)">Edit</button>
        <button onclick="deleteNote(this)">Delete</button>
    `;

    document.getElementById('container').appendChild(note);

    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
}

function editNote(btn) {
    var note = btn.parentElement;
    var textarea = note.querySelector('textarea');

    textarea.readOnly = !textarea.readOnly;
    btn.innerText = textarea.readOnly ? 'Edit' : 'Save';
}

function deleteNote(btn) {
    var note = btn.parentElement;
    note.remove();
}
