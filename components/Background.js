import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  TextInput,
  Card,
  Colors,
  Button,
} from "react-native-paper";
import MyPicker from "./MyPicker";
import Helper from "./Helper";
import  socialStatus  from "./../data/socialStatus";
import Input from "./Input";

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
    changeSecret,
    phobia,
    changePhobia,
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
          <MyPicker
            label="Family economic status"
            data={socialStatus.main}
            selectedValue={familyEconomicStatus}
            onValueChange={changeFamilyEconomicStatus}
            help="When generated, it has high correlation with the character's social status."
          />
          <Input
            label="Hometown"
            value={hometown}
            onChangeText={changeHometown}
            style={{ width: "100%" }}
            help="Where the character grew up. When generated, there is a high chance that it will be in the same city as place of birth."
          />
          <Input
            label="Childhood"
            value={childhood}
            onChangeText={changeChildhood}
            style={{ width: "100%" }}
            multiline
            placeholder="Sheltered, neglected, abused etc."
            help="The conditions under which the character grew up."
          />
          <Input
            label="Favourite activities"
            value={favouriteActivity}
            onChangeText={changeFavouriteActivity}
            style={{ width: "100%" }}
            multiline
            placeholder="Going to the park, museum"
            help="These are activities the character likes to do from time to time, or whenever they're free."
          />
          <Input
            label="Phobias"
            value={phobia}
            multiline
            onChangeText={changePhobia}
            style={{ width: "100%" }}
            help="These refer to strong fear, and the object of their fear doesn't pose imminent threat."
          />
          <Input
            label="Education history"
            value={educationHistory}
            onChangeText={changeEducationHistory}
            style={{ width: "100%" }}
            multiline
            help="Complete list of all educational training."
          />
          <Input
            label="School club or organisation"
            value={schoolClub}
            onChangeText={changeSchoolClub}
            style={{ width: "100%" }}
            multiline
            placeholder="sport, debate, drama etc"
            help="Usually reflects the characters attributes."
          />
          <Input
            label="Job history"
            value={jobHistory}
            onChangeText={changeJobHistory}
            style={{ width: "100%" }}
            multiline
            help="Complete list of jobs"
          />
          <Input
            label="Favourite place as a kid"
            value={favouritePlace}
            onChangeText={changeFavouritePlace}
            style={{ width: "100%" }}
            multiline
            help="A place the characters has a fond memory of visiting"
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
            <Input
              label="What will they change"
              value={whatThing}
              onChangeText={changeWhatThing}
              style={{ width: "100%" }}
              help="The events they will like to change"
            />
            <Input
              label="Why"
              value={whyThatThing}
              onChangeText={changeWhyThatThing}
              style={{ width: "100%" }}
              multiline
              help="What is the reason for this."
            />
          </View>
          <Input
            label="Turning point in their life"
            value={turningPoint}
            onChangeText={changeTurningPoint}
            style={{ width: "100%" }}
            multiline
            help="Important events that completely change the trajectory of their life or affects the character irrevocably."
          />
          <Input
            label="Earliest memory"
            value={earliestMemory}
            onChangeText={changeEarliestMemory}
            style={{ width: "100%" }}
            multiline
            help="What is the first thing they remember about themselves."
          />
          <Input
            label="Happiest memory"
            value={happiestMemory}
            onChangeText={changeHappiestMemory}
            style={{ width: "100%" }}
            multiline
            help="Happiest day of the character's life, sometime or somewhere they wouldn't mind living forever."
          />
          <Input
            label="Saddest memory"
            value={saddestMemory}
            onChangeText={changeSaddestMemory}
            style={{ width: "100%" }}
            multiline
            help="The most depressing event in the character's life."
          />
          <Input
            label="Clearest memory"
            value={clearestMemory}
            onChangeText={changeClearestMemory}
            style={{ width: "100%" }}
            multiline
            help="An event the character could described in full details, like it just happened"
          />
          <Input
            label="Criminal record"
            value={criminalRecord}
            onChangeText={changeCriminalRecord}
            style={{ width: "100%" }}
            multiline
            help="Any crime in their past? Misdemeanour, felony or those they got away with."
          />
          <Input
            label="Dream job"
            value={dreamJob}
            onChangeText={changeDreamJob}
            style={{ width: "100%" }}
            help="Ideal job"
          />
          <Input
            label="Favourite object"
            value={favObject}
            onChangeText={changeFavObject}
            style={{ width: "100%" }}
            multiline
            placeholder="favourite toys, sentimental objects or prized possession"
            help="This is an object that means alot to the character, perhaps because of the financial value, or the emotions tied to that object"
          />
          <Input
            label="Role model"
            value={roleModel}
            onChangeText={changeRoleModel}
            style={{ width: "100%" }}
            multiline
            placeholder="Someone they look up to"
            help="The type of people the character admires or wishes to emulate"
          />
          <Input
            label="Regret"
            value={regret}
            onChangeText={changeRegret}
            style={{ width: "100%" }}
            multiline
            placeholder="especially, their greatest"
            help="An action or events that haunts the character and fills them with guilt and sadness"
          />
          <Input
            label="Big secret"
            value={secret}
            onChangeText={changeSecret}
            style={{ width: "100%" }}
            multiline
            help="Something the character wouldn't want the public or certain people from knowing."
          />
          <Input
            label="More"
            multiline
            value={background}
            onChangeText={changeBackground}
            style={{ width: "100%" }}
            help="Any additional activity regarding their background, childhood or history."
          />
        </Card>
      ) : null}
    </>
  );
};

export default Background;
