'use strict';
const $tabContainer = document.querySelector('.tab-container');
const $tabList = document.querySelectorAll('.tab');
const $viewList = document.querySelectorAll('.view');
if (!$tabContainer || !$tabList || !$viewList) {
  throw new Error('Query failed');
}
$tabContainer.addEventListener('click', (event) => {
  let $eventTarget = event.target;
  let $view = '';
  if ($eventTarget.matches('.tab')) {
    $tabList.forEach((div) => {
      if ($eventTarget === div) {
        div.classList.add('active');
        $view = $eventTarget.dataset.view;
      } else {
        div.classList.remove('active');
      }
    });
    $viewList.forEach((div) => {
      if (div.getAttribute('data-view') === $view) {
        div.classList.remove('hidden');
      } else {
        div.classList.add('hidden');
      }
    });
  }
});
