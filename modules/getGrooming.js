
import oddCalculator from './oddCalculator';
import grooming from './../data/grooming';

const getGrooming = ()=> {
  return oddCalculator(grooming.main, grooming.odds)
}

export default getGrooming;