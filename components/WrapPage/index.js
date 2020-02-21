/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-23 17:03:13
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-05 15:17:11
 * @ Description:
 */

import React from "react";
import { View, ScrollView } from "react-native";

import { Colors } from "../../constants";
import Button from "../Button";

import styles from "./styles";

const WrapPage = ({ children, navigation, titleBottom, nameClickBottom, onPressCha }) => {
  const onMoveCreateAccount = () => {
    navigation && navigation.navigate(nameClickBottom);
  };

  return (
    <View style={styles.containers}>
      <ScrollView contentContainerStyle={styles.containersScrollView}>
        {children}
      </ScrollView>
      <View style={styles.bottomTitle}>
        <Button
          onPress={onPressCha ? onPressCha : onMoveCreateAccount}
          noneUppercase
          color={Colors.primaryText}
          title={titleBottom}
        />
      </View>
    </View>
  );
};

export default WrapPage;
