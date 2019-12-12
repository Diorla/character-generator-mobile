import oddCalculator from "./oddCalculator";

// depends on skin colour
const shape = [
  "Oval face",
  "Long face",
  "Oblong face",
  "Round face",
  "Square face",
  "Heart-shaped face",
  "Triangular face",
  "Diamond-shaped face",
  "Pyramidal face"

]

//const odds = [20, 10, 10, 20, 20, 5, 5, 5, 5]

const odds = [20, 20, 10, 20, 20, 5, 5, 5, 5]

const getFaceShape = ()=> oddCalculator(shape, odds);


export default getFaceShape;