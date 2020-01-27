
import oddCalculator from './oddCalculator';
import body from '../data/body';

const getPosture =()=> oddCalculator(body.posture, body.postureOdds);

export default getPosture;