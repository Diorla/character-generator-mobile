import React, { useState } from "react";
import { Card, Colors, Button } from "react-native-paper";
import Input from "./Input";

const Physical = props => {
  const [display, setDisplay] = useState(false);

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
          <Input
            label="Height"
            value={height}
            onChangeText={changeHeight}
            style={{ width: "100%" }}
            keyboardType="name-phone-pad"
            help="How tall the character is"
          />
          <Input
            label="Build"
            placeholder="Weight and physique"
            value={build}
            onChangeText={changeBuild}
            style={{ width: "100%" }}
            multiline
            help="Body shape and size. Features like chest(breast) are influenced by gender."
          />
          <Input
            label="Skin tone"
            value={skinTone}
            onChangeText={changeSkinTone}
            style={{ width: "100%" }}
            placeholder="e.g. dark olive skin, porcelain white, latino"
            help="Complexion, note features like eye and hair type, colour and eye colour is influenced by skin colour"
          />
          <Input
            label="Face"
            placeholder="Shape, nose, lips and ears"
            value={face}
            onChangeText={changeFace}
            style={{ width: "100%" }}
            multiline
            help="Shape, notable features, nose, lips and ears"
          />
          <Input
            label="Hair"
            placeholder="Type, style, length and colour"
            value={hair}
            onChangeText={changeHair}
            style={{ width: "100%" }}
            multiline
            help="Hair colour, the type and length of hair, which in turn determine the hair style."
          />
          <Input
            label="Eye"
            placeholder="Colour, shape, size, distance and eyebrows"
            value={eye}
            onChangeText={changeEye}
            style={{ width: "100%" }}
            multiline
            help="Eye colour is influenced by skin colour. It's also includes shape, size of the eye, the distance between the eyes and shape & thickness of the eyebrows."
          />
          <Input
            label="Distinguishing features"
            placeholder="Tattoos, scars or birthmarks"
            value={distinguishingFeatures}
            onChangeText={changeDistinguishingFeatures}
            style={{ width: "100%" }}
            multiline
            help="Unique identifying features, usually in a visible area of the body e.g. the face or the arms"
          />
          <Input
            label="Preferred outfit"
            placeholder="E.g. jeans, suits"
            value={outfit}
            onChangeText={changeOutfit}
            style={{ width: "100%" }}
            multiline
            help="How does the character likes to dress. It's usually depend on the character's age, gender, social status, education, occupation, origin etc."
          />
          <Input
            label="Accessories"
            placeholder="Glasses, cane, pipe, necklace etc"
            value={accessories}
            onChangeText={changeAccessories}
            style={{ width: "100%" }}
            help="An object that can be associated with the character at all times."
          />
          <Input
            label="Grooming"
            placeholder="Dishevelled, Untidy (but clean), Smart, other"
            value={grooming}
            onChangeText={changeGrooming}
            style={{ width: "100%" }}
            help="First impression when you see the character. It refers to the general physical appearance based on the person's choices like what they choose to wear, hairdo, facial hairs."
          />
          <Input
            label="Health"
            placeholder="Medication conditions, disability or birth defects"
            value={health}
            onChangeText={changeHealth}
            style={{ width: "100%" }}
            help="Only chronic conditions are auto-generated and it's influenced by age and gender"
          />
          <Input
            label="Handwriting"
            placeholder="sloppy, neat, careful, unintelligible or artistic"
            value={handwriting}
            onChangeText={changeHandwriting}
            style={{ width: "100%" }}
          />
          <Input
            label="Gait"
            placeholder="How the character walks"
            value={gait}
            onChangeText={changeGait}
            style={{ width: "100%" }}
            help="A way of walking, running, or moving along on foot. It may be affected by posture or medical conditions."
          />
          <Input
            label="Posture"
            value={posture}
            onChangeText={changePosture}
            style={{ width: "100%" }}
            help="The way in which somebody holds his or her body, especially when standing. It may be affected by medical conditions."
          />
          <Input
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
