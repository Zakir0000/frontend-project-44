import { greetUser, playGame, generateRandomNumber } from '../index.js';

const gameTerms = 'Answer "yes" if number is prime. Otherwise answer "no".';
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

const name = greetUser();
playGame(gameTerms, getQuestion, getCorrectAnswer, name);
