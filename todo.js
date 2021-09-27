const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDos = [];

function saveTodos () {
    localStorage.setItem("toDos", JSON.stringify(toDos)); // JSON.stringify => 배열로 바꿔줌
};

function deleteTodo (event) {
    const liRemove = event.target.parentElement;
    liRemove.remove();
};

function paintTodo (newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li);
};

function toDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
};

toDoForm.addEventListener("submit", toDoSubmit);