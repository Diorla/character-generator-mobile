import * as React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const InputRadio=(props)=> {
  const { options, value} =  props ;
  console.log(value);
  return (
    <View>
      <Text>Radio</Text>
    {
      options.map((item, index)=>{
        <RadioButton
          value={item} key={item}
          status={{item} === {value} ? 'checked' : 'unchecked'}
          onPress={(item) => { props.onPress(item) }}/>
        })
      }
    </View>
  )
}

export default InputRadio;