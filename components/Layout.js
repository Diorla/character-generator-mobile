import React from 'react';
import { View } from 'react-native';
import { Surface } from 'react-native-paper';
import TopBar from './TopBar';

const Layout = props => (
  <Surface>
    <TopBar
      title={props.title}
      subtitle={props.subtitle}
      drawMenu={props.drawMenu}
      {...props}
    />
    <View style={{ minHeight: '100%', backgroundColor: 'cornsilk' }}>
      {props.children}
    </View>
  </Surface>
);
//transfer-up

export default Layout;