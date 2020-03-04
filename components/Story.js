import React, { useState } from "react";
import { Card, Colors, Button } from "react-native-paper";
import Input from "./Input";
import MyPicker from "./MyPicker";

const Story = props => {
  const [display, setDisplay] = useState(false);

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
          <Input
            label="Role(Plot involvement)"
            value={role}
            onChangeText={changeRole}
            style={{ width: "100%" }}
            placeholder="Protagonist, Deuteragonist, antagonist, 
            Love interest, tertiary character, confidant, foil character"
            multiline
            help="These are the specific functions a characters plays in the story. Note, a character may play more than one role e.g. love interest and confidant. Protagonist could be a hero or antihero while an antagonist could be a villain or antivillain."
          />
          <Input
            label="Goal"
            value={goal}
            onChangeText={changeGoal}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. wants to protect Jane"
            help="What does the character wants to achieve. This is important for the protagonist and the antagonist to have. Most stories ends when the goal is achieved or irrevocably out of reach."
          />
          <Input
            label="Motivation"
            value={motivation}
            onChangeText={changeMotivation}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. He loves Jane"
            help="The reason behind each goal. This can have profound influence on how determined or how far the character is willing to go in order to achieve such goal. For example, John would be more motivated to protect Jane is she's his daughter, rather than just being a crush or girlfriend."
          />
          <Input
            label="Arc"
            value={arc}
            onChangeText={changeArc}
            style={{ width: "100%" }}
            multiline
            placeholder="Description of the events in which the character is involved."
            help="Brief description of the events in which the character takes part. It usually includes the goal, lie and truth."
          />
          <MyPicker
            data={["Dynamic", "Static"]}
            label="Type"
            selectedValue={type}
            onValueChange={changeType}
            help="Dynamic characters grow and change over the course of the story, this is a common theme in most stories. It shows growth, development and the ability to adapt. On the other hand, the biggest challenge a character might face is staying true to themselves, never changing or yielding to their environment, these are Static characters, an example is Sherlock Holmes."
          />
          <Input
            label="Back story"
            value={backStory}
            onChangeText={changeBackStory}
            style={{ width: "100%" }}
            multiline
            placeholder="Events leading to the story"
            help="Before the character graced the pages of the book, who was he or she? They may be important in understanding the motivation, goals or the behaviour of a character, or perhaps the story itself. Most importantly, it gives character depth."
          />
          <Input
            label="Describe in three words"
            value={threeDescriptionWords}
            onChangeText={changeThreeDescriptionWords}
            style={{ width: "100%" }}
            placeholder="e.g. bold, intelligent and sexy"
            help="It's the most important or noticeable features or qualities of the character. Easy to put at the back of your mind whenever you're writing a scene involving that character."
          />
          <Input
            label="The lie"
            value={lie}
            onChangeText={changeLie}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. if I work hard I'll be rich"
            help="A misconception a character, especially the protagonist has regarding their goal. For example, if I work hard, I'll become rich. This means after the character works hard, he or she is still poor.
            Realisation of a lie may lead to positve development, e.g. money is not important or my work is enough satisfaction in itself. It may also lead negative development if the character simply substituted one lie for another e.g. if hardwork doesn't do it, crime will."
          />
          <Input
            label="The truth"
            value={truth}
            onChangeText={changeTruth}
            style={{ width: "100%" }}
            multiline
            placeholder="e.g. life isn't always fair"
            help="This is not a universal fact, but a believe or idea that holds true according to your story. If a character choses to accept this truth, it leads to positive development, e.g. money is not important. 
            On the other hand, if a character rejects or doesn't realise the truth, it may lead to a negative development."
          />
          <Input
            label="Internal conflicts"
            value={internalConflict}
            multiline
            onChangeText={changeInternalConflict}
            style={{ width: "100%" }}
            help="It's an opposition or challenges the character faces, esepcially in achieving their goal. It helps shapes or motivates the actions of the character. It also creates plot
            tension that must be resolved. Internal conflict is basically internal struggle perhaps due
            to fear, love, doubt, loyalty, guilts, regrets etc. It's usually accompanied by mixed emotions and inaction or indecisiveness."
          />
          <Input
            label="External conflicts"
            value={externalConflict}
            multiline
            onChangeText={changeExternalConflict}
            style={{ width: "100%" }}
            help="It's an opposition or challenges the character faces, esepcially in achieving their goal. It helps shapes or motivates the actions of the character. It also creates plot
            tension that must be resolved. External conflict is when the challenges is from external sources like another character, nature, society, technology or even supernatural forces. For example, you character must travel from Canada to Mexico to achieve his/her goal, but it's snowing heavily and all planes to Mexico are grounded. What will he or she do?"
          />
          <Input
            label="Strength"
            value={strength}
            multiline
            onChangeText={changeStrength}
            style={{ width: "100%" }}
            help="These are attributes that will help the character achieve his/her goal or play his/her role adequately. For example, if the character is determined to win the FIFA world cup, having a beautiful singing voice is not exactly a strength.
            There must be a balance between the character strengths, flaws and difficulty of the goal(s). You don't want the ending of your book seems inevitable or cheap."
          />
          <Input
            label="Flaw"
            value={flaw}
            multiline
            onChangeText={changeFlaw}
            style={{ width: "100%" }}
            help="These are significant weak points that the opponent may explore or deter the character from achieving their goal. Note, it doesn't have to be a direct opposite of the strength but should make it harder for the character to achieve their goal."
          />
          <Input
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
