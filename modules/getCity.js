import countryId from "../data/country_id";
import fetchStates from "./../data/states";
import oddCalculator from "./oddCalculator";
import getNationality from "./getNationality";

/**
 * This function is currently returning states and it's going to stay that way because the list of cities are too much and it's affecting the speed of the app greatly. Perhaps remote download or with other tools like java or flutter will make it faster. Or perhaps, I could optimise it.
 * @todo let it return city. It will format it in the following Ibadan, Oyo State; Nigeria. So, I'll have to create a state_id as well. Note, the params won't change, this means that the likeliwood of moveing to Ogun state is just as much as Oyo state except if the person stays in Ibadan(hometown). Perhaps, I'll develop the algorithm that will handle that later, So that there will be an higher chances of moving to other Oyo state cities like Oyo, Igbeti, Ogbomosho.
 * @param {string} country - The name of a country
 * @param {string} hometown - If provided, it will return current location (state and country), otherwise, it will return a place of birth which will match the same country provided
 */
const getCity = (country, hometown) => {
  const id = countryId[country];
  const states = fetchStates(id);
  console.log(`country: ${country}, hometown: ${hometown}`)
  // Current location
  if (hometown) {
    //grew up in the same city
    if (oddCalculator([false, true], [3, 7])) {
      return `${hometown}, ${country}`;
    } else {
      // same country
      if (oddCalculator([false, true], [3, 7])) {
        const city = oddCalculator(states).name;
        return `${city}, ${country}`;
      } else {
        //different country
        const newCountry = getNationality();
        const nid = countryId[newCountry];
        const nstates = fetchStates(nid);
        const ncity = oddCalculator(nstates).name;
        return `${ncity}, ${newCountry}`;
      }
    }
  }
  // place of birth
  const currentCity = oddCalculator(states);
  return currentCity.name;
};

export default getCity;
