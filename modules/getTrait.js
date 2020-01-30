import trait from "../data/trait"
import oddCalculator from './oddCalculator';

const getTrait = () => {
  const arr = {}
  const keys = Object.keys(trait);
  const values = Object.values(trait);

  for(let i=0; i<keys.length; i++) {
    const k = keys[i];
    const v = oddCalculator(values[i])
    arr[k] = v;
  }

  return arr;
}


export default getTrait;