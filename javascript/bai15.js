let expressionDisplay = document.getElementById('expression');
let resultDisplay = document.getElementById('result');

let currentExpression = "";
let currentResult = "0";

function updateDisplay() {
    expressionDisplay.innerText = currentExpression;
    resultDisplay.innerText = currentResult;
}

function appendValue(val) {
    if (currentExpression === "" && ["+", "×", "÷", "%"].includes(val)) {
        return;
    }
    currentExpression += val;
    updateDisplay();
}

let openBracket = true;
function toggleBracket() {
    if (openBracket) {
        currentExpression += "(";
        openBracket = false;
    } else {
        currentExpression += ")";
        openBracket = true;
    }
    updateDisplay();
}

function clearScreen() {
    currentExpression = "";
    currentResult = "0";
    openBracket = true;
    updateDisplay();
}

function calculate() {
    try {
        let computeStr = currentExpression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/%/g, '/100');
        
        let evalResult = eval(computeStr);
        if (evalResult === undefined || isNaN(evalResult)) {
            currentResult = "Lỗi";
        } else {
            currentResult = evalResult;
        }
    } catch (error) {
        currentResult = "Lỗi";
    }
    updateDisplay();
}