import React from 'react';
import { Image, Text } from 'react-native';
import styles from './../modules/styles'
import Layout from './../components/Layout';

class Profile extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./../assets/icons/profile.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    const { openDrawer } = this.props.navigation;
    return (
      <Layout drawMenu={()=>openDrawer()} title="Profile" subtitle="Basic information about yourself">
        <Text>Profile is under construction.</Text>
      </Layout>
    );
  }
}

export default Profile;