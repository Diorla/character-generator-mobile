import views from "../data/views";
import oddCalculator from "./oddCalculator";

const getView = () => {
  const { annoying, boring } = views;
  const dislikes = oddCalculator([...annoying, ...boring]);

  return {
    dislikes,
    annoyingStuff: oddCalculator(annoying),
    boringStuff: oddCalculator(boring)
  };
};

export default getView;
