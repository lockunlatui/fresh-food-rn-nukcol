/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-22 12:45:55
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-01-23 11:54:29
 * @ Description:
 */

import React from "react";
import { TextInput, Image, View } from "react-native";

import { Colors } from "../../constants";

import styles from "./styles";

const Input = ({ onChangeText, onBlur, value, placeholder, style, icon }) => {
  return (
    <View style={styles.containers}>
      <Image style={styles.containersImage} source={icon} />
      <TextInput
        style={[styles.container, style]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Colors.primaryText}
      />
    </View>
  );
};

export default Input;
