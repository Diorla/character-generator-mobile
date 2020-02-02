import trait from "../data/trait";
import oddCalculator from "./oddCalculator";

const getTrait = () => {
  const obj = {};
  const keys = Object.keys(trait);
  const values = Object.values(trait);

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    const v = oddCalculator(values[i], true);
    obj[k] = v;
  }
  //console.log(obj["submissiveness"])
  return obj;
};

export default getTrait;
