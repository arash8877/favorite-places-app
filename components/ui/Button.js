import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({})