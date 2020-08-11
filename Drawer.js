import React from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Colors, Divider } from "react-native-paper";

export default (props) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View
          style={{
            height: 28,
            backgroundColor: Colors.teal500,
          }}
        />

        <View
          style={{
            backgroundColor: Colors.teal500,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              height: 72,
            }}
          ></View>
          <Text
            style={{
              textAlign: "center",
              color: Colors.white,
              fontSize: 20,
            }}
          >
            Character generator
          </Text>
        </View>
        <Divider
          style={{
            marginBottom: 2,
          }}
        />
        {props.children}
      </SafeAreaView>
    </ScrollView>
  );
};
