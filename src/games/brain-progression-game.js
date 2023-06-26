import { greetUser, playGame, generateRandomNumber } from '../index.js';

const generateArithmeticProgression = (length) => {
  const start = generateRandomNumber();
  const diff = generateRandomNumber(1, 10);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * diff);
  }

  return progression;
};

const hideRandomNumber = (progression) => {
  const hiddenIndex = generateRandomNumber(0, progression.length - 1);
  const hiddenValue = progression[hiddenIndex];
  // eslint-disable-next-line no-param-reassign
  progression[hiddenIndex] = '..';
  return {
    hiddenValue,
    progression,
  };
};

const getProgressionQuestion = (progression) => progression.join(' ');

const getProgressionAnswer = (progression, hiddenIndex) => {
  const hiddenValue = progression[hiddenIndex];
  if (hiddenValue === '..') {
    const prevValue = progression[hiddenIndex - 1];
    const prevToPrevValue = progression[hiddenIndex - 2];
    const nextValue = progression[hiddenIndex + 1];
    const nextToNextValue = progression[hiddenIndex + 2];
    if (prevValue) {
      const correctAnswer = prevValue + ((nextValue - prevValue) / 2);
      return String(correctAnswer);
    // eslint-disable-next-line no-else-return
    } else if (prevValue === true && nextValue !== true) {
      const correctAnswer = (prevValue - prevToPrevValue) + prevValue;
      return String(correctAnswer);
    } else if (prevValue !== true) {
      const correctAnswer = nextValue - (nextToNextValue - nextValue);
      return String(correctAnswer);
    }
  // eslint-disable-next-line no-else-return
  } else {
    return hiddenValue;
  }
};

const playProgressionGame = () => {
  const name = greetUser();

  const gameTerms = 'What number is missing in the progression?';

  const getQuestion = () => {
    const progression = generateArithmeticProgression(10);
    const { progression: progressionWithHidden } = hideRandomNumber(progression);
    return getProgressionQuestion(progressionWithHidden);
  };

  const getCorrectAnswer = (question) => {
    const progression = question.split(' ').map((item) => (item === '..' ? '..' : parseInt(item, 10)));
    const hiddenIndex = progression.indexOf('..');
    return getProgressionAnswer(progression, hiddenIndex);
  };

  playGame(gameTerms, getQuestion, getCorrectAnswer, name);
};

playProgressionGame();
