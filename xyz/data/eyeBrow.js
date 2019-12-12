import oddCalculator from "./oddCalculator";


const  shape = [
  "Rounded eyebrows with low arch", 
  "Rounded eyebrows with medium arch", 
  "Rounded eyebrows with high arch", 
  "Soft angled eyebrows with low arch", 
  "Soft angled eyebrows with low arch", 
  "Soft angled eyebrows with low arch", 
  "Hard angled eyebrows", 
  "Flat eyebrows", 
  "S-shaped eyebrows", 
  "Straight eyebrows"
];
const odds = [6, 6, 6, 6, 6, 6, 15, 15, 15, 15 ]

const size = ["Thick", "Normal", "Thin"]

const getEyeBrowShape = ()=> oddCalculator(shape, odds)

const getEyeBrowSize = ()=> oddCalculator(size, [13.6, 72.8, 13.6])

export {
  getEyeBrowShape, getEyeBrowSize
}
