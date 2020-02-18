import React, { useState } from "react";
import { Text, Picker, View } from "react-native";
import { TextInput, Card, Colors, Button } from "react-native-paper";
import MyPicker from "./MyPicker";
import sortedCountry from "./../data/nationality";
import fetchSocialStatus from "./../data/socialStatus";
import Helper from "./Helper";
import MyText from "./MyText/MyText";

const Biodata = props => {
  const [display, setDisplay] = useState(false);
  const [modalVisible, displayModal] = useState(false);

  const {
    name,
    changeName,
    age,
    changeAge,
    birthPlace,
    changeBirthPlace,
    changeCurrentLocation,
    currentLocation,
    changeEducation,
    education,
    changeGender,
    gender,
    changeMoreBiodata,
    moreBiodata,
    changeNationality,
    nationality,
    changeOccupation,
    occupation,
    socialStatus,
    changeSocialStatus,
    birthday,
    changeBirthday,
    changeBloodGroup,
    bloodGroup
  } = props;

  const mode = display ? "contained" : "text";
  //console.log(country);
  return (
    <>
      <Button
        onPress={() => setDisplay(!display)}
        mode={mode}
        color={Colors.blue400}
        style={{ elevation: 0 }}
      >
        Biodata
      </Button>

      {display ? (
        <Card style={{ elevation: 2, margin: 2 }}>
          <Helper
            visible={modalVisible}
            onRequestClose={() => displayModal(false)}
            helpHeader="Bio-data"
            closeModal={() => displayModal(false)}
            openModal={() => displayModal(true)}
            information="These are personal information"
            quote="They are identifying data(excluding history), and makes the character unique."
          >
            <View>
              <MyText type="h2">Auto generated data</MyText>
              <MyText>
                <MyText type="strong">Name</MyText>: Based on the nationality
              </MyText>
              <MyText>
                <MyText type="strong">Blood group</MyText>: Based on global
                occurrence
              </MyText>
              <MyText>
                <MyText type="strong">Place of birth</MyText>: Based on the
                nationality
              </MyText>
              <MyText>
                <MyText type="strong">Current location</MyText>: Influenced by
                place of birth
              </MyText>
              <MyText>
                <MyText type="strong">Nationality</MyText>: Based on global
                occurrence
              </MyText>
              <MyText>
                <MyText type="strong">Occupation</MyText>: Influenced by
                education and social status
              </MyText>
              <MyText type="h2">Randomly generated</MyText>
              <MyText>
                Age, birthday, gender, education and social status
              </MyText>
              <MyText type=""/>
              <MyText>
                If a person has more than one nationality, you can indicated it
                under <MyText type="strong">More</MyText>
              </MyText>
              <MyText type=""/>
              <MyText type="quote">
                John Doe was born in Canada by a Nigerian mother to a German
                father. His Paternal grandfather is half Chinese
              </MyText>
            </View>
          </Helper>
          <TextInput
            label="Name"
            value={name}
            onChangeText={changeName}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Age"
            value={age}
            onChangeText={changeAge}
            style={{ width: "100%" }}
            keyboardType="numeric"
          />
          <TextInput
            label="Birthday"
            value={birthday}
            onChangeText={changeBirthday}
            style={{ width: "100%" }}
            placeholder="Sept 23, at 5 o'clock in the evening"
          />
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Gender</Text>
            <Picker
              selectedValue={gender}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeGender}
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Non binary" value="" />
            </Picker>
          </View>
          <TextInput
            label="Blood group"
            value={bloodGroup}
            onChangeText={changeBloodGroup}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Place of birth"
            value={birthPlace}
            onChangeText={changeBirthPlace}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Current location"
            value={currentLocation}
            onChangeText={changeCurrentLocation}
            style={{ width: "100%" }}
          />
          <MyPicker
            label="Nationality"
            data={sortedCountry()}
            selectedValue={nationality}
            onValueChange={changeNationality}
          />
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Education</Text>
            <Picker
              selectedValue={education}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeEducation}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Preschool" value="Preschool" />
              <Picker.Item
                label="Primary/Elementary school"
                value="Primary/Elementary school"
              />
              <Picker.Item
                label="Junior secondary/Middle school"
                value="Junior secondary/Middle school"
              />
              <Picker.Item
                label="Senior secondary/High school"
                value="Senior secondary/High school"
              />
              <Picker.Item
                label="Diploma/Associate degrees"
                value="Diploma/Associate degrees"
              />
              <Picker.Item label="Degree" value="Degree" />
              <Picker.Item label="Masters" value="Masters" />
              <Picker.Item label="Doctorate" value="Doctorate" />
            </Picker>
          </View>
          <TextInput
            label="Occupation"
            value={occupation}
            onChangeText={changeOccupation}
            style={{ width: "100%" }}
          />
          <MyPicker
            title="Social status"
            data={fetchSocialStatus("main")}
            selectedValue={socialStatus}
            onValueChange={changeSocialStatus}
          />
          <TextInput
            label="More"
            placeholder="Additional information"
            value={moreBiodata}
            onChangeText={changeMoreBiodata}
            style={{ width: "100%" }}
            multiline
          />
        </Card>
      ) : null}
    </>
  );
};

export default Biodata;
