/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-02-06 10:32:23
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-07 10:55:35
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
  activeDot: {
    backgroundColor: Colors.primaryText
  },
  dot: {
    backgroundColor: "rgba(166, 184, 201, .3)"
  },
  btnSkip: {
    backgroundColor: Colors.white,
    marginTop: (width / height) * 120,
    marginBottom: (width / height) * 70
  },
  btnText: {
    color: Colors.primaryText,
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "bold"
  },
  containerItem: {
    flex: 1
  },
  wrapNext: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  imgOfNext: {
    width: 315,
    height: 315
  },
  wrapDescription: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    borderRightWidth: 0.17,
    borderLeftWidth: 0.17,
    marginBottom: (width / height) * 300
  },
  descriptionIntro: {
    textAlign: "center",
    width: (width / height) * 500,
    color: Colors.primaryText
  },
  titleItem: {
    color: Colors.primaryText,
    fontSize: 20
  },
  wrapDone: { 
    flex: 3
  },
  wrapTitleDone: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
