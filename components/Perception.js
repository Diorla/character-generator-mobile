import React, { useState } from "react";
import { View } from "react-native";
import { Card, Colors, Button } from "react-native-paper";
import Helper from "./Helper";
import MyText from "./MyText";
import Input from "./Input";

const Perception = props => {
  const [display, setDisplay] = useState(false);
  const [modalVisible, displayModal] = useState(false);

  const {
    immediateFamily,
    changeImmediateFamily,
    extendedFamily,
    changeExtendedFamily,
    friend,
    changeFriend,
    acquaintance,
    changeAcquaintance,
    colleague,
    changeColleague,
    subordinate,
    changeSubordinate,
    superior,
    changeSuperior,
    authorityFigure,
    changeAuthorityFigure,
    confidant,
    changeConfidant,
    oppositeSex,
    changeOppositeSex,
    groupDynamic,
    changeGroupDynamic,
    dependent,
    changeDependent,
    adversary,
    changeAdversary,
    self,
    changeSelf,
    perception,
    changePerception
  } = props;

  const mode = display ? "contained" : "text";
  return (
    <>
      <Button
        onPress={() => setDisplay(!display)}
        mode={mode}
        color={Colors.blue900}
        style={{ elevation: 0 }}
      >
        Perception
      </Button>
      {display ? (
        <Card style={{ elevation: 2, margin: 2 }}>
          <Helper
            visible={modalVisible}
            onRequestClose={() => displayModal(false)}
            helpHeader="Perception"
            closeModal={() => displayModal(false)}
            openModal={() => displayModal(true)}
            information="Impression others have"
            quote="Reality is a shared illusion"
          >
            <View>
              <MyText type="h2">What is Perception</MyText>
              <MyText>
                Have you ever asked yourself, what do people think of me? That's
                perception.
              </MyText>
              <MyText type="h2">Why is it important</MyText>
              <MyText>
                The use of perception depends on a lot of things, most
                importantly the character and the story. Below are some of the
                examples
              </MyText>
              <MyText type="li">
                It may help affect the way we feel towards the character. A
                character who's ridiculed or considered stupid by his
                colleagues, superior etc may evoke sympathy from the reader.
              </MyText>
              <MyText type="li">
                It may predicts how different characters will act. A character
                who is respected or loved by his superior will most likely get
                promoted as opposed to a character who's not even respected by
                his/her subordinates.
              </MyText>
              <MyText type="li">
                It may explain the state of mind of the character. A character
                who thinks he's the most important person in the world, but is
                regarded very poorly in his circle(friends, acquaintance,
                family) may be deluded.
              </MyText>
              <MyText type="li">
                It may reveal or explain the goal of the character. Sometimes,
                the character is driven by his/her desire to change the status
                quo, or how peope perceive him/her.
              </MyText>
              <MyText type="li">
                It may reveal or explain the support, obstacles and challenges
                the character is facing. For example, the autority thinks s/he
                is an outlaw, but his colleagues, friends and family thinks
                s/he's hero. This character may just be a beloved rebel leader
              </MyText>
              <MyText type="li">
                Self-esteem and pride. A character who may think so little or so
                highly of him/herself, when taken in relation to what other
                thinks of the character.
              </MyText>
            </View>
          </Helper>
          <Input
            label="Self"
            value={self}
            onChangeText={changeSelf}
            style={{ width: "100%" }}
            multiline
            placeholder="What the character thinks of him/herself"
          />
          <Input
            label="Immediate family"
            value={immediateFamily}
            onChangeText={changeImmediateFamily}
            style={{ width: "100%" }}
            multiline
            placeholder="spouse, children and/or parent"
          />
          <Input
            label="Extended family"
            value={extendedFamily}
            onChangeText={changeExtendedFamily}
            style={{ width: "100%" }}
            multiline
            placeholder="uncles, aunts, grandparents etc"
          />
          <Input
            label="Friends"
            value={friend}
            onChangeText={changeFriend}
            style={{ width: "100%" }}
            multiline
          />
          <Input
            label="Acquaintances"
            value={acquaintance}
            onChangeText={changeAcquaintance}
            style={{ width: "100%" }}
            multiline
          />
          <Input
            label="Colleagues"
            value={colleague}
            onChangeText={changeColleague}
            style={{ width: "100%" }}
            multiline
          />
          <Input
            label="Subordinates"
            value={subordinate}
            onChangeText={changeSubordinate}
            style={{ width: "100%" }}
            multiline
          />
          <Input
            label="Superior"
            value={superior}
            onChangeText={changeSuperior}
            style={{ width: "100%" }}
            multiline
            placeholder="Boss, supervisor, seniors at school etc."
          />
          <Input
            label="Authority figure"
            value={authorityFigure}
            onChangeText={changeAuthorityFigure}
            style={{ width: "100%" }}
            multiline
            placeholder="law abiding, miscreant, outlaw"
            help="Police, school principal, warden etc."
          />
          <Input
            label="Confidant"
            value={confidant}
            onChangeText={changeConfidant}
            style={{ width: "100%" }}
            multiline
            help="The person who seems to know them best, because that's whom they tell their secrets"
          />
          <Input
            label="Opposite sex"
            value={oppositeSex}
            onChangeText={changeOppositeSex}
            style={{ width: "100%" }}
            multiline
            placeholder="Charming, beautiful and quite delightful"
            help="This has some sort of sexual undertone to it, and it may include people of the same gender especially if the character is not heterosexual."
          />
          <Input
            label="Adversary"
            value={adversary}
            onChangeText={changeAdversary}
            style={{ width: "100%" }}
            multiline
          />
          <Input
            label="Group dynamic"
            value={groupDynamic}
            onChangeText={changeGroupDynamic}
            style={{ width: "100%" }}
            multiline
            placeholder="The joker, the leader, the moocher, the smart one etc."
            help="If the character belongs to or find themselves in a group, what type of role do they play."
          />
          <Input
            label="Dependable"
            value={dependent}
            onChangeText={changeDependent}
            style={{ width: "100%" }}
            multiline
            placeholder="Advice, crying shoulder, wingman, fun time"
            help="What is one thing, you can always count on the character to deliver."
          />
          <Input
            label="More"
            value={perception}
            onChangeText={changePerception}
            style={{ width: "100%" }}
            multiline
            help="Any additional information, regarding how the character is perceived"
          />
        </Card>
      ) : null}
    </>
  );
};

export default Perception;
