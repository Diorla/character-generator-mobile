import oddCalculator from "./oddCalculator";

const getCurseWord = () =>
  oddCalculator(
    [
      "Fuck",
      "Dammit",
      "Damn",
      "Darn",
      "Darn it",
      "Shit",
      "Dafuck",
      "Never curses",
      "None"
    ],
    [2, 8, 6, 4, 5, 7, 3, 1, 9]
  );

export default getCurseWord;
