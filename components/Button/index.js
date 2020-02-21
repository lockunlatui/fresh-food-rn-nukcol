/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-23 12:06:11
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-06 15:51:51
 * @ Description:
 */

import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import Typography from "../Typography";

import styles from './styles';

const Button = ({
  title = "Button",
  color,
  noneUppercase = false,
  noneLowercase = false,
  style,
  onPress,
  primary = false,
  icon
}) => {
  if (primary) {
    return (
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Image source={icon} />
        <Text style={styles.btnName}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {noneUppercase && (
        <Typography uppercase subBody bold color={color}>
          {title}
        </Typography>
      )}
      {noneLowercase && (
        <Typography body color={color}>
          {title}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

export default Button;
