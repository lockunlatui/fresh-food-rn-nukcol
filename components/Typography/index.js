/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-22 11:40:04
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-01-22 21:27:52
 * @ Description:
 */

import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

const Typography = ({ children, uppercase, subBody, bold, subTitle, color, body }) => {

  const typoGraphyStyles = [
    subTitle && styles.subTitle,
    body && styles.body,
    bold && styles.bold,
    subBody && styles.subBody,
    uppercase && styles.uppercase,
    color && { color }
  ];
  
  return (
    <Text style={typoGraphyStyles}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 24
  },
  body: {
    fontSize: 16
  },
  subBody: {
    fontSize: 14
  },
  bold: {
    fontWeight: 'bold'
  },
  uppercase: {
    textTransform: 'uppercase'
  }
})

export default Typography;