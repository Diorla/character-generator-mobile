import React, { useState } from "react";
import { TextInput, Card, Colors, Button, Text } from "react-native-paper";
import Helper from "./Helper";

const Habit = props => {
  const [display, setDisplay] = useState(false);
  const [modalVisible, displayModal] = useState(false);

  const {
    speechStyle,
    changeSpeechStyle,
    speechTempo,
    changeSpeechTempo,
    speechPitch,
    changeSpeechPitch,
    gesturing,
    changeGesturing,
    eyeContact,
    changeEyeContact,
    speechImpediment,
    changeSpeechImpediment,
    curseWord,
    changeCurseWord,
    catchPhrase,
    changeCatchPhrase,
    laughter,
    changeLaughter,
    smile,
    changeSmile,
    restingFace,
    changeRestingFace,
    likes,
    changeLikes,
    boringStuff,
    changeBoringStuff,
    annoyingStuff,
    changeAnnoyingStuff,
    disLikes,
    changeDisLikes,
    folly,
    changeFolly,
    hobby,
    changeHobby
  } = props;

  const mode = display ? "contained" : "text";
  return (
    <>
      <Button
        onPress={() => setDisplay(!display)}
        mode={mode}
        color={Colors.blue700}
        style={{ elevation: 0 }}
      >
        Habit/Mannerisms
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
            label="Style of speech"
            value={speechStyle}
            onChangeText={changeSpeechStyle}
            style={{ width: "100%" }}
            multiline
            placeholder="educated, elevated, peppered with slangs, wordy, regional/with accent"
          />
          <TextInput
            label="Speech tempo"
            value={speechTempo}
            onChangeText={changeSpeechTempo}
            style={{ width: "100%" }}
            placeholder="rapid, slow, measured, drawled"
          />
          <TextInput
            label="Voice"
            value={speechPitch}
            onChangeText={changeSpeechPitch}
            style={{ width: "100%" }}
            multiline
            placeholder="deep, melodious, velvety, gravelly"
          />
          <TextInput
            label="Gesturing"
            value={gesturing}
            onChangeText={changeGesturing}
            style={{ width: "100%" }}
            multiline
            placeholder="compulsive 'hand talker', controlled, when agitated"
          />
          <TextInput
            label="Eye contact"
            value={eyeContact}
            onChangeText={changeEyeContact}
            style={{ width: "100%" }}
            multiline
            placeholder="direct, shifty, evasive"
          />
          <TextInput
            label="Speech impediments"
            value={speechImpediment}
            onChangeText={changeSpeechImpediment}
            style={{ width: "100%" }}
            multiline
            placeholder="stuttering, mute, lisping, speech tic"
          />
          <TextInput
            label="Catch phrase"
            value={catchPhrase}
            onChangeText={changeCatchPhrase}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Curse word"
            value={curseWord}
            onChangeText={changeCurseWord}
            style={{ width: "100%" }}
            placeholder="damn, shit, jeez, omg, whatdafuck, oh wow etc."
            multiline
          />
          <TextInput
            label="Laughter"
            value={laughter}
            onChangeText={changeLaughter}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Smile"
            value={smile}
            onChangeText={changeSmile}
            style={{ width: "100%" }}
            placeholder="toothy, dimpled"
          />
          <TextInput
            label="Resting face"
            value={restingFace}
            onChangeText={changeRestingFace}
            style={{ width: "100%" }}
            multiline
            placeholder="indifferent/neutral, angry, confused, funny, cute"
          />
          <TextInput
            label="Likes"
            value={likes}
            onChangeText={changeLikes}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. chocolate, old movies, sleeping"
          />
          <TextInput
            label="Hobbies"
            value={hobby}
            onChangeText={changeHobby}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. playing football, chess, games"
          />
          <TextInput
            label="Bad habit"
            value={folly}
            onChangeText={changeFolly}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. smoking, alcholism, gambling"
          />
          <TextInput
            label="Dislikes"
            value={disLikes}
            onChangeText={changeDisLikes}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. chocolate, old movies, sleeping"
          />
          <TextInput
            label="Things they find boring"
            value={boringStuff}
            onChangeText={changeBoringStuff}
            style={{ width: "100%" }}
            multiline
          />
          <TextInput
            label="Things they find annoying"
            value={annoyingStuff}
            onChangeText={changeAnnoyingStuff}
            style={{ width: "100%" }}
            multiline
          />
        </Card>
      ) : null}
    </>
  );
};

export default Habit;
