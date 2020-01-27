import oddCalculator from "./oddCalculator";
import names from "./../data/name";

const getFullName = (country, gender) => {
  //gender= !!gender || "Male";
  const firstName = oddCalculator(country[gender]);
  const lastName = oddCalculator(country["Surname"]);
  return `${firstName} ${lastName}`;
};

const getNames = (country, gender) => {
  const anglophone = ["United Kingdom", "United States", "Australia"];
  const hispanic = ["Spain", "Columbia", "Argentina", "Peru", "Venezuela"];
  const middleEast = [
    "Iran",
    "Egypt",
    "Sudan",
    "Iraq",
    "Morocco",
    "Afghanistan",
    "Saudi Arabia",
    "Yemen",
    "Algeria",
  ];
  const sinophone = ["Thailand"];
  const brazil = ["Portugal"];
  const paki = ["Bangladesh"];
  const korea = ["South Korea", "North Korea"];
  if (anglophone.includes(country)) return getFullName(names["United States"], gender);
  else if (hispanic.includes(country)) return getFullName(names.Mexico, gender);
  else if (middleEast.includes(country))
    return getFullName(names.Egypt, gender);
  else if (sinophone.includes(country)) return getFullName(names.China, gender);
  else if (brazil.includes(country)) return getFullName(names.Brazil, gender);
  else if (paki.includes(country)) return getFullName(names.Pakistan, gender);
  else if (korea.includes(country)) return getFullName(names.Korea, gender);
  else if (names[country]) return getFullName(names[country], gender);
  else return getFullName(names.Nigeria, gender);
};

export default getNames;
