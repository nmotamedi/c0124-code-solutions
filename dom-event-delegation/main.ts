const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$taskList does not exist');
$taskList.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLElement;
  console.log('Event Target', $eventTarget);
  console.log('TagName', $eventTarget.tagName);
  if ($eventTarget.tagName === 'BUTTON') {
    console.log('Task Item', $eventTarget.closest('.task-list-item'));
    $eventTarget.closest('.task-list-item')?.remove();
  }
});
