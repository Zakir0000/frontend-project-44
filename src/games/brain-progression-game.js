import playGame from '../index.js';
import generateRandomNumber from '../generate-random-num.js';

const gameTerms = 'What number is missing in the progression?';

export default () => {
  const generateArithmeticProgression = (start, step, hiddenIndex) => {
    const progression = [];
    let correctAnswer = '';

    for (let i = 0; i < 10; i += 1) {
      const value = start + i * step;
      progression.push(value);

      if (i === hiddenIndex) {
        const prevValue = progression[i - 1];
        const prevToPrevValue = progression[i - 2];
        const nextValue = progression[i + 1];
        const nextToNextValue = progression[i + 2];

        if (!nextValue) {
          correctAnswer = String((prevValue - prevToPrevValue) + prevValue);
        } else if (!prevValue) {
          correctAnswer = String(nextValue - (nextToNextValue - nextValue));
        } else if (prevValue && nextValue) {
          correctAnswer = String(prevValue + ((nextValue - prevValue) / 2));
        }
      }
    }

    progression[hiddenIndex] = '..';

    return {
      hiddenValue: progression[hiddenIndex],
      progression: progression.join(' '),
      correctAnswer,
    };
  };

  const playGameStructure = () => {
    const start = generateRandomNumber(1, 10);
    const step = generateRandomNumber(1, 10);
    const hiddenIndex = generateRandomNumber(0, 9);

    const question = generateArithmeticProgression(start, step, hiddenIndex);

    const { correctAnswer } = question;

    return [question.progression, correctAnswer];
  };

  playGame(gameTerms, playGameStructure);
};
