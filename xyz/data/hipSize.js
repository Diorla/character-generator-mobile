// depend on gender
import oddCalculator from "./oddCalculator";

const hip = [
  "Very small hips", 
  "Small hips", "Normal", "Big hips", 
  "Very big hips"
  ]

const male = [0.2, 4.2, 81.8, 13.6, 0.2]

const female = [2.3, 13.6, 68.2, 13.6, 2.3]

const getHipSize = (gender="Male") => {
  if(gender==="Male")
    return oddCalculator(hip, male);
  return oddCalculator(hip, female)
}

export default getHipSize;