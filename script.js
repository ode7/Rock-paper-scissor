const computerchoicedisplay = document.querySelector('#computer-choice');
const userchoicedisplay = document.querySelector('#user-choice');
const resultdisplay = document.querySelector('#result');
const possiblechoices = document.querySelectorAll('.play-btn');
let userchoice;
let computerchoice;
possiblechoices.forEach((possiblechoice) =>
  possiblechoice.addEventListener('click', (e) => {
    userchoice = e.target.id;
    userchoicedisplay.innerHTML = userchoice;
    generatecomputerchoice();
    result();
  })
);
function generatecomputerchoice() {
  computerchoice = Math.floor(Math.random() * 3) + 1;
  if (computerchoice === 1) {
    computerchoice = 'rock';
  }
  if (computerchoice === 2) {
    computerchoice = 'paper';
  }
  if (computerchoice === 3) {
    computerchoice = 'scissor';
  }
  computerchoicedisplay.innerHTML = computerchoice;
}

function result() {
  if (computerchoice === userchoice) {
    resultdisplay.innerHTML = 'Draw';
  } else if (
    (computerchoice === 1 && userchoice === 'paper') ||
    (computerchoice === 2 && userchoice === 'scissor') ||
    (computerchoice === 3 && userchoice === 'rock')
  ) {
    resultdisplay.innerHTML = 'You win';
  } else {
    resultdisplay.innerHTML = 'You lose';
  }
}
function restart() {
  computerchoicedisplay.innerHTML = '';
  userchoicedisplay.innerHTML = '';
  resultdisplay.innerHTML = '';
}
