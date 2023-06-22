import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!\n`);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".\n`);

  const correctAnswerCount = 3;

  for (let i = 0; i < correctAnswerCount; i += 1) {
    const questionNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer:  ');

    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ; (.  Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!\n`);
      return;
    }

    console.log(`Correct!\n`);
  }
  console.log(`Congratulations, ${name}!\n`);
};

playEvenGame();