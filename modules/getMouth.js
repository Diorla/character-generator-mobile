import mouth from "../data/mouth";
import oddCalculator from './oddCalculator';

const getMouth = () => {
  const { smiles, smileOdds, laughters, laughterOdds } = mouth;

  return {
    smile: oddCalculator(smiles, smileOdds),
    laughter: oddCalculator(laughters, laughterOdds),
  }
};


export default getMouth;