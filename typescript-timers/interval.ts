const $countdown = document.querySelector('.countdown-display');

function countdown(): void {
  if (!$countdown) throw new Error('$countdown query failed');
  const countdownNum = +$countdown.textContent!;
  $countdown.textContent = `${countdownNum - 1}`;
}

function earthText(): void {
  clearInterval(intervalID);
  if (!$countdown) throw new Error('$countdown query failed');
  $countdown.textContent = '~Earth Beeeelooowww Us~';
}

const intervalID = setInterval(countdown, 1000);
setTimeout(earthText, 4000);
