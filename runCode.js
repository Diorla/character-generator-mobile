/**
 * @function It's a subroutine of oddCalculator, each item has equal odds
 * @param {Array} arr - The items from which you want to select
 */
const _withoutOdds = arr => {
  const total = arr.length;
  const index = Math.floor(Math.random() * total);
  return arr[index];
};

/**
 * @function It's a subroutine of _withOdds, the central items have higher odds than the extremes
 * @param {Array} arr - The items from which you want to select
 */
const _gaussian = arr => {
  let prev = 0;
  let next = 0;
  let coeffArr = [];
  let max = Math.ceil(arr.length / 2);
  let isEven = arr.length % 2 == 0;
  for (let i = 1; i <= max; i++) {
    next++;
    prev += next;
    coeffArr.push(prev);
  }
  let pascal = [...coeffArr];
  coeffArr.reverse();
  if (isEven) pascal.push(...coeffArr);
  else pascal.push(...coeffArr.slice(1));
  return pascal;
};
/**
 * @function It's a subroutine of oddCalculator, each item has equal odds
 * @param {Array} arr - The items from which you want to select
 * @param {Array|boolean} [odds] - If it's truthy and not an array, it will use gaussian. If it's array, it is the odd of each item. Otherwise, each item have equal odds.
 */
const _withOdds = (arr, odds) => {
  if (!odds.length && odds) odds = _gaussian(arr);
  let total = 0;
  let totalOdds = odds.map(n => Number((total += n).toFixed(2)));
  let target = Math.floor(Math.random() * totalOdds[totalOdds.length - 1]);
  for (let i = 0; i < arr.length; i++) {
    if (totalOdds[i] > target) return arr[i];
  }
};

/**
 * @function It will return an item from the list items you provide.
 * @param {Array} arr - The items from which you want to select
 * @param {Array|boolean} [odds] - If it's true, it will use gaussian. If it's array, it is the odd of each item. Otherwise, each item have equal odds.
 */
const oddCalculator = (arr, odds) =>
  odds ? _withOdds(arr, odds) : _withoutOdds(arr);

let fifteen = 0;
let sixtyfive = 0;
let hundred = 0;
for (let i = 0; i < 1000; i++) {
  let age;
  const ageRange = oddCalculator([15, 65, 100], [26.3, 65.9, 7.9]);
  if(ageRange===15) fifteen++;
  if(ageRange===65) sixtyfive++;
  if(ageRange===100) hundred++;
  // if (ageRange === 15) {
  //   age = Math.floor(Math.random() * 15);
  // } else if (ageRange === 65) {
  //   age = 15 + Math.floor(Math.random() * 41);
  // } else {
  //   age = 65 + Math.floor(Math.random() * 60);
  // }
  // console.log(ageRange, age);
}

console.log(fifteen, sixtyfive, hundred)