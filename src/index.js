import readlineSync from 'readline-sync';

export const playGame = (gameTerms, getQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameTerms}`);

  for (let round = 1; round <= 3; round += 1) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export const generateRandomNumber = (min = 0, max = 10) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};
