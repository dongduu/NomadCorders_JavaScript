const age = parseInt(prompt("몇 살 입니까?"));

if (isNaN(age)) {
    console.log("Please write a number.");
} else {
    console.log("Thank you for writing your age.");
}
