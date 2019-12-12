import oddCalculator from "./oddCalculator";
// double chin depends on weight
// chin, getForehead

const chin = ["Normal", "Double Chin"]

const other = [95.4, 4.6]

const overweight = [82.8, 17.2];

const obese = [31.8, 68.2]


const dimpledChin = () => 
  oddCalculator(["Normal", "Dimpled chin"], [72.8, 27.2])

const getDoubleChin =(weight="Obese")=> {
  if(weight==="Obese") return oddCalculator(chin, obese)
  else if(weight==="Overweight") return oddCalculator(chin, overweight)
  else return oddCalculator(chin, other)
}


// depends on hair colour
const getFreckles = (colour="Dark") => {
  if(colour==="Dark") return "Normal"
  else if(colour==="Brown") 
    return oddCalculator(["Freckles", "Normal"], [2.1, 97.9])
  else if(colour==="Blonde")
    return oddCalculator(["Freckles", "Normal"], [13.6, 86.4])
  return oddCalculator(["Freckles", "Normal"], [34.1, 65.9])
}

export { dimpledChin, getDoubleChin, getFreckles };