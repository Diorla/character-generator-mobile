import oddCalculator from "./oddCalculator";


const  lip = [
  "Full lips", "Heavy upper lip", "Heavy lower lip", "Wide lips",
  "Round lips", "Thin lips", "Bow shaped lips", 
  "Heart shaped lips", "Downward turned lips"
];
const odds = [11, 11, 11, 11, 11, 11, 11, 11, 11 ]


const getLip =()=> oddCalculator(lip, odds)
export default  getLip;