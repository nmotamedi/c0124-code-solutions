'use strict';
const $images = document.querySelectorAll('img');
const $dots = document.querySelectorAll('.fa-circle');
const $rightArrow = document.querySelector('.fa-arrow-right');
const $leftArrow = document.querySelector('.fa-arrow-left');
const $iconCol = document.querySelector('.icon-col');
if (!$rightArrow || !$leftArrow || !$iconCol)
  throw new Error('$rightArrow, $leftArrow, $iconCol query failed');
let position = 0;
let intervalID = setInterval(upSwitchIcon, 3000);
function upSwitchIcon() {
  clearInterval(intervalID);
  if (position === 4) {
    position = 0;
  } else {
    position++;
  }
  changeImageAndIcon();
  intervalID = setInterval(upSwitchIcon, 3000);
}
function downSwitchIcon() {
  clearInterval(intervalID);
  if (position === 0) {
    position = 4;
  } else {
    position--;
  }
  changeImageAndIcon();
  intervalID = setInterval(upSwitchIcon, 3000);
}
function changeImageAndIcon() {
  for (let i = 0; i < $images.length; i++) {
    if (i === position) {
      $images[i].classList.remove('hidden');
      $dots[i].classList.add('fa-solid');
      $dots[i].classList.remove('fa-regular');
    } else {
      $images[i].classList.add('hidden');
      $dots[i].classList.remove('fa-solid');
      $dots[i].classList.add('fa-regular');
    }
  }
}
$rightArrow.addEventListener('click', () => {
  upSwitchIcon();
});
$leftArrow.addEventListener('click', () => {
  downSwitchIcon();
});
$iconCol.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if ($eventTarget.tagName === 'I') {
    clearInterval(intervalID);
    position = +$eventTarget.dataset.pos;
    changeImageAndIcon();
    intervalID = setInterval(upSwitchIcon, 3000);
  }
});
window.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === 'ArrowLeft') {
    downSwitchIcon();
  } else if (key === 'ArrowRight') {
    upSwitchIcon();
  }
});
