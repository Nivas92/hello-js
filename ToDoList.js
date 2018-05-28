document.addEventListener('DOMContentLoaded', function () { 
    // DOMContentLoaded Will load after DOM loaded
    var el = document.getElementById("btnAdd");
    el.addEventListener('click', addToDoList)
})

function addToDoList() {
    var word = document.getElementById("inputText").value;
    addElement('ToDolist', 'div', 'div-' + fileId, word)

    // var element = document.createElement("div");
    // element.innerHTML = word;
    // document.getElementById('ToDolist').appendChild(element);

    addElement('ToDolist', 'button', 'btnEdit-' + fileId, 'Edit', "EditElement(btnEdit-" + fileId + ")")

    // var elEdit = document.createElement("input");
    // elEdit.setAttribute('type', 'button');
    // elEdit.setAttribute('value', 'Edit');
    // elEdit.setAttribute('id', 'edit' + word);
    // document.getElementById('ToDolist').appendChild(elEdit);

    addElement('ToDolist', 'button', 'btnRemove-' + fileId, 'Remove', "RemoveElement(btnRemove-" + fileId + ")")
    // var elRemove = document.createElement("input");
    // elRemove.setAttribute('type', 'button');
    // elRemove.setAttribute('value', 'Remove');
    // elRemove.setAttribute('id', 'remove' + word);
    // elRemove.setAttribute('onClick', RemoveToDoList(document.getElementById("div").value));
    // document.getElementById('ToDolist').appendChild(elRemove);
}

var fileId = 0;
// function addFile() {
//     fileId++; // increment fileId to get a unique ID for the new element
//     var html = '<input type="file" name="uploaded_files[]" /> ' +
//                '<a href="" onclick="javascript:removeElement('file-' + fileId + ''); return false;">Remove</a>';
//     addElement('files', 'p', 'file-' + fileId, html);
// }

function addElement(parentId, elementTag, elementId, html, foo) {
    console.log(foo)
    fileId++;
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    if (elementTag === 'button') {
        newElement.setAttribute('onClick', foo);
    }
    p.appendChild(newElement);
}

function RemoveElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function EditElement(elementId) {
   
}