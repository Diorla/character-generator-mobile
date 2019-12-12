import oddCalculator from "./oddCalculator";

const darkSkin = [
  "Walnut dark", "Espresso dark", "Earthy dark", "Chocolate dark",
  "Chestnut dark", "Truffle dark", "Ebony"
]

const darkOdds = [ 3.58, 3.58, 3.58, 3.58, 3.58, 3.58, 3.58 ]
const otherOdds = [8.3, 8.3, 8.3]

const tanSkin = [ "Tan", "Honey", "Golden" ]

const mediumSkin = ["Amber", "Caramel", "Almond"];

const fairSkin = ["Ivory", "Porcelain", "Beige"]

const getSkinColour = (obj)=>{
  const skinColour = [];
  const skinOdds = [];
  if(obj.isDark) {
    skinColour.push(...darkSkin);
    skinOdds.push(...darkOdds);
  }
  if(obj.isTan) {
    skinColour.push(...tanSkin);
    skinOdds.push(...otherOdds);
  }
  if(obj.isMedium) {
    skinColour.push(...mediumSkin);
    skinOdds.push(...otherOdds);
  }
  if(obj.isFair) {
    skinColour.push(...fairSkin);
    skinOdds.push(...otherOdds);
  }
  return oddCalculator(skinColour, skinOdds);
}

export default getSkinColour