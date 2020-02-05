const speech = {
  style: [
    "Superfluous", //2
    "Elevator", //3
    "Educated", //6
    "Ordinary", //11
    "Accentuated", //10
    "Peppered with slang", //5
    "Uses a lot of jargons", //4
    "Wordy", //8
    "Concise" //7
  ],
  odds: [4, 9, 36, 121, 100, 25, 16, 64, 49],
  impediment: [
    "Stutters",
    "Ordinary",
    "Verbal tic", //um, like, as in, and so, you know, understand, you think
    "Lisping",
    "Can't pronounce r (rabbit=>wabbit)",
    "Can't pronounce l (lorry=>orry or yorry)",
    "Takes frequent pauses when speaking"
  ],
  impedimentOdds: [1, 10, 100, 15, 0.1, 10, 1],
  tempo: ["Drawling", "Slow", "Rapid", "Measured"],
  tempoOdds: [1, 4, 16, 64]
};

//c=>t, ch, g=>d

// lisp=> s/z //sound alike
// r=>w //pronouce r as w
// l=>silent or y //lorry => yorry, blurry => byurry, fill=> fi/fee. 
// It's rare since it's usually due to tied tongue(which can be fixed) or 
// a language which doesn't distinguish e.g. Korean or Japanese.

export default speech;
