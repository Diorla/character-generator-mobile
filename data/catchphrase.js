const catchphrase = {
  main: ["Normal", "Gotcha"]
};

const consonant = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "qu",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "z"
];

const vowel = ["a", "e", "i", "o", "u", "y"];

const ash = ["ha", "he", "hi", "ho", "hu", "hy"];



//first letter=> c, v, a
//if first = c, second must be v or a, or acceptable c
//if first = v, second must be c
//if first = a, second must be c or v(exluding the index e.g. hi and i)
// third is optional
// if second is v or ash, third must be c
// if second is c, then third must be acceptable c e.g. m=[b, p]
