/**
 * @param {Array} arr 
 * @param {Array} odds 
 */

const oddCalculator=(arr, odds)=>{
  let total = 0;
  let totalOdds = odds.map(n=>Number((total+=n).toFixed(2)));
  let target = Math.floor(Math.random()*totalOdds[totalOdds.length-1]);
  for(let i = 0; i < arr.length; i++) {
      if(totalOdds[i] > target) return arr[i]
  }
}


export default oddCalculator;