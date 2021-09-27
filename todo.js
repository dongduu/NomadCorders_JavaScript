const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintTodo (newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); // li의 자식태그가 생김
    span.innerText = newTodo;
    toDoList.appendChild(li);
};

function toDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintTodo(newTodo);
};

toDoForm.addEventListener("submit", toDoSubmit);