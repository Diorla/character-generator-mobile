import eyes from "./../data/eyes";
import skinTone from "./../data/skinTone";
import oddCalculator from "./oddCalculator";

const getColour = skinColour => {
  const { dark, olive } = skinTone;
  const { colour, darkColour, oliveColour, fairColour } = eyes;
  if (dark.includes(skinColour)) return oddCalculator(colour, darkColour);
  else if (olive.includes(skinColour))
    return oddCalculator(colour, oliveColour);
  return oddCalculator(colour, fairColour);
};

const getShape = skinColour => {
  const { dark, olive } = skinTone;
  const { shape, darkShape, oliveShape, fairShape } = eyes;
  if (dark.includes(skinColour)) return oddCalculator(shape, darkShape);
  else if (olive.includes(skinColour)) return oddCalculator(shape, oliveShape);
  return oddCalculator(shape, fairShape);
};

const getEyebrow = () => {
  const { eyebrowShape, eyebrowShapeOdds, eyebrowSize, eyebrowSizeOdds } = eyes;
  return {
    size: oddCalculator(eyebrowSize, eyebrowSizeOdds),
    shape: oddCalculator(eyebrowShape, eyebrowShapeOdds)
  };
};
export default skinColour => {
  const { distance, elevation, odds } = eyes;
  return {
    eyeColour: getColour(skinColour),
    eyeShape: getShape(skinColour),
    eyeDistance: oddCalculator(distance, odds),
    eyeElevation: oddCalculator(elevation, odds),
    eyeBrow: getEyebrow()
  };
};
