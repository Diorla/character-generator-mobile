import React from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Colors, Avatar, Divider } from "react-native-paper";
import { connect } from "react-redux";

const Drawer = props => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View
          style={{
            height: 28,
            backgroundColor: Colors.teal500
          }}
        />
        {props.user.name ? (
          <View
            style={{
              backgroundColor: Colors.teal500
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20
              }}
            >
              <Avatar.Image
                size={72}
                source={props.user.img}
                style={{
                  backgroundColor: Colors.teal500
                }}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                color: Colors.white
              }}
            >
              {props.user.name}
            </Text>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: Colors.teal500
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                height: 72
              }}
            ></View>
            <Text
              style={{
                textAlign: "center",
                color: Colors.white,
                fontSize: 20
              }}
            >
              Character generator
            </Text>
          </View>
        )}
        <Divider
          style={{
            marginBottom: 2
          }}
        />
        {props.children}
      </SafeAreaView>
    </ScrollView>
  );
};

const appState = state => ({
  user: state.user
});
export default connect(appState)(Drawer);
