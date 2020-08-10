import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Character, Story, Feedback, Help, Profile, Settings } from "./screens";
import Drawer from "./Drawer";

const DefaultDrawer = props => (
    <Drawer>
      <DrawerItems {...props} />
    </Drawer>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Character: {
      screen: Character
    },
    World: {
      screen: Profile
    },
    Feedback: {
      screen: Feedback
    },
    Help: {
      screen: Help
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
