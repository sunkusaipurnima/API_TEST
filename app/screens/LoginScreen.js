/** @format */

import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import Screen from "../components/Screen";
import TextInput from "../components/TextInput";
import colors from "../config/colors";
import Images from "../config/images";

const LoginScreen = (props) => {
  return (
    <Screen style={styles.screen}>
      <Image source={Images.LOGO} style={styles.logo} />
      <TextInput
        placeholder="Email"
        autoCaptalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <TextInput
        placeholder="Password"
        autoCaptalize="none"
        autoCorrect={false}
        icon="lock"
        keyboardType="email-address"
        secureTextEntry
        textContentType="password"
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginTop: 100,
  },
});

export default LoginScreen;
