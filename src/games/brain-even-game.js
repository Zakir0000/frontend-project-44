import { greetUser, playGame, generateRandomNumber } from '../index.js';

const gameTerms = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestion = () => generateRandomNumber();
const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
const name = greetUser();
playGame(gameTerms, getQuestion, getCorrectAnswer, name);
