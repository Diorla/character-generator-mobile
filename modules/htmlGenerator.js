const line = (title, content) => {
  if (content == "N/A") return "";
  else if (content) {
    return `<li><b>${title}</b>: ${content}</li>`;
  }
  return "";
};
const htmlGenerator = obj => {
  let htmlString = "<h1>Basic</h1>";
  htmlString += "<h2>Bio-data</h2>";
  htmlString += "<div><ul>";
  htmlString += `${line("Name", obj.name)}`;
  htmlString += `${line("Age", obj.age)}`;
  htmlString += `${line("Gender", obj.gender)}`;
  htmlString += `${line("Place of birth", obj.birthPlace)}`;
  htmlString += `${line("Current location", obj.currentLocation)}`;
  htmlString += `${line("Nationality", obj.nationality)}`;
  htmlString += `${line("Education", obj.education)}`;
  htmlString += `${line("Occupation", obj.occupation)}`;
  htmlString += `${line("Income", obj.income)}`;
  htmlString += `${line("Social status", obj.socialStatus)}`;
  htmlString += `${line("Others", obj.moreBiodata)}`;
  htmlString += "</ul></div>";

  htmlString += "<h2>Physical Attributes</h2>";
  htmlString += "<div><ul>";
  htmlString += `${line("Height", obj.height)}`;
  htmlString += `${line("Build", obj.build)}`;
  htmlString += `${line("Skin tone", obj.skinTone)}`;
  htmlString += `${line("Face", obj.face)}`;
  htmlString += `${line("Hair", obj.hair)}`;
  htmlString += `${line("Others", obj.skinTone)}`;
  htmlString += `${line("Eyes", obj.eye)}`;
  htmlString += `${line(
    "Distinguishing features",
    obj.distinguishingFeatures
  )}`;
  htmlString += `${line("Preferred outfit", obj.outfit)}`;
  htmlString += `${line("Accesories", obj.accessories)}`;
  htmlString += `${line("Grooming", obj.grooming)}`;
  htmlString += `${line("Tic/Quirks", obj.tic)}`;
  htmlString += `${line("Health", obj.health)}`;
  htmlString += `${line("Handwriting", obj.handwriting)}`;
  htmlString += `${line("Gait", obj.gait)}`;
  htmlString += `${line("Posture", obj.posture)}`;
  htmlString += `${line("Others", obj.morePhysical)}`;
  htmlString += "</ul></div>";

  htmlString += "<hr/><h1>Status</h1>";
  htmlString += "<h2>Story</h2>";
  htmlString += "<div><ul>";
  htmlString += `${line("Role", obj.role)}`;
  htmlString += `${line("Goal", obj.goal)}`;
  htmlString += `${line("Motivation", obj.motivation)}`;
  htmlString += `${line("Story arc", obj.arc)}`;
  htmlString += `${line("Type of character", obj.type)}`;
  htmlString += `${line("Backstory", obj.backStory)}`;
  htmlString += `${line("Describe in 3 words", obj.threeDescriptionWords)}`;
  htmlString += `${line("The lie", obj.lie)}`;
  htmlString += `${line("The truth", obj.truth)}`;
  htmlString += `${line("Internal conflicts", obj.internalConflict)}`;
  htmlString += `${line("External conflicts", obj.externalConflict)}`;
  htmlString += `${line("Strengths", obj.strength)}`;
  htmlString += `${line("Flaw or weakness", obj.flaw)}`;
  htmlString += `${line("Hobbies", obj.hobby)}`;
  htmlString += `${line("Phobias", obj.phobia)}`;
  htmlString += `${line("More", obj.story)}`;
  htmlString += "</ul></div>";

  htmlString += "<h2>Background</h2>";
  htmlString += "<div><ul>";
  htmlString += `${line("Family economic status", obj.familyEconomicStatus)}`;
  htmlString += `${line("Hometown", obj.hometown)}`;
  htmlString += `${line("Childhood", obj.childhood)}`;
  htmlString += `${line("Education", obj.education)}`;
  htmlString += `${line("School club", obj.schoolClub)}`;
  htmlString += `${line("Favourite activity", obj.favouriteActivity)}`;
  htmlString += `${line("Job history", obj.jobHistory)}`;
  htmlString += `${line("Favourite place", obj.favouritePlace)}`;
  htmlString += `If they could change one thing in their past<ul>`;
  htmlString += `${line("What will they change", obj.whatThing)}`;
  htmlString += `${line("Why that thing", obj.whyThatThing)}`;
  htmlString += `</ul>`;
  htmlString += `${line("Turning point", obj.turningPoint)}`;
  htmlString += `${line("Earliest memory", obj.earliestMemory)}`;
  htmlString += `${line("Saddest memory", obj.saddestMemory)}`;
  htmlString += `${line("Happiest memory", obj.happiestMemory)}`;
  htmlString += `${line("Clearest memory", obj.clearestMemory)}`;
  htmlString += `${line("Criminal record", obj.criminalRecord)}`;
  htmlString += `${line("Dream job", obj.dreamJob)}`;
  htmlString += `${line("Favourite object", obj.favObject)}`;
  htmlString += `${line("Role model", obj.roleModel)}`;
  htmlString += `${line("Regrets", obj.regret)}`;
  htmlString += `${line("Secrets", obj.secret)}`;
  htmlString += `${line("More", obj.background)}`;
  htmlString += "</ul></div>";

  htmlString += "<hr/><h1>Habits/Mannerism</h1>";
  htmlString += "<h2>Speech</h2>";
  htmlString += "<div><ul>";
  htmlString += `${line("Style", obj.speechStyle)}`;
  htmlString += `${line("Tempo", obj.speechTempo)}`;
  htmlString += `${line("Pitch", obj.speechPitch)}`;
  htmlString += `${line("Gesturing", obj.gesturing)}`;
  htmlString += `${line("Eye contact", obj.eyeContact)}`;
  htmlString += `${line("Impediments", obj.speechImpediment)}`;
  htmlString += `${line("Curse word", obj.curseWord)}`;
  htmlString += `${line("Catch phrase", obj.catchPhrase)}`;
  htmlString += "</ul></div>";

  htmlString += "<h2>Others</h2>";
  htmlString += "<div><ul>";
  htmlString += `${line("Laughter", obj.laughter)}`;
  htmlString += `${line("Smile", obj.smile)}`;
  htmlString += `${line("Resting face", obj.restingFace)}`;
  htmlString += `${line("Likes", obj.likes)}`;
  htmlString += `${line("Things they find boring", obj.boringStuff)}`;
  htmlString += `${line("Things they find annoying", obj.annoyingStuff)}`;
  htmlString += "</ul></div>";

  htmlString += "<hr/><h1>Relationships</h1>";
  obj.relationship.map(item => {
    htmlString += `<h2>${item.name}</h2>`;
    htmlString += "<div><ul>";
    htmlString += `${line("Age", item.age)}`;
    htmlString += `${line("Connection", item.type)}`;
    htmlString += `${line("Describe their relationship", item.description)}`;
    htmlString += "</ul></div>";
  });
  htmlString += "<div><ul>";
  htmlString += "</ul></div>";

  htmlString += "<hr/><h1>Perception</h1>";
  htmlString +=
    "<hr/><blockquote>This is how people see the character</blockquote>";
  htmlString += `${line("Immediate family", obj.immediateFamily)}`;
  htmlString += `${line("Extended family", obj.extendedFamily)}`;
  htmlString += `${line("Friends", obj.friend)}`;
  htmlString += `${line("Acquaintances", obj.acquaintance)}`;
  htmlString += `${line("Colleagues", obj.colleague)}`;
  htmlString += `${line("Subordinates", obj.subordinate)}`;
  htmlString += `${line("Superiors", obj.superior)}`;
  htmlString += `${line("Authority figures", obj.authorityFigure)}`;
  htmlString += `${line("Confidant", obj.confidant)}`;
  htmlString += `${line("Opposite sex", obj.oppositeSex)}`;
  htmlString += `${line("Group dynamic", obj.groupDynamic)}`;
  htmlString += `${line("Why do people depend on them?", obj.dependent)}`;
  htmlString += "<div><ul>";
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
