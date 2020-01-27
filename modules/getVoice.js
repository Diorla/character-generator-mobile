import oddCalculator from "./oddCalculator";
import voice from "../data/voice";

const getVoice = gender =>
  gender == "Male"
    ? oddCalculator(voice.main, voice.male)
    : oddCalculator(voice.main, voice.female);

export default getVoice;