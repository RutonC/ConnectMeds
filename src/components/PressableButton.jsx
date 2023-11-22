import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const PressableButton = ({onPress, label}) => {
  return (
    <Pressable style={styles.press} onPress={onPress}>
      <Text style={styles.pressText}>{label}</Text>
    </Pressable>
  );
};

export default PressableButton;

const styles = StyleSheet.create({
  press: {
    marginTop: 5,
  },
  pressText: {
    fontSize: 15,
    color: "#024",
  },
});
