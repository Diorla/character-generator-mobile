import React from "react";
import { View } from "react-native";
import { Surface } from "react-native-paper";
import TopBar from "./TopBar";

const Layout = (props) => (
  <Surface>
    <TopBar
      title={props.title}
      subtitle={props.subtitle}
      drawMenu={props.drawMenu}
      {...props}
    />
    <View style={{ minHeight: "100%", backgroundColor: "cornsilk", overflow: "scroll" }}>
      {props.children}
    </View>
  </Surface>
);

export default Layout;
