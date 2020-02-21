/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-23 11:53:02
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-01-23 11:54:23
 * @ Description:
 */
import {
  Dimensions,
  StyleSheet
} from 'react-native';

import { Colors } from "../../constants";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  containers: { position: "relative", width: `100%` },
  containersImage: {
    position: "absolute",
    left: `10%`,
    zIndex: 1,
    bottom: `35%`
  },
  container: {
    height: ((width + 60) / height) * 100,
    backgroundColor: Colors.secondary,
    fontSize: 16,
    color: Colors.primaryText,
    borderRadius: 8,
    marginLeft: (width / height) * 30,
    marginRight: (width / height) * 30,
    paddingLeft: 70,
    paddingRight: 20
  }
});

export default styles;