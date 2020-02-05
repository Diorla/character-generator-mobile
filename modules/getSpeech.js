import oddCalculator from "./oddCalculator";
import speech from "../data/speech";

const getSpeech = () => {
  const { style, odds, impediment, impedimentOdds, tempo, tempoOdds } = speech;
  const speechStyle = oddCalculator(style, odds);
  const speechImpediment = oddCalculator(impediment, impedimentOdds);
  const speechTempo = oddCalculator(tempo, tempoOdds);

  return {
    speechStyle,
    speechImpediment,
    speechTempo
  };
};
export default getSpeech;
