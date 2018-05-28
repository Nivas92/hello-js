document.addEventListener('DOMContentLoaded', function () {
    // DOMContentLoaded Will load after DOM loaded
    var el = document.getElementById("btnAdd");
    el.addEventListener('click', addToDoList)
})
function addToDoList() {
    var word = document.getElementById("inputText").value;
    var newDiv = document.createElement('div')
    var newSpan = document.createElement('span')
    newSpan.innerHTML = word;
    var divList = document.getElementById('ToDolist');
    var handleRemoveClick = function () {
        divList.removeChild(newDiv)
    }
    var handleEditClick = function () {
        var newEditDiv = document.createElement('div')
        var handleSaveClick = function createSaveText() {
            var newSaveText = saveText.value;
            //newDiv.innerText = newSaveText;
            // newDiv.firstChild.nodeValue = newSaveText;
            newSpan.innerHTML = newSaveText;
            newDiv.removeChild(newEditDiv);
        }
        var saveText = document.createElement('input');
        saveText.type = 'text';
        saveText.value = newDiv.innerText;
        var saveButton = createSaveButton(handleSaveClick);
        newEditDiv.appendChild(saveText);
        newEditDiv.appendChild(saveButton);
        newDiv.appendChild(newEditDiv);
    }
    var editButton = createEditButton(handleEditClick);
    var removeButton = createRemoveButton(handleRemoveClick);
    newDiv.appendChild(newSpan);
    newDiv.appendChild(editButton);
    newDiv.appendChild(removeButton);
    divList.appendChild(newDiv);
    document.getElementById("inputText").value = ''
}
function createEditButton(handleEditClick) {
    var editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.value = 'Edit'
    editButton.onclick = handleEditClick;
    return editButton;
}
function createSaveButton(handleSaveClick) {
    var saveButton = document.createElement('input');
    saveButton.type = 'button';
    saveButton.value = 'Save'
    saveButton.onclick = handleSaveClick;
    return saveButton;
}
function createRemoveButton(handleRemoveClick) {
    var removeButton = document.createElement('input');
    removeButton.type = 'button';
    removeButton.value = 'Remove'
    removeButton.onclick = handleRemoveClick;
    return removeButton;
}