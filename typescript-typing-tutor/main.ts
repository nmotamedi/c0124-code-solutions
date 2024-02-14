const $spanList = document.querySelectorAll('span');
if (!$spanList) throw new Error('$spanList query failed');
const $sentenceDiv = document.querySelector('.sentence-div');
if (!$sentenceDiv) throw new Error('$sentenceDiv query failed');

let index = 0;
let incorrect = 0;
$spanList[index].classList.add('active');

function listenerHandler(event: KeyboardEvent): void {
  if (index < $spanList.length) {
    if (event.key === $spanList[index].innerText) {
      $spanList[index].classList.add('green');
      $spanList[index].classList.remove('active');
      $spanList[index].classList.remove('red');
      index++;
      if (index < $spanList.length) {
        $spanList[index].classList.add('active');
      }
    } else {
      $spanList[index].classList.add('red');
      incorrect++;
    }
  }
  if (index >= $spanList.length) {
    document.removeEventListener('keydown', listenerHandler);
    const $accuracy = document.createElement('h4');
    $accuracy.textContent = `Your accuracy is ${(
      100 *
      (1 - incorrect / (index - 1))
    ).toFixed(2)}%`;
    $sentenceDiv?.appendChild($accuracy);
  }
}

document.addEventListener('keydown', listenerHandler);
