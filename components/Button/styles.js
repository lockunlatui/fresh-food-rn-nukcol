/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-23 11:12:00
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-06 15:51:16
 * @ Description:
 */

import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../constants';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: (width / height) * 30,
    marginRight: (width / height) * 30,
    borderRadius: (width / height) * 36,
    marginBottom: (width / height) * 80,
    flexDirection: "row"
  },
  btnName: {
    textTransform: "uppercase",
    fontSize: 14,
    color: Colors.white,
    marginLeft: 20
  },
});

export default styles;