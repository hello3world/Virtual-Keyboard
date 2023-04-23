//create div with class container
let container = document.createElement('div');
container.className = 'container';
document.body.prepend(container);
//create heading for container
let heading = document.createElement("h1");
heading.className = 'heading';
heading.textContent = 'Virtual keyboard';
container.append(heading);
//create textarea for container
let textarea = document.createElement("textarea");
textarea.className = 'textarea';
textarea.rows = 10;
container.append(textarea);
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
let firstRowChars = ['`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '-',
  '=',
  'Backspace'];

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

//create div with class keyboard__row
let keyboardRow1 = document.createElement('div');
keyboardRow1.className = 'keyboard__row';
keyboardKeys.append(keyboardRow1);
//create second row in keyboard
let secondRowChars = ['Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'Del'];

//fill second row of keyboard
for (let i = 0; i < secondRowChars.length; i++) {
  let key = document.createElement('div');
  key.className = 'keys';
  key.textContent = secondRowChars[i];

  switch (secondRowChars[i]) {
    case 'Tab':
      key.className = 'keys keys--tab';
      break;
    case 'Del':
      key.className = 'keys keys--del';
      break;
  }

  keyboardRow1.append(key);
}

//create div with class keyboard__row
let keyboardRow2 = document.createElement('div');
keyboardRow2.className = 'keyboard__row';
keyboardKeys.append(keyboardRow2);
//create third row in keyboard
let thirdRowChars = ['Caps Lock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  '\'',
  'Enter'];

//fill third row of keyboard
for (let i = 0; i < thirdRowChars.length; i++) {
  let key = document.createElement('div');
  key.className = 'keys';
  key.textContent = thirdRowChars[i];

  switch (thirdRowChars[i]) {
    case 'Caps Lock':
      key.className = 'keys keys--capslock';
      break;
    case 'Enter':
      key.className = 'keys keys--enter';
      break;
  }

  keyboardRow2.append(key);
}

//create div with class keyboard__row
let keyboardRow3 = document.createElement('div');
keyboardRow3.className = 'keyboard__row';
keyboardKeys.append(keyboardRow3);
//create fourth row in keyboard
let fourthRowChars = ['Shift-left',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  '&#9650;',
  'Shift-right'];

//fill fourth row of keyboard
for (let i = 0; i < fourthRowChars.length; i++) {
  let key = document.createElement('div');
  key.className = 'keys';
  if (fourthRowChars[i] == 'Shift-left' || fourthRowChars[i] == 'Shift-right') {
    key.innerHTML = 'Shift';
  } else {
    key.innerHTML = fourthRowChars[i];
  }

  switch (fourthRowChars[i]) {
    case '&#9650;':
      key.className = 'keys keys--arrowUp';
      break;
    case 'Shift-left':
      key.className = 'keys keys--shift keys--shift-left';
      break;
    case 'Shift-right':
      key.className = 'keys keys--shift keys--shift-right';
      break;
  }

  keyboardRow3.append(key);
}

//create div with class keyboard__row
let keyboardRow4 = document.createElement('div');
keyboardRow4.className = 'keyboard__row';
keyboardKeys.append(keyboardRow4);
//create fifth row in keyboard
let fifthRowChars = ['Ctrl-left',
  'Win',
  'Alt-left',
  ' ',
  'Alt-right',
  '&#9668;',
  '&#9660;',
  '&#9658;',
  'Ctrl-right'];

//fill fifth row of keyboard
for (let i = 0; i < fifthRowChars.length; i++) {
  let key = document.createElement('div');
  key.className = 'keys';
  if (fifthRowChars[i] == 'Ctrl-left' || fifthRowChars[i] == 'Ctrl-right') {
    key.innerHTML = 'Ctrl';
  } else if (fifthRowChars[i] == 'Alt-left' || fifthRowChars[i] == 'Alt-right') {
    key.innerHTML = 'Alt';
  } else {
    key.innerHTML = fifthRowChars[i];
  }

  switch (fifthRowChars[i]) {
    case ' ':
      key.className = 'keys keys--space';
      break;
    case '&#9668;':
      key.className = 'keys keys--arrowLeft';
      break;
    case '&#9660;':
      key.className = 'keys keys--arrowDown';
      break;
    case '&#9658;':
      key.className = 'keys keys--arrowRight';
      break;
    case 'Ctrl-left':
      key.className = 'keys keys--ctrl-left';
      break;
    case 'Ctrl-right':
      key.className = 'keys keys--ctrl-right';
      break;
    case 'Alt-left':
      key.className = 'keys keys--alt-left';
      break;
    case 'Alt-right':
      key.className = 'keys keys--alt-right';
      break;
    case 'Win':
      key.className = 'keys keys--win';
      break;
  }

  keyboardRow4.append(key);
}

//create info about keyboard
let info = document.createElement('p');
info.className = 'info';
info.innerHTML = 'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левыe shift + alt';
container.insertAdjacentElement('beforeEnd', info);

//create array of key
let keys = document.querySelectorAll('.keys');

//add new attribute keyname for elements
for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute('keyname', keys[i].innerText);
}

//create elements for special key
let space = document.querySelector('.keys--space');
let del = document.querySelector('.keys--del');
let tab = document.querySelector('.keys--tab');
let backspace = document.querySelector('.keys--backspace');
let capslock = document.querySelector('.keys--capslock');
let enter = document.querySelector('.keys--enter');
let keyShiftLeft = document.querySelector('.keys--shift-left');
let keyShiftRight = document.querySelector('.keys--shift-right');
let keyArrowUp = document.querySelector('.keys--arrowUp');
let keyArrowLeft = document.querySelector('.keys--arrowLeft');
let keyArrowDown = document.querySelector('.keys--arrowDown');
let keyArrowRight = document.querySelector('.keys--arrowRight');
let keyCtrlLeft = document.querySelector('.keys--ctrl-left');
let keyCtrlRight = document.querySelector('.keys--ctrl-right');
let keyAltLeft = document.querySelector('.keys--alt-left');
let keyAltRight = document.querySelector('.keys--alt-right');
let keyWin = document.querySelector('.keys--win');

window.addEventListener('keydown', function (e) {
  for (let i = 0; i < keys.length; i++) {
    if ((e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) && e.key != 'Alt') {
      keys[i].classList.add('active');
    }
    if (e.code == 'Tab') {
      tab.classList.add('active');
    }
    if (e.code == 'Delete') {
      del.classList.add('active');
    }
    if (e.code == 'Backspace') {
      backspace.classList.add('active');
    }
    if (e.code == 'CapsLock') {
      capslock.classList.add('active');
    }
    if (e.code == 'Enter') {
      enter.classList.add('active');
    }
    if (e.code == 'Space') {
      space.classList.add('active');
    }
    if (e.code == 'ShiftLeft') {
      keyShiftRight.classList.remove('active');
    }
    if (e.code == 'ShiftRight') {
      keyShiftLeft.classList.remove('active');
    }
    if (e.code == 'ArrowUp') {
      keyArrowUp.classList.add('active');
    }
    if (e.code == 'ArrowLeft') {
      keyArrowLeft.classList.add('active');
    }
    if (e.code == 'ArrowDown') {
      keyArrowDown.classList.add('active');
    }
    if (e.code == 'ArrowRight') {
      keyArrowRight.classList.add('active');
    }
    if (e.code == 'ControlLeft') {
      keyCtrlLeft.classList.add('active');
    }
    if (e.code == 'ControlRight') {
      keyCtrlRight.classList.add('active');
    }
    if (e.code == 'AltLeft') {
      keyAltLeft.classList.add('active');
    }
    if (e.code == 'AltRight') {
      keyAltRight.classList.add('active');
    }
    if (e.code == 'MetaLeft') {
      keyWin.classList.add('active');
    }
  }
}
)
window.addEventListener('keyup', function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active');
    }
    if (e.code == 'Tab') {
      tab.classList.remove('active');
    }
    if (e.code == 'Delete') {
      del.classList.remove('active');
    }
    if (e.code == 'Backspace') {
      backspace.classList.remove('active');
    }
    if (e.code == 'CapsLock') {
      capslock.classList.remove('active');
    }
    if (e.code == 'Enter') {
      enter.classList.remove('active');
    }
    if (e.code == 'Space') {
      space.classList.remove('active');
    }
    if (e.code == 'ArrowUp') {
      keyArrowUp.classList.remove('active');
    }
    if (e.code == 'ArrowLeft') {
      keyArrowLeft.classList.remove('active');
    }
    if (e.code == 'ArrowDown') {
      keyArrowDown.classList.remove('active');
    }
    if (e.code == 'ArrowRight') {
      keyArrowRight.classList.remove('active');
    }
    if (e.code == 'ControlLeft') {
      keyCtrlLeft.classList.remove('active');
    }
    if (e.code == 'ControlRight') {
      keyCtrlRight.classList.remove('active');
    }
    if (e.code == 'AltLeft') {
      keyAltLeft.classList.remove('active');
    }
    if (e.code == 'AltRight') {
      keyAltRight.classList.remove('active');
    }
    if (e.code == 'MetaLeft') {
      keyWin.classList.remove('active');
    }
  }
}

)