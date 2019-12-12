// depends on body weight

import oddCalculator from "./oddCalculator";


const buttock = [ 'Normal', 'Big buttocks' ]

const thinAverage = [95.4, 4.6]

const big = [72.8, 27.2]

const overweight = [52.3, 47.7]

const obese = [31.8, 68.2]

const buttockSize = (weight="Average")=> {
  if(weight==="Big")
    return oddCalculator(buttock, big);
  else if(weight==="Overweight")
    return oddCalculator(overweight, big);
  else if(weight==="Obese")
    return oddCalculator(buttock, obese);
  return oddCalculator(buttock, thinAverage);
}

export default buttockSize;