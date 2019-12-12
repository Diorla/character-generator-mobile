import oddCalculator from "./oddCalculator";

const weight = [
  "Obese", 'Overweight', 'Big', 'Average weight', 
  'Slightly thin', 'Thin', 'Anorexic'
]

const odds = [ 0.2, 2.1, 13.6, 68.2, 13.6, 2.1, 0.2 ];

export default () => oddCalculator(weight, odds);