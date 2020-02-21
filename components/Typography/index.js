/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-22 11:40:04
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-01-23 11:55:58
 * @ Description:
 */

import React from "react";
import { Text } from "react-native";

import styles from "./styles";

const Typography = ({
  children,
  uppercase,
  subBody,
  bold,
  subTitle,
  color,
  body
}) => {
  const typoGraphyStyles = [
    subTitle && styles.subTitle,
    body && styles.body,
    bold && styles.bold,
    subBody && styles.subBody,
    uppercase && styles.uppercase,
    color && { color }
  ];

  return <Text style={typoGraphyStyles}>{children}</Text>;
};

export default Typography;
