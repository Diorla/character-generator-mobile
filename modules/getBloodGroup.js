
import oddCalculator from './oddCalculator';
import bloodGroup from '../data/bloodGroup';


const getBloodGroup=()=> oddCalculator(bloodGroup.main, bloodGroup.odds);

export default getBloodGroup;