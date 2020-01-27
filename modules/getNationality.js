import oddCalculator from "./oddCalculator";
import { nationality } from "./../data/nationality";

export default () => oddCalculator(nationality.country, nationality.population);
