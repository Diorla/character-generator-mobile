

const socialStatus = {
  main: [
    "Underclass", //8==> 8
    "Working poor", //6==> 6
    "Working class", //40==> 8
    "Lower middle class", // 26==> 13
    "Upper middle class", //13==> 40
    "Upper class", //8==> 26
  ],
  odds : {
    "Preschool": [
      40, 26, 8, 6, 8, 13
    ],
    "Primary/Elementary school": [
      40, 26, 8, 6, 8, 13
    ],
    "Junior secondary/Middle school": [
      26, 40, 8, 8, 6, 6
    ],
    "Senior secondary/High school": [
      26, 40, 8, 8, 6, 6
    ],
    "Diploma/Associate degrees": [
      6, 26, 40, 8, 8, 13
    ],
    Degree: [
      6, 8, 13, 40, 26, 8
    ],
    Masters: [
      8, 6, 8, 13, 40, 26
    ],
    Doctorate: [
      8, 6, 8, 13, 40, 26
    ],
    others: [ //regardless of education
      8, 6, 40, 26, 13, 8
    ]
  }
}

export {
  socialStatus
}
export default (arg) => socialStatus[arg];