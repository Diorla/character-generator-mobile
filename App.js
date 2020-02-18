import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Character, Story, Feedback, Help, Profile, Settings } from "./screens";
import { Colors, Avatar, Divider, TouchableRipple } from "react-native-paper";

const user = {
  name: "Ade Adeola",
  img: require("./assets/user.png")
};

const DefaultDrawer = props => (
  <ScrollView>
    <SafeAreaView>
      <View
        style={{
          height: 28,
          backgroundColor: Colors.teal500
        }}
      />
      {user.name ? (
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
              source={user.img}
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
            {user.name}
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
              marginTop: 20
            }}
          >
            <Avatar.Image
              size={72}
              source={require("./assets/user.png")}
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
            User
          </Text>
        </View>
      )}
      <Divider
        style={{
          marginBottom: 2
        }}
      />
      <DrawerItems {...props} />
      <Divider />
      <TouchableRipple
        onPress={() => {
          console.log("User logged out");
          props.navigation.closeDrawer();
        }}
        style={{
          backgroundColor: Colors.blue100,
          padding: 8,
          marginTop: 4
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Image
            source={require("./assets/logout.png")}
            style={{
              width: 24,
              height: 24,
              marginLeft: 10,
              marginRight: 24
            }}
          />
          <Text
            style={{
              color: Colors.black,
              fontSize: 16,
              padding: 4,
              fontWeight: "500"
            }}
          >
            Log out
          </Text>
        </View>
      </TouchableRipple>
    </SafeAreaView>
  </ScrollView>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Character: {
      screen: Character
    },
    Story: {
      screen: Story
    },
    Feedback: {
      screen: Feedback
    },
    Help: {
      screen: Help
    },
    Profile: {
      screen: Profile
    },
    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: "Character",
    contentComponent: DefaultDrawer,
    contentOptions: {
      activeTintColor: "#000000",
      activeBackgroundColor: "#e6e6e6"
    }
  }
);

export default createAppContainer(MyDrawerNavigator);
