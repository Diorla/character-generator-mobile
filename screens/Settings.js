import React from 'react';
import { Image, Text } from 'react-native';
import styles from './../modules/styles'
import Layout from './../components/Layout';

class Settings extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./../assets/icons/settings.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    const { openDrawer } = this.props.navigation;
    return (
      <Layout drawMenu={()=>openDrawer()} title="Settings" subtitle="Make adjustment that suits you">
        <Text>Settings is under construction.</Text>
      </Layout>
    );
  }
}

export default Settings;