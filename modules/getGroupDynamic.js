import oddCalculator from "./oddCalculator";

const groupDynamic = [
  "Always coming up with ideas, very creative and imaginative or simply can't shut up.", //Thinker
  "Fountain of information, usually expert or generally more knowledgeable.", //Seeker
  "Always share their own opinions and tends to be opinionated.", //Expressive
  "Stimulate the group into action, and tends to be charismatic.", //Energiser
  "Mediates group conflicts, tends to be neutral or most reasonable one.", //Mediator
  "Always agrees with the group, usually someone who's just happy to be part of the group.", //Compromiser
  "Makes other group member feel good, perhaps goodhearted or the joker.", //Encourager
  "Turns idea into solution, usually action-driven or practical.", //Expediter
  "The stubborn one in the group, always disagreeing, has a rebelious spirit.", //Blocker
  "Wants to be the centre of attention. Usually supercifial or vain.", //Attention seeker
  "Tends to assert themselves over the group, can be ruthless, pitiless or control freak.", //Dominator
  "Secretive and/or isolated member of the group, usually introverted, timid or evasive." //Avoider
];

const getGroupDynamic = () => oddCalculator(groupDynamic);

export default getGroupDynamic;
