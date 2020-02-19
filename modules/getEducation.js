import oddCalculator from "./oddCalculator";

const educationLevel = [
  "Preschool", //1
  "Primary/Elementary school", //1
  "Junior secondary/Middle school", //2
  "Senior secondary/High school", //2
  "Diploma/Associate degrees", //3
  "Degree", //3
  "Masters", //4
  "Doctorate" //4
];

export {educationLevel};

export default () => {

  let currentEducation = "";
  let n = 1;
  for (let level of educationLevel) {
    if(currentEducation=="Primary/Elementary school") n = 2;
    if(currentEducation=="Senior secondary/High school") n = 3;
    if(currentEducation=="Degree") n = 4;
    if (oddCalculator([true, false], [10-n, n])) currentEducation = level;
    else break;
  }
  console.log(currentEducation);
  return currentEducation;
};
