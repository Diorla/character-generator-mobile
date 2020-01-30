
import view from './../data/view';
import oddCalculator from './oddCalculator';

const getView = () => {
  const { annoying, boring } = view;

  return {
    annoyingStuff: oddCalculator(annoying),
    boringStuff: oddCalculator(boring)
  }
}

export default getView;