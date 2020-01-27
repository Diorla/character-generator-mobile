import hair from './../data/hair';
import skinTone from './../data/skinTone';
//{ hair, skinTone }
import oddCalculator from './oddCalculator';

// hair type, colour, size, style

const hairType = skinColour => {
  const { type, darkType, lightType } = hair;
  const { dark, olive, fair } = skinTone;
  if (dark.includes(skinColour)) return oddCalculator(type, darkType);
  return oddCalculator(type, lightType);
};

const hairColour = skinColour => {
  const { colour, darkColour, oliveColour, fairColour } = hair;
  const { dark, olive, fair } = skinTone;
  if (dark.includes(skinColour)) return oddCalculator(colour, darkColour);
  else if (olive.includes(skinColour))
    return oddCalculator(colour, oliveColour);
  return oddCalculator(colour, fairColour);
};

const hairSize = (gender, age) => {
  const { size, menSize, femaleSize } = hair;
  if (gender == 'Male') {
    // I should increase it to like 30
    // Since the chances of balding is still low at 19 yrs
    if (age >= 19) return oddCalculator(size, menSize);
  }
  return oddCalculator(size, femaleSize);
};

export default (skinColour, gender, age) => {
  return {
    hairColour: hairColour(skinColour),
    hairSize: hairSize(gender, age),
    hairType: hairType(skinColour),
  };
};
