// Increase the range of ages(5 yrs to 19)

export default {
  main: [
    'Extremely tall', //xxl
    'Tall', //xl
    'Slightly tall', //l
    'Average height', //m
    'Slighly short', //s
    'Short', //xs
    'Extremely short', //xxs
  ],
  maleHeight: {
    13: 156, // or younger
    14: 167,
    15: 170,
    16: 173,
    17: 175,
    18: 176,
    19: 177, // or older
  },
  femaleHeight: {
    13: 157, // or younger
    14: 159,
    15: 160,
    16: 163,
    17: 163,
    18: 163,
    19: 163, // or older
  },
  odds: [0.2, 2.1, 13.6, 68.2, 13.6, 2.1, 0.2],
};
