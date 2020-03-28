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
    "New Zealand",
    "Antigua And Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Grenada",
    "Guyana",
    "Malta",
    "Marshall Islands"
  ];
  const hispanic = [
    "Chile",
    "Guatemala",
    "Ecuador",
    "Spain",
    "Colombia",
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
    "Paraguay",
    "Andorra"
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
    "Bahrain",
    "Comoros",
    "Djibouti",
    "Maldives"
  ];
  const sinophone = ["Thailand", "Taiwan"];
  const brazil = ["Portugal", "Cape Verde"];
  const paki = ["Bangladesh", "Sri Lanka"];
  const korea = ["South Korea", "North Korea"];
  const genderBasedSurnames = [
    "Russia",
    "Ukraine",
    "Uzbekistan",
    "Kazakhstan",
    "Czech Republic",
    "Azerbaijan",
    "Belarus",
    "Tajikistan",
    "Kyrgyzstan",
    "Slovakia"
  ];
  const malay = ["Brunei"];
  const norse = ["Iceland"];
  const german = ["Liechtenstein", "Luxembourg"];
  if (genderBasedSurnames.includes(country)) {
    if (gender == "Male") return getMaleName(names[country], gender);
    else return getFemaleName(names[country], gender);
  }
  if (anglophone.includes(country))
    return getFullName(names["United States"], gender);
  if (malay.includes(country)) return getFullName(names.Malaysia, gender);
  if (german.includes(country)) return getFullName(names.Germany, gender);
  if (norse.includes(country)) return getFullName(names.Sweden, gender);
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

export default getNames;
