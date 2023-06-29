import playGame from '../index.js';
import { generateRandomNumber } from '../generate-random-num.js';

export default () => {
  const generateRandomOperator = () => {
    const operators = ['+', '-', '*'];
    const randomIndex = generateRandomNumber(0, operators.length - 1);
    return operators[randomIndex];
  };

  const gameTerms = 'What is the result of the expression?';

  const playGameStructure = () => {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const operator = generateRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = () => {
      let result;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        default:
          return '';
      }
      return String(result);
    };
    return [question, correctAnswer()];
  };

  playGame(gameTerms, playGameStructure);
};
