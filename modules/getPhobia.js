
import phobia from '../data/phobia';
import oddCalculator from './oddCalculator';

export default () => {
  let phobiaList = phobia.main;
  let phobiaOdds = phobia.odds;
  const currentList = [];
  let currentPhobia = true;
  // Based on Medscape, 12% of Americans have phobias
  let hasPhobia = 12;
  let noPhobia = 88;
  const count = 0;
  while(currentPhobia) {
    if(count > 0) currentList.push(oddCalculator(phobiaList, phobiaOdds));
    const temp = oddCalculator([true, false], [hasPhobia, noPhobia]);
    currentList.push(temp);

    // remove it from possible phobias to prevent repeat
    const index = phobiaList.findIndex((n)=>n==temp)
    phobiaList = [...phobiaList.slice(0, index), ...phobiaList.slice(index+1)];
    phobiaOdds = [...phobiaOdds.slice(0, index), ...phobiaOdds.slice(index+1)];
    
    // Eventually it will be 0 to 100, which means there are only 10 phobias
    // The possibility of having more phobias is increasily lower
    hasPhobia-=2;
    noPhobia+=2;

    count++
  }
  return currentList;
}