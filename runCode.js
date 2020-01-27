/**
import oddCalculator from './modules/oddCalculator';
import oddCalculator from './modules/oddCalculator';
import oddCalculator from './modules/oddCalculator';
import oddCalculator from './modules/oddCalculator';
import oddCalculator from './modules/oddCalculator';
import oddCalculator from './modules/oddCalculator';
import oddCalculator from './modules/oddCalculator';
import oddCalculator from './modules/oddCalculator';
import oddCalculator from './modules/oddCalculator';
import oddCalculator from './modules/oddCalculator';
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


const consonant = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "qu",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "z"
];

const vowel = ["a", "e", "i", "o", "u", "y"];

const ash = ["ha", "he", "hi", "ho", "hu", "hy"];


const first = () => oddCalculator(["c", "v", "a"], [12, 6, 1])
const second = (option, odds) => oddCalculator(option, odds);
const third = (option, odds) => oddCalculator(option, odds);

const genWord = ()=> {
  let str = "";
  const ft = first();
  if(ft=="c") {
    str += oddCalculator(consonant);
    if(oddCalculator(["v", "a"], [6, 1])=="v") {
      str += oddCalculator(vowel)// + 
      str += oddCalculator([true, false], [7, 3]) ? "" : oddCalculator(consonant)
    } else {
      //test letters that can be followed by "h", e.g. "wh", "th", not dh or fh.
      //It also limits to those letter that will change their pronunciation e.g. s-sh, p, ph
      str += ["c", "p", "s", "t"].includes(str) ? oddCalculator(ash) : oddCalculator(vowel)
      str += oddCalculator([true, false], [7, 3]) ? "" : oddCalculator(consonant)
    }
  } else if(ft=="v") {
    str += oddCalculator(vowel);
    if(oddCalculator(["c", "a"], [6, 1])=="v") {
      str += oddCalculator(consonant)// + 
      //str += oddCalculator([true, false], [3, 7]) ? "" : oddCalculator(consonant)
    } else {
      str += oddCalculator(ash)// + 
      str += oddCalculator([true, false], [3, 7]) ? "" : oddCalculator(consonant)
    }
  } else {
    str += oddCalculator(ash);
    if(oddCalculator(["c", "v"], [3, 1])=="v") {
      str += oddCalculator(consonant)// + 
      //str += oddCalculator([true, false], [3, 7]) ? "" : oddCalculator(consonant)
    } else {
      str += oddCalculator(vowel)// + 
      str += oddCalculator([true, false], [3, 7]) ? "" : oddCalculator(consonant)
    }
  } 
  return str
}

//console.log(genWord())
const catchphrase=()=> {
  let probs = 10;
  let n = 2;
  let str = genWord();
  while (probs > n) {
    str += oddCalculator([true, false], [probs-n, n]) ? genWord() : "";
    n += 2;
    probs -= 2;
  }
  return str;
}
  
for(var i = 0; i < 10; i++) {
  console.log(catchphrase());
}
//first letter=> c, v, a
//if first = c, second must be v or a, or acceptable c
//if first = v, second must be c
//if first = a, second must be c or v(exluding the index e.g. hi and i)
// third is optional
// if second is v or ash, third must be c
// if second is c, then third must be acceptable c e.g. m=[b, p]
