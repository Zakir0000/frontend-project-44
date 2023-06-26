import { playGame, generateRandomNumber } from '../index.js';

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

const gameTerms = 'What is the result of the expression?';

const getQuestion = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operator = generateRandomOperator();
  return `${num1} ${operator} ${num2}`;
};

const getCorrectAnswer = (question) => {
  const [num1, operator, num2] = question.split(' ');
  switch (operator) {
    case '+':
      return String(Number(num1) + Number(num2));
    case '-':
      return String(Number(num1) - Number(num2));
    case '*':
      return String(Number(num1) * Number(num2));
    default:
      return '';
  }
};

playGame(gameTerms, getQuestion, getCorrectAnswer);
