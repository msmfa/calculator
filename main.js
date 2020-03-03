const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".keys");
const display = document.querySelector(".calculator__display");
const storage = document.querySelector(".calculator__storage");

keys.addEventListener("click", e => {
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  let displayedNum = display.textContent;
  const previousKeyType = calculator.dataset.previousKeyType;

  //Switch statements might have been cleaner

  if (e.target.matches("button")) {
  }
  if (!action) {
    if (displayedNum === "0" || previousKeyType === "operator") {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }

  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    calculator.dataset.previousKeyType = "";
    calculator.dataset.firstValue = displayedNum;
    calculator.dataset.operator = action;
    storage.textContent = displayedNum;
    display.textContent = "";
  }

  if (action === "clear") {
    display.textContent = 0;
    storage.textContent = "";
  }

  const calculate = (n1, operator, n2) => {
    let result = "";

    if (operator === "add") {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === "subtract") {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === "multiply") {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === "divide") {
      result = parseFloat(n1) / parseFloat(n2);
    }

    return result;
  };

  if (action === "calculate") {
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const secondValue = displayedNum;

    display.textContent = calculate(firstValue, operator, secondValue);
  }
});
