'use strict';
const $bulb = document.querySelector('.circle');
if (!$bulb) throw new Error('$bulb query failed');
$bulb.addEventListener('click', () => {
  const $outerDiv = $bulb.closest('.background');
  $outerDiv?.classList.toggle('dark');
});
