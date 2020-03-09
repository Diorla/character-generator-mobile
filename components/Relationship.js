import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  TextInput,
  Card,
  Divider,
  Colors,
  Button,
  IconButton
} from "react-native-paper";
import Helper from "./Helper";
import MyText from "./MyText/MyText";

const Relationship = props => {
  const [display, setDisplay] = useState(false);
  const [modalVisible, displayModal] = useState(false);

  const {
    relationship,
    changeName,
    changeAge,
    changeType,
    changeDescription,
    addRelationship,
    removeRelationship
  } = props;

  const mode = display ? "contained" : "text";

  return (
    <>
      <Button
        onPress={() => setDisplay(!display)}
        mode={mode}
        color={Colors.green500}
        style={{ elevation: 0 }}
      >
        Relationships
      </Button>
      {display ? (
        <Card style={{ elevation: 2, margin: 2 }}>
          <Helper
            visible={modalVisible}
            onRequestClose={() => displayModal(false)}
            helpHeader="Relationships"
            closeModal={() => displayModal(false)}
            openModal={() => displayModal(true)}
            information="Connection, bond or family ties"
            quote="This is basic information about the most important relationships or connections the character has"
          >
            <View>
              <Text>
                This should only include the most important relationship that
                have significant effect on the character's story.{" "}
              </Text>
              <MyText type="h3">Name</MyText>
              <MyText>
                If needed, you may group two or more people together e.g.{" "}
                <MyText type="strong">Friends</MyText> or{" "}
                <MyText type="strong">Extended family</MyText> instead of
                listing their names one by one.
              </MyText>
              <MyText type="h3">Connection</MyText>
              <MyText>
                What is their relationship? Family, son, daughter, friend,
                colleagues etc.
              </MyText>
              <MyText type="h3">Description</MyText>
              <MyText>
                This describes how good or bad their relationship is, perhaps a
                few insight into how they got here.
              </MyText>
            </View>
          </Helper>
          <Divider
            style={{
              backgroundColor: "teal",
              height: 1
            }}
          />
          {relationship.map((obj, index) => (
            <View
              key={index}
              style={{
                backgroundColor: Colors.grey300,
                borderBottomColor: Colors.grey500,
                borderBottomWidth: 1,
                padding: 4
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Text>{index + 1}</Text>
                <IconButton
                  icon="minus"
                  color={Colors.red500}
                  size={20}
                  onPress={() => removeRelationship(index)}
                />
              </View>
              <TextInput
                label="Name"
                value={obj.name}
                onChangeText={val => changeName(val, index)}
                style={{ width: "100%" }}
              />
              <TextInput
                label="Age"
                placeholder="Current age or at death"
                value={obj.age}
                onChangeText={val => changeAge(val, index)}
                style={{ width: "100%" }}
              />
              <TextInput
                label="Connection"
                placeholder="e.g. mother, son, friend etc"
                value={obj.type}
                onChangeText={val => changeType(val, index)}
                style={{ width: "100%" }}
              />
              <TextInput
                label="Description"
                placeholder="e.g. estranged, see each other during christmas"
                value={obj.description}
                onChangeText={val => changeDescription(val, index)}
                style={{ width: "100%" }}
                multiline
              />
            </View>
          ))}
          <Button
            icon="plus"
            mode="text"
            color="red"
            onPress={addRelationship}
            style={{ margin: 3 }}
          >
            Add
          </Button>
        </Card>
      ) : null}
    </>
  );
};

export default Relationship;
