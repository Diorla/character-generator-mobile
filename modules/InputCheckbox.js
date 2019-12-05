import React from 'react';
import { Text, View } from 'react-native';
import { Checkbox, TouchableRipple } from 'react-native-paper';


const inputCheckbox =(props)=> {
  const { isActive, label } = props;
  return(
    <TouchableRipple
      onPress={props.onPress}
      rippleColor="rgba(0, 0, 0, .32)">
      <View  style={{flexDirection: "row", alignItems: "center"}}>
        <Text>{label}</Text>
        <Checkbox
          status={isActive ? "checked": "unchecked"} />
      </View>
    </TouchableRipple>
  )
}

export default inputCheckbox;