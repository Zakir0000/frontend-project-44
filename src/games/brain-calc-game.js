import playGame from '../index.js';
import generateRandomNumber from '../generate-random-num.js';

const gameTerms = 'What is the result of the expression?';

const operators = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};

const getRandomOperator = () => {
  const operatorSymbols = Object.keys(operators);
  const randomIndex = generateRandomNumber(0, operatorSymbols.length - 1);
  return operatorSymbols[randomIndex];
};

const playGameStructure = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = operators[operator](num1, num2);

  return [question, String(correctAnswer)];
};

export default () => {
  playGame(gameTerms, playGameStructure);
};
