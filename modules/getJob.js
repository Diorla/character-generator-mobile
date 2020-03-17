import occupation from "../data/occupation";
import oddCalculator from './oddCalculator';


/**
 * This is a function that generates random occupation. It's influenced by education level and social status
 * @param {string} education - indicates the education level
 * @param {string} socialStatus - indicates the social class like working poor or upperclass
 */
const getJob = (education, socialStatus, age) => {
  if(age < 18) return "";
  let qualifiedJobs, possibleJobs = [];

  const { Preschool, Degree, Masters, Doctorate } = occupation;
  const Primary = occupation["Primary/Elementary school"];
  const Junior = occupation["Junior secondary/Middle school"];
  const Senior = occupation["Senior secondary/High school"];
  const Diploma = occupation["Diploma/Associate degrees"];

  if (education == "Preschool") qualifiedJobs = [...Preschool];
  else if (education == "Primary/Elementary school")
    qualifiedJobs = [...Preschool, ...Primary];
  else if (education == "Junior secondary/Middle school")
    qualifiedJobs = [...Preschool, ...Junior, ...Primary];
  else if (education == "Senior secondary/High school")
    qualifiedJobs = [...Preschool, ...Junior, ...Senior, ...Primary];
  else if (education == "Diploma/Associate degrees")
    qualifiedJobs = [
      ...Primary,
      ...Senior,
      ...Diploma,
      ...Junior,
      ...Preschool
    ];
  else if (education == "Degree")
    qualifiedJobs = [
      ...Preschool,
      ...Junior,
      ...Diploma,
      ...Degree,
      ...Senior,
      ...Primary
    ];
  else if (education == "Masters")
    qualifiedJobs = [
      ...Primary,
      ...Senior,
      ...Degree,
      ...Masters,
      ...Diploma,
      ...Junior,
      ...Preschool
    ];
  else
    qualifiedJobs = [
      ...Preschool,
      ...Junior,
      ...Diploma,
      ...Masters,
      ...Doctorate,
      ...Degree,
      ...Senior,
      ...Primary
    ]; //etc
  qualifiedJobs.push("unemployed"); //regardless of your qualification, you can be jobless
  
  if (socialStatus) {
    // Now filter based on socialStatus
    for (let job of qualifiedJobs) {
      if (occupation[socialStatus].includes(job)) possibleJobs.push(job);
    }
  } else possibleJobs = [...qualifiedJobs];

  return oddCalculator(possibleJobs);
};

export default getJob;
