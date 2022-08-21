import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

const FadeInView = ({ duration = 1500, ...props }) => {
  const fadeAnimView = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimView, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }).start();
  }, [fadeAnimView, duration]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnimView,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
