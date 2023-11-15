function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0 ) return "Not a number";
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Invalid operator";
    }
}

function populateDisplay(number) {
    displayContent += number
    display.textContent = displayContent;
}


const display = document.querySelector("#display");
let displayContent = "";
let a = 0;
let b = 0;
let operator = "";


document.querySelectorAll(".number").forEach(number => {
    number.addEventListener("click", () => {
     populateDisplay(number.textContent)
     });
});

document.querySelector("#clear").addEventListener("click", () => {
    displayContent = "";
    display.textContent = 0;
})

document.querySelectorAll(".operator").forEach(op => {
    op.addEventListener("click", () => {
       operator = op.textContent; 
    })
})

