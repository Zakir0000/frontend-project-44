import { playGame } from '../index.js';
import { generateRandomNumber } from '../generate-random-num.js';

export default () => {
  const gameTerms = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestion = () => {
    const question = generateRandomNumber();
    return question;
  };

  const getCorrectAnswer = (number) => {
    const answer = number % 2 === 0 ? 'yes' : 'no';
    return answer;
  };

  playGame(gameTerms, getQuestion, getCorrectAnswer);
};
