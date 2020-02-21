/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-02-05 11:44:28
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-07 15:09:00
 * @ Description:
 */

import React, { useState } from "react";
import { View, Text, Image, Platform } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useSelector, useDispatch } from 'react-redux'
import styles from "./styles";
import { Images, Colors } from "../../constants";
import { i18n } from "../../utils";
import { SwitchButton, Button } from "../../components";
import { toogleCategory } from "./redux/action";

const OnBoarding = ({ navigation }) => {

  const dispatch = useDispatch();

  const slides = [
    {
      key: "1",
      text: `Quickly search and add healthy foods to your cart`,
      image: Images.GraphicOnboarding
    },
    {
      key: "2",
      text: `With one click you can add every ingredient for a recipe to your cart`,
      image: Images.GraphicOnboarding1
    },
    {
      key: "3",
      text: `Tailor your Recipes feed exactly how you like it`,
      image: Images.IconArrowSmall
    }
  ];

  const categoryVege = useSelector(state => state.onBoarding.categoryVege);
 
  const _renderItem = ({ item }) => {

    return (
      <View style={styles.containerItem}>
        {item.key === "3" ? (
          <View style={styles.wrapDone}>
            <View
              style={styles.wrapTitleDone}
            >
              <Text style={styles.titleItem}>Recipe Preferences</Text>
            </View>
            <View style={{ flex: 4 }}>
              {categoryVege && categoryVege.map(vege => {
                return (
                  <View style={{ flex: 1}} key={vege.key}>
                  <SwitchButton
                    titleBtn={vege.name}
                    thumbColor={vege.status ? Colors.third : Colors.primary}
                    value={vege.status}
                    trackColor={{
                      true: Platform.OS === "ios" ? Colors.border : Colors.third,
                      false: Platform.OS === "ios" ? Colors.border : Colors.primary
                    }}
                    onValueChange={() => dispatch(toogleCategory(vege.key))}
                  />
                  </View>
                );
              })}
            </View>
          </View>
        ) : (
          <View style={styles.wrapNext}>
            <Image style={styles.imgOfNext} source={item.image} />
          </View>
        )}
        <View style={styles.wrapDescription}>
          <Text style={[styles.descriptionIntro, item.key === '3' && {marginBottom: 60}]}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const _onDone = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.containers}>
      <AppIntroSlider
        bottomButton
        activeDotStyle={styles.activeDot}
        renderItem={_renderItem}
        slides={slides}
        buttonStyle={styles.btnSkip}
        nextLabel={i18n.t("skip")}
        dotStyle={styles.dot}
        buttonTextStyle={styles.btnText}
        renderDoneButton={() => {
          return (
            <View style={{
              marginTop: 30
            }}>
            <Button onPress={_onDone} icon={Images.IconArrowSmall} title="Get Started" primary />
            </View>
          )
        }}
      />
    </View>
  );
};

export default OnBoarding;
