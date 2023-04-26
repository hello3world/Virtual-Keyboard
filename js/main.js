// create div with class container
const container = document.createElement('div');
container.className = 'container';
document.body.prepend(container);
// create heading for container
const heading = document.createElement('h1');
heading.className = 'heading';
heading.textContent = 'Virtual keyboard';
container.append(heading);
// create textarea for container
const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.rows = 10;
container.append(textarea);
// create div with class keyboard__wrapper
const keyboardWrapper = document.createElement('div');
keyboardWrapper.className = 'keyboard__wrapper';
container.append(keyboardWrapper);
// create div with class keyboard__keys
const keyboardKeys = document.createElement('div');
keyboardKeys.className = 'keyboard__keys';
keyboardWrapper.append(keyboardKeys);
// create div with class keyboard__row
const keyboardRow = document.createElement('div');
keyboardRow.className = 'keyboard__row';
keyboardKeys.append(keyboardRow);
// create first row in keyboard
const firstRowChars = ['`',
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

// create div with class keys and fill first row of keyboard
for (let i = 0; i < firstRowChars.length; i += 1) {
  const key = document.createElement('div');
  key.className = 'keys alpha content';
  key.textContent = firstRowChars[i];

  switch (firstRowChars[i]) {
    case 'Backspace':
      key.className = 'keys keys--backspace';
      break;
    // no default
  }

  keyboardRow.append(key);
}

// create div with class keyboard__row
const keyboardRow1 = document.createElement('div');
keyboardRow1.className = 'keyboard__row';
keyboardKeys.append(keyboardRow1);
// create second row in keyboard
const secondRowChars = ['Tab',
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

// fill second row of keyboard
for (let i = 0; i < secondRowChars.length; i += 1) {
  const key = document.createElement('div');
  key.className = 'keys alpha content';
  key.textContent = secondRowChars[i];

  switch (secondRowChars[i]) {
    case 'Tab':
      key.className = 'keys keys--tab';
      break;
    // no default
    case 'Del':
      key.className = 'keys keys--del';
      break;
    // no default
  }

  keyboardRow1.append(key);
}

// create div with class keyboard__row
const keyboardRow2 = document.createElement('div');
keyboardRow2.className = 'keyboard__row';
keyboardKeys.append(keyboardRow2);
// create third row in keyboard
const thirdRowChars = ['Caps Lock',
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

// fill third row of keyboard
for (let i = 0; i < thirdRowChars.length; i += 1) {
  const key = document.createElement('div');
  key.className = 'keys alpha content';
  key.textContent = thirdRowChars[i];

  switch (thirdRowChars[i]) {
    case 'Caps Lock':
      key.className = 'keys keys--capslock';
      break;
    // no default
    case 'Enter':
      key.className = 'keys keys--enter';
      break;
    // no default
  }

  keyboardRow2.append(key);
}

// create div with class keyboard__row
const keyboardRow3 = document.createElement('div');
keyboardRow3.className = 'keyboard__row';
keyboardKeys.append(keyboardRow3);
// create fourth row in keyboard
const fourthRowChars = ['Shift-left',
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

// fill fourth row of keyboard
for (let i = 0; i < fourthRowChars.length; i += 1) {
  const key = document.createElement('div');
  key.className = 'keys alpha content';
  if (fourthRowChars[i] === 'Shift-left' || fourthRowChars[i] === 'Shift-right') {
    key.innerHTML = 'Shift';
  } else {
    key.innerHTML = fourthRowChars[i];
  }

  switch (fourthRowChars[i]) {
    case '&#9650;':
      key.className = 'keys keys--arrowUp';
      break;
    // no default
    case 'Shift-left':
      key.className = 'keys keys--shift keys--shift-left';
      break;
    // no default
    case 'Shift-right':
      key.className = 'keys keys--shift keys--shift-right';
      break;
    // no default
  }

  keyboardRow3.append(key);
}

// create div with class keyboard__row
const keyboardRow4 = document.createElement('div');
keyboardRow4.className = 'keyboard__row';
keyboardKeys.append(keyboardRow4);
// create fifth row in keyboard
const fifthRowChars = ['Ctrl-left',
  'Win',
  'Alt-left',
  ' ',
  'Alt-right',
  '&#9668;',
  '&#9660;',
  '&#9658;',
  'Ctrl-right'];

// fill fifth row of keyboard
for (let i = 0; i < fifthRowChars.length; i += 1) {
  const key = document.createElement('div');
  key.className = 'keys';
  if (fifthRowChars[i] === 'Ctrl-left' || fifthRowChars[i] === 'Ctrl-right') {
    key.innerHTML = 'Ctrl';
  } else if (fifthRowChars[i] === 'Alt-left' || fifthRowChars[i] === 'Alt-right') {
    key.innerHTML = 'Alt';
  } else {
    key.innerHTML = fifthRowChars[i];
  }

  switch (fifthRowChars[i]) {
    case ' ':
      key.className = 'keys keys--space';
      break;
    // no default
    case '&#9668;':
      key.className = 'keys keys--arrowLeft';
      break;
    // no default
    case '&#9660;':
      key.className = 'keys keys--arrowDown';
      break;
    // no default
    case '&#9658;':
      key.className = 'keys keys--arrowRight';
      break;
    // no default
    case 'Ctrl-left':
      key.className = 'keys keys--ctrl-left';
      break;
    // no default
    case 'Ctrl-right':
      key.className = 'keys keys--ctrl-right';
      break;
    // no default
    case 'Alt-left':
      key.className = 'keys keys--alt-left';
      break;
    // no default
    case 'Alt-right':
      key.className = 'keys keys--alt-right';
      break;
    // no default
    case 'Win':
      key.className = 'keys keys--win';
      break;
    // no default
  }

  keyboardRow4.append(key);
}

// create info about keyboard
const info = document.createElement('p');
info.className = 'info';
info.innerHTML = 'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левыe shift + alt';
container.insertAdjacentElement('beforeEnd', info);

// create array of key
const keys = document.querySelectorAll('.keys');

// add new attribute keyname for elements
for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('keyname', keys[i].textContent);
  keys[i].setAttribute('upperCaseName', keys[i].textContent.toUpperCase());
}

// create elements for special key
const space = document.querySelector('.keys--space');
const del = document.querySelector('.keys--del');
const tab = document.querySelector('.keys--tab');
const backspace = document.querySelector('.keys--backspace');
const capslock = document.querySelector('.keys--capslock');
const enter = document.querySelector('.keys--enter');
const keyShiftLeft = document.querySelector('.keys--shift-left');
const keyShiftRight = document.querySelector('.keys--shift-right');
const keyArrowUp = document.querySelector('.keys--arrowUp');
const keyArrowLeft = document.querySelector('.keys--arrowLeft');
const keyArrowDown = document.querySelector('.keys--arrowDown');
const keyArrowRight = document.querySelector('.keys--arrowRight');
const keyCtrlLeft = document.querySelector('.keys--ctrl-left');
const keyCtrlRight = document.querySelector('.keys--ctrl-right');
const keyAltLeft = document.querySelector('.keys--alt-left');
const keyAltRight = document.querySelector('.keys--alt-right');
const keyWin = document.querySelector('.keys--win');
// create Listener for Event "keydown"
window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if ((e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('upperCaseName')) && e.key !== 'Alt') {
      keys[i].classList.add('active');
    }
    if (e.code === 'Tab') {
      tab.classList.add('active');
    }
    if (e.code === 'Delete') {
      del.classList.add('active');
    }
    if (e.code === 'Backspace') {
      backspace.classList.add('active');
    }
    if (e.code === 'CapsLock') {
      capslock.classList.add('active');
    }
    if (e.code === 'Enter') {
      enter.classList.add('active');
    }
    if (e.code === 'Space') {
      space.classList.add('active');
    }
    if (e.code === 'ShiftLeft') {
      keyShiftRight.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      keyShiftLeft.classList.remove('active');
    }
    if (e.code === 'ArrowUp') {
      keyArrowUp.classList.add('active');
    }
    if (e.code === 'ArrowLeft') {
      keyArrowLeft.classList.add('active');
    }
    if (e.code === 'ArrowDown') {
      keyArrowDown.classList.add('active');
    }
    if (e.code === 'ArrowRight') {
      keyArrowRight.classList.add('active');
    }
    if (e.code === 'ControlLeft') {
      keyCtrlLeft.classList.add('active');
    }
    if (e.code === 'ControlRight') {
      keyCtrlRight.classList.add('active');
    }
    if (e.code === 'AltLeft') {
      keyAltLeft.classList.add('active');
    }
    if (e.code === 'AltRight') {
      keyAltRight.classList.add('active');
    }
    if (e.code === 'MetaLeft') {
      keyWin.classList.add('active');
    }
  }
});
// create Listener for Event "keyup"
window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('upperCaseName')) {
      keys[i].classList.remove('active');
    }
    if (e.code === 'Tab') {
      tab.classList.remove('active');
    }
    if (e.code === 'Delete') {
      del.classList.remove('active');
    }
    if (e.code === 'Backspace') {
      backspace.classList.remove('active');
    }
    if (e.code === 'CapsLock') {
      capslock.classList.remove('active');
    }
    if (e.code === 'Enter') {
      enter.classList.remove('active');
    }
    if (e.code === 'Space') {
      space.classList.remove('active');
    }
    if (e.code === 'ArrowUp') {
      keyArrowUp.classList.remove('active');
    }
    if (e.code === 'ArrowLeft') {
      keyArrowLeft.classList.remove('active');
    }
    if (e.code === 'ArrowDown') {
      keyArrowDown.classList.remove('active');
    }
    if (e.code === 'ArrowRight') {
      keyArrowRight.classList.remove('active');
    }
    if (e.code === 'ControlLeft') {
      keyCtrlLeft.classList.remove('active');
    }
    if (e.code === 'ControlRight') {
      keyCtrlRight.classList.remove('active');
    }
    if (e.code === 'AltLeft') {
      keyAltLeft.classList.remove('active');
    }
    if (e.code === 'AltRight') {
      keyAltRight.classList.remove('active');
    }
    if (e.code === 'MetaLeft') {
      keyWin.classList.remove('active');
    }
  }
});
// click
// CAPSLOCK
const alphabet = document.querySelectorAll('.alpha');
let checkCaps = false;
const caps = function () {
  if (checkCaps === false) {
    for (let i = 0; i < alphabet.length; i += 1) {
      const getAlpha = alphabet[i].textContent;
      const up = getAlpha.toUpperCase();
      alphabet[i].textContent = up;
    }
    checkCaps = true;
  } else {
    for (let i = 0; i < alphabet.length; i += 1) {
      const getAlpha = alphabet[i].textContent;
      const low = getAlpha.toLowerCase();
      alphabet[i].textContent = low;
    }
    checkCaps = false;
  }
};
// Event listener
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('keys')) {
    if (e.target.classList.contains('keys--space')) {
      textarea.value += ' ';
    }
    if (e.target.classList.contains('keys--capslock')) {
      caps();
    }
    if (e.target.classList.contains('content')) {
      const getContent = e.target.textContent;
      textarea.value += getContent;
    }
    if (e.target.classList.contains('keys--backspace')) {
      textarea.value = textarea.value.substring(
        0,
        textarea.value.length - 1,
      );
    }
  } else {
    //
  }
});
