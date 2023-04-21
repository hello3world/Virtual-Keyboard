//create div with class container
let container = document.createElement('div');
container.className = 'container';
document.body.prepend(container);
//create div with class keyboard__wrapper
let keyboardWrapper = document.createElement('div');
keyboardWrapper.className = 'keyboard__wrapper';
container.append(keyboardWrapper);
//create div with class keyboard__keys
let keyboardKeys = document.createElement('div');
keyboardKeys.className = 'keyboard__keys';
keyboardWrapper.append(keyboardKeys);
//create div with class keyboard__row
let keyboardRow = document.createElement('div');
keyboardRow.className = 'keyboard__row';
keyboardKeys.append(keyboardRow);
//create first row in keyboard
let firstRowChars = ['`', '2', '3', '4', '5', '6', '7', '8', '9', '10', '-', '=', 'Backspace'];
//create div with class keys and fill first row of keyboard
for (let i = 0; i < firstRowChars.length; i++) {
  let key = document.createElement('div');
  key.className = 'keys';
  key.textContent = firstRowChars[i];
  switch (firstRowChars[i]) {
    case 'Backspace':
      key.className = 'keys keys--backspace';
  }
  keyboardRow.append(key);
}
//create second row in keyboard
let firstRowChars = ['`', '2', '3', '4', '5', '6', '7', '8', '9', '10', '-', '=', 'Backspace'];