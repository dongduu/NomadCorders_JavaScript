const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function LoginBtnClick () {
    console.dir(loginInput.value);
    console.log("Click!!!");
};

loginButton.addEventListener("click", LoginBtnClick);