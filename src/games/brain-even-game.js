import playGame from '../index.js';
import generateRandomNumber from '../generate-random-num.js';

const gameTerms = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const isEven = (number) => number % 2 === 0;

  const playGameStructure = () => {
    const question = generateRandomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  playGame(gameTerms, playGameStructure);
};
