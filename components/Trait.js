import React, { useState } from "react";
import { View } from "react-native";
import { Card, Colors, Button } from "react-native-paper";
import Helper from "./Helper";
import MyText from "./MyText";
import MyPicker from "./MyPicker";

const Trait = (props) => {
  const [display, setDisplay] = useState(false);
  const [modalVisible, displayModal] = useState(false);

  const {
    morality,
    changeMorality,
    truthfulness,
    changeTruthfulness,
    sociability,
    changeSociability,
    approachability,
    changeApproachability,
    zeal,
    changeZeal,
    pride,
    changePride,
    riskTaking,
    changeRiskTaking,
    naivety,
    changeNaivety,
    optimism,
    changeOptimism,
    problemSolvingMethod,
    changeProblemSolvingMethod,
    intelligence,
    changeIntelligence,
    humanism,
    changeHumanism,
    sensitivity,
    changeSensitivity,
    spontaneity,
    changeSpontaneity,
    socialEngagement,
    changeSocialEngagement,
    doctrine,
    changeDoctrine,
    preoccupation,
    changePreoccupation,
    complexity,
    changeComplexity,
    submissiveness,
    changeSubmissiveness,
    bravery,
    changeBravery,
    devotion,
    changeDevotion,
    irritability,
    changeIrritability,
    resolution,
    changeResolution,
  } = props;

  const mode = display ? "contained" : "text";
  return (
    <>
      <Button
        onPress={() => setDisplay(!display)}
        mode={mode}
        color={Colors.green400}
        style={{ elevation: 0 }}
      >
        Trait
      </Button>
      {display ? (
        <Card style={{ elevation: 2, margin: 2 }}>
          <Helper
            visible={modalVisible}
            onRequestClose={() => displayModal(false)}
            helpHeader="Trait"
            closeModal={() => displayModal(false)}
            openModal={() => displayModal(true)}
            information="Attributes and personality"
            quote="A long list of human tendencies and characteristics"
          >
            <View>
              <MyText type="h3">Related/contradicting traits</MyText>
              <MyText>
                Some traits, tends to correlate with each other e.g. timid
                person(sociability) is less likely to be talkative. But then,
                s/he may be timid and taciturn in front of strangers but
                absolutely chatty among friends and close acqaintances.
              </MyText>
              <MyText></MyText>
              <MyText>
                Of course, there are some traits that may be seems contradictory
                but in the context of your story, perfectly logically. For
                example, someone who is decadent and candid will aptly desribe
                someone who partakes in a lot of immoral act but not ashamed to
                talk about it. It could also refer to a criminal who doesn't
                mince word and says what's on their mind as long as it's not the
                police.
              </MyText>
            </View>
          </Helper>
          <MyPicker
            label="Morality"
            data={[
              "Ethical",
              "Honest",
              "Decent",
              "Dishonest",
              "Decadent",
              "Depraved",
              "Evil",
            ]}
            selectedValue={morality}
            onValueChange={changeMorality}
          />
          <MyPicker
            label="Truthfulness"
            selectedValue={truthfulness}
            onValueChange={changeTruthfulness}
            data={[
              "Blunt",
              "Candid",
              "Truthful/open",
              "Selectively truthful",
              "Oblique",
              "Fibber",
              "Compulsive liar",
              "Deceptive",
              "Devious",
            ]}
          />
          <MyPicker
            label="Sociability"
            selectedValue={sociability}
            onValueChange={changeSociability}
            data={[
              "Superficial",
              "Glamorous",
              "Sociable",
              "Extrovert",
              "Charming",
              "Introvert",
              "Evasive",
              "Taciturn",
              "Timid",
              "Reclusive",
            ]}
          />
          <MyPicker
            label="Approachability"
            selectedValue={approachability}
            onValueChange={changeApproachability}
            data={[
              "Talkative",
              "Friendly",
              "Approachable",
              "Withdrawn",
              "Loner",
              "Unfriendly",
              "Cold",
              "Antisocial",
            ]}
          />
          <MyPicker
            label="Zeal"
            selectedValue={zeal}
            onValueChange={changeZeal}
            data={[
              "Pitiless",
              "Ruthless",
              "Motivated",
              "Enterprising",
              "Ambitious",
              "Indifferent",
              "Content",
              "Lazy",
              "Numb",
            ]}
          />
          <MyPicker
            label="Pride"
            selectedValue={pride}
            onValueChange={changePride}
            data={[
              "Arrogant",
              "Egotistic",
              "Brash",
              "Flamboyant",
              "Proud",
              "Confident",
              "Low key",
              "Modest",
              "Unassuming",
              "Shy",
            ]}
          />
          <MyPicker
            label="Risk taking"
            selectedValue={riskTaking}
            onValueChange={changeRiskTaking}
            data={[
              "Daring",
              "Audacious",
              "Restless",
              "Adventurous",
              "Curious",
              "Open",
              "Diffident",
              "Hesitant",
              "Cautious",
              "Reserved",
            ]}
          />
          <MyPicker
            label="Naiveté"
            selectedValue={naivety}
            onValueChange={changeNaivety}
            data={[
              "Stupid",
              "Naive",
              "Innocent",
              "Trusting",
              "Deliberate",
              "Apprehensive/suspicious",
              "Wary",
              "Distrustful",
              "Scornful",
            ]}
          />
          <MyPicker
            label="Optimism"
            selectedValue={optimism}
            onValueChange={changeOptimism}
            data={[
              "Utopian",
              "Idealistic",
              "Optimistic",
              "Pragmatic",
              "Realist",
              "Sceptic",
              "Cynic",
              "Pessimist",
            ]}
          />
          <MyPicker
            label="Problem solving method"
            selectedValue={problemSolvingMethod}
            onValueChange={changeProblemSolvingMethod}
            data={[
              "Intellectual",
              "Cerebral/academic",
              "Balanced",
              "Instinctive/intuitive",
              "Action-driven",
              "Brutish",
              "Savage",
            ]}
          />
          <MyPicker
            label="Intelligence"
            selectedValue={intelligence}
            onValueChange={changeIntelligence}
            data={[
              "Genius",
              "Intelligent/shrewd",
              "Above average",
              "Average",
              "Simple/Below average",
              "Obtuse",
              "Moron",
            ]}
          />
          <MyPicker
            label="Humanism"
            selectedValue={humanism}
            onValueChange={changeHumanism}
            data={[
              "Altruistic",
              "Selfless",
              "Considerate",
              "Humane",
              "Selfish",
              "Inconsiderate",
              "Self-centred",
            ]}
          />
          <MyPicker
            label="Sensitivity"
            selectedValue={sensitivity}
            onValueChange={changeSensitivity}
            data={[
              "Neurotic",
              "Irrational",
              "Emotional",
              "Sensitive",
              "Warm",
              "Rational and logical",
              "Lethargic",
              "Unsympathetic",
              "Apathetic",
            ]}
          />
          <MyPicker
            label="Spontaneity"
            selectedValue={spontaneity}
            onValueChange={changeSpontaneity}
            data={[
              "Rigid",
              "Methodical/organised",
              "Predictable",
              "Unpredictable",
              "Spontaneous",
              "Impulsive",
              "Irresponsible",
              "Immature",
            ]}
          />
          <MyPicker
            label="Social engagement"
            selectedValue={socialEngagement}
            onValueChange={changeSocialEngagement}
            data={[
              "Bigoted",
              "Prejudicial/chauvinistic",
              "Close-minded",
              "Conservative",
              "Conformist",
              "Flexible",
              "Open-minded",
              "Liberal",
              "Defiant/rebellious",
              "Anarchist",
            ]}
          />
          <MyPicker
            label="Doctrine or Ideology"
            selectedValue={doctrine}
            onValueChange={changeDoctrine}
            data={[
              "Loyal/faithful",
              "Steadfast",
              "Dedicated",
              "Believer",
              "Marginal",
              "Fickle",
              "Disloyal",
              "Nihilistic",
            ]}
          />
          <MyPicker
            label="Preoccupation"
            selectedValue={preoccupation}
            onValueChange={changePreoccupation}
            data={[
              "Shameless/unabashed",
              "Short-sighted",
              "Carefree",
              "Unencumbered",
              "Troubled",
              "Contrite/remorseful",
              "Far-sighted",
              "Visionary",
            ]}
          />
          <MyPicker
            label="Complexity"
            selectedValue={complexity}
            onValueChange={changeComplexity}
            data={[
              "Self-contradictory",
              "Complicated",
              "Inconsistent",
              "Complex",
              "Consistent",
              "Reliable",
              "Simple",
              "Basic/plain",
            ]}
          />
          <MyPicker
            label="Submissiveness"
            selectedValue={submissiveness}
            onValueChange={changeSubmissiveness}
            data={[
              "Subjugated",
              "Subservient",
              "Submissive",
              "Dependent",
              "Meek",
              "Passive",
              "Independent",
              "Assertive",
              "Bossy",
              "Overbearing",
              "Domineering",
              "Tyrannical",
            ]}
          />
          <MyPicker
            label="Bravery"
            selectedValue={bravery}
            onValueChange={changeBravery}
            data={[
              "Reckless",
              "Heroic",
              "Courageous",
              "Measured",
              "Fearful/nervous",
              "Faint-hearted",
              "Coward",
            ]}
          />
          <MyPicker
            label="Devotion"
            selectedValue={devotion}
            onValueChange={changeDevotion}
            data={[
              "Extremist",
              "Fanatic",
              "Dogmatic",
              "Devoted",
              "Religious",
              "Theist",
              "Animism/Pantheism",
              "Secular",
              "Agnostic",
              "Atheist",
              "Impious",
            ]}
          />
          <MyPicker
            label="Temper"
            selectedValue={irritability}
            onValueChange={changeIrritability}
            data={[
              "Ill tempered",
              "Irritable",
              "Prickly",
              "Impatient",
              "Calm",
              "Easy going",
              "Docile",
              "Impervious",
            ]}
          />
          <MyPicker
            label="Resolution"
            selectedValue={resolution}
            onValueChange={changeResolution}
            data={[
              "Obstinate",
              "Relentless",
              "Tenacious",
              "Resolute",
              "Irresolute",
              "Procrastinating",
              "Weak-kneed",
              "Indecisive",
              "Wishy-washy",
            ]}
          />
        </Card>
      ) : null}
    </>
  );
};

export default Trait;
