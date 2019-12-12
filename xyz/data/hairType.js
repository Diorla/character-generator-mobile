import oddCalculator from "./oddCalculator";

// depends on skin colour

const types = [ "Straight", "Wavy", "Curly", "Kinky" ];

const dark = [4.6, 13.6, 13.6, 68.2 ];

const others = [34.1, 34.1, 16.1, 15.7]


const getHairType = (skinColour="Dark") => {
  if(skinColour==="Dark") 
    return oddCalculator(types, dark);
  else 
    return oddCalculator(types, others);
}

export default getHairType;