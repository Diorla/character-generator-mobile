import outfits from './../data/outfit';
import oddCalculator from './oddCalculator';


const getOutfit = (gender)=> {
  const {
    maleTop,
    femaleTop,
    maleBottom,
    femaleBottom,
    over,
    maleHead,
    femaleHead,
    maleFoot,
    femaleFoot,
    maleComplete,
    femaleComplete,
    accessory,
  } = outfits

  const list = [];

  if(gender=="Male") {
    list.push(oddCalculator(maleTop))
    list.push(oddCalculator(maleBottom))
    list.push(oddCalculator(over))
    list.push(oddCalculator(maleHead))
    list.push(oddCalculator(maleComplete))
    list.push(oddCalculator(maleFoot))
  } else {
    list.push(oddCalculator(femaleTop))
    list.push(oddCalculator(femaleBottom))
    list.push(oddCalculator(over))
    list.push(oddCalculator(femaleHead))
    list.push(oddCalculator(femaleFoot))
    list.push(oddCalculator(accessory))
    list.push(oddCalculator(femaleComplete))
  }
  return list;
}

export default getOutfit;