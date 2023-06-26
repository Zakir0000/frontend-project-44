import { playGame } from '../index.js';
import { generateRandomNumber } from '../generate-random-num.js';

export default () => {
  const gameTerms = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestion = () => generateRandomNumber();
  const getCorrectAnswer = (number) => {
    if (number < 2) {
      return 'no';
    }

    const sqrt = Math.sqrt(number);

    for (let i = 2; i <= sqrt; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }

    return 'yes';
  };

  playGame(gameTerms, getQuestion, getCorrectAnswer);
};
