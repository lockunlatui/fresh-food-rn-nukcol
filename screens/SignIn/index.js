/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-22 11:32:16
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-01-22 22:19:41
 * @ Description: Sign In Screen
 */

import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Typography, Input } from "../../components";
import IconMail from "../../assets/images/iconMail.png";
import IconPadlock from "../../assets/images/iconPadlock.png";
import IconArrowSmall from "../../assets/images/iconArrowSmall.png";

const { width, height } = Dimensions.get("window");

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().required("Required")
});

const SignIn = () => {
  return (
    <View style={styles.containers}>
      <ScrollView contentContainerStyle={styles.containersScrollView}>
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
                  <Typography subTitle color="#7BED8D">
                    Sign In
                  </Typography>
                </View>
                <Input
                  icon={IconMail}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="Email"
                />
                {Object.keys(errors).length !== 0 ? (
                  <Text style={styles.error}>
                    <ErrorMessage name="email" />
                  </Text>
                ) : (
                  <View style={{ height: 20 }} />
                )}

                <Input
                  icon={IconPadlock}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  placeholder="Password"
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
                  <TouchableOpacity>
                    <Typography body color="#A6BCD0">
                      Forgot password?
                    </Typography>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                  <Image source={IconArrowSmall} />
                  <Text style={styles.btnName}>Sign In</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={styles.bottomTitle}>
        <TouchableOpacity>
          <Typography uppercase subBody bold color="#A6BCD0">
            Create Account
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: "#fff"
  },
  containersScrollView: {
    flex: 1,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    borderBottomColor: "#eee",
    borderBottomWidth: 2,
    borderRightWidth: 0.17,
    borderLeftWidth: 0.17
  },
  wrapTitle: {
    marginBottom: (width / height) * 149,
    alignSelf: "center"
  },
  wrapForm: {
    marginTop: (width / height) * 135,
    flex: 1
  },
  btn: {
    backgroundColor: "#7BED8D",
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
    color: "#fff",
    marginLeft: 20
  },
  bottomTitle: {
    height: 50,
    marginTop: (width / height) * 50,
    marginBottom: (width / height) * 50,
    alignSelf: "center"
  },
  error: {
    marginLeft: (width / height) * 30,
    marginRight: (width / height) * 30,
    marginTop: 10,
    marginBottom: 10,
    color: "red"
  }
});

export default SignIn;
