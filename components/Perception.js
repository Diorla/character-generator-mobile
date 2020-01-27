import React, { useState } from "react";
import { Text, View, Modal } from "react-native";
import {
  TextInput,
  Card,
  Colors,
  Button,
  IconButton
} from "react-native-paper";
import Helper from "./Helper";

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
    changeDependent
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
            helpHeader="Physical Attributes"
            closeModal={() => displayModal(false)}
            openModal={() => displayModal(true)}
            information="This is basic information about"
          >
            <Text>This is help</Text>
          </Helper>
            <TextInput
              label="Immediate family"
              value={immediateFamily}
              onChangeText={changeImmediateFamily}
              style={{ width: "100%" }}
              multiline
              placeholder="spouse, children and/or parent"
            />
            <TextInput
              label="Extended family"
              value={extendedFamily}
              onChangeText={changeExtendedFamily}
              style={{ width: "100%" }}
              multiline
              placeholder="uncles, aunts, grandparents etc"
            />
            <TextInput
              label="Friends"
              value={friend}
              onChangeText={changeFriend}
              style={{ width: "100%" }}
              multiline
            />
            <TextInput
              label="Acquaintances"
              value={acquaintance}
              onChangeText={changeAcquaintance}
              style={{ width: "100%" }}
              multiline
            />
            <TextInput
              label="Colleagues"
              value={colleague}
              onChangeText={changeColleague}
              style={{ width: "100%" }}
              multiline
            />
            <TextInput
              label="Subordinates"
              value={subordinate}
              onChangeText={changeSubordinate}
              style={{ width: "100%" }}
              multiline
            />
            <TextInput
              label="Superior"
              value={superior}
              onChangeText={changeSuperior}
              style={{ width: "100%" }}
              multiline
              placeholder="Boss, supervisor, seniors at school etc."
            />
            <TextInput
              label="Authority figure"
              value={authorityFigure}
              onChangeText={changeAuthorityFigure}
              style={{ width: "100%" }}
              multiline
              placeholder="Police, school principal, warden etc."
            />
            <TextInput
              label="Confidant"
              value={confidant}
              onChangeText={changeConfidant}
              style={{ width: "100%" }}
              multiline
              placeholder="The person who seems to know them best."
            />
            <TextInput
              label="Opposite sex"
              value={oppositeSex}
              onChangeText={changeOppositeSex}
              style={{ width: "100%" }}
              multiline
            />
            <TextInput
              label="Group dynamic"
              value={groupDynamic}
              onChangeText={changeGroupDynamic}
              style={{ width: "100%" }}
              multiline
              placeholder="Their role in a group e.g. the joker, leader, mooch"
            />
          <TextInput
            label="Dependable"
            value={dependent}
            onChangeText={changeDependent}
            style={{ width: "100%" }}
            multiline
            placeholder="People rely on this character for advice, crying shoulder, as wingman"
          />
        </Card>
      ) : null}
    </>
  );
};

export default Perception;
