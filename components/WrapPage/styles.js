/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-23 17:06:07
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-05 15:56:44
 * @ Description:
 */
import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: Colors.white
  },
  containersScrollView: {
    flex: 9/1,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    borderBottomColor: Colors.border,
    borderBottomWidth: 2,
    borderRightWidth: 0.17,
    borderLeftWidth: 0.17,
    paddingBottom: 50,
    zIndex: 0
  },
  bottomTitle: {
    height: 50,
    flex: 1/ 9,
    marginTop: (width / height) * 50,
    marginBottom: (width / height) * 50,
    alignSelf: "center",
    zIndex: 0
  }
});

export default styles;
