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
        <Input
          label="Help"
          multiline
          placeholder="e.g. wants to protect Jane"
          help="My name is hello kitty"
        />
        <Input
          label="No help"
          multiline
          placeholder="e.g. wants to protect Jane"
        />
        <Text>help is under construction.</Text>
        <MyPicker help="Dynamic characters changes over the course of the story while static characters remain largely the same. Most stories involves dynamic characters as it usually denotes progress. Though it's uncommon, there are some great static characters like Sherlock Holmes." label="Picker testing"
        data={trait.resolution}
        selectedValue={this.state.number}
        onValueChange={number=>this.setState({number})}
        />
      </Layout>
    );
  }
}

export default Help;
