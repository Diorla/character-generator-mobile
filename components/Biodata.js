import React, { useState } from "react";
import { Card, Colors, Button } from "react-native-paper";
import { View, Text } from "react-native";
import MyPicker from "./MyPicker";
import sortedCountry from "./../data/nationality";
import * as income from "./../data/socialStatus";
import Input from "./Input";
import { educationLevel } from "../modules/getEducation";
import MyText from "./MyText/index";

const Biodata = props => {
  const [display, setDisplay] = useState(false);

  const {
    name,
    changeName,
    age,
    changeAge,
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
    bloodGroup,
    birthCity,
    changeBirthCity,
    birthSubCountry,
    changebirthSubCountry,
    residentCity,
    changeResidentCity,
    residentSubcountry,
    changeResidentSubcountry,
    residentCountry,
    changeResidentCountry
  } = props;

  const mode = display ? "contained" : "text";

  return (
    <>
      <Button
        onPress={() => setDisplay(!display)}
        mode={mode}
        color={Colors.blue400}
        style={{ elevation: 0 }}
      >
        Basic information
      </Button>

      {display ? (
        <Card style={{ elevation: 2, margin: 2 }}>
          <Input
            label="Name"
            value={name}
            onChangeText={changeName}
            style={{ width: "100%" }}
            help="It is usually generated based on the character's nationality"
          />
          <Input
            label="Age"
            value={age}
            onChangeText={changeAge}
            style={{ width: "100%" }}
            keyboardType="numeric"
            help="Randomly generated"
          />
          <Input
            label="Birthday"
            value={birthday}
            onChangeText={changeBirthday}
            style={{ width: "100%" }}
            placeholder="Sept 23, at 5 o'clock in the evening"
            help="The month, day and time may be randomly generated."
          />
          <MyPicker
            label="Gender"
            selectedValue={gender}
            onValueChange={changeGender}
            data={["Male", "Female"]}
            nullValue="Non binary"
            help="Randomly generated. Influences certain bodily features like breast."
          />
          <Input
            label="Blood group"
            value={bloodGroup}
            onChangeText={changeBloodGroup}
            style={{ width: "100%" }}
            help="This includes A, B & O, rhesus positive or negative. It's randomly generated based on the global percentage."
          />
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <MyText type="strong">Place of birth</MyText>
            <MyPicker
              label="Nationality"
              data={sortedCountry()}
              selectedValue={nationality}
              onValueChange={changeNationality}
              help="One of the United nations member states and territories with a population of 1 million or more"
            />
            <Input
              label="Subcountry"
              value={birthSubCountry}
              onChangeText={changebirthSubCountry}
              style={{ width: "100%" }}
              multiline
              help="These are adminstrative regions or zones in a country like a state, province, governorate, district etc. Different country uses different terms to divide their country. Note, this assumes that the country of birth is the character's nationality."
            />
            <Input
              label="City"
              value={birthCity}
              onChangeText={changeBirthCity}
              style={{ width: "100%" }}
              help="This is the name of a city or town"
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <MyText type="strong">Current location</MyText>
            <MyPicker
              label="Country"
              data={sortedCountry()}
              selectedValue={residentCountry}
              onValueChange={changeResidentCountry}
              help="One of the United nations member states and territories with a population of 1 million or more"
            />
            <Input
              label="Subcountry"
              value={residentSubcountry}
              onChangeText={changeResidentSubcountry}
              style={{ width: "100%" }}
              multiline
              help="These are adminstrative regions or zones in a country like a state, province, governorate, district etc. Different country uses different terms to divide their country. Note, this assumes that the country of birth is the character's nationality."
            />
            <Input
              label="City"
              value={residentCity}
              onChangeText={changeResidentCity}
              style={{ width: "100%" }}
              help="This is the name of a city or town"
            />
          </View>
          <MyPicker
            label="Education"
            data={educationLevel}
            selectedValue={education}
            onValueChange={changeEducation}
            help="The highest level of education that has been completed. It's influenced by age"
          />
          <Input
            label="Occupation"
            value={occupation}
            onChangeText={changeOccupation}
            style={{ width: "100%" }}
            help="When auto-generated, it will be influenced by education and social status. Doesn't apply to character under 18"
          />
          <MyPicker
            label="Social status"
            data={income["default"]["main"]}
            selectedValue={socialStatus}
            onValueChange={changeSocialStatus}
            help="When randomly generated, it's influenced by education. Doesn't apply to character under 18. Underclass refers to people like beggars or hobos, who have no interest in climbing the financial ladder. Working poor refers to those who don't have a stable source of income and lives below poverty line. Working class and lower middle class earns around the same, but working class are usually blue collared while lower middle class tends to work in offices. Upper middle class are rich while Upper class are the super rich."
          />
          <Input
            label="More"
            placeholder="Additional information"
            value={moreBiodata}
            onChangeText={changeMoreBiodata}
            style={{ width: "100%" }}
            multiline
            help="If you have extra information e.g. John Doe was born in Canada by a Nigerian mother to a German father. His Paternal grandfather is half Chinese"
          />
        </Card>
      ) : null}
    </>
  );
};

export default Biodata;
