import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Character, About, Help } from "./screens";
import Drawer from "./Drawer";

const DefaultDrawer = (props) => (
  <Drawer>
    <DrawerItems {...props} />
  </Drawer>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Character: {
      screen: Character,
    },
    Help: {
      screen: Help,
    },
    About: {
      screen: About,
    },
  },
  {
    initialRouteName: "Character",
    contentComponent: DefaultDrawer,
    contentOptions: {
      activeTintColor: "#000000",
      activeBackgroundColor: "#e6e6e6",
    },
  }
);

export default createAppContainer(MyDrawerNavigator);
