import { playGame } from '../index.js';
import { generateRandomNumber } from '../generate-random-num.js';

const gameTerms = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestion = () => generateRandomNumber();
const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

playGame(gameTerms, getQuestion, getCorrectAnswer);
