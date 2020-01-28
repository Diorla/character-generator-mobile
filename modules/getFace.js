import oddCalculator from "./oddCalculator";
import ear from "../data/ear";
import nose from "../data/nose";
import skinTone from "../data/skinTone";
import lips from "../data/lips";
import face from "../data/face";
import facialHair from "../data/facialHair";
import facialFeatures from "../data/facialFeatures";
import forehead from "../data/forehead";

const getEar = () => {
  const { size, sizeOdds, shapeOdds, shape } = ear;
  return {
    size: oddCalculator(size, sizeOdds),
    shape: oddCalculator(shape, shapeOdds)
  };
};

const getNose = skinColour => {
  const { shape, dark, size, odds, others } = nose;
  if (skinTone.dark.includes(skinColour)) {
    return {
      shape: oddCalculator(shape, dark),
      size: oddCalculator(size, odds)
    };
  } else {
    return {
      shape: oddCalculator(shape, others),
      size: oddCalculator(size, odds)
    };
  }
};

const getDoubleChin = weightType => {
  const { chin, obese, overweight, other } = facialFeatures;
  if (weightType == "Obese") return oddCalculator(chin, obese);
  else if (weightType == "Overweight") return oddCalculator(chin, overweight);
  else return oddCalculator(chin, other);
};

const getFreckles = (hairColour = "Dark") => {
  const { freckles, brownHair, blondeHair, redHair } = facialFeatures;
  if (hairColour === "Black") return "Normal";
  else if (hairColour === "Brown") return oddCalculator(freckles, brownHair);
  else if (hairColour === "Blonde") return oddCalculator(freckles, blondeHair);
  return oddCalculator(freckles, redHair);
};

const getFacialHair = (gender, age) => {
  const { moustache, beard, moustacheOdds, beardOdds } = facialHair;
  if (gender == "Male" && age >= 18) {
    return {
      moustache: oddCalculator(moustache, moustacheOdds),
      beard: oddCalculator(beard, beardOdds)
    };
  } else return "Normal";
};
export default (skinColour, weightType, hairColour, gender, age) => {
  const { moustache, beard } = getFacialHair(gender, age);
  return {
    beard,
    moustache,
    ear: getEar(),
    nose: getNose(skinColour),
    lips: oddCalculator(lips.lip, lips.odds),
    forehead: oddCalculator(forehead.size, forehead.odds),
    face: oddCalculator(face.shape, face.odds),
    doubleChin: getDoubleChin(weightType),
    dimpledChin: oddCalculator(facialFeatures.dimpledChin, facialFeatures.odds),
    freckles: getFreckles(hairColour)
  };
};
