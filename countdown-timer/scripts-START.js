let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displaySecondsLeft(seconds)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0) {
      clearInterval(countdown)
    }
    displaySecondsLeft(secondsLeft)
  }, 1000)
}

function displaySecondsLeft(seconds) {
  console.log(seconds)
}
