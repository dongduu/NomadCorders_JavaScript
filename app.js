const title = document.querySelector(".hello h1"); // CSS 셀러터/CSS처럼 부를 수 있음(hello라는 class 안에 있는 h1만 부름), get은 모두 부를 수 이따

console.dir(title); // Element의 내부를 보고 싶을 떄 사용
console.log(title);

function handleTilteClick () {
    console.log("title was clicked!");
    title.style.color = "green";
}

function handelMouseEnter () {
    title.innerText = "mouse is here!";
}

function handelMouseLeave () {
    title.innerText = "mouse is gone!";
}

title.addEventListener("click", handleTilteClick); // 클릭 했을 때 핸들 함수가 실행(함수에 괄호를 넣으면 안 됨)
title.addEventListener("mouseenter", handelMouseEnter);
title.addEventListener("mouseleave", handelMouseLeave);