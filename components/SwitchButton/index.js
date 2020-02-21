/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-02-06 11:22:26
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-06 15:40:41
 * @ Description:
 */

import React from "react";
import { Switch, View, Text, Dimensions } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const SwitchButton = ({
  onValueChange,
  onChange,
  value,
  trackColor,
  thumbColor,
  ios_backgroundColor,
  titleBtn
}) => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: (width / height) * 100,
        marginLeft: (width / height) * 100
      }}
    >
      <View>
        <Text style={{ 
          color: '#748A9D',
          fontSize: 16
        }}>{titleBtn}</Text>
      </View>
      <View>
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            left: value ? 33 : 5,
            top: 15
          }}
        >
          {value ? (
            <AntDesign name="close" size={14} color="#fff" />
          ) : (
            <Feather name="check" size={14} color="#fff" />
          )}
        </View>

        <Switch
          ios_backgroundColor={ios_backgroundColor}
          style={{
            transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
            borderRadius: 16,
            borderColor: !value ? "#7BED8D" : "#748A9D",
            borderWidth: 1,
            marginBottom: 10,
            marginTop: 10
          }}
          thumbColor={thumbColor}
          trackColor={trackColor}
          value={value}
          onChange={onChange}
          onValueChange={onValueChange}
        />
      </View>
    </View>
  );
};

export default SwitchButton;
