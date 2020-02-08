import oddCalculator from "./oddCalculator";

const truthful = [
  "Blunt",
  "Candid",
  "Truthful/open",
  "Selectively truthful",
  "Oblique",
  "Fibber",
  "Compulsive liar",
  "Deceptive",
  "Devious"
];

const getMorality = morality => {
  if (morality == "Evil")
    return oddCalculator(truthful, [5, 1, 1, 1, 1, 10, 10, 10, 10]);
  else if (morality == "Depraved")
    return oddCalculator(truthful, [1, 1, 1, 1, 10, 10, 10, 10, 10]);
  else if (morality == "Decadent")
    return oddCalculator(truthful, [1, 1, 1, 1, 1, 10, 10, 10, 10]);
  else if (morality == "Dishonest")
    return oddCalculator(truthful, [1, 1, 1, 10, 10, 10, 10, 10, 1]);
  else if (morality == "Decent")
    return oddCalculator(truthful, [10, 10, 10, 10, 10, 1, 1, 1, 1]);
  else if (morality == "Honest")
    return oddCalculator(truthful, [10, 10, 10, 10, 1, 1, 1, 1, 1]);
  else if (morality == "Ethical")
    return oddCalculator(truthful, [10, 10, 10, 1, 1, 1, 1, 1, 1]);
  else return oddCalculator(truthful, true);
};

export default getMorality;
