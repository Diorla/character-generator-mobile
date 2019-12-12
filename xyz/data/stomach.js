// depends on weight

import oddCalculator from "./oddCalculator";


const stomach = [ "Flat stomach", "Normal", "Big stomach" ]

const thin = [68.2, 27.2, 4.6]

const average = [27.2, 68.2, 4.6]

const big = [4.6, 68.2, 27.2]

const overweight = [4.6, 47.7, 47.7]

const obese = [0, 31.8, 68.2]

const getStomach = (weight="Average")=> {
  if(weight==="Average")
    return oddCalculator(stomach, average);
  else if(weight==="Big")
    return oddCalculator(stomach, big);
  else if(weight==="Overweight")
    return oddCalculator(overweight, big);
  else if(weight==="Obese")
    return oddCalculator(stomach, obese);
  return oddCalculator(stomach, thin);
}

export default getStomach;