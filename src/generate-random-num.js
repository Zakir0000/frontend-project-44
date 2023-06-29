const generateRandomNumber = (min = 0, max = 10) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

export default generateRandomNumber;
