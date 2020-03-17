import React from "react";
import { Image, Text } from "react-native";
import styles from "./../modules/styles";
import Layout from "./../components/Layout";
import Input from "./../components/Input";
import MyPicker from "../components/MyPicker/MyPicker";
import trait from "../data/trait"

class Help extends React.Component {
  static navigationOptions = {
    drawerLabel: "Help",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./../assets/icons/help.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };
  state = {
    number: "One"
  }
  render() {
    const { openDrawer } = this.props.navigation;
    return (
      <Layout
        drawMenu={() => openDrawer()}
        title="Help"
        subtitle="Learn how to use the app"
      >
        <Text>help is under construction.</Text>
      </Layout>
    );
  }
}

export default Help;
