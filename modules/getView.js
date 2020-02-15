import views from "../data/viewss";
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
