import oddCalculator from "./oddCalculator";
import { socialStatus } from "../data/socialStatus";

/**
 * This function returns social status
 * @param {String} education : The education or social status(to get family status)
 */
const getSocialStatus = education => {
  const { main, odds } = socialStatus;
  if (education == "Preschool" || education == "Underclass")
    return oddCalculator(main, odds.Preschool);
  else if (
    education == "Primary/Elementary school" ||
    education == "Working poor"
  )
    return oddCalculator(main, odds["Primary/Elementary school"]);
  else if (
    education == "Junior secondary/Middle school" ||
    education == "Working class"
  )
    return oddCalculator(main, odds["Junior secondary/Middle school"]);
  else if (education == "Senior secondary/High school")
    return oddCalculator(main, odds["Senior secondary/High school"]);
  else if (
    education == "Diploma/Associate degrees" ||
    education == "Lower middle class"
  )
    return oddCalculator(main, odds.Preschool);
  else if (education == "Degree" || education == "Upper middle class")
    return oddCalculator(main, odds.Degree);
  else if (education == "Masters") return oddCalculator(main, odds.Masters);
  else if (education == "Doctorate" || education == "Upper class")
    return oddCalculator(main, odds.Doctorate);
  return oddCalculator(main, odds.others);
};

export default getSocialStatus;
