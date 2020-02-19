const socialStatus = {
  main: [
    "Underclass", //8==> 8
    "Working poor", //6==> 6
    "Working class", //40==> 8
    "Lower middle class", // 26==> 13
    "Upper middle class", //13==> 40
    "Upper class" //8==> 26
  ],
  odds: {
    Preschool: [47.72, 34.13, 13.59, 2.14, 2.14, 1],
    "Primary/Elementary school": [13.59, 47.72, 34.13, 2.14, 2.14, 1],
    "Junior secondary/Middle school": [2.14, 13.59, 68.26, 13.59, 2.14, 1],
    "Senior secondary/High school": [2.14, 13.59, 47.72, 34.13, 2.14, 1],
    "Diploma/Associate degrees": [2.14, 2.14, 13.59, 68.26, 13.59, 1],
    Degree: [2.14, 2.14, 34.13, 47.72, 13.59, 1],
    Masters: [2.14, 2.14, 13.59, 47.72, 34.13, 1],
    Doctorate: [2.14, 2.14, 13.59, 34.13, 47.72, 1],
    others: [
      //regardless of education
      2.14,
      13.59,
      47.72,
      34.13,
      2.14,
      1
    ]
  }
};

export default socialStatus;
