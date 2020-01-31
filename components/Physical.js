import React, { useState } from "react";
import { TextInput, Card, Colors, Button } from "react-native-paper";
import { View } from "react-native";
import Helper from "./Helper";
import MyText from "./MyText";

const Physical = props => {
  const [display, setDisplay] = useState(false);
  const [modalVisible, displayModal] = useState(false);

  const {
    height,
    changeHeight,
    build,
    changeBuild,
    face,
    changeFace,
    hair,
    changeHair,
    eye,
    changeEye,
    distinguishingFeatures,
    changeDistinguishingFeatures,
    outfit,
    changeOutfit,
    accessories,
    changeAccessories,
    grooming,
    changeGrooming,
    tic,
    changeTic,
    health,
    changeHealth,
    handwriting,
    changeHandwriting,
    gait,
    changeGait,
    posture,
    changePosture,
    morePhysical,
    changeMorePhysical,
    skinTone,
    changeSkinTone
  } = props;
  const icon = display
    ? "chevron-left-circle-outline"
    : "chevron-down-circle-outline";
  const mode = display ? "contained" : "text";
  return (
    <>
      <Button
        onPress={() => setDisplay(!display)}
        mode={mode}
        color={Colors.green900}
        style={{ elevation: 0 }}
      >
        Physical Attributes
      </Button>
      {display ? (
        <Card style={{ elevation: 2, margin: 2 }}>
          <Helper
            visible={modalVisible}
            onRequestClose={() => displayModal(false)}
            helpHeader="Bio-data"
            closeModal={() => displayModal(false)}
            openModal={() => displayModal(true)}
            information="Physical description"
            quote="These are what you see when you look at the character"
          >
            <View>
              <MyText type="h3">Auto generated data</MyText>
              <MyText type="strong">Build</MyText>
              <MyText>
                : Body features are influenced by height and weight
              </MyText>
              <MyText type="strong">Hair</MyText>
              <MyText>
                : Type and colour of hair is influenced by skin tone
              </MyText>
              <MyText type="strong">Health</MyText>
              <MyText>
                : Influenced by age, especially, chronic diseases. It does not
                include disease with vaccination or those that has been
                eradicated. Please, you may need to research the specified
                diseases for diganosis, causes, signs and symptoms, treatments
                and associated disease.
              </MyText>
              <MyText type="strong">Occupation</MyText>
              <MyText>: Influenced by education and social status</MyText>
              <MyText type="strong">Randomly generated</MyText>
              <MyText>
                : height, weight, skin tone, face, eyes, distinguishing
                features, preferred outfit, accessories, grooming, quirks,
                handwriting, gait and posture
              </MyText>
              <MyText>
                You may add other physical attributes not mentioned here in{" "}
                <MyText type="strong">More</MyText>
              </MyText>
            </View>
          </Helper>
          <TextInput
            label="Height"
            value={height}
            onChangeText={changeHeight}
            style={{ width: "100%" }}
            keyboardType="name-phone-pad"
          />
          <TextInput
            label="Build"
            placeholder="Weight and physique"
            value={build}
            onChangeText={changeBuild}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Skin tone(or descent)"
            value={skinTone}
            onChangeText={changeSkinTone}
            style={{ width: "100%" }}
            placeholder="e.g. dark olive skin, porcelain white, latino"
          />
          <TextInput
            label="Face"
            placeholder="Shape, nose, lips and ears"
            value={face}
            onChangeText={changeFace}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Hair"
            placeholder="Type, style, length and colour"
            value={hair}
            onChangeText={changeHair}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Eye"
            placeholder="Colour, shape, size, distance and eyebrows"
            value={eye}
            onChangeText={changeEye}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Distinguishing features"
            placeholder="Tattoos, scars or birthmarks"
            value={distinguishingFeatures}
            onChangeText={changeDistinguishingFeatures}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Preferred outfit"
            placeholder="E.g. jeans, suits"
            value={outfit}
            onChangeText={changeOutfit}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Accessories"
            placeholder="Glasses, cane, pipe, necklace etc"
            value={accessories}
            onChangeText={changeAccessories}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Grooming"
            placeholder="Dishevelled, Untidy (but clean), Smart, other"
            value={grooming}
            onChangeText={changeGrooming}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Quirks and mannerisms"
            placeholder="Unique behaviour"
            value={tic}
            onChangeText={changeTic}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Health"
            placeholder="Medication conditions, disability or birth defects"
            value={health}
            onChangeText={changeHealth}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Handwriting"
            placeholder="sloppy, neat, careful, unintelligible or artistic"
            value={handwriting}
            onChangeText={changeHandwriting}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Gait"
            placeholder="How the character walks"
            value={gait}
            onChangeText={changeGait}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Posture"
            value={posture}
            onChangeText={changePosture}
            style={{ width: "100%" }}
          />
          <TextInput
            label="More"
            value={morePhysical}
            onChangeText={changeMorePhysical}
            style={{ width: "100%" }}
            multiline
          />
        </Card>
      ) : null}
    </>
  );
};

export default Physical;
