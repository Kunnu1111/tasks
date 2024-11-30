// Get display element
const result = document.getElementById('result');

// Append numbers to display
function appendNumber(number) {
    result.value += number;
}

// Append operators to display
function appendOperator(operator) {
    const lastChar = result.value.slice(-1);
    if ("+-*/%".includes(lastChar)) {
        result.value = result.value.slice(0, -1) + operator; // Replace last operator
    } else {
        result.value += operator;
    }
}

// Clear the display
function clearDisplay() {
    result.value = '';
}

// Remove last character
function backspace() {
    result.value = result.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        result.value = eval(result.value.replace('÷', '/').replace('×', '*')); // Safe evaluation
    } catch (error) {
        result.value = 'Error';
    }
}
