// create div with class wrapper
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

// create header
const header = document.createElement('header');
header.className = 'header';
wrapper.append(header);
// create div with class container
const container = document.createElement('div');
container.className = 'container';
wrapper.append(container);
// create heading for container
const heading = document.createElement('h1');
heading.className = 'heading';
heading.textContent = 'Virtual keyboard';
header.append(heading);
// create textarea for container
const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.rows = 10;
container.append(textarea);
// create div with class keyboard__wrapper
const keyboardWrapper = document.createElement('div');
keyboardWrapper.className = 'keyboard__wrapper';
container.append(keyboardWrapper);
// create info about keyboard
const info = document.createElement('p');
info.className = 'info';
info.innerHTML = 'Клавиатура создана в операционной системе <b>Windows</b><br>Для переключения языка используйте двойной клик по клавише <i>Win</i>';
container.insertAdjacentElement('beforeEnd', info);
// create footer
const footer = document.createElement('footer');
footer.className = 'footer';
wrapper.append(footer);
// create link-git for footer
const linkImg = document.createElement('a');
linkImg.className = 'footer_link-img-git';
linkImg.href = 'https://github.com/hello3world';
footer.append(linkImg);
// create img-git for footer
const imgGit = document.createElement('img');
imgGit.className = 'footer_img-git';
imgGit.src = '/assets/images/git.png';
linkImg.append(imgGit);
// create link-RS for footer
const linkRs = document.createElement('a');
linkRs.className = 'footer_link-img-rs';
linkRs.href = 'https://rs.school/';
footer.append(linkRs);
// create img-git for footer
const imgRs = document.createElement('img');
imgRs.className = 'footer_img-git';
imgRs.src = '/assets/images/rs_school-og.png';
linkRs.append(imgRs);

// create div with class keyboard__keys
let keyboardKeys = document.createElement('div');
keyboardKeys.className = 'keyboard__keys';
keyboardWrapper.append(keyboardKeys);
// create row in keyboard
let chars = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift-left', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift-right', 'Ctrl-left', 'Win', 'Alt-left', ' ', 'Alt-right', '&#9668;', '&#9660;', '&#9658;', 'Ctrl-right'];
let keys; // key elements
let alphabet; // for caps

// create keyboard
function createKeyBoard() {
  // create div with class keyboard__row
  const keyboardRow = document.createElement('div'); // first row
  keyboardRow.className = 'keyboard__row';
  keyboardKeys.prepend(keyboardRow);

  // create div with class keys and fill first row of keyboard
  for (let i = 0; i <= 13; i += 1) {
    const key = document.createElement('div');
    key.className = 'keys alpha content';
    key.textContent = chars[i];
    switch (chars[i]) {
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
  keyboardRow.after(keyboardRow1);
  // fill second row of keyboard
  for (let i = 14; i <= 28; i += 1) {
    const key = document.createElement('div');
    key.className = 'keys alpha content';
    key.textContent = chars[i];
    switch (chars[i]) {
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
  keyboardRow1.after(keyboardRow2);

  // fill third row of keyboard
  for (let i = 29; i <= 41; i += 1) {
    const key = document.createElement('div');
    key.className = 'keys alpha content';
    key.textContent = chars[i];
    switch (chars[i]) {
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
  keyboardRow2.after(keyboardRow3);

  // fill fourth row of keyboard
  for (let i = 42; i <= 54; i += 1) {
    const key = document.createElement('div');
    key.className = 'keys alpha content';
    if (chars[i] === 'Shift-left' || chars[i] === 'Shift-right') {
      key.innerHTML = 'Shift';
    } else {
      key.innerHTML = chars[i];
    }
    switch (chars[i]) {
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

  // fill fifth row of keyboard
  for (let i = 55; i <= 63; i += 1) {
    const key = document.createElement('div');
    key.className = 'keys';
    if (chars[i] === 'Ctrl-left' || chars[i] === 'Ctrl-right') {
      key.innerHTML = 'Ctrl';
    } else if (chars[i] === 'Alt-left' || chars[i] === 'Alt-right') {
      key.innerHTML = 'Alt';
    } else {
      key.innerHTML = chars[i];
    }
    switch (chars[i]) {
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
  // create array of key
  keys = document.querySelectorAll('.keys');
  // for caps
  alphabet = document.querySelectorAll('.alpha');
  // add new attribute keyname for elements
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].setAttribute('keyname', keys[i].textContent);
    keys[i].setAttribute('upperCaseName', keys[i].textContent.toUpperCase());
  }
}

createKeyBoard();

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
    if ((e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('upperCaseName')) && e.key !== 'Alt' && e.key !== 'Shift') {
      keys[i].classList.add('active');
    }
    const specialKey = ['Tab', 'Delete', 'Backspace', 'CapsLock', 'Enter', 'Space', 'ShiftLeft', 'ShiftRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'MetaLeft'];
    const specialKeyElements = [tab, del, backspace,
      capslock, enter, space, keyShiftLeft,
      keyShiftRight, keyArrowUp, keyArrowLeft,
      keyArrowDown, keyArrowRight, keyCtrlLeft,
      keyCtrlRight, keyAltLeft, keyAltRight, keyWin];

    for (let j = 0; j < specialKey.length - 1; j += 1) {
      if (e.code === specialKey[j]) {
        specialKeyElements[j].classList.add('active');
      }
    }
  }
});

// create Listener for Event "keyup"
window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('upperCaseName')) {
      keys[i].classList.remove('active');
    }
    const specialKey = ['Tab', 'Delete', 'Backspace', 'CapsLock', 'Enter', 'Space', 'ShiftLeft', 'ShiftRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'MetaLeft'];
    const specialKeyElements = [tab, del, backspace,
      capslock, enter, space, keyShiftLeft,
      keyShiftRight, keyArrowUp, keyArrowLeft,
      keyArrowDown, keyArrowRight, keyCtrlLeft,
      keyCtrlRight, keyAltLeft, keyAltRight, keyWin];

    for (let j = 0; j < specialKey.length - 1; j += 1) {
      if (e.code === specialKey[j]) {
        specialKeyElements[j].classList.remove('active');
      }
    }
  }
});

// Events with click
// Caps Lock
let checkCaps = false;
function caps() {
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
}

// change language
let checkLang = false;
function switchRusLanguage() {
  checkCaps = false; // if change lang with big letter (caps)
  if (checkLang === false) {
    keyboardKeys.remove();
    keyboardKeys = document.createElement('div');
    keyboardKeys.className = 'keyboard__keys';
    keyboardWrapper.append(keyboardKeys);
    chars = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift-left', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '&#9650;', 'Shift-right', 'Ctrl-left', 'Win', 'Alt-left', ' ', 'Alt-right', '&#9668;', '&#9660;', '&#9658;', 'Ctrl-right'];
    createKeyBoard();
    checkLang = true;
  } else {
    keyboardKeys.remove();
    keyboardKeys = document.createElement('div');
    keyboardKeys.className = 'keyboard__keys';
    keyboardWrapper.append(keyboardKeys);
    chars = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift-left', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift-right', 'Ctrl-left', 'Win', 'Alt-left', ' ', 'Alt-right', '&#9668;', '&#9660;', '&#9658;', 'Ctrl-right'];
    createKeyBoard();
    checkLang = false;
  }
}

window.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('keys--win')) {
    switchRusLanguage();
  } else {
    //
  }
});

// input letter with click
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('keys')) {
    if (e.target.classList.contains('keys--space')) {
      textarea.value += ' ';
    }
    if (e.target.classList.contains('keys--enter')) {
      textarea.value += '\n';
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
