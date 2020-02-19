import React, { useState } from "react";
import { Card, Colors, Button } from "react-native-paper";
import MyPicker from "./MyPicker";
import sortedCountry from "./../data/nationality";
import  * as income  from "./../data/socialStatus";
import Input from "./Input";
import { educationLevel } from "../modules/getEducation";


const Biodata = props => {
  const [display, setDisplay] = useState(false);

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
          <Input
            label="Place of birth"
            value={birthPlace}
            onChangeText={changeBirthPlace}
            style={{ width: "100%" }}
            help="When auto-generated, it's limited to the nationality of the person."
          />
          <Input
            label="Current location"
            value={currentLocation}
            onChangeText={changeCurrentLocation}
            help="When auto-generated, there is a high chance that it will be in the same country as the nationality, higher chance that it will be the place of birth."
          />
          <MyPicker
            label="Nationality"
            data={sortedCountry()}
            selectedValue={nationality}
            onValueChange={changeNationality}
            help="When auto-generated, it takes account the population of the world, hence there is higher chance that it will be China than Senegal."
          />
          <MyPicker
            label="Education"
            data={educationLevel}
            selectedValue={education}
            onValueChange={changeEducation}
            help="The highest level of education that has been completed."
          />
          <Input
            label="Occupation"
            value={occupation}
            onChangeText={changeOccupation}
            style={{ width: "100%" }}
            help="When auto-generated, it will be influenced by education and social status."
          />
          <MyPicker
            label="Social status"
            data={income["default"]["main"]}
            selectedValue={socialStatus}
            onValueChange={changeSocialStatus}
            help="When randomly generated, it's influenced by education. Underclass refers to people like beggars or hobos, who have no interest in climbing the financial ladder. Working poor refers to those who don't have a stable source of income and lives below poverty line. Working class and lower middle class earns around the same, but working class are usually blue collared while lower middle class tends to work in offices. Upper middle class are rich while Upper class are the super rich."
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
