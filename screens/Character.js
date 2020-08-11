import React from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  Alert,
  ToastAndroid,
  Modal,
} from "react-native";
import {
  Divider,
  Colors,
  Button,
  TouchableRipple,
  IconButton,
  Chip,
} from "react-native-paper";
import { styles, htmlGenerator, manageData } from "./../modules";

import {
  Background,
  Biodata,
  FAButton,
  Habit,
  Layout,
  Physical,
  Trait,
} from "./../components";
import * as Print from "expo-print";
import getMorality from "../modules/getMorality";
import getLocation from "../modules/getLocation";
import updateCharacter from "../updateCharacter";

class Character extends React.Component {
  state = {
    allData: {},
    modalVisible: false,
  };

  loadCharacter = (id) => {
    Promise.resolve(manageData.retrieveData("character"))
      .then((value) => {
        this.setState({
          ...value[id],
          allData: value,
        });
      })
      .then(() => this.feedback(`${this.state.name} is loaded`));
  };

  deleteCharacter = () => {
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
          .then((value) => {
            this.setState({
              allData: value,
            });
          })
          .then(() => this.feedback(`${this.state.name} is deleted`))
          //.then(()=>this.reset())
          .then(() => {
            this.reset(),
              this.setState({
                name: "",
              });
          });
      }
    );
  };

  feedback = (message) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  newCharacter = () => {
    this.setState({
      id: "a" + Math.floor(Math.random() * Date.now()) + "#" + Date.now(),
      name: "",
    });
    //TODO: Ask if user wants to save current data
    //If yes, save, if no, do nothing then
    this.reset();
    this.feedback("New character created");
  };

  removeFrills = () => {
    const myObj = {
      ...this.state,
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
      ...this.removeFrills(),
    };

    allData[id] = basic;
    Promise.resolve(manageData.addData("character", allData))
      .then((value) => {
        this.setState({
          allData: value,
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
    ),
  };

  componentDidMount() {
    Promise.resolve(manageData.retrieveData("character")).then((value) => {
      this.setState({
        allData: value,
        id: "a" + Math.floor(Math.random() * Date.now()) + "#" + Date.now(),
      });
    });
  }

  randomise = () => {
    Promise.resolve(updateCharacter(this.state))
      .then((value) =>
        this.setState({
          ...value,
        })
      )
      .catch((err) => console.log("Error updating character:", err));

    this.feedback("Certain attributes generated");
  };

  printFile = () => {
    if (!this.state.name) this.feedback("Please enter name");
    else {
      const options = {
        html: htmlGenerator(this.state),
      };
      Print.printAsync(options);
    }
  };

  confirm = (header, message, fn) => {
    Alert.alert(header, message, [
      {
        text: "❌ Cancel",
        style: "cancel",
      },
      { text: "✔ OK", onPress: () => fn() },
    ]);
  };

  reset = () => {
    this.setState({
      // background
      familyEconomicStatus: "",
      hometown: "",
      hometownCountry: "",
      hometownSubcountry: "",
      childhood: "",
      favouriteActivity: "",
      phobia: "",
      // basic
      name: "",
      age: "",
      education: "",
      gender: "",
      nationality: "",
      occupation: "",
      socialStatus: "",
      birthday: "",
      bloodGroup: "",
      birthCity: "",
      birthSubCountry: "",
      residentCity: "",
      residentSubcountry: "",
      residentCountry: "",
      // mannerism
      speechStyle: "",
      speechTempo: "",
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
      dislikes: "",
      folly: "",
      hobby: "",
      tic: "",
      groupDynamic: "",
      dependent: "",
      // physical
      height: "",
      build: "",
      face: "",
      hair: "",
      eye: "",
      distinguishingFeatures: "",
      outfit: "",
      accessories: "",
      grooming: "",
      health: "",
      handwriting: "",
      gait: "",
      posture: "",
      skinTone: "",
      // Trait
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
      irritability: "",
      resolution: "",
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
              marginTop: 3,
            }}
          />
          <Biodata
            {...this.state}
            changeBirthday={(birthday) => this.setState({ birthday })}
            changeName={(name) => this.setState({ name })}
            changeAge={(age) => this.setState({ age })}
            changeBirthCity={(birthCity) => this.setState({ birthCity })}
            changebirthSubCountry={(birthSubCountry) =>
              this.setState({ birthSubCountry })
            }
            changeResidentCity={(residentCity) =>
              this.setState({ residentCity })
            }
            changeResidentSubcountry={(residentSubcountry) =>
              this.setState({ residentSubcountry })
            }
            changeResidentCountry={(residentCountry) => {
              if (residentCountry) {
                const residency = getLocation("country", residentCountry);
                this.setState({
                  residentCountry: residency.country,
                  changeResidentSubcountry: residency.subcountry,
                  changeResidentCity: residency.city,
                });
              } else {
                this.setState({
                  residentCountry,
                  residentCity: "",
                  residentSubcountry: "",
                });
              }
            }}
            changeEducation={(education) => this.setState({ education })}
            changeGender={(gender) => this.setState({ gender })}
            changeIncome={(income) => this.setState({ income })}
            changeNationality={(nationality) => {
              if (nationality) {
                const birthPlace = getLocation("country", nationality);
                this.setState({
                  nationality: birthPlace.country,
                  birthSubCountry: birthPlace.subcountry,
                  birthCity: birthPlace.city,
                });
              } else {
                this.setState({
                  nationality,
                  birthSubCountry: "",
                  birthCity: "",
                });
              }
            }}
            changeOccupation={(occupation) => this.setState({ occupation })}
            changeSocialStatus={(socialStatus) =>
              this.setState({ socialStatus })
            }
            changeBloodGroup={(bloodGroup) => this.setState({ bloodGroup })}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 3,
              marginTop: 3,
            }}
          />
          <Physical
            {...this.state}
            changeSkinTone={(skinTone) => this.setState({ skinTone })}
            changeHeight={(height) => this.setState({ height })}
            changeBuild={(build) => this.setState({ build })}
            changeFace={(face) => this.setState({ face })}
            changeHair={(hair) => this.setState({ hair })}
            changeEye={(eye) => this.setState({ eye })}
            changeDistinguishingFeatures={(distinguishingFeatures) =>
              this.setState({ distinguishingFeatures })
            }
            changeOutfit={(outfit) => this.setState({ outfit })}
            changeAccessories={(accessories) => this.setState({ accessories })}
            changeGrooming={(grooming) => this.setState({ grooming })}
            changeHealth={(health) => this.setState({ health })}
            changeHandwriting={(handwriting) => this.setState({ handwriting })}
            changeGait={(gait) => this.setState({ gait })}
            changePosture={(posture) => this.setState({ posture })}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 3,
              marginTop: 3,
            }}
          />
          <Background
            changeFamilyEconomicStatus={(familyEconomicStatus) =>
              this.setState({ familyEconomicStatus })
            }
            changeChildhood={(childhood) => this.setState({ childhood })}
            changeFavouriteActivity={(favouriteActivity) =>
              this.setState({ favouriteActivity })
            }
            changePhobia={(phobia) => this.setState({ phobia })}
            changeHometown={(hometown) => this.setState({ hometown })}
            changeHometownSubcountry={(hometownSubcountry) =>
              this.setState({ hometownSubcountry })
            }
            changeHometownCountry={(hometownCountry) => {
              if (hometownCountry) {
                const home = getLocation("country", hometownCountry);
                this.setState({
                  hometownCountry: home.country,
                  hometownSubcountry: home.subcountry,
                  hometown: home.city,
                });
              } else {
                this.setState({
                  residentCountry,
                  residentCity: "",
                  residentSubcountry: "",
                });
              }
            }}
            {...this.state}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 3,
              marginTop: 3,
            }}
          />
          <Habit
            {...this.state}
            changeTic={(tic) => this.setState({ tic })} //TODO: quirks
            changeSpeechStyle={(speechStyle) => this.setState({ speechStyle })}
            changeSpeechTempo={(speechTempo) => this.setState({ speechTempo })}
            changeSpeechPitch={(speechPitch) => this.setState({ speechPitch })} //TODO: voice
            changeGesture={(gesture) => this.setState({ gesture })} //TODO: nonVerbal
            changeSpeechImpediment={(speechImpediment) =>
              this.setState({ speechImpediment })
            }
            changeLaughter={(laughter) => this.setState({ laughter })}
            changeSmile={(smile) => this.setState({ smile })}
            changeRestingFace={(restingFace) => this.setState({ restingFace })}
            changeLikes={(likes) => this.setState({ likes })}
            changeBoringStuff={(boringStuff) => this.setState({ boringStuff })}
            changeFolly={(folly) => this.setState({ folly })} //TODO: rename to badHabits
            changeAnnoyingStuff={(annoyingStuff) =>
              this.setState({ annoyingStuff })
            }
            changeDisLikes={(dislikes) => this.setState({ dislikes })}
            changeHobby={(hobby) => this.setState({ hobby })}
            changeGroupDynamic={(groupDynamic) =>
              this.setState({ groupDynamic })
            }
            changeDependent={(dependent) => this.setState({ dependent })}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 3,
              marginTop: 3,
            }}
          />
          <Trait
            changeMorality={(morality) => {
              this.setState({ morality, truthfulness: getMorality(morality) });
            }}
            changeTruthfulness={(truthfulness) =>
              this.setState({ truthfulness })
            }
            changeSociability={(sociability) => this.setState({ sociability })}
            changeApproachability={(approachability) =>
              this.setState({ approachability })
            }
            changeZeal={(zeal) => this.setState({ zeal })}
            changePride={(pride) => this.setState({ pride })}
            changeRiskTaking={(riskTaking) => this.setState({ riskTaking })}
            changeNaivety={(naivety) => this.setState({ naivety })}
            changeOptimism={(optimism) => this.setState({ optimism })}
            changeProblemSolvingMethod={(problemSolvingMethod) =>
              this.setState({ problemSolvingMethod })
            }
            changeIntelligence={(intelligence) =>
              this.setState({ intelligence })
            }
            changeHumanism={(humanism) => this.setState({ humanism })}
            changeSensitivity={(sensitivity) => this.setState({ sensitivity })}
            changeSpontaneity={(spontaneity) => this.setState({ spontaneity })}
            changeSocialEngagement={(socialEngagement) =>
              this.setState({ socialEngagement })
            }
            changeDoctrine={(doctrine) => this.setState({ doctrine })}
            changePreoccupation={(preoccupation) =>
              this.setState({ preoccupation })
            }
            changeComplexity={(complexity) => this.setState({ complexity })}
            changeSubmissiveness={(submissiveness) =>
              this.setState({ submissiveness })
            }
            changeBravery={(bravery) => this.setState({ bravery })}
            changeDevotion={(devotion) => this.setState({ devotion })}
            changeIrritability={(irritability) =>
              this.setState({ irritability })
            }
            changeResolution={(resolution) => this.setState({ resolution })}
            {...this.state}
          />
          <Divider
            style={{
              backgroundColor: "teal",
              height: 0,
              marginBottom: 30,
              marginTop: 30,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <Button
              icon="plus"
              mode="text"
              color="teal"
              onPress={this.newCharacter}
            >
              New character
            </Button>
            <Button
              icon="chevron-double-up"
              mode="text"
              color="teal"
              onPress={() =>
                this.setState({
                  modalVisible: true,
                })
              }
            >
              Character list
            </Button>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
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
          <Modal
            animationType="slide"
            visible={this.state.modalVisible}
            onRequestClose={() =>
              this.setState({
                modalVisible: false,
              })
            }
          >
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Text
                style={{
                  margin: 4,
                  padding: 4,
                  fontWeight: "bold",
                }}
              >
                Character list
              </Text>
            </View>
            <ScrollView>
              {Object.values(this.state.allData).map((item) => {
                return (
                  <TouchableRipple
                    key={item.id}
                    style={{
                      padding: 8,
                    }}
                    rippleColor={`rgba(255, 0, 0, 0.1)`}
                    onPress={() => {
                      setTimeout(() => {
                        this.setState({
                          modalVisible: false,
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
                width: "100%",
              }}
            >
              <IconButton
                icon="chevron-down"
                color={Colors.black500}
                size={50}
                onPress={() =>
                  this.setState({
                    modalVisible: false,
                  })
                }
              />
            </View>
          </Modal>
        </ScrollView>
      </Layout>
    );
  }
}
//chevron-triple-up
//chevron-double-up

export default Character;
