import React, { useState } from "react";
import { Text, View } from "react-native";
import { Card, Colors, Button } from "react-native-paper";
import MyPicker from "./MyPicker";
import socialStatus from "./../data/socialStatus";
import Input from "./Input";
import MyText from "./MyText";
import sortedCountry from "./../data/nationality";

const Background = props => {
  const [display, setDisplay] = useState(false);

  const {
    familyEconomicStatus,
    changeFamilyEconomicStatus,
    hometown,
    changeHometown,
    hometownCountry,
    changeHometownCountry,
    hometownSubcountry,
    changeHometownSubcountry,
    childhood,
    changeChildhood,
    favouriteActivity,
    changeFavouriteActivity,
    phobia,
    changePhobia
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
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <MyText type="strong">Hometown</MyText>
            <MyPicker
              label="Country"
              data={sortedCountry()}
              selectedValue={hometownCountry}
              onValueChange={changeHometownCountry}
              help="This is where the character grew up or spent most of their childhood. It may have an effect on things like accents, mannerisms, beliefs etc."
            />
            <Input
              label="Subcountry"
              value={hometownSubcountry}
              onChangeText={changeHometownSubcountry}
              style={{ width: "100%" }}
              multiline
              help="These are adminstrative regions or zones in a country like a state, province, governorate, district etc. Different country uses different terms to divide their country. Note, this assumes that the country of birth is the character's nationality."
            />
            <Input
              label="City"
              value={hometown}
              onChangeText={changeHometown}
              style={{ width: "100%" }}
              help="This is the name of a city or town"
            />
          </View>
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
        </Card>
      ) : null}
    </>
  );
};

export default Background;
