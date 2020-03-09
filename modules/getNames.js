import oddCalculator from "./oddCalculator";
import names from "./../data/name";

const getFullName = (country, gender) => {
  const firstName =
    oddCalculator(country[gender]) || oddCalculator(names.Nigeria[gender]);
  const lastName =
    oddCalculator(country["Surname"]) ||
    oddCalculator(names.Nigeria["Surname"]);
  return `${firstName} ${lastName}`;
};

const getMaleName = (country, gender) => {
  const firstName = oddCalculator(country[gender]);
  const lastName = oddCalculator(country["SurnameM"]);
  return `${firstName} ${lastName}`;
};

const getFemaleName = (country, gender) => {
  const firstName = oddCalculator(country[gender]);
  const lastName = oddCalculator(country["SurnameF"]);
  return `${firstName} ${lastName}`;
};

const getNames = (country, gender) => {
  const anglophone = [
    "Ireland",
    "United Kingdom",
    "United States",
    "Australia",
    "Canada",
    "New Zealand"
  ];
  const hispanic = [
    "Chile",
    "Guatemala",
    "Ecuador",
    "Spain",
    "Columbia",
    "Argentina",
    "Peru",
    "Venezuela",
    "Cuba",
    "Dominican Republic",
    "Honduras",
    "El Salvador",
    "Nicaragua",
    "Costa Rica",
    "Panama",
    "Puerto Rico",
    "Uruguay",
    "Bolivia",
    "Paraguay"
  ];
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
    "Syria",
    "Tunisia",
    "Jordan",
    "United Arab Emirates",
    "Libya",
    "Lebanon",
    "Palestine",
    "Oman",
    "Kuwait",
    "Qatar",
    "Bahrain"
  ];
  const sinophone = ["Thailand", "Taiwan"];
  const brazil = ["Portugal"];
  const paki = ["Bangladesh", "Sri Lanka"];
  const korea = ["South Korea", "North Korea"];
  const genderBasedSurnames = [
    "Uzbekistan",
    "Kazakhstan",
    "Azerbaijan",
    "Slovakia"
  ];
  if (genderBasedSurnames.includes(country)) {
    if (gender == "Male") return getMaleName(names[country], gender);
    else return getFemaleName(names[country], gender);
  }
  if (anglophone.includes(country))
    return getFullName(names["United States"], gender);
  else if (hispanic.includes(country)) return getFullName(names.Mexico, gender);
  else if (middleEast.includes(country))
    return getFullName(names.Egypt, gender);
  else if (sinophone.includes(country)) return getFullName(names.China, gender);
  else if (brazil.includes(country)) return getFullName(names.Brazil, gender);
  else if (paki.includes(country)) return getFullName(names.Pakistan, gender);
  else if (korea.includes(country)) return getFullName(names.Korea, gender);
  else if (country == "Burundi" && gender == "Female")
    return getFullName(names.Rwanda, gender);
  else return getFullName(names[country], gender);
};
console.log("running");
export default getNames;
