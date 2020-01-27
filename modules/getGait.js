
import oddCalculator from './oddCalculator';
import body from '../data/body';

const getGait=()=>oddCalculator(body.gait, body.gaitOdds);

export default getGait;