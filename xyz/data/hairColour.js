import oddCalculator from "./oddCalculator";
// depends on skin colour

const darkSkin = [
  "Walnut dark", "Espresso dark", "Earthy dark", "Chocolate dark",
  "Chestnut dark", "Truffle dark", "Ebony"
]
const tanSkin = [ "Tan", "Honey", "Golden" ]
const mediumSkin = ["Amber", "Caramel", "Almond"];
const fairSkin = ["Ivory", "Porcelain", "Beige"]

const colour = [
  "Black", "Brown", "Blonde", "Red", "Artificial colour"
  ]

const darkTan = [ 47.7, 47.7, 2.1, 0.4, 2.1 ];

const medium = [ 34.1, 47.7, 13.6, 2.5, 2.1 ];

//const fair = [ 34.1, 34.1, 27.2, 4.2, 0.4 ];

const fair = [ 30, 35, 20, 10, 5];

const getHairColour= (skinColour="Ebony") =>{
  if(mediumSkin.includes(skinColour)) {
    return oddCalculator(colour, medium);
  }
  else if(fairSkin.includes(skinColour)) {
    return oddCalculator(colour, fair);
  }
  else {
    return oddCalculator(colour, darkTan);
  }
}

export default getHairColour;