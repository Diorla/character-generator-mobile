import React from 'react';
import { Image, Text, Button } from 'react-native';
import { styles } from './../modules'
import Layout from './../components/Layout';

class Story extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Story',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./../assets/icons/story.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    const { openDrawer } = this.props.navigation;
    return (
      <Layout drawMenu={()=>openDrawer()} title="Story" subtitle="Create the settings for your book">
        <Text>Story is under construction.</Text>
      </Layout>
    );
  }
}

export default Story;