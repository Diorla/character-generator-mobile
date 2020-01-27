
import oddCalculator from './oddCalculator';
import speech from '../data/speech';
const getSpeech = {
  speechStyle: ()=>oddCalculator(speech.style, speech.odds),
  speechImpediment: ()=>oddCalculator(speech.impediment, speech.impedimentOdds)
}


export default getSpeech;