//@ts-check
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { TouchableOpacity, Text } from "react-native";

export default ({ href, title }) => {
  const _openLink = async () => {
    try {
      await WebBrowser.openBrowserAsync(href);
    } catch (err) {
      console.log("Error opening weblink:", err);
    }
  };

  return (
    <TouchableOpacity onPress={_openLink}>
      <Text style={{ color: "cornflowerblue" }}>{title}</Text>
    </TouchableOpacity>
  );
};
