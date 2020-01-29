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

const main = [
  "Indulgent", //6-2 Gave the child everything s/he wanted. There are no rules
  "Negligent", //4-8 Hardly a parent. Child practically raised his/herself, usually due to incompetence or being too busy
  "Sheltering", //2-32 Protect the child a lot from most of troubles in life. Helicopter parenting.
  "Authoritative", //1-64 Parents are demanding but reasonable. They provide guidance and support.
  "Affectionless", //3-16 Lacks warmth and care, and can be very controlling.
  "Disciplined or Authoritarian", //5-4 Limited flexibility for the child, communication is one way and may include punishment
  "Abusive" //7-1 Mistreatment of child
];
const odds = [2, 8, 32, 64, 16, 4, 1];

const parenting = () => oddCalculator(main, odds);
const title = word => {
  const [start, end] = [
    word.slice(0, 1).toUpperCase(),
    word.slice(1).toLocaleLowerCase()
  ];
  return start + end;
};
const getChildhood=()=> {
  const mother = parenting();
  const father = parenting();
  if(mother==father) return title(`${mother} parent`)
  return title(`${mother} mother and ${father} father`)
}
console.log(getChildhood());
