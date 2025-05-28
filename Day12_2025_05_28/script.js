const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const value = button.textContent;

        if (!isNaN(value)) {
            currentInput += value;
            display.value = currentInput;

        } else if (value === 'C') {
            currentInput = '';
            operator = '';
            operand1 = '';
            operand2 = '';
            display.value = '';

        } else if (value === '=') {
            if (operand1 && operator && currentInput) {
                operand2 = currentInput;
                let result;

                switch (operator) {
                    case '+' : result = parseFloat(operand1) + parseFloat(operand2);break;
                    case '-' : result = parseFloat(operand1) - parseFloat(operand2);break;
                    case 'x' : result = parseFloat(operand1) * parseFloat(operand2);break;
                    case '/' : result = (parseFloat(operand2) === '0') ? 'Error' : parseFloat(operand1) / parseFloat(operand2);break;
                }

                display.value = result;
                currentInput = result.toString();
                operand1 = '';
                operand2 = '';
                operator = '';
            }
        } else {
            if  (currentInput) {
                operand1 = currentInput;
                operator = value;
                currentInput = '';
            }
        }
    })
})