import activities from "../data/activities";

const generateActvity = arr => {
  let count = Math.floor(Math.random() * 3) + 3; //3 to 6;
  const activity = [];
  while (count > 0) {
    const index = Math.floor(Math.random() * arr.length);
    activity.push(...arr.splice(index, 1));
    count -= 1;
  }
  return activity;
};

const getPastime = trait => {
  const introvert = ["Evasive", "Taciturn", "Timid", "Reclusive", "Introvert"];
  // const extrovert = [
  //   "Superficial", "Glamorous", "Sociable", "Extrovert", "Charming",
  // ]
  const { indoors, outdoors, main } = activities;
  const hobby = introvert.includes(trait)
    ? generateActvity(indoors)
    : generateActvity(outdoors);
  const activity = generateActvity(main);

  return {
    hobby,
    activity
  };
};


export default getPastime;