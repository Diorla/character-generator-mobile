import React from 'react';
import { View, Picker, Text } from "react-native";
import PropTypes from 'prop-types';
import Styles from './MyPicker.styles';

const MyPicker = (props) => (
  <View className="MyPickerWrapper"
    style={Styles.view}>
    <Text>{props.title}</Text>
    <Picker
      selectedValue={props.selectedValue}
      style={{ height: 50, width: '100%' }}
      onValueChange={props.onValueChange}>
      <Picker.Item label="N/A" value="" />
      {
        props.data.map((item, index)=> 
          <Picker.Item label={item} value= {item} key={index}/>)
      }
    </Picker>
  </View>
);

MyPicker.propTypes = {
  title: PropTypes.string,
  selectedValue: PropTypes.string,
  onValueChange: PropTypes.func,
  data: PropTypes.array,
};

MyPicker.defaultProps = {
  title: "Untitled",
  selectedValue: "",
  onValueChange: null,
  data: []
};

export default MyPicker;
