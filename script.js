let firstNumber = ''
let operator = ''
let secondNumber = ''

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b
const display = document.querySelector("#display");

function operate(operator, a, b) {
  if (operator === '+') {
    return add(a, b)
  }

  else if (operator === '-') {
    return subtract(a, b)
  }

  else if (operator === 'x') {
    return multiply(a, b)
  }

  else if (operator === '/') {
    return divide(a, b)
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    if (operator === "") {
      firstNumber += e.target.textContent;
      display.value = firstNumber;
    } else {
      secondNumber += e.target.textContent;
      display.value = secondNumber;
    }
  }
});