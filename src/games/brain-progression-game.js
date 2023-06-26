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
  const diff = progression[1] - progression[0];
  let correctAnswer;

  if (hiddenIndex === 0) {
    correctAnswer = progression[1] - diff;
  } else {
    correctAnswer = progression[hiddenIndex - 1] + diff;
  }

  if (progression[hiddenIndex] === '..') {
    return String(correctAnswer);
  }
  return String(progression[hiddenIndex]);
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
