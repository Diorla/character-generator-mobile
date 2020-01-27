/**
 * @param {integer} n
 * @returns {Array}
 */
const medium = n => {
  const top = n + 3;
  const bottom = n - 3;
  const diff = top - bottom;
  const rdiff = (Math.random() * diff).toFixed(2);
  return Number(rdiff) + bottom;
};

const tall = n => {
  const top = n + 10;
  const bottom = n + 4;
  const diff = top - bottom;
  const rdiff = (Math.random() * diff).toFixed(2);
  return Number(rdiff) + bottom;
};

const xTall = n => {
  const top = n + 17;
  const bottom = n + 11;
  const diff = top - bottom;
  const rdiff = (Math.random() * diff).toFixed(2);
  return Number(rdiff) + bottom;
};

const xxTall = n => {
  const top = n + 27;
  const bottom = n + 18;
  const diff = top - bottom;
  const rdiff = (Math.random() * diff).toFixed(2);
  return Number(rdiff) + bottom;
};

const short = n => {
  const bottom = n - 10;
  const top = n - 4;
  const diff = top - bottom;
  const rdiff = (Math.random() * diff).toFixed(2);
  return Number(rdiff) + bottom;
};

const xShort = n => {
  const bottom = n - 17;
  const top = n - 11;
  const diff = top - bottom;
  const rdiff = (Math.random() * diff).toFixed(2);
  return Number(rdiff) + bottom;
};

const xxShort = n => {
  const bottom = n - 27;
  const top = n - 18;
  const diff = top - bottom;
  const rdiff = (Math.random() * diff).toFixed(2);
  return Number(rdiff) + bottom;
};

export default {
  medium,
  tall,
  xTall,
  xxTall,
  short,
  xShort,
  xxShort,
};
