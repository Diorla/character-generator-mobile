import oddCalculator from "./oddCalculator";
import names from "./../data/name";

const getFullName = (country, gender) => {
  gender = gender || "Male"; // Non-binary gender,
  let cntryL = country;
  let cntryF = country;
  if (country === "Moldova" && gender === "Female") cntryF = "Romania";
  else if (country === "Lesotho" && gender === "Female")
    cntryF = "South Africa";
  // Portuguese speaking country
  else if (country === "Sao Tome and Principe" && gender === "Female")
    cntryF = "Brazil";
  else if (country === "San Marino" && gender === "Female")
    cntryF = "pacificIslands";
  else if (
    country === "Saint Vincent and the Grenadines" &&
    gender === "Female"
  )
    cntryF = "pacificIslands";
  //80% Greek, 20% Turkish
  else if (country === "Cyprus" && gender === "Female") cntryF = "Greece";
  else if (country === "Nauru") cntryL = "pacificIslands";
  // Portuguese speaking country
  else if (country === "Guinea Bissau" && gender === "Female")
    cntryF = "Brazil";
  else if (country === "Eritrea" && gender === "Female") cntryF = "Ethiopia";
  else if (country === "East Timor") cntryL = "Brazil";
  const firstName =
    oddCalculator(names[cntryF][gender]) ||
    oddCalculator(names.Nigeria[gender]);
  const lastName =
    oddCalculator(names[cntryL]["Surname"]) ||
    oddCalculator(names.Nigeria["Surname"]);
  return `${firstName} ${lastName}`;
};

const getMaleName = (country, gender) => {
  const firstName = oddCalculator(names[country][gender]);
  const lastName = oddCalculator(names[country]["SurnameM"]);
  return `${firstName} ${lastName}`;
};

const getFemaleName = (country, gender) => {
  const firstName = oddCalculator(names[country][gender]);
  const lastName = oddCalculator(names[country]["SurnameF"]);
  return `${firstName} ${lastName}`;
};

const getNames = (country, gender) => {
  console.log("getNames", country, gender);
  const anglophone = [
    "Ireland",
    "United Kingdom",
    "United States",
    "Australia",
    "Canada",
    "New Zealand",
    "Antigua and Barbuda",
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
    "Maldives",
    "Somalia"
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
    "Slovakia",
    "Lithuania",
    "North Macedonia"
  ];
  const malay = ["Brunei"];
  const norse = ["Iceland"];
  const german = ["Liechtenstein", "Luxembourg"];
  const pacificIslands = [
    // Micronesia Islands
    "Kiribati",
    "Micronesia",
    "Palau",
    "Marshall Islands"
  ];
  if (genderBasedSurnames.includes(country)) {
    if (gender == "Male") return getMaleName(country, gender);
    else return getFemaleName(country, gender);
  }
  if (anglophone.includes(country)) return getFullName("United States", gender);
  if (malay.includes(country)) return getFullName("Malaysia", gender);
  if (german.includes(country)) return getFullName("Germany", gender);
  if (norse.includes(country)) return getFullName("Sweden", gender);
  else if (hispanic.includes(country)) return getFullName("Mexico", gender);
  else if (middleEast.includes(country)) return getFullName("Egypt", gender);
  else if (sinophone.includes(country)) return getFullName("China", gender);
  else if (brazil.includes(country)) return getFullName("Brazil", gender);
  else if (paki.includes(country)) return getFullName("Pakistan", gender);
  else if (korea.includes(country)) return getFullName("Korea", gender);
  else if (pacificIslands.includes(country))
    return getFullName("pacificIslands", gender);
  else if (country === "Seychelles") return getFullName("Madagascar", gender);
  else return getFullName(country, gender);
};

export default getNames;
