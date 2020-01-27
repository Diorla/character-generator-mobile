import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  TextInput,
  Card,
  Colors,
  Button,
  IconButton
} from "react-native-paper";
import MyPicker from "./MyPicker";
import biodata from "./../data/biodata";
import Helper from "./Helper";

const Background = props => {
  const [display, setDisplay] = useState(false);
  const [modalVisible, displayModal] = useState(false);

  const {
    familyEconomicStatus,
    changeFamilyEconomicStatus,
    hometown,
    changeHometown,
    childhood,
    changeChildhood,
    educationHistory,
    changeEducationHistory,
    schoolClub,
    changeSchoolClub,
    favouriteActivity,
    changeFavouriteActivity,
    jobHistory,
    changeJobHistory,
    favouritePlace,
    changeFavouritePlace,
    whatThing,
    changeWhatThing,
    whyThatThing,
    changeWhyThatThing,
    turningPoint,
    changeTurningPoint,
    earliestMemory,
    changeEarliestMemory,
    saddestMemory,
    changeSaddestMemory,
    happiestMemory,
    changeHappiestMemory,
    clearestMemory,
    changeClearestMemory,
    criminalRecord,
    changeCriminalRecord,
    background,
    changeBackground,
    dreamJob,
    changeDreamJob,
    favObject,
    changeFavObject,
    roleModel,
    changeRoleModel,
    regret,
    changeRegret,
    secret,
    changeSecret
  } = props;

  const mode = display ? "contained" : "text";
  return (
    <>
      <Button
        onPress={() => setDisplay(!display)}
        mode={mode}
        color={Colors.green700}
        style={{ elevation: 0 }}
      >
        Background
      </Button>
      {display ? (
        <Card style={{ elevation: 2, margin: 2 }}>
          <Helper
            visible={modalVisible}
            onRequestClose={() => displayModal(false)}
            helpHeader="Background"
            closeModal={() => displayModal(false)}
            openModal={() => displayModal(true)}
            information="History of the character"
            quote="Nature vs nurture at its best"
          >
            <Text>School club or organisation </Text>
          </Helper>
          <MyPicker
            title="Family economic status"
            data={biodata.socialStatus}
            selectedValue={familyEconomicStatus}
            onValueChange={changeFamilyEconomicStatus}
          />
          <TextInput
            label="Hometown"
            value={hometown}
            onChangeText={changeHometown}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Childhood"
            value={childhood}
            onChangeText={changeChildhood}
            style={{ width: "100%" }}
            multiline
            placeholder="Sheltered, neglected, abused etc."
          />
          <TextInput
            label="Education history"
            value={educationHistory}
            onChangeText={changeEducationHistory}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="School club or organisation"
            value={schoolClub}
            onChangeText={changeSchoolClub}
            style={{ width: "100%" }}
            multiline
            placeholder="sport, debate, drama etc"
          />
          <TextInput
            label="Favourite activities"
            value={favouriteActivity}
            onChangeText={changeFavouriteActivity}
            style={{ width: "100%" }}
            multiline
            placeholder="Going to the park, museum"
          />
          <TextInput
            label="Job history"
            value={jobHistory}
            onChangeText={changeJobHistory}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Favourite place as a kid"
            value={favouritePlace}
            onChangeText={changeFavouritePlace}
            style={{ width: "100%" }}
            multiline
          />
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>If they could change one thing in their past</Text>
            <TextInput
              label="What will they change"
              value={whatThing}
              onChangeText={changeWhatThing}
              style={{ width: "100%" }}
            />
            <TextInput
              label="Why"
              value={whyThatThing}
              onChangeText={changeWhyThatThing}
              style={{ width: "100%" }}
              multiline
            />
          </View>
          <TextInput
            label="Turning point in their life"
            value={turningPoint}
            onChangeText={changeTurningPoint}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Earliest memory"
            value={earliestMemory}
            onChangeText={changeEarliestMemory}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Saddest memory"
            value={saddestMemory}
            onChangeText={changeSaddestMemory}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Happiest memory"
            value={happiestMemory}
            onChangeText={changeHappiestMemory}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Clearest memory"
            value={clearestMemory}
            onChangeText={changeClearestMemory}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Criminal record"
            value={criminalRecord}
            onChangeText={changeCriminalRecord}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Dream job"
            value={dreamJob}
            onChangeText={changeDreamJob}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Favourite object"
            value={favObject}
            onChangeText={changeFavObject}
            style={{ width: "100%" }}
            multiline
            placeholder="favourite toys, sentimental objects or prized possession"
          />
          <TextInput
            label="Role model"
            value={roleModel}
            onChangeText={changeRoleModel}
            style={{ width: "100%" }}
            multiline
            placeholder="type of people they admire or emulate"
          />
          <TextInput
            label="Regret"
            value={regret}
            onChangeText={changeRegret}
            style={{ width: "100%" }}
            multiline
            placeholder="especially, their greatest"
          />
          <TextInput
            label="Big secret"
            value={secret}
            onChangeText={changeSecret}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="More"
            multiline
            value={background}
            onChangeText={changeBackground}
            style={{ width: "100%" }}
          />
        </Card>
      ) : null}
    </>
  );
};

export default Background;
