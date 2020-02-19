import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TextInput, IconButton, Colors } from "react-native-paper";
import { View, Alert } from "react-native";
//import { Test } from './Input.styles';

class Input extends PureComponent {
  
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
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-around",
          backgroundColor: Colors.grey300,
          borderBottomColor: Colors.grey500,
          borderBottomWidth: 1,
        }}
      >
        <TextInput
          {...this.props}
          style={{
            width,
            borderBottomWidth: 0,
          }}
        />
        {this.props.help ? (
          <IconButton
            icon="help"
            color={Colors.red500}
            size={16}
            onPress={this.openHelp}
            style={{
              alignSelf: "center",
            }}
          />
        ) : null}
      </View>
    );
  }
}

Input.propTypes = {
  help: PropTypes.string,
};

Input.defaultProps = {
  help: "",
};

export default Input;
