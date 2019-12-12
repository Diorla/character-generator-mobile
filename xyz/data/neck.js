// depends on weight
import oddCalculator from "./oddCalculator";


const size = ["Normal", 
  "Long neck", 
  "Thick neck", "No visible neck"];

const thin = [72.8, 27.2, 0, 0];

const normalBig = [82.2, 13.6, 4.2, 0];

const overweight = [34.1, 0, 61.7, 4.2];

const obese = [0, 0, 34.1, 65.9]


const getNeck= (weight="Average")=> {
  if(weight==="Obese") 
    return oddCalculator(size, obese);
  else if(weight==="Overweight") 
    return oddCalculator(size, overweight);
  else if(weight==="Average"||weight==="Big") 
    return oddCalculator(size, normalBig);
  return oddCalculator(size, thin)
}
export default getNeck;