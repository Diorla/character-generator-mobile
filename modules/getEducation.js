import oddCalculator from "./oddCalculator";

const educationLevel = [
  "Preschool", //1 => 2-4
  "Primary/Elementary school", //1 => 4
  "Junior secondary/Middle school", //2 => 10
  "Senior secondary/High school", //2 => 13
  "Diploma/Associate degrees", //3 => 16
  "Degree", //3 => 16
  "Masters", //4 => 21
  "Doctorate" //4 => 24
];

export { educationLevel };

export default age => {
  let currentEducation = "";
  let n = 1;
  for (let level of educationLevel) {
    if (currentEducation == "Primary/Elementary school") {
      n = 2;
      if (age < 4) n += 7;
    }
    if (currentEducation == "Junior secondary/Middle school") {
      n = 2;
      if (age < 10) n += 7;
    }
    if (currentEducation == "Senior secondary/High school") {
      n = 3;
      if (age < 13) n += 6;
    }
    if (currentEducation == "Diploma/Associate degrees") {
      n = 3;
      if (age < 16) n += 6;
    }
    if (currentEducation == "Degree") {
      n = 4;
      if (age < 16) n += 5;
    }
    if (currentEducation == "Masters") {
      n = 4;
      if (age < 21) n += 5;
    }
    if (currentEducation == "Doctorate") {
      n = 4;
      if (age < 21) n += 5;
    }
    if (oddCalculator([true, false], [10 - n, n])) currentEducation = level;
    else break;
  }
  return currentEducation;
};
