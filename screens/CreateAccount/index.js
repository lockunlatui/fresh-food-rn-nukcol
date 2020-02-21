/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-23 15:51:40
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-05 11:55:40
 * @ Description:
 */

import React from "react";
import {
  Text,
  KeyboardAvoidingView,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { Formik, ErrorMessage } from "formik";

import { Colors, Images } from "../../constants";
import { WrapPage, Typography, Input, Button } from "../../components";
import { i18n } from "../../utils";

import styles from "./styles";
import CreateAccountSchema from "./validations";

const { width, height } = Dimensions.get("window");

const CreateAccount = ({ navigation }) => {

  const onMovePageSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <WrapPage
      nameClickBottom="SignIn"
      navigation={navigation}
      titleBottom={i18n.t("signIn")}
    >
      <TouchableOpacity onPress={onMovePageSignIn} style={styles.wrapBtnClose}>
        <Image source={Images.IconClose} style={styles.btnClose} />
      </TouchableOpacity>
      <KeyboardAvoidingView behavior="padding" style={styles.wrapForm}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            fullName: ""
          }}
          validationSchema={CreateAccountSchema}
          onSubmit={values => console.log(values)}
        >
          {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
            <View
              style={{ flex: 1, paddingBottom: 20, justifyContent: "center" }}
            >
              <View style={styles.wrapTitle}>
                <Typography subTitle color={Colors.primary}>
                  {i18n.t("createAccount")}
                </Typography>
              </View>
              <Input
                icon={Images.IconAccount}
                value={values.fullName}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                placeholder={i18n.t("input.fullName")}
              />
              {Object.keys(errors).length !== 0 ? (
                <Text style={styles.error}>
                  <ErrorMessage name="fullName" />
                </Text>
              ) : (
                <View style={{ height: 20 }} />
              )}
              <Input
                icon={Images.IconMail}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder={i18n.t("input.email")}
              />
              {Object.keys(errors).length !== 0 ? (
                <Text style={styles.error}>
                  <ErrorMessage name="email" />
                </Text>
              ) : (
                <View style={{ height: 20 }} />
              )}
              <Input
                icon={Images.IconPadlock}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                placeholder={i18n.t("input.password")}
              />
              <Text style={styles.error}>
                <ErrorMessage name="password" />
              </Text>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 20,
                  marginBottom: (width / height) * 169
                }}
              >
                <Button
                  noneLowercase
                  color={Colors.primaryText}
                  title={i18n.t("forgotPassword")}
                />
              </View>
              <Button
                primary
                style={styles.btn}
                onPress={handleSubmit}
                title={i18n.t("createAccount")}
                icon={Images.IconArrowSmall}
                styleTextPrimary={styles.btnName}
              />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </WrapPage>
  );
};

export default CreateAccount;
