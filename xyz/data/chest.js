// breast and shoulder width
// depends on gender and weight(body size)
import oddCalculator from "./oddCalculator";

// depends on body size and gender
const shoulder = ["Normal", "Broad shoulders"];

const maleBig = [68.2, 31.8]
const femaleBig = [86.4, 13.6]

const shoulderSize=(gender="Male", weightType)=> {
  if(weightType==="Big"||weightType==="Overweight") {
    if(gender==="Male") return oddCalculator(shoulder, maleBig);
    return oddCalculator(shoulder, femaleBig);
  }
  return "Normal";
}
const breast = [
  "Flat chested", 
  "Small breast", 
  "Normal", 
  "Big breast", 
  "Very large breast"
  ]

const thin = [13.6, 48.7, 34.1, 2.3, 2.3]

const average = [2.3, 13.6, 68.2, 13.5, 2.3]

const bigOver = [2.3, 13.6, 34.1, 47.7, 2.3]

const obese = [2.3, 2.3, 13.6, 34.1, 47.7 ]

const breastSize = (weight="Average")=> {
  if(weight==="Average")
    return oddCalculator(breast, average);
  else if(weight==="Big"||weight==="Overweight")
    return oddCalculator(breast, bigOver);
  else if(weight==="Obese")
    return oddCalculator(breast, obese);
  return oddCalculator(breast, thin);
}

export {
  shoulderSize, breastSize
}