import React from "react";
import { Image, Text } from "react-native";
import styles from "../modules/styles";
import Layout from "../components/Layout";

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
    return (
      <Layout
        drawMenu={() => openDrawer()}
        title="About"
        subtitle="Meet the developer"
      >
        <Text>About is under construction.</Text>
      </Layout>
    );
  }
}

export default About;
