import oddCalculator from "./oddCalculator";

// depend on gender
const size = ["Long", "Normal", "Short", "Low", "Bald"]

const male= [ 13.6, 47.7, 36.2, 2.1, 0.4 ]

const female= [ 13.6, 47.7, 36.2, 2.5, 0 ]


const getHairSize = (gender="Male") => {
  if(gender="Male") 
    return oddCalculator(size, male);
  else 
    return oddCalculator(size, female);
}

export default getHairSize;