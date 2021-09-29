const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "toDos";

function saveTodos () { // 4
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify => 배열로 바꿔줌
};

function deleteTodo (event) { // 3(2)
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
};

function paintTodo (newTodo) { // 3
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo); // 3(1)
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li);
};

function toDoSubmit (event) { // 2
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
};

toDoForm.addEventListener("submit", toDoSubmit); // 1

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
};