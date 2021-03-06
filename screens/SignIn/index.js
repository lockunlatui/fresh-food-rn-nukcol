/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-22 11:32:16
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-01-23 17:24:43
 * @ Description: Sign In Screen
 */

import React from "react";
import { View, Dimensions, Text, KeyboardAvoidingView } from "react-native";
import { Formik, ErrorMessage } from "formik";

import { Colors, Images } from "../../constants";
import { Typography, Input, Button, WrapPage } from "../../components";
import { i18n } from "../../utils";

import styles from "./styles";
import SigninSchema from "./validations";

const { width, height } = Dimensions.get("window");

const SignIn = ({ navigation }) => {
  return (
    <WrapPage
      nameClickBottom="CreateAccount"
      navigation={navigation}
      titleBottom={i18n.t("createAccount")}
    >
      <KeyboardAvoidingView behavior="padding" style={styles.wrapForm}>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={SigninSchema}
          onSubmit={values => console.log(values)}
        >
          {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
            <View
              style={{ flex: 1, paddingBottom: 20, justifyContent: "center" }}
            >
              <View style={styles.wrapTitle}>
                <Typography subTitle color={Colors.primary}>
                  {i18n.t("signIn")}
                </Typography>
              </View>
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
                title={i18n.t("signIn")}
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

export default SignIn;
