/** @format */

import React from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[styles.container, style]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Screen;
