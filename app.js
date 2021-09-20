const calculator = {
    plus: function (a, b) {
        console.log('hello');
        return a + b;
        console.log('buy'); // return이 끝을 내서 실행되지 않음
    },
    minus: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multi: function (a, b) {
        return a * b;
    },
    powerOf: function (a, b) {
        return a ** b;
    },
};

const resultA = calculator.plus (12, 43);
const resultB = calculator.minus (resultA, 10);
const resultC = calculator.divide (resultB, 5); // 상호의존 상태

console.log(resultA); // 외부에서 사용
console.log(resultB);
console.log(resultC);
