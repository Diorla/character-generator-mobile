import React from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  Alert,
  ToastAndroid,
  AppState,
  Modal
} from "react-native";
import {
  Divider,
  Colors,
  Button,
  TouchableRipple,
  IconButton,
  Chip
} from "react-native-paper";
import {
  styles,
  htmlGenerator,
  getBuild,
  getEyes,
  getFace,
  getHair,
  getSkinTone,
  getDistFeat,
  getEducation,
  getSocialStatus,
  manageData,
  getNationality,
  getPhobia
} from "./../modules";

import {
  Background,
  Biodata,
  FAButton,
  Habit,
  Layout,
  Perception,
  Physical,
  Relationship,
  Story,
  Trait
} from "./../components";
import * as Print from "expo-print";
import getAccessories from "./../modules/getAccessories";
import getGrooming from "./../modules/getGrooming";
import getBirthday from "../modules/getBirthday";
import getQuirk from "./../modules/getQuirk";
import getHandwriting from "./../modules/getHandwriting";
import getGait from "../modules/getGait";
import getPosture from "../modules/getPosture";
import getBloodGroup from "../modules/getBloodGroup";
import getVoice from "./../modules/getVoice";
import getSpeech from "../modules/getSpeech";
import getJob from "./../modules/getJob";
import getGesture from "./../modules/getGesture";
import getCity from "../modules/getCity";
import getNames from "../modules/getNames";
import getHealth from "../modules/getHealth";
import getRestingface from "./../modules/getRestingface";
import print from "../modules/print";
import getChildhood from "./../modules/getChildhood";
import getPastime from "../modules/getPastime";
import getFolly from "../modules/getFolly";
import getMouth from "../modules/getMouth";
import getView from "../modules/getView";
import getTrait from "../modules/getTrait";
import getCurseWord from "../modules/getCurseWord";
import getMorality from "../modules/getMorality";
import generateGender from "./../modules/generateGender";
import getGroupDynamic from "./../modules/getGroupDynamic";
import getDependent from "../modules/getDependent";
import getClothing from './../data/clothing';
import oddCalculator from './../modules/oddCalculator';

// subversive, rebellious etc
class Character extends React.Component {
  state = {
    birthday: "",
    allData: {},
    name: "",
    age: "",
    gender: "",
    others: "",
    birthPlace: "",
    currentLocation: "",
    nationality: "",
    education: "",
    occupation: "",
    income: "",
    socialStatus: "",
    moreBiodata: "",
    height: "",
    build: "",
    face: "",
    hair: "",
    eye: "",
    outfit: "",
    accessories: "",
    grooming: "",
    tic: "",
    health: "",
    handwriting: "",
    gait: "",
    posture: "",
    morePhysical: "",
    distinguishingFeatures: "",
    morality: "",
    truthfulness: "",
    sociability: "",
    approachability: "",
    zeal: "",
    pride: "",
    riskTaking: "",
    naivety: "",
    optimism: "",
    problemSolvingMethod: "",
    intelligence: "",
    humanism: "",
    sensitivity: "",
    spontaneity: "",
    socialEngagement: "",
    doctrine: "",
    preoccupation: "",
    complexity: "",
    submissiveness: "",
    bravery: "",
    devotion: "",
    role: "",
    goal: "",
    motivation: "",
    arc: "",
    type: "",
    backStory: "",
    threeDescriptionWords: "",
    lie: "",
    truth: "",
    internalConflict: "",
    externalConflict: "",
    strength: "",
    flaw: "",
    hobby: "",
    phobia: "",
    story: "",
    immediateFamily: "",
    extendedFamily: "",
    friend: "",
    acquaintance: "",
    colleague: "",
    subordinate: "",
    superior: "",
    authorityFigure: "",
    confidant: "",
    oppositeSex: "",
    groupDynamic: "",
    speechStyle: "",
    speechTempo: "",
    speechAccent: "",
    speechPitch: "",
    gesture: "",
    speechImpediment: "",
    curseWord: "",
    catchPhrase: "",
    laughter: "",
    smile: "",
    restingFace: "",
    likes: "",
    boringStuff: "",
    annoyingStuff: "",
    familyEconomicStatus: "",
    hometown: "",
    childhood: "",
    schoolClub: "",
    favouriteActivity: "",
    jobHistory: "",
    favouritePlace: "",
    whatThing: "",
    whyThatThing: "",
    turningPoint: "",
    earliestMemory: "",
    saddestMemory: "",
    happiestMemory: "",
    clearestMemory: "",
    criminalRecord: "",
    background: "",
    dreamJob: "",
    favObject: "",
    roleModel: "",
    regret: "",
    secret: "",
    irritability: "",
    relationship: [],
    educationHistory: "",
    modalVisible: false,
    bloodGroup: ""
  };

  loadCharacter = id => {
    Promise.resolve(manageData.retrieveData("character"))
      .then(value => {
        this.setState({
          ...value[id],
          allData: value
        });
      })
      .then(() => this.feedback(`${this.state.name} is loaded`));
  };

  deleteCharacter = () => {
    console.log(`deleting ${this.state.id}`);
    const { id, allData } = this.state;
    if (!allData[id]) {
      this.feedback("No character to delete");
      return 0;
    }

    this.confirm(
      "Reset",
      "⚠ Are you sure you want to delete character?",
      () => {
        Promise.resolve(manageData.deleteData("character", allData, id))
          .then(value => {
            this.setState({
              allData: value
            });
          })
          .then(() => this.feedback(`${this.state.name} is deleted`))
          //.then(()=>this.reset())
          .then(() => {
            this.reset(),
              this.setState({
                name: ""
              });
          });
      }
    );
  };

  feedback = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  newCharacter = () => {
    this.setState({
      id: "a" + Math.floor(Math.random() * Date.now()) + "#" + Date.now(),
      name: ""
    });
    //Ask if user wants to save current data
    //If yes, save, if no, do nothing then
    this.reset();
    this.feedback("New character created");
  };

  removeFrills = () => {
    const myObj = {
      ...this.state
    };
    delete myObj.allData;
    delete myObj.modalVisible;
    return myObj;
  };

  updateCharacter = () => {
    const { id, name, allData } = this.state;

    const message = allData[id]
      ? `${this.state.name} is updated`
      : `${this.state.name} is created`;
    if (!name) {
      this.feedback("Please provide a name");
      return 0;
    }

    const basic = {
      ...this.removeFrills()
    };

    allData[id] = basic;
    Promise.resolve(manageData.addData("character", allData))
      .then(value => {
        this.setState({
          allData: value
        });
      })
      .then(() => this.feedback(message));
  };

  static navigationOptions = {
    drawerLabel: "Character",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./../assets/icons/basic.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  _handleAppStateChange(nextAppState) {
    console.log(AppState.currentState);
  }

  componentWillMount() {
    Promise.resolve(manageData.retrieveData("character"))
      .then(value => {
        this.setState({
          allData: value,
          id: "a" + Math.floor(Math.random() * Date.now()) + "#" + Date.now()
        });
      })
      .then(value =>
        AppState.addEventListener("change", this._handleAppStateChange)
      );
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  randomise = () => {
    //const { gender } = this.state;
    const gender = this.state.gender || generateGender();
    const ageRange = oddCalculator([15, 65, 100], [26.3, 65.9, 7.9]);
    let age = this.state.age;
    if(ageRange === 15) {
      age = age || Math.floor(Math.random() * 15)
    } else if(ageRange===65) {
      age = age || 15 + Math.floor(Math.random() * 41)
    } else {
      age = age || 65 + Math.floor(Math.random() * 60) 
    }
    

    const {
      weight,
      weightType,
      height,
      heightType,
      breastSize,
      buttock,
      hips,
      limbs,
      neck,
      shoulderSize,
      stomach
    } = getBuild(age, gender);

    const skinTone = this.state.skinTone || getSkinTone();
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
      face,
      ear
    } = getFace(skinTone, weightType, hairColour, gender, age);

    

    const distinguishingFeatures =
      this.state.distinguishingFeatures || getDistFeat();
    const education = this.state.education || getEducation();
    const nationality = this.state.nationality || getNationality();
    const grooming = this.state.grooming || getGrooming();
    const birthday = this.state.birthday || getBirthday();
    const tic = this.state.tic || print(getQuirk(), ", ", " and ");

    const handwriting = this.state.handwriting || getHandwriting();
    const gait = this.state.gait || getGait();
    const posture = this.state.posture || getPosture();
    const bloodGroup = this.state.bloodGroup || getBloodGroup();
    const gesture = this.state.gesture || getGesture();
    const socialStatus = this.state.socialStatus || getSocialStatus(education);
    const familyEconomicStatus =
      this.state.familyEconomicStatus || getSocialStatus(socialStatus);
    const outfit = this.state.outfit || getClothing(age, gender, education, socialStatus);
    const accessories = this.state.accessories || getAccessories(age);
    //cities would be in the same country of nationality
    const birthPlace = this.state.birthPlace || `${getCity(nationality)}`;
    const currentLocation =
      this.state.currentLocation || `${getCity(nationality, birthPlace)}`;
    const hometown =
      this.state.hometown || `${getCity(nationality, birthPlace)}`;
    const occupation = this.state.occupation || getJob(education, socialStatus);
    const name = this.state.name || getNames(nationality, gender);
    const restingFace = this.state.restingFace || getRestingface();
    const childhood = this.state.childhood || getChildhood();
    const speech = getSpeech();
    const speechStyle = this.state.speechStyle || speech.speechStyle;
    const speechImpediment =
      this.state.speechImpediment || speech.speechImpediment;
    const speechTempo = this.state.speechTempo || speech.speechTempo;
    const speechPitch = this.state.speechPitch || getVoice(gender);
    const phobia = this.state.phobia || print(getPhobia(), ", ", " and ");
    const folly = this.state.folly || getFolly();
    const mouth = getMouth();
    const smile = this.state.smile || mouth.smile;
    const laughter = this.state.laughter || mouth.laughter;
    const view = getView();
    const annoyingStuff = this.state.annoyingStuff || view.annoyingStuff;
    const boringStuff = this.state.boringStuff || view.boringStuff;
    const dislikes = this.state.dislikes || view.dislikes;
    const cursweWord = this.state.curseWord || getCurseWord();
    const traitList = getTrait();
    const health = this.state.health || print(getHealth(age, gender), ", ");
    const generatedTraits = {};

    const keys = Object.keys(traitList);
    const values = Object.values(traitList);

    const groupDynamic = this.state.groupDynamic || getGroupDynamic();

    const dependent = this.state.dependent || getDependent();

    

    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      const v = this.state[k] || values[i];
      generatedTraits[k] = v;
    }
    generatedTraits["truthfulness"] =
      this.state.morality || getMorality(generatedTraits["morality"]);
    const pastime = getPastime(
      this.state.sociability || generatedTraits.sociability
    );
    const hobby = this.state.hobby || print(pastime.hobby, ", ", " and ");
    const favouriteActivity =
      this.state.favouriteActivity || print(pastime.activity, ", ", " and ");

    this.setState({
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
      birthPlace,
      currentLocation,
      occupation,
      phobia,
      restingFace,
      hometown,
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
      age: this.state.age || String(age),
      height: this.state.height || `${heightType}, about ${height}cm`,
      build:
        this.state.build ||
        print(
          [
            weightType,
            shoulderSize,
            breastSize,
            limbs.handFeetSize,
            limbs.length,
            limbs.thickness,
            hips,
            neck,
            stomach,
            buttock,
            `weighs about ${weight}kg`
          ],
          ", ",
          " and "
        ),
      eye:
        this.state.eye ||
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
        ),
      hair:
        this.state.hair || `${print([hairSize, hairType, hairColour])} hair`,
      face:
        this.state.face ||
        print(
          [
            freckles,
            face,
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
        ),
      outfit,
      groupDynamic,
      dependent,
      ...generatedTraits
    });

    this.feedback("Certain attributes generated");
  };

  printFile = () => {
    if (!this.state.name) this.feedback("Please enter name");
    else {
      const options = {
        html: htmlGenerator(this.state)
      };
      Print.printAsync(options);
    }
  };

  confirm = (header, message, fn) => {
    Alert.alert(header, message, [
      {
        text: "❌ Cancel",
        style: "cancel"
      },
      { text: "✔ OK", onPress: () => fn() }
    ]);
  };

  reset = () => {
    this.setState({
      dislikes: "",
      folly: "",
      hobby: "",
      modalVisible: false,
      bloodGroup: "",
      birthday: "",
      age: "",
      gender: "",
      others: "",
      birthPlace: "",
      currentLocation: "",
      nationality: "",
      education: "",
      occupation: "",
      income: "",
      socialStatus: "",
      moreBiodata: "",
      height: "",
      build: "",
      face: "",
      hair: "",
      eye: "",
      outfit: "",
      accessories: "",
      grooming: "",
      tic: "",
      health: "",
      handwriting: "",
      gait: "",
      posture: "",
      morePhysical: "",
      distinguishingFeatures: "",
      morality: "",
      truthfulness: "",
      sociability: "",
      approachability: "",
      zeal: "",
      pride: "",
      riskTaking: "",
      naivety: "",
      optimism: "",
      problemSolvingMethod: "",
      intelligence: "",
      humanism: "",
      sensitivity: "",
      spontaneity: "",
      socialEngagement: "",
      doctrine: "",
      preoccupation: "",
      complexity: "",
      submissiveness: "",
      bravery: "",
      devotion: "",
      role: "",
      goal: "",
      motivation: "",
      arc: "",
      type: "",
      backStory: "",
      threeDescriptionWords: "",
      lie: "",
      truth: "",
      internalConflict: "",
      externalConflict: "",
      strength: "",
      flaw: "",
      hobby: "",
      phobia: "",
      story: "",
      immediateFamily: "",
      extendedFamily: "",
      friend: "",
      acquaintance: "",
      colleague: "",
      subordinate: "",
      superior: "",
      authorityFigure: "",
      confidant: "",
      oppositeSex: "",
      groupDynamic: "",
      dependent: "",
      speechStyle: "",
      speechTempo: "",
      speechAccent: "",
      speechPitch: "",
      gesture: "",
      speechImpediment: "",
      curseWord: "",
      catchPhrase: "",
      laughter: "",
      smile: "",
      restingFace: "",
      likes: "",
      boringStuff: "",
      annoyingStuff: "",
      familyEconomicStatus: "",
      hometown: "",
      childhood: "",
      schoolClub: "",
      favouriteActivity: "",
      jobHistory: "",
      favouritePlace: "",
      whatThing: "",
      whyThatThing: "",
      turningPoint: "",
      earliestMemory: "",
      saddestMemory: "",
      happiestMemory: "",
      clearestMemory: "",
      criminalRecord: "",
      background: "",
      dreamJob: "",
      favObject: "",
      roleModel: "",
      regret: "",
      secret: "",
      irritability: "",
      relationship: []
    });
  };

  render() {
    const { openDrawer } = this.props.navigation;
    return (
      <Layout
        drawMenu={() => openDrawer()}
        title="Character"
        subtitle="All the information about a character"
        reset={() =>
          this.confirm(
            "Reset",
            "⚠ Are you sure you want to clear all fields",
            () => {
              this.reset();
              this.feedback("Fields cleared");
            }
          )
        }
      >
        <FAButton refresh={this.randomise} />
        <View>
          <Chip>{this.state.name || ""}</Chip>
        </View>
        <ScrollView style={{ marginBottom: 180 }}>
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 3,
              marginTop: 3
            }}
          />
          <Biodata
            {...this.state}
            changeBirthday={birthday => this.setState({ birthday })}
            changeName={name => this.setState({ name })}
            changeAge={age => this.setState({ age })}
            changeBirthPlace={birthPlace => this.setState({ birthPlace })}
            changeCurrentLocation={currentLocation =>
              this.setState({ currentLocation })
            }
            changeEducation={education => this.setState({ education })}
            changeGender={gender => this.setState({ gender })}
            changeIncome={income => this.setState({ income })}
            changeMoreBiodata={moreBiodata => this.setState({ moreBiodata })}
            changeNationality={nationality =>
              this.setState({
                nationality,
                birthPlace: getCity(nationality)
              })
            }
            changeOccupation={occupation => this.setState({ occupation })}
            changeSocialStatus={socialStatus => this.setState({ socialStatus })}
            changeBloodGroup={bloodGroup => this.setState({ bloodGroup })}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 3,
              marginTop: 3
            }}
          />
          <Physical
            {...this.state}
            distinguishingFeatures={this.state.distinguishingFeatures}
            changeSkinTone={skinTone => this.setState({ skinTone })}
            changeHeight={height => this.setState({ height })}
            changeBuild={build => this.setState({ build })}
            changeFace={face => this.setState({ face })}
            changeHair={hair => this.setState({ hair })}
            changeEye={eye => this.setState({ eye })}
            changeDistinguishingFeatures={distinguishingFeatures =>
              this.setState({ distinguishingFeatures })
            }
            changeOutfit={outfit => this.setState({ outfit })}
            changeAccessories={accessories => this.setState({ accessories })}
            changeGrooming={grooming => this.setState({ grooming })}
            changeHealth={health => this.setState({ health })}
            changeHandwriting={handwriting => this.setState({ handwriting })}
            changeGait={gait => this.setState({ gait })}
            changePosture={posture => this.setState({ posture })}
            changeMorePhysical={morePhysical => this.setState({ morePhysical })}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 3,
              marginTop: 3
            }}
          />
          <Story
            changeRole={role => this.setState({ role })}
            changeGoal={goal => this.setState({ goal })}
            changeMotivation={motivation => this.setState({ motivation })}
            changeArc={arc => this.setState({ arc })}
            changeType={type => this.setState({ type })}
            changeBackStory={backStory => this.setState({ backStory })}
            changeThreeDescriptionWords={threeDescriptionWords =>
              this.setState({ threeDescriptionWords })
            }
            changeLie={lie => this.setState({ lie })}
            changeTruth={truth => this.setState({ truth })}
            changeInternalConflict={internalConflict =>
              this.setState({ internalConflict })
            }
            changeExternalConflict={externalConflict =>
              this.setState({ externalConflict })
            }
            changeStrength={strength => this.setState({ strength })}
            changeFlaw={flaw => this.setState({ flaw })}
            changeStory={story => this.setState({ story })}
            {...this.state}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 3,
              marginTop: 3
            }}
          />
          <Background
            changeFamilyEconomicStatus={familyEconomicStatus =>
              this.setState({ familyEconomicStatus })
            }
            changeHometown={hometown => this.setState({ hometown })}
            changeChildhood={childhood => this.setState({ childhood })}
            changeEducationHistory={educationHistory =>
              this.setState({ educationHistory })
            }
            changeSchoolClub={schoolClub => this.setState({ schoolClub })}
            changeFavouriteActivity={favouriteActivity =>
              this.setState({ favouriteActivity })
            }
            changeJobHistory={jobHistory => this.setState({ jobHistory })}
            changeFavouritePlace={favouritePlace =>
              this.setState({ favouritePlace })
            }
            changeWhatThing={whatThing => this.setState({ whatThing })}
            changeWhyThatThing={whyThatThing => this.setState({ whyThatThing })}
            changeTurningPoint={turningPoint => this.setState({ turningPoint })}
            changeEarliestMemory={earliestMemory =>
              this.setState({ earliestMemory })
            }
            changeSaddestMemory={saddestMemory =>
              this.setState({ saddestMemory })
            }
            changeHappiestMemory={happiestMemory =>
              this.setState({ happiestMemory })
            }
            changeClearestMemory={clearestMemory =>
              this.setState({ clearestMemory })
            }
            changeCriminalRecord={criminalRecord =>
              this.setState({ criminalRecord })
            }
            changeBackground={background => this.setState({ background })}
            changeDreamJob={dreamJob => this.setState({ dreamJob })}
            changeFavObject={favObject => this.setState({ favObject })}
            changeRoleModel={roleModel => this.setState({ roleModel })}
            changeRegret={regret => this.setState({ regret })}
            changeSecret={secret => this.setState({ secret })}
            changePhobia={phobia => this.setState({ phobia })}
            {...this.state}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 3,
              marginTop: 3
            }}
          />
          <Habit
            changeTic={tic => this.setState({ tic })}
            changeSpeechStyle={speechStyle => this.setState({ speechStyle })}
            changeSpeechTempo={speechTempo => this.setState({ speechTempo })}
            changeSpeechAccent={speechAccent => this.setState({ speechAccent })}
            changeSpeechPitch={speechPitch => this.setState({ speechPitch })}
            changeGesture={gesture => this.setState({ gesture })}
            changeSpeechImpediment={speechImpediment =>
              this.setState({ speechImpediment })
            }
            changeCurseWord={curseWord => this.setState({ curseWord })}
            changeCatchPhrase={catchPhrase => this.setState({ catchPhrase })}
            changeLaughter={laughter => this.setState({ laughter })}
            changeSmile={smile => this.setState({ smile })}
            changeRestingFace={restingFace => this.setState({ restingFace })}
            changeLikes={likes => this.setState({ likes })}
            changeBoringStuff={boringStuff => this.setState({ boringStuff })}
            changeAnnoyingStuff={annoyingStuff =>
              this.setState({ annoyingStuff })
            }
            changeDisLikes={dislikes => this.setState({ dislikes })}
            {...this.state}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 3,
              marginTop: 3
            }}
          />
          <Relationship
            {...this.state}
            addRelationship={() =>
              this.setState({
                relationship: [
                  ...this.state.relationship,
                  {
                    name: "",
                    age: "",
                    type: "",
                    description: ""
                  }
                ]
              })
            }
            removeRelationship={index => {
              this.setState({
                relationship: [
                  ...this.state.relationship.slice(0, index),
                  ...this.state.relationship.slice(index + 1)
                ]
              });
            }}
            changeName={(val, index) => {
              const toChange = this.state.relationship[index];
              toChange.name = val;
              this.setState({
                relationship: [
                  ...this.state.relationship.slice(0, index),
                  toChange,
                  ...this.state.relationship.slice(index + 1)
                ]
              });
            }}
            changeAge={(val, index) => {
              const toChange = this.state.relationship[index];
              toChange.age = val;
              this.setState({
                relationship: [
                  ...this.state.relationship.slice(0, index),
                  toChange,
                  ...this.state.relationship.slice(index + 1)
                ]
              });
            }}
            changeType={(val, index) => {
              const toChange = this.state.relationship[index];
              toChange.type = val;
              this.setState({
                relationship: [
                  ...this.state.relationship.slice(0, index),
                  toChange,
                  ...this.state.relationship.slice(index + 1)
                ]
              });
            }}
            changeDescription={(val, index) => {
              const toChange = this.state.relationship[index];
              toChange.description = val;
              this.setState({
                relationship: [
                  ...this.state.relationship.slice(0, index),
                  toChange,
                  ...this.state.relationship.slice(index + 1)
                ]
              });
            }}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 3,
              marginTop: 3
            }}
          />
          <Perception
            changeImmediateFamily={immediateFamily =>
              this.setState({ immediateFamily })
            }
            changeExtendedFamily={extendedFamily =>
              this.setState({ extendedFamily })
            }
            changeFriend={friend => this.setState({ friend })}
            changeAcquaintance={acquaintance => this.setState({ acquaintance })}
            changeColleague={colleague => this.setState({ colleague })}
            changeSubordinate={subordinate => this.setState({ subordinate })}
            changeSuperior={superior => this.setState({ superior })}
            changeAuthorityFigure={authorityFigure =>
              this.setState({ authorityFigure })
            }
            changeConfidant={confidant => this.setState({ confidant })}
            changeOppositeSex={oppositeSex => this.setState({ oppositeSex })}
            changeGroupDynamic={groupDynamic => this.setState({ groupDynamic })}
            changeDependent={dependent => this.setState({ dependent })}
            changeAdversary={adversary => this.setState({ adversary })}
            {...this.state}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 3,
              marginTop: 3
            }}
          />
          <Trait
            changeMorality={morality => {
              this.setState({ morality, truthfulness: getMorality(morality) });
            }}
            changeTruthfulness={truthfulness => this.setState({ truthfulness })}
            changeSociability={sociability => this.setState({ sociability })}
            changeApproachability={approachability =>
              this.setState({ approachability })
            }
            changeZeal={zeal => this.setState({ zeal })}
            changePride={pride => this.setState({ pride })}
            changeRiskTaking={riskTaking => this.setState({ riskTaking })}
            changeNaivety={naivety => this.setState({ naivety })}
            changeOptimism={optimism => this.setState({ optimism })}
            changeProblemSolvingMethod={problemSolvingMethod =>
              this.setState({ problemSolvingMethod })
            }
            changeIntelligence={intelligence => this.setState({ intelligence })}
            changeHumanism={humanism => this.setState({ humanism })}
            changeSensitivity={sensitivity => this.setState({ sensitivity })}
            changeSpontaneity={spontaneity => this.setState({ spontaneity })}
            changeSocialEngagement={socialEngagement =>
              this.setState({ socialEngagement })
            }
            changeDoctrine={doctrine => this.setState({ doctrine })}
            changePreoccupation={preoccupation =>
              this.setState({ preoccupation })
            }
            changeComplexity={complexity => this.setState({ complexity })}
            changeSubmissiveness={submissiveness =>
              this.setState({ submissiveness })
            }
            changeBravery={bravery => this.setState({ bravery })}
            changeDevotion={devotion => this.setState({ devotion })}
            changeIrritability={irritability => this.setState({ irritability })}
            changeResolution={resolution => this.setState({ resolution })}
            {...this.state}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 30,
              marginTop: 30
            }}
          />
          <Divider style={{ backgroundColor: "teal", height: 1 }} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Button
              icon="upload"
              mode="text"
              color="green"
              onPress={this.updateCharacter}
            >
              Save
            </Button>
            <Button
              icon="printer"
              mode="text"
              color="blue"
              onPress={this.printFile}
            >
              Print
            </Button>
            <Button
              icon="delete"
              mode="text"
              color="red"
              onPress={this.deleteCharacter}
            >
              Delete
            </Button>
          </View>
          <Divider style={{ backgroundColor: "teal", height: 1 }} />
          <View
            style={{
              height: 120,
              width: "100%",
              backgroundColor: Colors.teal100
            }}
          >
            <Text>Ad space</Text>
          </View>
          <Divider style={{ backgroundColor: "teal", height: 1 }} />
          <Modal
            animationType="slide"
            visible={this.state.modalVisible}
            onRequestClose={() =>
              this.setState({
                modalVisible: false
              })
            }
          >
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
                width: "100%"
              }}
            >
              <Text
                style={{
                  margin: 4,
                  padding: 4,
                  fontWeight: "bold"
                }}
              >
                Character list
              </Text>
            </View>
            <Button
              icon="plus"
              mode="text"
              color="green"
              onPress={this.newCharacter}
            >
              New character
            </Button>
            <ScrollView>
              {Object.values(this.state.allData).map(item => {
                return (
                  <TouchableRipple
                    key={item.id}
                    style={{
                      padding: 8
                    }}
                    rippleColor={`rgba(255, 0, 0, 0.1)`}
                    onPress={() => {
                      setTimeout(() => {
                        this.setState({
                          modalVisible: false
                        });
                        this.loadCharacter(item.id);
                      }, 200);
                    }}
                  >
                    <View>
                      <Text>
                        {item.name}, {item.gender}, {item.age}
                      </Text>
                    </View>
                  </TouchableRipple>
                );
              })}
            </ScrollView>
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
                width: "100%"
              }}
            >
              <IconButton
                icon="chevron-down"
                color={Colors.black500}
                size={50}
                onPress={() =>
                  this.setState({
                    modalVisible: false
                  })
                }
              />
            </View>
          </Modal>
        </ScrollView>
        <View
          style={{
            zIndex: 1000000,
            position: "absolute",
            bottom: 150,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            width: "100%"
          }}
        >
          <IconButton
            icon="chevron-double-up"
            color={Colors.black500}
            size={50}
            onPress={() =>
              this.setState({
                modalVisible: true
              })
            }
          />
          {/*<UpTick onUppity={()=>this.setState({
            modalVisible: true
          })}/>*/}
        </View>
      </Layout>
    );
  }
}
//chevron-triple-up
//chevron-double-up

export default Character;
