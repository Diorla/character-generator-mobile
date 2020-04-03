import views from "../data/views";
import oddCalculator from "./oddCalculator";
import remove from "../array";

const getView = () => {
  const { annoying, boring, likes } = views;
  const dislikes = oddCalculator([...annoying, ...boring]);
  const filteredLikes = remove([...annoying, ...boring], ...dislikes);
  const likedStuff = oddCalculator(filteredLikes);
  const filteredAnnoy = remove(annoying, ...dislikes, ...likes);
  const filteredBoring = remove(boring, ...dislikes, ...likes);

  return {
    dislikes,
    likedStuff,
    annoyingStuff: oddCalculator(filteredAnnoy),
    boringStuff: oddCalculator(filteredBoring)
  };
};

export default getView;
