// match + 2, no match + 1 (min=2, max=4) 
// frequent n * 3, mid n * 2, low: n * 1
const pastime = {
  daily: [ //daily or any time
    "Swimming",
    "Learning new language",
    "Chess",
    "Dancing",
    "Writing",
    "Stargazing",
    "Scrapbooking",
    "Programming",
    "Reading",
    "Board games",
    "Listening to music",
    "Cooking",
    "Gaming",
    "Sudoku",
    "Scrabble",
  ],
  richExtrovert: {
    daily: [8, 4, 3, 8, 2, 3, 3, 2, 6, 6, 12, 4, 8, 4],
    regular: [],
  },
  poorExtrovert: {
    daily: [6, 3, 3, 8, 3, 3, 4, 3, 6, 6, 12, 4, 6, 3],
    regular: [],
  },
  richIntrovert: {
    daily: [6, 4, 4, 6, 3, 4, 2, 3, 8, 8, 12, 4, 8, 3],
    regular: [],
  },
  poorIntrovert: {
    daily: [4, 3, 4, 6, 6, 4, 4, 3, 4, 8, 8, 12, 4, 6, 4],
    regular: [],
  },
  regular: [ //often do whenever possible/regularly e.g. watch football
    "Partying", re
    "Rollercasting ride", re
    "Parks", pre
    "Cinema",rie
    "Skateboarding", re
    "BBQ", pre
    "Surfing", re
    "Paintballing", ri
    "Shopping", re
    "Bowling",
    "Gardening",
    "Golf",
    "Playing instrument",
    "Cycling",
    "Painting",
    "Darts",
    "Football",
    "People watching",
    "DIY",
    "Sewing",
    "Kite flying",
    "Electronics",
    "Tennis",
    "Origami",
    "Collecting seashells",
    "Volleyball",
    "Marbles",
    "Poker",
    "Mahjong",
    "Couponing",
    "Table football",
    "Improv",
    "Juggling",
    "Baseball",
    "Knitting",
    "Bird watching",
    "Laser tag",
    "Eating out",
    "Baking",
  ],
  main: [ //Something they like doing once in a while
    "Concert",
    "Camping",
    "Road trip",
    "Kayaking",
    "Mountain climbing",
    "Travelling abroad",
    "Museums and Art galleries",
    "Tourism",
    "Helicopter ride",
    "Cruise",
    "Safari",
    "Snowboarding",
    "Festival",
    "Ride hot air balloon",
    "Visit sport events e.g. world cup or olympic",
    "Sky diving",
    "Scuba diving",
    "Paragliding",
    "Bungee jumping",
    "Sledding",
    "Bumber car",
    "Sailing",
    "Fishing",
  ],
}

// These activities will be divided into extrovert and introverts (perhaps middle ground)
// The odds will be much lower if it's opposite i.e. 1 vs 0.1, 0.5(middle ground)
// Also rich vs poor(including middle class) since some activities are more expensive
// Rich people usually have more that they can do.