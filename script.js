let firstNumber = ''
let operator = ''
let secondNumber = ''

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => {
  if (b === 0) {
    return "Error"
  }
  return a / b
}
const display = document.querySelector("#display");
const alerts = document.querySelector("#alerts");

function operate(operator, a, b) {
  if (operator === '+') {
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    const rounded = parseFloat(result.toFixed(10));
    display.value = rounded;
    firstNumber = rounded.toString();
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
  if (e.target.classList.contains("digit")) {
    if (operator === "") {
      if (firstNumber.length >= 10) {
        alerts.textContent = "Maximum digits reached";
        display.classList.add("shake");
        setTimeout(() => {
          alerts.textContent = "";
          display.classList.remove("shake");
        }, 2000);
        return;
      }
      firstNumber += e.target.textContent;
      display.value = firstNumber;
    } else {
      if (secondNumber.length >= 10) {
        alerts.textContent = "Maximum digits reached";
        display.classList.add("shake");
        setTimeout(() => {
          alerts.textContent = "";
          display.classList.remove("shake");
        }, 2000);
        return;
      }
      secondNumber += e.target.textContent;
      display.value = secondNumber;
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("operator")) {
    if (secondNumber !== '') {
      const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
      display.value = result;
      firstNumber = result.toString();
      secondNumber = '';
    }
    operator = e.target.textContent;
    display.value = operator;
  }

  else if (e.target.id === "equals") {
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    display.value = result;
    firstNumber = result.toString();
    secondNumber = '';
    operator = '';
  }

  else if (e.target.id === "clear") {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.value = '';
  }
});