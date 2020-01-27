
import oddCalculator from './oddCalculator';
import gesture from './../data/gesture';

const getGesture = () => oddCalculator(gesture.main, gesture.odds);

export default getGesture;