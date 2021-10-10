const images = ["쿠로미1.jpg", "쿠로미2.jpg", "쿠로미3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style = `background-image:url(img/${chosenImage}); background-size:cover;`;