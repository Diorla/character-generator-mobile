import React from "react";
import PropTypes from "prop-types";
import styles from "./MyText.styles";
import { Text, View } from "react-native";

const MyText = (props) => {
  const { type, children } = props;
  if (type == "h1")
    return (
      <View>
        <Text style={styles.h1}>{children}</Text>
      </View>
    );
  else if (type == "h2")
    return (
      <View>
        <Text style={styles.h2}>{children}</Text>
      </View>
    );
  else if (type == "h3")
    return (
      <View>
        <Text style={styles.h3}>{children}</Text>
      </View>
    );
  else if (type == "h4")
    return (
      <View>
        <Text style={styles.h4}>{children}</Text>
      </View>
    );
  else if (type == "strong")
    return <Text style={styles.strong}>{children}</Text>;
  else if (type == "quote")
    return (
      <View style={styles.quote}>
        <Text style={{ fontStyle: "italic" }}>{children}</Text>
      </View>
    );
  else if (type == "ul") return <View>{children}</View>;
  else if (type == "li")
    return (
      <View>
        <Text>🔘 {children}</Text>
      </View>
    );
  else if (type == "em") return <Text style={styles.em}>{children}</Text>;
  else return <Text>{children}</Text>;
};

MyText.propTypes = {
  type: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "",
    "strong",
    "ul",
    "li",
    "em",
    "quote",
  ]),
};

MyText.defaultProps = {
  type: "",
};

export default MyText;
