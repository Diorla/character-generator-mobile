import oddCalculator from "./oddCalculator";

// depends on skin colour
const shape = [
  "Round", "Almond", "Hooded", "Upturned", "Downturned", "Monolid"
]

const dark = [19, 19, 19, 19, 19, 5];

const tanMedium = [18, 18, 18, 18, 18, 10];

const fair = [17, 17, 17, 17, 17, 15];

const getEyeShape = (skinColour="Dark") =>{
  if(skinColour==="Dark") 
    return oddCalculator(shape, dark);
  else if(skinColour==="Fair") 
    return oddCalculator(shape, fair);
  else 
    return oddCalculator(shape, tanMedium);
}

export default getEyeShape;