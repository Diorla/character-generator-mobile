import oddCalculator from "./oddCalculator";
// Beard and Moustache
// depend on gender

const beard = ['Normal', 'Stubbly face', "Full beard", 'Short beard', 'Eccentric beard']
const BeardOdds = [68.6, 13.6, 13.6, 2.1, 2.1]

const moustache = ['Normal', 'Moustached']
const MoustacheOdds = [72.8, 27.2]

const getBeardType = () => 
  oddCalculator(beard, BeardOdds)

const hasMoustache =()=> 
  oddCalculator(moustache, MoustacheOdds)

export { getBeardType, hasMoustache };