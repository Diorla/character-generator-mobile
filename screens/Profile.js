import React from "react";
import { connect } from 'react-redux';
import { Image, Text } from "react-native";
import styles from "./../modules/styles";
import Layout from "./../components/Layout";
// import store from "./../store";

class Profile extends React.Component {
  static navigationOptions = {
    drawerLabel: "Profile",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./../assets/icons/profile.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  // state = {
  //   user: store.getState().user
  // };

  render() {
    const { openDrawer } = this.props.navigation;
    console.log(this.state.user);
    return (
      <Layout
        drawMenu={() => openDrawer()}
        title="Profile"
        subtitle="Basic information about yourself"
      >
        <Text>Profile is under construction.</Text>
      </Layout>
    );
  }
}


const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
