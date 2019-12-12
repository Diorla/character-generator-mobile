import oddCalculator from "./oddCalculator";

// Legs and hands length and size
// depends on height

// length of limbs (long legs)
const length = ['Long limbs', 'Normal', 
'Short limbs'];

const size = ['Large hands & feet', 
  'Normal', 
  'Small hands & feet'];

const thickness = ['Big thighs', 'Normal', 'Skinny legs'];

const short = [4.6, 68.2, 27.2]

const average = [27.2, 68.2, 4.6]

const tall = [47.7, 47.7, 4.6]

const odds = [15.9, 68.2, 15.9]
/*
const height = [
  "Extremely tall", 'Tall', 'Slightly tall', 'Average', 
  'Slighly short', 'Short', 'Extremely short'
]
*/
const getLimbLength = (height="Average")=> {
  if(height==="Slightly tall"||height==="Average"||height==="Slighly short") 
    return oddCalculator(length, average);
  else if(height==="Extremely tall"||height==="Tall") //above average
    return oddCalculator(length, tall)
  return oddCalculator(length, short);
} 

// influenced by the length of the leg
// I assume shorter legs tends to be thicker
const getLimbThickness = (limbLength="Normal")=> {
  if(limbLength==="Normal") 
    return oddCalculator(thickness, average);
  else if(limbLength==="Short")
    return oddCalculator(thickness, tall)
  return oddCalculator(thickness, short);
} 


const getHandFeetSize = () => oddCalculator(size, odds);
export {
  getHandFeetSize, getLimbLength, getLimbThickness
}