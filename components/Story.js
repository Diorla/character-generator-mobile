import React, { useState } from "react";
import { Text, Picker, View } from "react-native";
import { TextInput, Card, Colors, Button } from "react-native-paper";
import Helper from "./Helper";
import MyText from "./MyText";
//Perhaps, I should move phobias and hobbies to habit or background
//And move regret and big secret to story
const Story = props => {
  const [display, setDisplay] = useState(false);
  const [modalVisible, displayModal] = useState(false);

  const {
    role,
    changeRole,
    goal,
    changeGoal,
    motivation,
    changeMotivation,
    arc,
    changeArc,
    type,
    changeType,
    backStory,
    changeBackStory,
    threeDescriptionWords,
    changeThreeDescriptionWords,
    lie,
    changeLie,
    truth,
    changeTruth,
    internalConflict,
    changeInternalConflict,
    externalConflict,
    changeExternalConflict,
    strength,
    changeStrength,
    flaw,
    changeFlaw,
    hobby,
    changeHobby,
    phobia,
    changePhobia,
    story,
    changeStory
  } = props;

  const mode = display ? "contained" : "text";
  return (
    <>
      <Button
        onPress={() => setDisplay(!display)}
        mode={mode}
        color={Colors.blue500}
        style={{ elevation: 0 }}
      >
        Story
      </Button>

      {display ? (
        <Card style={{ elevation: 2, margin: 2 }}>
          <Helper
            visible={modalVisible}
            onRequestClose={() => displayModal(false)}
            helpHeader="Bio-data"
            closeModal={() => displayModal(false)}
            openModal={() => displayModal(true)}
            information="The narration"
            quote="Shows how character will interact with other characters in the book"
          >
            <View>
              <MyText type="h3">Auto generated data</MyText>
              <MyText type="strong">None!</MyText>
              <MyText>It's your story, not mine.</MyText>
              <MyText type="h3">Concept</MyText>
              <MyText type="ul">
                <MyText type="h4">Role</MyText>
                <MyText>
                  These are the specific functions a characters plays in the
                  story. These includes Protagonist(hero and antihero),
                  Antagonist(villain or antivillain), Mentor,
                  Deuteragonist/Sidekick, Love interest, Confidant, Foil or
                  Tertiary character. Note, a character may play more than one
                  role .e.g confidant and love interest.
                </MyText>
                <MyText type="h4">Goal</MyText>
                <MyText>
                  What does the character wants to achieve. This is important
                  for the protagonist and the antagonist to have. For example,
                  John wants to save Jane. Most stories ends when the goal is
                  achieved or irrevocably out of grasp.
                </MyText>
                <MyText type="h4">Motivation</MyText>
                <MyText>
                  The reason behind each goal. This can have profound influence
                  on how determined or how far the character is willing to go in
                  order to achieve such goal. For example, John wants to save
                  Jane because she's his daughter vs John has a crush on Jane
                </MyText>
                <MyText type="h4">Arc</MyText>
                <MyText>
                  Brief description of the events in which the character takes part. It usually includes the goal, lie and truth.
                </MyText>
                <MyText type="h4">Type</MyText>
                <MyText>
                  Some character grows and change over the course of the story,
                  this is a common theme in most stories as it shows growth and
                  development; these are dynamic characters. Others are
                  resistance to change, still the same from the very first
                  introduction till the end; these are static characters, e.g.
                  Sherlock Holmes.
                </MyText>
                <MyText type="h4">Backstory</MyText>
                <MyText>
                  Before the character graced the pages of the book, who was
                  s/he? They may be important in understanding the motivation,
                  goals or behaviour of a character, or perhaps the story
                  itself. Most importantly, it gives character depth.
                </MyText>
                <MyText type="h4">Describe in 3 words</MyText>
                <MyText>
                  It's the most important/noticeable features of the character.
                  Easy to put in the back of your mind whenever you're writing a
                  scene involving that character.
                </MyText>
                <MyText type="h4">The lie</MyText>
                <MyText>
                  A misconception a character has(especially the protagonist), regarding their goal that is not true. For example, if I work hard, I'll be rich and then happy. Which means after this character worked hard, s/he is still poor. Realisation of a lie may lead to positive development(Perhaps, I don't need money to be happy, my job, my life etc is a source of happiness) or negative development if they simply substituted one lie for another.(If hardwork doesn't do it, crime will.)
                </MyText>
                <MyText type="h4">The truth</MyText>
                <MyText>
                  This is not a universal fact, but a believe or idea that holds true according to your story. If a character choses to accept this truth, it leads to positive development, as shown above(I don't need money to be happy).
                  On the other hand, if a character rejects or doesn't realise the truth, it will lead to a negative development.
                </MyText>
                <MyText type="h4">Conflicts</MyText>
                <MyText>
                  It's an opposition or challenges the character faces, esepcially in achieving their goal. It helps shapes or motivates the actions of the character. It also creates plot tension that most be resolved. External conflict is when the challenges is from external sources like another character, nature, society, technology or even supernatural forces. For example, you character must travel from Canada to Mexico to achieve his/her goal, but it's snowing heavily, so no plane is leaving for Mexico, what will s/he?
                  Internal conflict is basically internal struggle perhaps due to fear, love, doubt, loyalty, guilts, regrets etc. It's usually accompanied by mixed emotions and inaction/indecisiveness. 
                </MyText>
                <MyText type="h4">Strengths</MyText>
                <MyText>
                  This specifically relates the role and goal of the charater in this story. Attributes that will help the character. For example, if your character is determined to win the FIFA world cup, his/her beautiful singing voice is not exactly a strength, just another attributes.
                  Note, a character strength should be sufficient enough to achieve a goal, but no too much, so that success won't appear inevitable.
                </MyText>
                <MyText type="h4">Flaws</MyText>
                <MyText>
                  These are significant weak points that the opponent may explore or deter the character from achieving their goal.
                  Note, it doesn't have to be a opposite of the strength e.g. Jane has the most beautiful voice in the singing contest, but if she eats avocado, she loses her voice for 10 minutes vs she's timid and sometimes appear cold or distant, which won't help win votes.
                </MyText>
              </MyText>
            </View>
          </Helper>
          <TextInput
            label="Role"
            value={role}
            onChangeText={changeRole}
            style={{ width: "100%" }}
            placeholder="Protagonist, Deuteragonist, antagonist, 
            Love interest, tertiary character, confidant, foil character"
            multiline
          />
          <TextInput
            label="Goal"
            value={goal}
            onChangeText={changeGoal}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. wants to protect Jane"
          />
          <TextInput
            label="Motivation"
            value={motivation}
            onChangeText={changeMotivation}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. He loves Jane"
          />
          <TextInput
            label="Arc"
            value={arc}
            onChangeText={changeArc}
            style={{ width: "100%" }}
            multiline
            placeholder="Description of the events the character is involved in"
          />
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Type</Text>
            <Picker
              selectedValue={type}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeType}
            >
              <Picker.Item label="None" value="none" />
              <Picker.Item label="Dynamic" value="male" />
              <Picker.Item label="Static" value="female" />
            </Picker>
          </View>
          <TextInput
            label="Back story"
            value={backStory}
            onChangeText={changeBackStory}
            style={{ width: "100%" }}
            multiline
            placeholder="Events leading to the story"
          />
          <TextInput
            label="Describe in three words"
            value={threeDescriptionWords}
            onChangeText={changeThreeDescriptionWords}
            style={{ width: "100%" }}
            placeholder="e.g. bold, intelligent and sexy"
          />
          <TextInput
            label="The lie"
            value={lie}
            onChangeText={changeLie}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. if I work hard I'll be rich"
          />
          <TextInput
            label="The truth"
            value={truth}
            onChangeText={changeTruth}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. life isn't always fair"
          />
          <TextInput
            label="Internal conflicts"
            value={internalConflict}
            multiline
            onChangeText={changeInternalConflict}
            style={{ width: "100%" }}
          />
          <TextInput
            label="External conflicts"
            value={externalConflict}
            multiline
            onChangeText={changeExternalConflict}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Strength"
            value={strength}
            multiline
            onChangeText={changeStrength}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Flaw"
            value={flaw}
            multiline
            onChangeText={changeFlaw}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Hobbies"
            value={hobby}
            multiline
            onChangeText={changeHobby}
            style={{ width: "100%" }}
          />
          <TextInput
            label="Phobias"
            value={phobia}
            multiline
            onChangeText={changePhobia}
            style={{ width: "100%" }}
          />
          <TextInput
            label="More"
            multiline
            value={story}
            onChangeText={changeStory}
            style={{ width: "100%" }}
          />
        </Card>
      ) : null}
    </>
  );
};

export default Story;
