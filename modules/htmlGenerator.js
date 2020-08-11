const line = (title, content) => {
  if (content == "N/A") return "";
  else if (content) {
    return `<li><b>${title}</b>: ${content}.</li>`;
  }
  return "";
};
const htmlGenerator = (obj) => {
  let htmlString = "<h1>Basic</h1>";
  htmlString += "<h2>Bio-data</h2>";
  htmlString += "<div><ul>";
  htmlString += `${line("Name", obj.name)}`;
  htmlString += `${line("Age", obj.age)}`;
  htmlString += `${line("Gender", obj.gender)}`;
  htmlString += `${line("Blood group", obj.bloodGroup)}`;
  htmlString += `${line(
    "Place of birth",
    `${obj.birthCity}, ${obj.birthSubCountry}`
  )}`;
  htmlString += `${line("Nationality", obj.nationality)}`;
  htmlString += `${line(
    "Current location",
    `${obj.residentCity}, ${obj.residentSubcountry}, ${obj.residentCountry}`
  )}`;
  htmlString += `${line("Education", obj.education)}`;
  htmlString += `${line("Occupation", obj.occupation)}`;
  htmlString += `${line("Income", obj.income)}`;
  htmlString += `${line("Social status", obj.socialStatus)}`;
  htmlString += "</ul></div>";

  htmlString += "<h2>Physical Attributes</h2>";
  htmlString += "<div><ul>";
  htmlString += `${line("Height", obj.height)}`;
  htmlString += `${line("Build", obj.build)}`;
  htmlString += `${line("Skin tone", obj.skinTone)}`;
  htmlString += `${line("Face", obj.face)}`;
  htmlString += `${line("Hair", obj.hair)}`;
  htmlString += `${line("Eyes", obj.eye)}`;
  htmlString += `${line(
    "Distinguishing features",
    obj.distinguishingFeatures
  )}`;
  htmlString += `${line("Preferred outfit", obj.outfit)}`;
  htmlString += `${line("Accesories", obj.accessories)}`;
  htmlString += `${line("Grooming", obj.grooming)}`;
  htmlString += `${line("Health", obj.health)}`;
  htmlString += `${line("Handwriting", obj.handwriting)}`;
  htmlString += `${line("Gait", obj.gait)}`;
  htmlString += `${line("Posture", obj.posture)}`;
  htmlString += "</ul></div>";

  htmlString += "<h2>Background</h2>";
  htmlString += "<div><ul>";
  htmlString += `${line("Family economic status", obj.familyEconomicStatus)}`;
  htmlString += `${line(
    "Hometown",
    `${obj.hometown}, ${obj.hometownSubcountry}, ${obj.hometownCountry}`
  )}`;
  htmlString += `${line("Childhood", obj.childhood)}`;
  htmlString += `${line("Favourite activity", obj.favouriteActivity)}`;
  htmlString += `${line("Phobias", obj.phobia)}`;

  htmlString += "<hr/><h1>Habits</h1>";
  htmlString += "<h2>Speech</h2>";
  htmlString += "<div><ul>";
  htmlString += `${line("Style", obj.speechStyle)}`;
  htmlString += `${line("Tempo", obj.speechTempo)}`;
  htmlString += `${line("Voice", obj.speechPitch)}`;
  htmlString += `${line("Gesturing", obj.gesturing)}`;
  htmlString += `${line("Impediments", obj.speechImpediment)}`;
  htmlString += "</ul></div>";
  htmlString += "<h2>Mannerism</h2>";
  htmlString += "<div><ul>";
  htmlString += `${line("Catch phrase", obj.catchPhrase)}`;
  htmlString += `${line("Laughter", obj.laughter)}`;
  htmlString += `${line("Smile", obj.smile)}`;
  htmlString += `${line("Resting face", obj.restingFace)}`;
  htmlString += `${line("Likes", obj.likes)}`;
  htmlString += `${line("Dislikes", obj.dislikes)}`;
  htmlString += `${line("Hobbies", obj.hobby)}`;
  htmlString += `${line("Bad habits", obj.folly)}`;
  htmlString += `${line("Quirks", obj.tic)}`;
  htmlString += `${line("Things they find boring", obj.boringStuff)}`;
  htmlString += `${line("Things they find annoying", obj.annoyingStuff)}`;
  htmlString += "</ul></div>";

  htmlString += "<hr/><h1>Traits</h1>";
  htmlString += `${line("Morality", obj.morality)}`;
  htmlString += `${line("Truthfulness", obj.truthfulness)}`;
  htmlString += `${line("Sociability", obj.sociability)}`;
  htmlString += `${line("Approachability", obj.approachability)}`;
  htmlString += `${line("Zeal", obj.zeal)}`;
  htmlString += `${line("Pride", obj.pride)}`;
  htmlString += `${line("Risk taking", obj.riskTaking)}`;
  htmlString += `${line("Naivety", obj.naivety)}`;
  htmlString += `${line("Optimism", obj.optimism)}`;
  htmlString += `${line("Problem solving method", obj.problemSolvingMethod)}`;
  htmlString += `${line("Intelligence", obj.intelligence)}`;
  htmlString += `${line("Humanism", obj.humanism)}`;
  htmlString += `${line("Sensitivity", obj.sensitivity)}`;
  htmlString += `${line("Spontaneity", obj.spontaneity)}`;
  htmlString += `${line("Social engagement", obj.socialEngagement)}`;
  htmlString += `${line(
    "Doctrine(religion, cause, nationality)",
    obj.doctrine
  )}`;
  htmlString += `${line("Preoccupation", obj.preoccupation)}`;
  htmlString += `${line("Complexity", obj.complexity)}`;
  htmlString += `${line("Submissiveness", obj.submissiveness)}`;
  htmlString += `${line("Bravery", obj.bravery)}`;
  htmlString += `${line("Devotion", obj.devotion)}`;
  htmlString += `${line("Temper", obj.irritability)}`;
  htmlString += `${line("Resolution", obj.resolution)}`;
  htmlString += "<div><ul>";
  htmlString += "</ul></div>";
  return htmlString;
};

export default htmlGenerator;
