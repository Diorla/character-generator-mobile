import oddCalculator from "./oddCalculator";
// double chin depends on weight

const size = ["Big", "Normal", "Small"];
const sizeOdds = [14, 72, 14];

const shape = [
  "Square ears", 
  "Pointing ears", 
  "Narrow ears", 
  "Ears sticking out", 
  "Round ears",
  "Round attached ears", 
  "Round ears with broad lobe"
]

const shapeOdds = [ 20, 20, 15, 15, 10, 10, 10 ]

const getEarSize = () => oddCalculator(size, sizeOdds)

const getEarShape =()=> oddCalculator(shape, shapeOdds)

export { getEarSize, getEarShape };