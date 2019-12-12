/**
 * @param {String} range 
 * @param {integer} height 
 * @returns {Array}
 */

const calculateWeight=(weightType, height)=>{
  let bottom, top;
  if(weightType=="Obese") {
    bottom=35.1;
    top =40;
  }
  else if(weightType=="Overweight") {
    bottom=31.1;
    top =35;
  }
  else if(weightType=="Big") {
    bottom=25.1;
    top =30;
  }
  else if(weightType=="Average weight") {
    bottom=18;
    top =25;
  }
  else if(weightType=="Slightly thin") {
    bottom=16;
    top =17.9;
  }
  else if(weightType=="Thin") {
    bottom=14.5;
    top =15.9;
  }
  else  {
    bottom= 8;
    top = 14.5
  }

  //bmi * height**2
  // generate Bmi
  const diff = top-bottom;
  const rdiff = (Math.random()*diff).toFixed(2)
  const bmiIndex = Number(rdiff)+bottom;
  //weight
  return (bmiIndex*(height/100)**2).toFixed(2);
}



export default calculateWeight;