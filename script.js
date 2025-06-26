const todoinput = document.getElementById("todoinput");
const addbtn = document.getElementById("addbutton");
const todolist = document.getElementById("todolist");


if( todoinput.value == ' '){
    addbtn.disable = true;
}

addbtn.addEventListener('click', addTodo);
todoinput.addEventListener('keypress',function(e){
    if(e.key == 'Enter'){
        addTodo();
    }
})

function addTodo(){
    const todotext = todoinput.value.trim();
    if(todotext!==' '){
        const li = document.createElement('li');
        li.textContent = todotext;
        todolist.appendChild(li);
        todoinput.value = ' ';
    }
}