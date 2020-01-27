import accessories from "../data/accessories";
import oddCalculator from "./oddCalculator";

const getAccessories = (age) => {
  const { main, teen, middle, old } = accessories;
  
  if (age > 80) return oddCalculator(main, old);
  else if (age < 20) return oddCalculator(main, teen);
  return oddCalculator(main, middle);
};

export default getAccessories;
