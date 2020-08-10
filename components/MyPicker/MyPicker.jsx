import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { IconButton, Colors } from "react-native-paper";
import { Text, Picker, View, Alert } from "react-native";

class MyPicker extends PureComponent {
  openHelp = () => {
    Alert.alert(this.props.label, this.props.help, [
      {
        text: "OK"
      }
    ]);
  };

  render() {
    const width = this.props.help ? "91%" : "100%";
    const nullValue = this.props.nullValue || "N/A"
    return (
      <View
        style={{
          backgroundColor: Colors.grey300,
          borderBottomColor: Colors.grey500,
          borderBottomWidth: 1,
          padding: 4,
          flexDirection: "row"
        }}
      >
        <View
          style={{
            width,
            height: 70
          }}
        >
          <Text>{this.props.label}</Text>
          <Picker {...this.props}>
            <Picker.Item label={nullValue} value="" />
            {this.props.data.map((item, index) => (
              <Picker.Item label={item} value={item} key={index} />
            ))}
          </Picker>
        </View>
        {this.props.help ? (
          <IconButton
            icon="help-circle"
            color={Colors.teal500}
            size={18}
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
  help: PropTypes.string,
  label: PropTypes.string,
  nullValue: PropTypes.string
};

MyPicker.defaultProps = {
  data: [],
  label: "label",
  help: "",
  nullValue: ""
};

export default MyPicker;
