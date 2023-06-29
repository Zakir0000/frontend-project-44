import playGame from '../index.js';
import { generateRandomNumber } from '../generate-random-num.js';

export default () => {
  const gameTerms = 'Find the greatest common divisor of given numbers.';

  const calculateGcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return calculateGcd(num2, num1 % num2);
  };

  const playGameStructure = () => {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const question = `${num1} ${num2}`;

    const correctAnswer = () => String(calculateGcd(Number(num1), Number(num2)));
    return [question, correctAnswer()];
  };

  playGame(gameTerms, playGameStructure);
};
