# Calculator

A simple and functional web calculator, for Project Odin Final Assignment, built with vanilla HTML, CSS, and JavaScript.

## 🔗 Live Demo

> (https://jpgaliza.github.io/calculator/)


## ✨ Features

**Core**
- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Operation chaining — press an operator after a result to keep calculating
- Division by zero error handling (`Error` message)
- Decimal result precision with `toFixed` to avoid floating point noise

**Input**
- Click buttons with the mouse
- Full keyboard support: digits `0–9`, operators `+ - * /`, `Enter` for `=`, `Backspace` for `⌫`, `C` for AC
- Backspace button (`⌫`) to delete the last digit
- 10-digit input limit with shake animation and error message

**UI & Design**
- Animated gradient background
- Glassmorphism calculator card with `backdrop-filter`
- LCD-style display with scanline effect and green glow
- Differentiated button styles: digits, operators, clear, and equals
- Hover and click micro-animations on all buttons
- Retro pixel font (Press Start 2P)
- `AC` button to fully reset the calculator

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Project Structure

```
calculator/
├── index.html    # App structure and button layout
├── style.css     # Styling and animations
├── script.js     # Calculator logic and event handling
└── .gitignore
```

## 🚀 How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/calculator.git
   ```
2. Open `index.html` in your browser — no dependencies or build steps required.

## 📖 What I Learned

- DOM manipulation and event delegation
- Managing application state with JavaScript variables
- Handling edge cases (division by zero, input limits, floating point precision)
- CSS animations (`@keyframes` shake, animated gradient, LCD scanlines)
- Glassmorphism and modern CSS techniques (`backdrop-filter`, `rgba`, `text-shadow`)
- Keyboard event handling with `keydown` and `e.preventDefault()`
- Structuring a project with clean Git history

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
