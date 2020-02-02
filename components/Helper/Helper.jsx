import React from "react";
import PropTypes from "prop-types";
//import { Test } from './Helper.styles';

import { Text, View, Modal, ScrollView } from "react-native";
import { Colors, Button, IconButton } from "react-native-paper";

const Helper = props => (
  <>
    <View>
      <Modal
        animationType="slide"
        visible={props.visible}
        onRequestClose={props.onRequestClose}
      >
        <ScrollView>
          <View
          style={{
            justifyContent: "space-between",
            flex: 1
          }}>
            <Text
              style={{
                textAlign: "center",
                padding: 8,
                fontSize: 24,
                fontWeight: "bold"
              }}
            >
              {props.helpHeader}
            </Text>
            <View
              style={{
                margin: 4,
                padding: 4
              }}
            >
              <View
                style={{
                  borderLeftColor: "teal",
                  borderLeftWidth: 2,
                  padding: 4,
                  marginBottom: 4,
                  backgroundColor: "rgba(100, 120, 140, 0.1)",
                }}
              >
                <Text
                  style={{
                    fontStyle: "italic"
                  }}
                >
                  {props.quote}
                </Text>
              </View>
              {props.children}
            </View>
          </View>
          <Button onPress={props.closeModal}>Close</Button>
        </ScrollView>
      </Modal>
    </View>

    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 4
      }}
    >
      <Text>{props.information}</Text>
      <IconButton
        icon="help"
        color={Colors.red500}
        size={20}
        onPress={props.openModal}
      />
    </View>
  </>
);

Helper.propTypes = {
  visible: PropTypes.bool,
  onRequestClose: PropTypes.func,
  helpHeader: PropTypes.string,
  children: PropTypes.element,
  closeModal: PropTypes.func,
  information: PropTypes.string,
  openModal: PropTypes.func,
  quote: PropTypes.string,
};

Helper.defaultProps = {
  visible: false,
  onRequestClose: null,
  helpHeader: "Header",
  children: <Text>This is children</Text>,
  closeModal: null,
  information: "This is basic information",
  openModal: null,
  quote: "",
};

export default Helper;
