/**
 * @param {String} range 
 * @param {integer} height 
 * @returns {Array}
 */

const calculateWeight=(range, height)=>{
  const bmi = {
    xxl: [40.1, 50],
    xl: [33.1, 40],
    l: [26.1, 33],
    m: [17.1, 26],
    s: [13.1, 17],
    xs: [7.1, 13],
    xss: [5, 7]
  }
  // generate Bmi
  const diff = bmi[range][1]-bmi[range][0];
  const rdiff = (Math.random()*diff).toFixed(2)
  const bmiIndex = Number(rdiff)+bmi[range][0];
  //weight
  return (bmiIndex*(height/100)**2).toFixed(2);
}



export default calculateWeight;