import React, { useState } from "react";
import { Card, Colors, Button } from "react-native-paper";
import Input from "./Input";

const Habit = (props) => {
  const [display, setDisplay] = useState(false);

  const {
    speechStyle,
    changeSpeechStyle,
    speechTempo,
    changeSpeechTempo,
    speechPitch,
    changeSpeechPitch,
    gesture,
    changeGesture,
    speechImpediment,
    changeSpeechImpediment,
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
    dislikes,
    changeDisLikes,
    folly,
    changeFolly,
    hobby,
    changeHobby,
    tic,
    changeTic,
    groupDynamic,
    changeGroupDynamic,
    dependent,
    changeDependent,
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
        Mannerisms
      </Button>
      {display ? (
        <Card style={{ elevation: 2, margin: 2 }}>
          <Input
            label="Style of speech"
            value={speechStyle}
            onChangeText={changeSpeechStyle}
            style={{ width: "100%" }}
            multiline
            placeholder="educated, elevated, peppered with slangs, wordy, regional/with accent"
            help="The way the person speaks, it's may be affected by age, origin, education, social status"
          />
          <Input
            label="Speech tempo"
            value={speechTempo}
            onChangeText={changeSpeechTempo}
            style={{ width: "100%" }}
            placeholder="rapid, slow, measured, drawled"
            help="The speed or rate at which someone speaks. It's usually congenital"
          />
          <Input
            label="Voice"
            value={speechPitch}
            onChangeText={changeSpeechPitch}
            style={{ width: "100%" }}
            multiline
            placeholder="deep, melodious, velvety, gravelly"
            help="How does the person sound? This may be affected by gender and usually changes with age."
          />
          <Input
            label="Non verbal communication"
            value={gesture}
            onChangeText={changeGesture}
            style={{ width: "100%" }}
            multiline
            placeholder="Gestures, eye contact etc."
            help="The gestures the character makes during conversation"
          />
          <Input
            label="Speech impediments"
            value={speechImpediment}
            onChangeText={changeSpeechImpediment}
            style={{ width: "100%" }}
            multiline
            placeholder="stuttering, mute, lisping, speech tic"
            help="This are usually congenital. It may also be regional, for example when someone migrates to another region, he or she may be find it difficult to use some phonemes that doesn't exist in his/her mother tongue."
          />
          <Input
            label="Laughter"
            value={laughter}
            onChangeText={changeLaughter}
            style={{ width: "100%" }}
            help="How would you described the character's laughter"
          />
          <Input
            label="Smile"
            value={smile}
            onChangeText={changeSmile}
            style={{ width: "100%" }}
            placeholder="toothy, dimpled, beautiful"
            help="How would you described the character's smile"
          />
          <Input
            label="Resting face"
            value={restingFace}
            onChangeText={changeRestingFace}
            style={{ width: "100%" }}
            multiline
            placeholder="indifferent/neutral, angry, confused, funny, cute"
            help="What is your first impression of the character's mood when you see them? It's usually indicative of the mood the character is always in e.g. angry, happy, confused etc. but of course, you can't always judge a book by its cover."
          />
          <Input
            label="Likes"
            value={likes}
            onChangeText={changeLikes}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. chocolate, old movies, sleeping"
            help="What are the things the characters likes"
          />
          <Input
            label="Dislikes"
            value={dislikes}
            onChangeText={changeDisLikes}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. chocolate, old movies, sleeping"
            help="What are the things the cahracters dislikes"
          />
          <Input
            label="Hobbies"
            value={hobby}
            onChangeText={changeHobby}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. playing football, chess, games"
            help="What are the activities the characters enjoy doing regularly."
          />
          <Input
            label="Bad habit"
            value={folly}
            onChangeText={changeFolly}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. smoking, alcholism, gambling"
            help="These are habits that are dangerous to the character's health, wealth or life in general."
          />
          <Input
            label="Quirks"
            placeholder="Unique behaviour"
            value={tic}
            onChangeText={changeTic}
            style={{ width: "100%" }}
            multiline
            help="Certain traits or behaviour that is not prevalent among a population."
          />
          <Input
            label="Things they find boring"
            value={boringStuff}
            onChangeText={changeBoringStuff}
            style={{ width: "100%" }}
            multiline
            help="What a character finds uninteresting."
          />
          <Input
            label="Things they find annoying"
            value={annoyingStuff}
            onChangeText={changeAnnoyingStuff}
            style={{ width: "100%" }}
            multiline
            help="These are things that bothers the character a lot especially what most people wouldn't find annoying or can tolerate. This may be a no-no in a relationship."
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
        </Card>
      ) : null}
    </>
  );
};

export default Habit;
