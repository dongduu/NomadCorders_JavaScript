const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function loginSubmit (event) {
    event.preventDefault();
    console.log(event);
};

loginForm.addEventListener("submit", loginSubmit); // submit은 엔터를 누르거나 버튼을 누를 떄 작동