import {
  getBuild,
  getEyes,
  getFace,
  getHair,
  getSkinTone,
  getDistFeat,
  getEducation,
  getSocialStatus,
  getPhobia
} from "./modules";
import getAccessories from "./modules/getAccessories";
import getGrooming from "./modules/getGrooming";
import getBirthday from "./modules/getBirthday";
import getQuirk from "./modules/getQuirk";
import getHandwriting from "./modules/getHandwriting";
import getGait from "./modules/getGait";
import getPosture from "./modules/getPosture";
import getBloodGroup from "./modules/getBloodGroup";
import getVoice from "./modules/getVoice";
import getSpeech from "./modules/getSpeech";
import getJob from "./modules/getJob";
import getGesture from "./modules/getGesture";
import getNames from "./modules/getNames";
import getHealth from "./modules/getHealth";
import getRestingface from "./modules/getRestingface";
import print from "./modules/print";
import getChildhood from "./modules/getChildhood";
import getPastime from "./modules/getPastime";
import getFolly from "./modules/getFolly";
import getMouth from "./modules/getMouth";
import getView from "./modules/getView";
import getTrait from "./modules/getTrait";
import getCurseWord from "./modules/getCurseWord";
import getMorality from "./modules/getMorality";
import generateGender from "./modules/generateGender";
import getGroupDynamic from "./modules/getGroupDynamic";
import getDependent from "./modules/getDependent";
import getClothing from "./data/clothing";
import oddCalculator from "./modules/oddCalculator";
import getLocation from "./modules/getLocation";
import getResidence from "./modules/getResidence";

export default async state => {
  const gender = state.gender || generateGender();
  const ageRange = oddCalculator([15, 65, 100], [7.9, 65.9, 26.3]);
  let age = state.age;
  if (ageRange === 15) {
    age = age || String(Math.floor(Math.random() * 15));
  } else if (ageRange === 65) {
    age = age || String(15 + Math.floor(Math.random() * 41));
  } else {
    age = age || String(65 + Math.floor(Math.random() * 60));
  }

  const placeOfBirth = getLocation(
    "city",
    state.nationality,
    state.birthSubCountry,
    state.birthCity
  );
  const nationality = placeOfBirth.country;
  const birthCity = placeOfBirth.city;
  const birthSubCountry = placeOfBirth.subcountry;

  let residency;
  if (state.residentCountry) {
    if (state.residentSubcountry) {
      if (state.residentCity) {
        residency = getResidence(
          "city",
          state.residentCountry,
          state.residentSubcountry,
          state.residentCity
        );
      } else {
        residency = getResidence(
          "subcountry",
          state.residentCountry,
          state.residentSubcountry
        );
      }
    } else {
      residency = getResidence("country", state.residentCountry);
    }
  } else {
    residency = getResidence("none", nationality, birthSubCountry, birthCity);
  }
  const residentCountry = residency.country;
  const residentCity = residency.city;
  const residentSubcountry = residency.subcountry;

  let childhoodResidence;
  if (state.hometownCountry) {
    if (state.hometownSubcountry) {
      if (state.hometown) {
        childhoodResidence = getResidence(
          "city",
          state.hometownCountry,
          state.hometownSubcountry,
          state.hometown
        );
      } else {
        childhoodResidence = getResidence(
          "subcountry",
          state.hometownCountry,
          state.hometownSubcountry
        );
      }
    } else {
      childhoodResidence = getResidence("country", state.hometownCountry);
    }
  } else {
    childhoodResidence = getResidence(
      "none",
      nationality,
      birthSubCountry,
      birthCity
    );
  }

  const hometown = childhoodResidence.city;
  const hometownCountry = childhoodResidence.country;
  const hometownSubcountry = childhoodResidence.subcountry;

  const {
    weight,
    weightType,
    heightCm,
    heightType,
    breastSize,
    buttock,
    hips,
    limbs,
    neck,
    shoulderSize,
    stomach
  } = getBuild(age, gender);

  const skinTone = state.skinTone || getSkinTone();
  const { eyeColour, eyeDistance, eyeElevation, eyeShape, eyeBrow } = getEyes(
    skinTone
  );

  const { hairColour, hairSize, hairType } = getHair(gender, age);

  const {
    beard,
    dimpledChin,
    doubleChin,
    nose,
    moustache,
    lips,
    freckles,
    forehead,
    faceShape,
    ear
  } = getFace(skinTone, weightType, hairColour, gender, age);

  const distinguishingFeatures = state.distinguishingFeatures || getDistFeat();
  const education = state.education || getEducation(age);
  const grooming = state.grooming || getGrooming();
  const birthday = state.birthday || getBirthday();
  const tic = state.tic || print(getQuirk(), ", ", " and ");

  const handwriting = state.handwriting || getHandwriting();
  const gait = state.gait || getGait();
  const posture = state.posture || getPosture();
  const bloodGroup = state.bloodGroup || getBloodGroup();
  const gesture = state.gesture || getGesture();
  const socialStatus = state.socialStatus || getSocialStatus(education, age);
  const familyEconomicStatus =
    state.familyEconomicStatus || getSocialStatus(socialStatus);
  const outfit =
    state.outfit || getClothing(age, gender, education, socialStatus);
  const accessories = state.accessories || getAccessories(age);

  const occupation = state.occupation || getJob(education, socialStatus, age);
  const name = state.name || getNames(nationality, gender);
  const restingFace = state.restingFace || getRestingface();
  const childhood = state.childhood || getChildhood();
  const speech = getSpeech();
  const speechStyle = state.speechStyle || speech.speechStyle;
  const speechImpediment = state.speechImpediment || speech.speechImpediment;
  const speechTempo = state.speechTempo || speech.speechTempo;
  const speechPitch = state.speechPitch || getVoice(gender);
  const phobia = state.phobia || print(getPhobia(), ", ", " and ");
  const folly = state.folly || getFolly();
  const mouth = getMouth();
  const smile = state.smile || mouth.smile;
  const laughter = state.laughter || mouth.laughter;
  const view = getView();
  const annoyingStuff = state.annoyingStuff || view.annoyingStuff;
  const boringStuff = state.boringStuff || view.boringStuff;
  const dislikes = state.dislikes || view.dislikes;
  const likes = state.likes || view.likedStuff;
  const cursweWord = state.curseWord || getCurseWord();
  const traitList = getTrait();
  const health = state.health || print(getHealth(Number(age), gender), ", ");
  const generatedTraits = {};

  const keys = Object.keys(traitList);
  const values = Object.values(traitList);

  const groupDynamic = state.groupDynamic || getGroupDynamic();

  const dependent = state.dependent || getDependent();

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    const v = state[k] || values[i];
    generatedTraits[k] = v;
  }
  generatedTraits["truthfulness"] =
    state.truthfulness || getMorality(generatedTraits["morality"]);
  const pastime = getPastime(state.sociability || generatedTraits.sociability);
  const hobby = state.hobby || print(pastime.hobby, ", ", " and ");
  const favouriteActivity =
    state.favouriteActivity || print(pastime.activity, ", ", " and ");
  const weightParams = [
    weightType,
    shoulderSize,
    breastSize,
    limbs.handFeetSize,
    limbs.length,
    limbs.thickness,
    hips,
    neck,
    stomach,
    buttock
  ];
  if (weight) weightParams.push(`weighs about ${weight}kg`);
  const height =
    state.heightCm || `${heightType}${height ? `, about ${heightCm}cm` : ""}`;
  const build = state.build || print(weightParams, ", ", " and ");
  const eye =
    state.eye ||
    print(
      [
        eyeElevation,
        eyeDistance,
        eyeShape,
        eyeColour,
        `eyes`,
        print([eyeBrow.size, eyeBrow.shape])
      ],
      ", ",
      " with "
    );
  const hair = state.hair || `${print([hairSize, hairType, hairColour])} hair`;
  const face =
    state.face ||
    print(
      [
        freckles,
        faceShape,
        forehead,
        lips,
        nose.size,
        nose.shape,
        beard,
        moustache,
        dimpledChin,
        doubleChin,
        ear.size,
        ear.shape
      ],
      ", ",
      " with "
    );
  return {
    hometown,
    hometownCountry,
    hometownSubcountry,
    gender,
    skinTone,
    health,
    name,
    tic,
    distinguishingFeatures,
    education,
    nationality,
    grooming,
    birthday,
    handwriting,
    gait,
    posture,
    bloodGroup,
    speechStyle,
    speechImpediment,
    gesture,
    socialStatus,
    familyEconomicStatus,
    speechPitch,
    accessories,
    birthCity,
    birthSubCountry,
    residentCity,
    residentSubcountry,
    residentCountry,
    hometown,
    hometownCountry,
    hometownSubcountry,
    occupation,
    phobia,
    restingFace,
    childhood,
    speechStyle,
    speechImpediment,
    speechPitch,
    speechTempo,
    hobby,
    favouriteActivity,
    folly,
    smile,
    laughter,
    annoyingStuff,
    boringStuff,
    cursweWord,
    dislikes,
    age,
    height,
    build,
    eye,
    hair,
    face,
    outfit,
    groupDynamic,
    dependent,
    likes,
    ...generatedTraits
  };
};
