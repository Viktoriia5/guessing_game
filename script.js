let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const guessClickHandler = function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('No number!');
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage('That`s right! you won!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'The number is too big!'
          : 'The number is too small!'
      );
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? 'The number is too big!'
      //     : 'The number is too small!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You`ve lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};
console.log(secretNumber);

const resetClickHandler = function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = '20';
};

document.querySelector('.again').addEventListener('click', resetClickHandler);
document.querySelector('.check').addEventListener('click', guessClickHandler);
