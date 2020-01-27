import health from "../data/health";
import oddCalculator from "./oddCalculator";

const getHealth = (age, gender) => {
  const { congenital, chronic, male, female, infectious, old } = health;
  let positive = 100;
  const disease = [];
  if (oddCalculator([true, false], [1, 81]))
    disease.push(oddCalculator(congenital));
  if (oddCalculator([true, false], [1, 81]))
    disease.push(oddCalculator(chronic));
  if (oddCalculator([true, false], [1, 81]))
    disease.push(oddCalculator(infectious));
  if (oddCalculator([true, false], [1, 81]))
    disease.push(oddCalculator(congenital));
  if (oddCalculator([true, false], [1, 81])) {
    if (gender == "Male") disease.push(oddCalculator(male));
    else disease.push(oddCalculator(female));
  }
  // The older, the higher the risk of disease
  // So if 20yrs=20/100 odds compared to 80yrs=80/100 odds
  if (age >= 100) positive = 0;
  else positive -= age;
  if (oddCalculator([true, false], [age, positive])) disease.push(oddCalculator(old))
  if(disease.length) return disease
  else return ["In good health"]
  //return disease;
};

export default getHealth;
