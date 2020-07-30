function addli(){
    let text = document.getElementById('inputval').value;
    let linode=document.createElement("LI");
    // console.log(text)
    var text1 = document.createElement('input');
    text1.setAttribute("value",text);
    text1.disabled = true;
    document.getElementById('addTask').appendChild(linode);
    linode.appendChild(text1);
    var editTask = document.createElement('input');
    editTask.setAttribute('type', 'button');
    editTask.setAttribute("value", "Edit");
    editTask.setAttribute("id", "editButton");
    editTask.addEventListener('click', function(e) {
      text1.disabled = false ;
    });
    linode.appendChild(editTask);
    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "Delete");
    removeTask.setAttribute("id", "removeButton");
    removeTask.addEventListener('click', function(e) {
      linode.parentNode.removeChild(linode);
    });
    linode.appendChild(removeTask);
}