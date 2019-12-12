import oddCalculator from "./oddCalculator";
// depends on skin colour

const colour = [ "Brown", "Blue", "Green", "Multichromatic"];

const darkTan = [95.4, 2.1, 2.1, 0.4];

const medium = [68.2, 27.2, 4.2, 0.4]

const fair = [47.7, 34.1, 13.6, 4.6]


const getEyeColour = (skinColour="Dark")=> {
  if(skinColour==="Medium") 
    return oddCalculator(colour, medium);
  else if(skinColour==="Fair") 
    return oddCalculator(colour, fair);
  else 
    return oddCalculator(colour, darkTan);
}

export default getEyeColour;