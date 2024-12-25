let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let currentValue = display.value;
    let buttonValue = button.textContent;

    if (buttonValue === 'C') {
      display.value = '';
    } else if (buttonValue === '←') {
      display.value = currentValue.slice(0, -1);
    } else if (buttonValue === '=') {
      try {
        display.value = eval(currentValue);
      } catch (e) {
        display.value = 'Error';
      }
    } else {
      display.value += buttonValue;
    }
  });
});

