import React from 'react';

import { Appbar } from 'react-native-paper';

const TopBar = props => (
  <Appbar.Header style={{ backgroundColor: 'teal' }}>
    <Appbar.Action onPress={props.drawMenu} icon="menu" />
    <Appbar.Content title={props.title} subtitle={props.subtitle} />
    {props.reset ? (
      <Appbar.Action onPress={props.reset} icon="autorenew" />
    ) : null}
  </Appbar.Header>
);

export default TopBar;
