/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-22 12:45:55
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-01-22 22:19:03
 * @ Description:
 */

import React from "react";
import { TextInput, StyleSheet, Dimensions, Image, View } from "react-native";

const { width, height } = Dimensions.get("window");

const Input = ({ onChangeText, onBlur, value, placeholder, style, icon }) => {
  console.log("width", width);
  console.log("height", height);

  return (
    <View style={{ position: 'relative', width: `100%` }}>
      <Image style={{ position: 'absolute', left: `10%`, zIndex: 1, bottom: `35%` }} source={icon} />
      <TextInput
        style={[styles.container, style]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#A6BCD0"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ((width + 60) / height) * 100,
    backgroundColor: "#F0F4F8",
    fontSize: 16,
    color: "#A6BCD0",
    borderRadius: 8,
    marginLeft: width / height * 30,
    marginRight: width / height * 30,
    paddingLeft: 70,
    paddingRight: 20
  }
});

export default Input;
