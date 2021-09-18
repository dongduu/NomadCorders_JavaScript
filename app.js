function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("dongdu", 22);
sayHello("nico", 10);
sayHello("hyun6ick", 27);

function plus(a, b) {
    console.log(a + b);
}

plus(12, 90);
plus("dongdu ", "is pretty");

function divide(a, b) {
    console.log(a / b);
}

divide(80, 8);

const player = {
    name: "dd",
    sayBye: function (othersName) {
        console.log("Bye! " + othersName);
    },
};
player.sayBye("bb");