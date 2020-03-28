import calculateWeight from './calculateWeight';
import calculateHeight from './calculateHeight';
import oddCalculator from './oddCalculator';


import height from "./../data/height"
import weight from "./../data/weight"
import chest from "./../data/chest"
import buttock from "./../data/buttock"
import limbs from "./../data/limbs"
import neck from "./../data/neck"
import stomach from "./../data/stomach"
import hips from "./../data/hips"

const getHeightType = () => {
  const { main, odds } = height;
  return oddCalculator(main, odds);
};

const getBaseHeight = (age, gender) => {
  const { maleHeight, femaleHeight } = height;

  if (age < 13) age = 13;
  else if (age > 19) age = 19;

  if (gender == 'Male') return maleHeight[age];
  else return femaleHeight[age];
};

const getWeightType = () => {
  const { main, odds } = weight;
  return oddCalculator(main, odds);
};

const getButtock = (weight = 'Average') => {
  const { main, obese, overweight, big, others } = buttock;
  if (weight === 'Obese') return oddCalculator(main, obese);
  else if (weight === 'Overweight') return oddCalculator(main, overweight);
  if (weight === 'Big') return oddCalculator(main, big);
  return oddCalculator(main, others);
};

const getBreastSize = (weightType) => {
  const { breast, thin, average, bigOver, obese } = chest;

  if (weightType === 'Average') return oddCalculator(breast, average);
  else if (weightType === 'Big' || weightType === 'Overweight')
    return oddCalculator(breast, bigOver);
  else if (weightType === 'Obese') return oddCalculator(breast, obese);
  else return oddCalculator(breast, thin);
};

const getHeight = (heightType, baseHeight) => {
  const {
    medium,
    tall,
    xTall,
    xxTall,
    short,
    xShort,
    xxShort,
  } = calculateHeight;
  if (heightType == 'Extremely tall') return xxTall(baseHeight);
  else if (heightType == 'Tall') return xTall(baseHeight);
  else if (heightType == 'Slightly tall') return tall(baseHeight);
  else if (heightType == 'Average') return medium(baseHeight);
  else if (heightType == 'Slighly short') return short(baseHeight);
  else if (heightType == 'Short') return xShort(baseHeight);
  else return xxShort(baseHeight);
};

const getShoulderSize = (weightType, gender) => {
  const { shoulder, male, female } = chest;
  if (weightType === 'Big' || weightType === 'Overweight') {
    if (gender == 'Male') return oddCalculator(shoulder, male);
    else return oddCalculator(shoulder, female);
  }
  return "Normal"
};

const getLimbLength = heightType => {
  const { length, average, tall, short } = limbs;
  const midrange = ['Slightly tall', 'Average', 'Slighly short'];
  if (midrange.includes(heightType)) return oddCalculator(length, average);
  else if (['Extremely tall', 'Tall'].includes(heightType))
    return oddCalculator(length, tall);
  return oddCalculator(length, short);
};

const getLimbThickness = limbLength => {
  const { thickness, average, tall, short } = limbs;
  if (limbLength === 'Normal') return oddCalculator(thickness, average);
  else if (limbLength === 'Short') return oddCalculator(thickness, tall);
  return oddCalculator(thickness, short);
};

const getHandFeetSize = () => oddCalculator(limbs.size, limbs.odds);

const getNeckSize = weightType => {
  const { size, obese, overweight, normalBig, thin } = neck;
  if (weightType === 'Obese') return oddCalculator(size, obese);
  else if (weightType === 'Overweight') return oddCalculator(size, overweight);
  else if (weightType === 'Average' || weightType === 'Big')
    return oddCalculator(size, normalBig);
  return oddCalculator(size, thin);
};

const getStomach = weightType => {
  const { main, average, big, overweight, obese, thin } = stomach;
  if (weightType === 'Average') return oddCalculator(main, average);
  else if (weightType === 'Big') return oddCalculator(main, big);
  else if (weightType === 'Overweight') return oddCalculator(main, overweight);
  else if (weightType === 'Obese') return oddCalculator(main, obese);
  return oddCalculator(main, thin);
};

const getHips = (gender, age) => {
  // don't wanna talk about the hips of a child
  if (age <= 19) return 'Normal';
  else if (gender == 'Male') return oddCalculator(hips.main, hips.male);
  else return oddCalculator(hips.main, hips.female);
};

const getBuild = (age, gender) => {
  const baseHeight = getBaseHeight(age, gender);
  const heightType = getHeightType();
  const weightType = getWeightType();
  const length = getLimbLength(heightType);
  const mHeight = getHeight(heightType, baseHeight)
  return {
    weightType,
    heightType,
    weight: age < 13 ? "" : calculateWeight(weightType, mHeight),
    heightCm: age < 13 ? "" : mHeight,
    shoulderSize: getShoulderSize(weightType, gender),
    breastSize: gender=="Female" ? getBreastSize(weightType): "Normal",
    buttock: getButtock(weightType),
    limbs: {
      length,
      thickness: getLimbThickness(length),
      handFeetSize: getHandFeetSize(),
    },
    neck: getNeckSize(weightType),
    stomach: getStomach(weightType),
    hips: getHips(gender, age),
  };
};

export default getBuild;
