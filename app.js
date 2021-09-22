const h1 = document.querySelector(".hello h1"); // CSS 셀러터/CSS처럼 부를 수 있음(hello라는 class 안에 있는 h1만 부름), get은 모두 부를 수 이따

console.dir(h1); // Element의 내부를 보고 싶을 떄 사용
console.log(h1);

function handleTilteClick () {
    console.log("h1 was clicked!");
    h1.style.color = "green";
}

function handelMouseEnter () {
    h1.innerText = "mouse is here!";
}

function handelMouseLeave () {
    h1.innerText = "mouse is gone!";
}

function handleWindowResize () {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy () {
    alert ("copier!");
}

function handWindowOffline () {
    alert ("SOS no Wifi!");
}

function handleWindowOnline () {
    alert ("ALL GOOOOOOD")
}

h1.onclick = handleTilteClick; // 이벤트 작동 방법 2번째
h1.addEventListener("mouseenter", handelMouseEnter); // 이벤트 작동 방법 1번째
h1.addEventListener("mouseleave", handelMouseLeave);

window.addEventListener("resize", handleWindowResize); // 윈도우의 화면 크기가 바뀌는 이벤트
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handWindowOffline);
window.addEventListener("online", handleWindowOnline);