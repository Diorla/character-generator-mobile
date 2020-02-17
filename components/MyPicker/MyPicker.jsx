import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { IconButton, Colors } from "react-native-paper";
import { Text, Picker, View, Alert } from "react-native";
//import { Test } from './Input.styles';

class MyPicker extends PureComponent {

  openHelp = () => {
    Alert.alert(this.props.label, this.props.help, [
      {
        text: "OK"
      }
    ]);
  };

  render() {
    const width = this.props.help ? "90%" : "100%";
    return (
      <View
        style={{
          backgroundColor: Colors.grey300,
          borderBottomColor: Colors.grey500,
          borderBottomWidth: 1,
          padding: 4,
          flexDirection: "row"
        }}>
        <View
          style={{
            width,
            height: 70,
          }}
        >
        <Text>{this.props.label}</Text>
        <Picker
          {...this.props}
        >
          <Picker.Item label="N/A" value="" />
          {this.props.data.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))}
        </Picker>
        </View>
        {this.props.help ? (
          <IconButton
            icon="help"
            color={Colors.red500}
            size={24}
            onPress={this.openHelp}
            style={{
              alignSelf: "center"
            }}
          />
        ) : null}
      </View>
    );
  }
}

MyPicker.propTypes = {
  data: PropTypes.array,
  help:PropTypes.string,
  label: PropTypes.string
};

MyPicker.defaultProps = {
  data: [],
  label: "label",
  help:"",
};

export default MyPicker;
