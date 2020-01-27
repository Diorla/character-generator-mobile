
import oddCalculator from './oddCalculator';
import handwriting from '../data/handwriting';

const getHandwriting= () => {
  return oddCalculator(handwriting.main, handwriting.odds)
}
export default getHandwriting;