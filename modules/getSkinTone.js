
import skinTone from "./../data/skinTone"
import oddCalculator from './oddCalculator';

export default obj => {
  //const skinColour = [];
  //const skinOdds = [];
  const { dark, olive, fair, darkOdds, oliveOdds, fairOdds } = skinTone;
  const skinColour = [...dark, ...olive, ...fair];
  const skinOdds = [...darkOdds, ...oliveOdds, ...fairOdds];
  /*if (obj.isDark) {
    skinColour.push(...dark);
    skinOdds.push(...darkOdds);
  }
  if (obj.isOlive) {
    skinColour.push(...olive);
    skinOdds.push(...oliveOdds);
  }
  if (obj.isFair) {
    skinColour.push(...fair);
    skinOdds.push(...fairOdds);
  }*/
  return oddCalculator(skinColour, skinOdds);
};
