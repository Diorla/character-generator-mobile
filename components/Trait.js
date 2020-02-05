import React, { useState } from "react";
import { Text, Picker, View } from "react-native";
import { Card, Colors, Button } from "react-native-paper";
import Helper from "./Helper";

const Trait = props => {
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
    changeResolution
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
            helpHeader="Physical Attributes"
            closeModal={() => displayModal(false)}
            openModal={() => displayModal(true)}
            information="This is basic information about"
          >
            <Text>This is help</Text>
          </Helper>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Morality</Text>
            <Picker
              selectedValue={morality}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeMorality}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Noble" value="Noble" />
              <Picker.Item label="Righteous" value="Righteous" />
              <Picker.Item label="Principled" value="Principled" />
              <Picker.Item label="Honourable" value="Honourable" />
              <Picker.Item label="Ethical" value="Ethical" />
              <Picker.Item label="Honest" value="Honest" />
              <Picker.Item label="Decent" value="Decent" />
              <Picker.Item label="Candid" value="Candid" />
              <Picker.Item label="Blunt" value="Blunt" />
              <Picker.Item label="Oblique" value="Oblique" />
              <Picker.Item label="Fibber" value="Fibber" />
              <Picker.Item label="Dishonest" value="Dishonest" />
              <Picker.Item label="Compulsive liar" value="Compulsive liar" />
              <Picker.Item label="Decadent" value="Decadent" />
              <Picker.Item label="Deceptive" value="Deceptive" />
              <Picker.Item label="Devious" value="Devious" />
              <Picker.Item label="Depraved" value="Depraved" />
              <Picker.Item label="Evil" value="Evil" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Sociability</Text>
            <Picker
              selectedValue={sociability}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeSociability}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Superficial" value="Superficial" />
              <Picker.Item label="Glamorous" value="Glamorous" />
              <Picker.Item label="Sociable" value="Sociable" />
              <Picker.Item label="Extrovert" value="Extrovert" />
              <Picker.Item label="Charming" value="Charming" />
              <Picker.Item label="Introvert" value="Introvert" />
              <Picker.Item label="Evasive" value="Evasive" />
              <Picker.Item label="Taciturn" value="Taciturn" />
              <Picker.Item label="Timid" value="Timid" />
              <Picker.Item label="Reclusive" value="Reclusive" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Approachability</Text>
            <Picker
              selectedValue={approachability}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeApproachability}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Talkative" value="Talkative" />
              <Picker.Item label="Friendly" value="Friendly" />
              <Picker.Item label="Approachable" value="Approachable" />
              <Picker.Item label="Withdrawn" value="Withdrawn" />
              <Picker.Item label="Loner" value="Loner" />
              <Picker.Item label="Unfriendly" value="Unfriendly" />
              <Picker.Item label="Cold" value="Cold" />
              <Picker.Item label="Antisocial" value="Antisocial" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Zeal</Text>
            <Picker
              selectedValue={zeal}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeZeal}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Pitiless" value="Pitiless" />
              <Picker.Item label="Ruthless" value="Ruthless" />
              <Picker.Item label="Motivated" value="Motivated" />
              <Picker.Item label="Enterprising" value="Enterprising" />
              <Picker.Item label="Ambitious" value="Ambitious" />
              <Picker.Item label="Indifferent" value="Indifferent" />
              <Picker.Item label="Content" value="Content" />
              <Picker.Item label="Lazy" value="Lazy" />
              <Picker.Item label="Numb" value="Numb" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Pride</Text>
            <Picker
              selectedValue={pride}
              style={{ height: 50, width: "100%" }}
              onValueChange={changePride}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Arrogant" value="Arrogant" />
              <Picker.Item label="Egotistic" value="Egotistic" />
              <Picker.Item label="Brash" value="Brash" />
              <Picker.Item label="Flamboyant" value="Flamboyant" />
              <Picker.Item label="Proud" value="Proud" />
              <Picker.Item label="Confident" value="Confident" />
              <Picker.Item label="Low key" value="Low key" />
              <Picker.Item label="Modest" value="Modest" />
              <Picker.Item label="Unassuming" value="Unassuming" />
              <Picker.Item label="Shy" value="Shy" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Risk taking</Text>
            <Picker
              selectedValue={riskTaking}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeRiskTaking}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Daring" value="Daring" />
              <Picker.Item label="Adventurous" value="Adventurous" />
              <Picker.Item label="Restless" value="Restless" />
              <Picker.Item label="Audacious" value="Audacious" />
              <Picker.Item label="Curious" value="Curious" />
              <Picker.Item label="Open" value="Open" />
              <Picker.Item label="Diffident" value="Diffident" />
              <Picker.Item label="Hesitant" value="Hesitant" />
              <Picker.Item label="Cautious" value="Cautious" />
              <Picker.Item label="Reserved" value="Reserved" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Naivety</Text>
            <Picker
              selectedValue={naivety}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeNaivety}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Stupid" value="Stupid" />
              <Picker.Item label="Naive" value="Naive" />
              <Picker.Item label="Innocent" value="Innocent" />
              <Picker.Item label="Trusting" value="Trusting" />
              <Picker.Item label="Deliberate" value="Deliberate" />
              <Picker.Item
                label="Apprehensive/suspicious"
                value="Apprehensive/suspicious"
              />
              <Picker.Item label="Wary" value="Wary" />
              <Picker.Item label="Distrustful" value="Distrustful" />
              <Picker.Item label="Scornful" value="Scornful" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Optimism</Text>
            <Picker
              selectedValue={optimism}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeOptimism}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Utopian" value="Utopian" />
              <Picker.Item label="Idealistic" value="Idealistic" />
              <Picker.Item label="Optimistic" value="Optimistic" />
              <Picker.Item label="Pragmatic" value="Pragmatic" />
              <Picker.Item label="Realist" value="Realist" />
              <Picker.Item label="Sceptic" value="Sceptic" />
              <Picker.Item label="Cynic" value="Cynic" />
              <Picker.Item label="Pessimist" value="Pessimist" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Problem solving method</Text>
            <Picker
              selectedValue={problemSolvingMethod}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeProblemSolvingMethod}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Intellectual" value="Intellectual" />
              <Picker.Item
                label="Cerebral/academic"
                value="Cerebral/academic"
              />
              <Picker.Item label="Balanced" value="Balanced" />
              <Picker.Item
                label="Instinctive/intuitive"
                value="Instinctive/intuitive"
              />
              <Picker.Item label="Action-driven" value="Action-driven" />
              <Picker.Item label="Brutish" value="Brutish" />
              <Picker.Item label="Savage" value="Savage" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Intelligence</Text>
            <Picker
              selectedValue={intelligence}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeIntelligence}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Genius" value="Genius" />
              <Picker.Item
                label="Intelligent/shrewd"
                value="Intelligent/shrewd"
              />
              <Picker.Item label="Above average" value="Above average" />
              <Picker.Item label="Average" value="Average" />
              <Picker.Item
                label="Simple/Below average"
                value="Simple/Below average"
              />
              <Picker.Item label="Obtuse" value="Obtuse" />
              <Picker.Item label="Moron" value="Moron" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Humanism</Text>
            <Picker
              selectedValue={humanism}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeHumanism}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Altruistic" value="Altruistic" />
              <Picker.Item label="Selfless" value="Selfless" />
              <Picker.Item label="Considerate" value="Considerate" />
              <Picker.Item label="Humane" value="Humane" />
              <Picker.Item label="Selfish" value="Selfish" />
              <Picker.Item label="Inconsiderate" value="Inconsiderate" />
              <Picker.Item label="Self-centred" value="Self-centred" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Sensitivity</Text>
            <Picker
              selectedValue={sensitivity}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeSensitivity}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Neurotic" value="Neurotic" />
              <Picker.Item label="Irrational" value="Irrational" />
              <Picker.Item label="Emotional" value="Emotional" />
              <Picker.Item label="Sensitive" value="Sensitive" />
              <Picker.Item label="Warm" value="Warm" />
              <Picker.Item
                label="Rational and logical"
                value="Rational and logical"
              />
              <Picker.Item label="Lethargic" value="Lethargic" />
              <Picker.Item label="Unsympathetic" value="Unsympathetic" />
              <Picker.Item label="Apathetic" value="Apathetic" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Spontaneity</Text>
            <Picker
              selectedValue={spontaneity}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeSpontaneity}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Rigid" value="Rigid" />
              <Picker.Item
                label="Methodical/organised"
                value="Methodical/organised"
              />
              <Picker.Item label="Predictable" value="Predictable" />
              <Picker.Item label="Unpredictable" value="Unpredictable" />
              <Picker.Item label="Spontaneous" value="Spontaneous" />
              <Picker.Item label="Impulsive" value="Impulsive" />
              <Picker.Item label="Irresponsible" value="Irresponsible" />
              <Picker.Item label="Immature" value="Immature" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Social engagement</Text>
            <Picker
              selectedValue={socialEngagement}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeSocialEngagement}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Bigoted" value="Bigoted" />
              <Picker.Item
                label="Prejudicial/chauvinistic"
                value="Prejudicial/chauvinistic"
              />
              <Picker.Item label="Close-minded" value="Close-minded" />
              <Picker.Item label="Conservative" value="Conservative" />
              <Picker.Item label="Conformist" value="Conformist" />
              <Picker.Item label="Flexible" value="Flexible" />
              <Picker.Item label="Open-minded" value="Open-minded" />
              <Picker.Item label="Liberal" value="Liberal" />
              <Picker.Item
                label="Defiant/rebellious"
                value="Defiant/rebellious"
              />
              <Picker.Item label="Anarchist" value="Anarchist" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Doctrine or Ideology</Text>
            <Picker
              selectedValue={doctrine}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeDoctrine}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Loyal/faithful" value="Loyal/faithful" />
              <Picker.Item label="Steadfast" value="Steadfast" />
              <Picker.Item label="Dedicated" value="Dedicated" />
              <Picker.Item label="Believer" value="Believer" />
              <Picker.Item label="Marginal" value="Marginal" />
              <Picker.Item label="Fickle" value="Fickle" />
              <Picker.Item label="Disloyal" value="Disloyal" />
              <Picker.Item label="Nihilistic" value="Nihilistic" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Preoccupation</Text>
            <Picker
              selectedValue={preoccupation}
              style={{ height: 50, width: "100%" }}
              onValueChange={changePreoccupation}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item
                label="Shameless/unabashed"
                value="Shameless/unabashed"
              />
              <Picker.Item label="Short-sighted" value="Short-sighted" />
              <Picker.Item label="Carefree" value="Carefree" />
              <Picker.Item label="Unencumbered" value="Unencumbered" />
              <Picker.Item label="Troubled" value="Troubled" />
              <Picker.Item
                label="Contrite/remorseful/apologetic"
                value="Contrite/remorseful/apologetic"
              />
              <Picker.Item label="Far-sighted" value="Far-sighted" />
              <Picker.Item label="Visionary" value="Visionary" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Complexity</Text>
            <Picker
              selectedValue={complexity}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeComplexity}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item
                label="Self-contradictory"
                value="Self-contradictory"
              />
              <Picker.Item label="Complicated" value="Complicated" />
              <Picker.Item label="Inconsistent" value="Inconsistent" />
              <Picker.Item label="Complex" value="Complex" />
              <Picker.Item label="Consistent" value="Consistent" />
              <Picker.Item label="Reliable" value="Reliable" />
              <Picker.Item label="Simple" value="Simple" />
              <Picker.Item label="Basic/plain" value="Basic/plain" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Submissiveness</Text>
            <Picker
              selectedValue={submissiveness}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeSubmissiveness}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Subjugated" value="Subjugated" />
              <Picker.Item label="Subservient" value="Subservient" />
              <Picker.Item label="Submissive" value="Submissive" />
              <Picker.Item label="Dependent" value="Dependent" />
              <Picker.Item label="Meek" value="Meek" />
              <Picker.Item label="Passive" value="Passive" />
              <Picker.Item label="Independent" value="Independent" />
              <Picker.Item label="Assertive" value="Assertive" />
              <Picker.Item label="Bossy" value="Bossy" />
              <Picker.Item label="Overbearing" value="Overbearing" />
              <Picker.Item label="Domineering" value="Domineering" />
              <Picker.Item label="Tyrannical" value="Tyrannical" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Bravery</Text>
            <Picker
              selectedValue={bravery}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeBravery}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Reckless" value="Reckless" />
              <Picker.Item label="Heroic" value="Heroic" />
              <Picker.Item label="Courageous" value="Courageous" />
              <Picker.Item label="Measured" value="Measured" />
              <Picker.Item label="Fearful/nervous" value="Fearful/nervous" />
              <Picker.Item label="Faint-hearted" value="Faint-hearted" />
              <Picker.Item label="Coward" value="Coward" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Devotion</Text>
            <Picker
              selectedValue={devotion}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeDevotion}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Extremist" value="Extremist" />
              <Picker.Item label="Fanatic" value="Fanatic" />
              <Picker.Item label="Dogmatic" value="Dogmatic" />
              <Picker.Item label="Devoted" value="Devoted" />
              <Picker.Item label="Religious" value="Religious" />
              <Picker.Item label="Theist" value="Theist" />
              <Picker.Item
                label="Animism/Pantheism"
                value="Animism/Pantheism"
              />
              <Picker.Item label="Secular" value="Secular" />
              <Picker.Item label="Agnostic" value="Agnostic" />
              <Picker.Item label="Atheist" value="Atheist" />
              <Picker.Item label="Impious" value="Impious" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Temper</Text>
            <Picker
              selectedValue={irritability}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeIrritability}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Ill tempered" value="Ill tempered" />
              <Picker.Item label="Irritable" value="Irritable" />
              <Picker.Item label="Prickly" value="Prickly" />
              <Picker.Item label="Impatient" value="Impatient" />
              <Picker.Item label="Calm" value="Calm" />
              <Picker.Item label="Easy going" value="Easy going" />
              <Picker.Item label="Docile" value="Docile" />
              <Picker.Item label="Impervious" value="Impervious" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: Colors.grey300,
              borderBottomColor: Colors.grey500,
              borderBottomWidth: 1,
              padding: 4
            }}
          >
            <Text>Resolution</Text>
            <Picker
              selectedValue={resolution}
              style={{ height: 50, width: "100%" }}
              onValueChange={changeResolution}
            >
              <Picker.Item label="N/A" value="" />
              <Picker.Item label="Obstinate" value="Obstinate" />
              <Picker.Item label="Relentless" value="Relentless" />
              <Picker.Item label="Tenacious" value="Tenacious" />
              <Picker.Item label="Resolute" value="Resolute" />
              <Picker.Item label="Irresolute" value="Irresolute" />
              <Picker.Item label="Procrastinating" value="Procrastinating" />
              <Picker.Item label="Weak-kneed" value="Weak-kneed" />
              <Picker.Item label="Indecisive" value="Indecisive" />
              <Picker.Item label="Wishy-washy" value="Wishy-washy" />
            </Picker>
          </View>
        </Card>
      ) : null}
    </>
  );
};

export default Trait;
