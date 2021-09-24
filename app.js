const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function loginSubmit (event) {
    event.preventDefault();
    console.log(event);
};

function linkClick (event) {
    event.preventDefault();
    console.dir(event);
    // alert("Clicked"); => alert가 페이지 이동하는 것을 막아줌 -> 확인 버튼 클릭 -> 페이지 이동
};

loginForm.addEventListener("submit", loginSubmit); // submit은 엔터를 누르거나 버튼을 누를 떄 작동
link.addEventListener("click", linkClick);