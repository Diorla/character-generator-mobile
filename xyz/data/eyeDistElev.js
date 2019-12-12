import oddCalculator from "./oddCalculator";


const  distance = ["Close set", "Normal", "Wide set"];

const  elevation = ["Deep set", "Normal", "Protruding"];

const odds = [13.8, 72.4, 13.8]

const getEyeDistance = () => oddCalculator(distance, odds)

const getEyeElevation = () => oddCalculator(elevation, odds)


export {
  getEyeDistance, getEyeElevation
}