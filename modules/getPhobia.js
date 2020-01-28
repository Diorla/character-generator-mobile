import oddCalculator from "./oddCalculator";
import phobia from "./../data/phobia";

const getPhobia = () => {
  const { main } = phobia;
  const phobiaList = [];
  // Based on Medscape, 12% of Americans have phobias
  if (oddCalculator([true, false], [88, 12])) return ["Has no phobia"];
  let count = 10;
  let negative = Math.random() * 10;
  while (count > 0) {
    let temp = oddCalculator(main);
    while (phobiaList.includes(temp)) {
      temp = oddCalculator(main);
    }
    phobiaList.push(temp);
    negative += Math.random() * 10;
    count -= negative;
  }
  return phobiaList;
};

export default getPhobia;
