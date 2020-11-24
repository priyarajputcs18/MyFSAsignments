// selector 
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");


//event handlers
todoButton.onclick = create;
todoList.onclick = checkdelete;


//function
function create(e){
    e.preventDefault();
    if (todoInput.value.length>0){
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = todoInput.value;
    newDiv.appendChild(newLi);

    var checkbtn = document.createElement("button");
    checkbtn.classList.add("check-btn");
    checkbtn.innerHTML = '<i class = "fa fa-check"></i>';
    newDiv.appendChild(checkbtn);

    var deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML = '<i class = "fa fa-trash"></i>';
    newDiv.appendChild(deletebtn);

    todoList.appendChild(newDiv);
    todoInput.value = '';
    } else {
        alert("You need to input a task!!");
    }

}

function checkdelete(e){
    var item = e.target;
    if(item.classList[0]==="delete-btn"){
        var parent  = item.parentNode;
        parent.remove();
    }
    if(item.classList[0]==="check-btn"){
        var parent  = item.parentNode;
        parent.classList.toggle("completed");
    }
}