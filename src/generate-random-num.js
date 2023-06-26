// eslint-disable-next-line import/prefer-default-export
export const generateRandomNumber = (min = 0, max = 10) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};
