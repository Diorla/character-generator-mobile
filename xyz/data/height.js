import oddCalculator from "./oddCalculator";

const height = [
  "Extremely tall", 'Tall', 'Slightly tall', 'Average height', 
  'Slighly short', 'Short', 'Extremely short'
]

const odds = [ 0.2, 2.1, 13.6, 68.2, 13.6, 2.1, 0.2 ];

export default () => oddCalculator(height, odds);