import React from 'react';

import { FAB, Colors } from 'react-native-paper';

const FAButton = props => (
  <FAB
    small={false}
    icon="dice-3"
    onPress={props.refresh}
    style={{
      position: 'absolute',
      bottom: 250,
      right: 20,
      zIndex: 10000,
      backgroundColor: Colors.red500,
    }}
    color="white"
  />
);

export default FAButton;
