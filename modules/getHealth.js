import health from "../data/health";
import oddCalculator from "./oddCalculator";

const getHealth = age => {
  const { congenital, old, chronic, infectious } = health;
  let positive = 100;
  const disease = [];
  if (oddCalculator([true, false], [1, 9])) return oddCalculator(congenital);
  else if (oddCalculator([true, false], [1, 9])) return oddCalculator(chronic);
  else {
    if (age >= 100) positive = 0;
    else positive -= age;
    // The older, the higher the risk of disease
    // So if 20yrs=20/100 odds compared to 80yrs=80/100 odds
    if (oddCalculator([true, false], [age, positive]))
      return oddCalculator(old);
    else return "In good health";
  }
};

export default getHealth;
