const resultInput = document.getElementById('result');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    resultInput.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return;
    currentInput += operator;
    resultInput.value = currentInput;
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        resultInput.value = result;
        currentInput = result.toString();
    } catch (error) {
        resultInput.value = 'Error';
        currentInput = '';
    }
}

function clearResult() {
    currentInput = '';
    resultInput.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    resultInput.value = currentInput;
}
