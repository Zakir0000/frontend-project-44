import playGame from '../index.js';
import generateRandomNumber from '../generate-random-num.js';

const gameTerms = 'What number is missing in the progression?';

const generateProgression = (start, step, length, hiddenIndex) => {
  let question = '';
  let correctAnswer = '';

  for (let i = 0; i < length; i += 1) {
    const value = start + i * step;

    question += i === hiddenIndex ? '.. ' : `${value} `;
    correctAnswer = i === hiddenIndex ? String(value) : correctAnswer;
  }

  return [question.trim(), correctAnswer];
};

const playGameStructure = () => {
  const start = 5;
  const step = 2;
  const length = generateRandomNumber(5, 10);
  const hiddenIndex = generateRandomNumber(0, length - 1);

  return generateProgression(start, step, length, hiddenIndex);
};

export default () => {
  playGame(gameTerms, playGameStructure);
};
