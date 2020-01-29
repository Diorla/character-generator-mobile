import oddCalculator from "./oddCalculator";
import title from "./title";

const main = [
  "Indulgent", //6-2 Gave the child everything s/he wanted. There are no rules
  "Negligent", //4-8 Hardly a parent. Child practically raised his/herself, usually due to incompetence or being too busy
  "Sheltering", //2-32 Protect the child a lot from most of troubles in life. Helicopter parenting.
  "Authoritative", //1-64 Parents are demanding but reasonable. They provide guidance and support.
  "Affectionless", //3-16 Lacks warmth and care, and can be very controlling.
  "Disciplined or Authoritarian", //5-4 Limited flexibility for the child, communication is one way and may include punishment
  "Abusive" //7-1 Mistreatment of child
];

const odds = [2, 8, 32, 64, 16, 4, 1];

const parenting = () => oddCalculator(main, odds);

const getChildhood = () => {
  const mother = parenting();
  const father = parenting();
  if (mother == father) return title(`${mother} parent`);
  return title(`${mother} mother and ${father} father`);
};

export default getChildhood;
