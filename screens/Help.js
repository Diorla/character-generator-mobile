import React from "react";
import { Image, ScrollView, View } from "react-native";
import styles from "./../modules/styles";
import Layout from "./../components/Layout";
import MyText from "../components/MyText";

class Help extends React.Component {
  static navigationOptions = {
    drawerLabel: "Help",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./../assets/icons/help.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    const { openDrawer } = this.props.navigation;
    return (
      <Layout
        drawMenu={() => openDrawer()}
        title="Help"
        subtitle="Learn how to use the app"
      >
        <View style={{ flex: 1, padding: 4 }}>
          <ScrollView
            style={{ height: "auto" }}
            contentContainerStyle={{ flex: 1 }}
          >
            <MyText type="h3">Autogenerating data</MyText>
            <MyText>
              Some of the data are generated randomly e.g. skin colour or based
              on global percentage e.g. nationality. Some data are dependent on
              other values generated in the app e.g. current location is greatly
              influenced by place of birth
            </MyText>
            <MyText type="strong">Random</MyText>
            <MyText>
              Birtday, Gender, Height, Skin tone, Face, Distinguishing features,
              Preferred outfit, Accessories, Grooming, Handwriting, Gait &
              Posture, Childhood, Favourite activities and Mannerisms
            </MyText>
            <MyText type="strong">Based on global percentage</MyText>
            <MyText>Age, Blood group, Place of birth and Phobias </MyText>
            <MyText type="strong">Based on other data</MyText>
            <MyText>
              Name, Current location, Education, Occupation, Social status,
              Build, Hair, Eye, Health, Family economic status and Hometown
            </MyText>
            <MyText type="h3">Traits</MyText>
            <MyText>A long list of human tendencies and characteristics</MyText>
            <MyText type="strong">Related/contradicting traits</MyText>
            <MyText>
              Some traits, tends to correlate with each other e.g. timid
              person(sociability) is less likely to be talkative. But then, s/he
              may be timid and taciturn in front of strangers but absolutely
              chatty among friends and close acqaintances.
            </MyText>
            <MyText>
              Of course, there are some traits that may be seems contradictory
              but in the context of your story, perfectly logically. For
              example, someone who is decadent and candid will aptly desribe
              someone who partakes in a lot of immoral act but not ashamed to
              talk about it. It could also refer to a criminal who doesn't mince
              word and says what's on their mind as long as it's not the police.
            </MyText>
          </ScrollView>
        </View>
      </Layout>
    );
  }
}

export default Help;
