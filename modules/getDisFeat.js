//tattoos, scar, birthmarks(mole), none
import oddCalculator from './oddCalculator';


const getDistFeat=()=>{
  const piercing = oddCalculator([true, false], [1, 99])
  const tats = oddCalculator([true, false], [10, 90])
  const scar = oddCalculator([true, false], [15, 85])
  const birth = oddCalculator([true, false], [20, 80])
  const gapTooth = oddCalculator([true, false], [25, 75])
  if(tats) {
    return oddCalculator([
      "Tattoo on the forehead",
      "Tattoo on the left cheek",
      "Tattoo on the right cheek",
      "Tattoo on the chin",
      "Tattoo on the left nape",
      "Tattoo on the right nape",
      "Tattoo on the right dorsum",
      "Tattoo on the left dorsum",
      "Tattoo on the right wrist",
      "Tattoo on the left wrist",
      "Tattoo on the right forearm",
      "Tattoo on the left forearm",
    ], [2, 1.5, 1.5, 4, 2.5, 2.5, 8, 8, 2, 2, 4.5, 4.5])
  }
  
  if(scar) {
    const sz = oddCalculator(["Big S", "S", "Small S"], [1, 3, 2])
    return oddCalculator([
      `${sz}car on the forehead`,
      `${sz}car on the left cheek`,
      `${sz}car on the right cheek`,
      `${sz}car on the chin`,
      `${sz}car on the left nape`,
      `${sz}car on the right nape`,
      `${sz}car on the right dorsum`,
      `${sz}car on the left dorsum`,
      `${sz}car on the right wrist`,
      `${sz}car on the left wrist`,
      `${sz}car on the right forearm`,
      `${sz}car on the left forearm`,
    ], [2, 1.5, 1.5, 4, 2.5, 2.5, 8, 8, 2, 2, 4.5, 4.5])
  }
  
  if(birth) {
    return oddCalculator([
      "Birthmark on the forehead",
      "Mole on the left cheek",
      "Mole on the right cheek",
      "Birthmark on the chin",
      "Birthmark on the left nape",
      "Birthmark on the right nape",
      "Birthmark on the right dorsum",
      "Birthmark on the left dorsum",
      "Birthmark on the right wrist",
      "Birthmark on the left wrist",
      "Birthmark on the right forearm",
      "Birthmark on the left forearm",
    ], [2, 1.5, 1.5, 4, 2.5, 2.5, 8, 8, 2, 2, 4.5, 4.5])
  }
  
  if(piercing) {
    return oddCalculator([
      "A nose piercing", "A tongue piercing"
    ], [99, 1])
  }
  if(gapTooth) return "Have gaps between teeth"
  return "No visible scars, mole, tattoo or piercings."
}

export default getDistFeat;