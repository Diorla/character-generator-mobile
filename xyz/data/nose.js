import oddCalculator from "./oddCalculator";
//nose shape depends on skin colour


const shape = [
  "Hooked shaped", 
  "Droopy nose", 
  "Aquiline nose", 
  "Roman nose", 
  "Grecian nose", 
  "Button shaped", 
  "Upturned nose", 
  "Snub nose", 
  "Funnel shaped", 
  "Nubian nose"
]

const dark = [5, 5, 5, 5, 5, 5, 5, 5, 5, 55];
const others = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]

const getNoseSize=()=> oddCalculator(
  ["Small", "Normal", "Big"], [14, 72, 14]
)

const getNoseShape=(skinColour="Dark")=> {
  if(skinColour==="Dark") 
    return oddCalculator(shape, dark);
  return oddCalculator(shape, others);
}


export {
  getNoseShape, getNoseSize
}