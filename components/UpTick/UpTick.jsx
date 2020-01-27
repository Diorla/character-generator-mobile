import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Animated } from "react-native";
//import { Test } from './UpTick.styles';
import { Colors } from 'react-native-paper';
import { IconButton } from 'react-native-paper';

const UpTick = props => {
  const [transY] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(transY, {
      toValue: 10,
      duration: 4000
    });
  }, []);

  return (
    <Animated.View>
      <IconButton
        icon="chevron-double-up"
        color={Colors.black500}
        size={50}
        onPress={props.onUppity}
        style={{
          transform: [
            {
              translateY: transY
            }
          ]
        }}
      />
    </Animated.View>
  );
};

UpTick.propTypes = {
  // bla: PropTypes.string,
};

UpTick.defaultProps = {
  // bla: 'test',
};

export default UpTick;
