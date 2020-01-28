import oddCalculator from './oddCalculator';
import quirks from '../data/quirk';


const getQuirk = () => {

  const { main } = quirks;
  const quirkArr = [];
  let count = 10;
  let negative = Math.random() * 3;
  while(count > 0) {
    if(oddCalculator([true, false], [count, negative])) {
      let temp = oddCalculator(main);
      while(quirkArr.includes(temp)) {
        temp = oddCalculator(main);
      }
      quirkArr.push(temp)
    }
    count -= negative;
  }
  if(quirkArr.length) return quirkArr;
  return ["Has no quirks"]
}

export default getQuirk;