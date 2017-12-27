import { emojis } from '../utils'; //new import statement up top.

//restartGame method
export function restartGame() {
  let randomQuestion = pickRandomQuestion(emojis);
  this.setState({
    emojis,
    randomQuestion,
    score: 0,
    active: true,
    gameMessage: ''
  });
}

export function handleChange(guess) {
  this.setState({
    guess
  });
}

export function checkGuess() {
  let { guess, score, gameMessage, emojis, randomQuestion, active } = Object.assign({}, this.state);
  let transformedGuess = guess.replace(/\W/g, '').toLowerCase();
  let transformedAnswer = emojis[randomQuestion].answer.replace(/\W/g, '').toLowerCase();
  if (transformedGuess === transformedAnswer) {
    score += 10;
    emojis = emojis.filter((emoji, index) => index !== randomQuestion);
    if (emojis.length !== 0 ) {
      gameMessage = 'Nice Job!';
    } else {
      gameMessage = 'You Win!';
      active = false;
    }
    randomQuestion = pickRandomQuestion(emojis);
  } else {
    gameMessage = 'Try Again!';
  }

  this.setState({
    guess: '',
    score,
    gameMessage,
    randomQuestion,
    emojis,
    active
  });
}

function pickRandomQuestion(arr) {
  return Math.floor(arr.length * Math.random());
}
