const toDoForm = document.getElementById("todo-Form");
const toDoInput = document.querySelector("#todo-Form input");
const toDoList = document.getElementById("todo-list");

function toDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
};

toDoForm.addEventListener("submit", toDoSubmit);