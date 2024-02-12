'use strict';
const $hotButton = document.querySelector('.hot\\-button');
if (!$hotButton) throw new Error('The $hotButton query failed');
const $clickCount = document.querySelector('.click\\-count');
let count = 0;
$hotButton?.addEventListener('click', () => {
  if (!$hotButton || !$clickCount)
    throw new Error('The $hotButton or $clickCount query failed');
  count++;
  if (count >= 4 && count < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (count >= 7 && count < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (count >= 10 && count < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (count >= 13 && count < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (count >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
  $clickCount.textContent = `Clicks: ${count}`;
});
