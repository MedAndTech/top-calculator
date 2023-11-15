function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0 ) return "Not a number";
    return a / b;
}

function operate(operator, a, b) {
    let result = 0;
    switch(operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "×":
            result = multiply(a, b);
            break;
        case "÷":
            result = divide(a, b);
            break;
        default:
            result = "Invalid operator";
    }
    if (typeof(result) === "string") {
        error(result);
    } else {
        result = Math.round(result * 100) / 100;
        display.textContent = result;
        displayContent = result;
    }
}

function error(message) {
    display.textContent = message;
    displayContent = ""
}

function populateDisplay(elem) {
    if (displayContent == 0 && elem !== ",") {
        displayContent = elem
    } else if (elem === ",") {
        if (!(displayContent.includes(","))) {
            displayContent += elem;
        }
    } else {
        displayContent += elem
    }
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
       a = displayContent; 
       displayContent = "";
    })
})

document.querySelector("#equal").addEventListener("click", () => {
    if (operator !== "") {
        b = displayContent;
        operate(operator, a, b);
    }
})

document.querySelector("#dot").addEventListener("click", () => {
    populateDisplay(document.querySelector("#dot").textContent);
})