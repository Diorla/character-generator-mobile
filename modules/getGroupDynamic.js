import oddCalculator from "./oddCalculator";

const groupDynamic = [
  "Thinker: Always coming up with ideas, very creative and imaginative",
  "Seeker: Fountain of information, usually expert or studious",
  "Expressive: Always share their own opinions and tends to be opinionated",
  "Energiser: Stimulate the group into action, and tends to be charismatic",
  "Mediator: Mediates group conflicts, tends to be neutral or most reasonable one.",
  "Compromiser: Always agrees with the group, usually someone who's just happy to be part of the group",
  "Encourager: Makes other group member feel good, perhaps goodhearted or the joker",
  "Expediter: Turns idea into solution, usually action-driven",
  "Blocker: The stubborn one in the group, always disagreeing with rebelious spirit",
  "Attention seeker: wants to be the centre of attention. Usually supercifial",
  "Dominator: Tends to assert themselves over the group, can be ruthless or pitiless",
  "Avoider: Secretive and/or isolated member of the group, usually introverted, timid or evasive"
];

const getGroupDynamic = () => oddCalculator(groupDynamic);

export default getGroupDynamic;
