const h1 = document.querySelector(".hello h1"); // CSS 셀러터/CSS처럼 부를 수 있음(hello라는 class 안에 있는 h1만 부름), get은 모두 부를 수 이따

function handleTilteClick () {
    h1.classList.toggle("clicked");
}

h1.addEventListener ("click", handleTilteClick); 