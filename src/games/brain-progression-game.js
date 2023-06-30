import playGame from '../index.js';
import generateRandomNumber from '../generate-random-num.js';

const gameTerms = 'What number is missing in the progression?';

export default () => {
  const playGameStructure = () => {
    const start = 5;
    const step = 2;
    const length = generateRandomNumber(5, 10);
    const hiddenIndex = generateRandomNumber(0, length - 1);

    let question = '';
    let correctAnswer = '';

    for (let i = 0; i < length; i += 1) {
      const value = start + i * step;

      if (i === hiddenIndex) {
        question += '.. ';
        correctAnswer = String(value);
      } else {
        question += `${value} `;
      }
    }

    return [question.trim(), correctAnswer];
  };

  playGame(gameTerms, playGameStructure);
};
