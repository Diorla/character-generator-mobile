import * as cities from "./../data/myCity.json";
import oddCalculator from "./oddCalculator";
import getNationality from "./getNationality";

export default (country, subcountry, city) => {
  const result = getOdds(country, subcountry, city);
  return result;
};

const fetchLocations = (country, subcountry) => {
  const results = [];
  for (let city in cities) {
    const obj = cities[city];
    if (obj["country"] === country) {
      if (subcountry) {
        if (subcountry === obj["subcountry"]) results.push(obj);
      } else results.push(obj);
    }
  }
  return results;
};

const getOdds = (country, subcountry, city) => {
  let type;
  if (city && typeof city === "boolean") {
    type = "subcountry";
  } else if (subcountry && typeof subcountry === "boolean") {
    type = "country";
  } else {
    type = oddCalculator(
      ["city", "subcountry", "country", "none"],
      [4, 3, 2, 1]
    );
  }
  if (type === "city") return getLocation(country, subcountry, city);
  if (type === "subcountry") return getLocation(country, subcountry);
  if (type === "country") return getLocation(country);
  else return getLocation();
};

const getLocation = (country, subcountry, name) => {
  if (country && subcountry && name) {
    return {
      country,
      subcountry,
      name
    };
  } else if (country && subcountry)
    return oddCalculator(fetchLocations(country, subcountry));
  else if (country) return oddCalculator(fetchLocations(country));
  else {
    return oddCalculator(fetchLocations(getNationality()));
  }
};
