import playGame from '../index.js';
import generateRandomNumber from '../generate-random-num.js';

const gameTerms = 'What is the result of the expression?';

const playGameStructure = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operators = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, operators.length - 1);
  const operator = operators[randomIndex];
  const question = `${num1} ${operator} ${num2}`;
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
      break;
  }

  const correctAnswer = String(result);
  return [question, correctAnswer];
};

export default () => {
  playGame(gameTerms, playGameStructure);
};
