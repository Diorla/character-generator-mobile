import React from 'react';
import { Image, Text } from 'react-native';
import styles from './../modules/styles'
import Layout from './../components/Layout';

class Feedback extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Feedback',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./../assets/icons/feedback.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    const { openDrawer } = this.props.navigation;
    return (
      <Layout drawMenu={()=>openDrawer()} title="Feedback" subtitle="Let us know what you think">
        <Text>Feedback is under construction.</Text>
      </Layout>
    );
  }
}

export default Feedback;