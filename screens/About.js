import React from "react";
import { Image, View, Text, ScrollView, Share, Button } from "react-native";
import styles from "../modules/styles";
import Layout from "../components/Layout";
import Link from "../components/Link";
import MyText from "../components/MyText";

const Line = ({ children }) => (
  <View
    style={{
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: 8,
    }}
  >
    {children}
  </View>
);
class About extends React.Component {
  static navigationOptions = {
    drawerLabel: "About",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./../assets/icons/story.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    const { openDrawer } = this.props.navigation;
    const onShare = async () => {
      try {
        await Share.share({
          message:
            "I love this app, it allows me to generate random data for a fictional character. Click here to download https://drive.google.com/file/d/1O_F9xEqDOe3QAX_NepnxXZyUs2DwdNt4/view?usp=sharing",
        });
      } catch (err) {
        console.log("Error sharing data:", err);
      }
    };
    return (
      <Layout
        drawMenu={() => openDrawer()}
        title="About"
        subtitle="Learn more about the app"
      >
        <ScrollView style={{ padding: 8 }}>
          <Line>
            <MyText type="h2">Credits</MyText>
          </Line>
          <Line>
            <Text>This app is made with ❤ and </Text>
            <Link href="https://expo.io/" title="React-native + Expo" />
            <Text> by </Text>
            <Link href="https://github.com/Diorla" title="Ade Adeola" />
          </Line>
          <Line>
            <Text>You can check out the </Text>
            <Link
              href="https://github.com/Diorla/character-generator"
              title="repository"
            />
            <Text style={{ flexWrap: "wrap" }}>
              {" "}
              in case you are interested in the project
            </Text>
          </Line>
          <Line>
            <Text>Icon and images are sourced from here: </Text>
            <Link href="http://www.ohmyicons.com/" title="app logo" />
            <Text>, </Text>
            <Link href="http://handdrawngoods.com/" title="splash icon" />
            <Text> and </Text>
            <Link href="http://icons8.com/" title="app icon" />
          </Line>
          <Button title="Share App" onPress={onShare} />
        </ScrollView>
      </Layout>
    );
  }
}

export default About;
