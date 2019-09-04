let symbol = "=";   // input operator
let total = 0;      // current total
let curVal = [];    // current input number
let inputVal = 0;   // input value
let decPos = 0;     // decimal point position
let decFlag = 0;    // decimal point flag

const screen = document.getElementById("screen");

// calclation
const calc = function calclation(ope) {
    if (ope !== "=") {
        switch (ope) {
            case "+":
                total += curVal;
                break;
            case "-":
                total -= curVal;
                break;
            case "*":
                total *= curVal;
                break;
            case "/":
                total /= curVal;
                break;
            default:
                screen.textContent = "ERROR";
        }
        symbol = ope;
    } else {
        if (symbol !== "=") {
            calclation(symbol);
        }
    }
    screen.textContent = total;
    curVal = null;
};

// Limit "."
const inputDot = data => {
    if (!curVal.includes(".")) {
        decPos = curVal.length;
        screen.textContent = screen.textContent + data;
    }
}

// Sign inversion
const inverted = data => {
    if (curVal === null) {
        total *= -1;
        screen.textContent = total;
    } else {
        curVal *= -1;
        screen.textContent = curVal;
    }
};

