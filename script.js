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

// ── Suporte ao teclado ────────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  const key = e.key;

  // Dígitos 0–9
  if (key >= '0' && key <= '9') {
    document.querySelector(`[data-value="${key}"]`)?.click();

  // Operadores
  } else if (key === '+') {
    document.querySelector('#btn-add').click();
  } else if (key === '-') {
    document.querySelector('#btn-sub').click();
  } else if (key === '*') {
    document.querySelector('#btn-mul').click();
  } else if (key === '/') {
    e.preventDefault(); // evita o Quick Find do browser
    document.querySelector('#btn-div').click();

  // Ações
  } else if (key === 'Enter') {
    e.preventDefault();
    document.querySelector('#equals').click();
  } else if (key === 'Backspace') {
    e.preventDefault(); // evita navegar para a página anterior
    document.querySelector('#backspace').click();
  } else if (key === 'c' || key === 'C') {
    document.querySelector('#clear').click();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("operator")) {
    if (secondNumber !== '') {
      const raw = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
      const result = typeof raw === 'number' ? parseFloat(raw.toFixed(10)) : raw;
      display.value = result;
      firstNumber = result.toString();
      secondNumber = '';
    }
    operator = e.target.dataset.value;
    display.value = e.target.textContent;
  }

  else if (e.target.id === "equals") {
    const raw = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    const result = typeof raw === 'number' ? parseFloat(raw.toFixed(10)) : raw;
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

  else if (e.target.id === "backspace") {
    if (operator === '') {
      firstNumber = firstNumber.slice(0, -1);
      display.value = firstNumber;
    } else {
      secondNumber = secondNumber.slice(0, -1);
      display.value = secondNumber;
    }
  }
});