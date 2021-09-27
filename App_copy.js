/** @format */

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";

import reviewsApi from "./api/reviews";

const App = (props) => {
  const [reviews, setReviews] = useState("");
  const [response, setResonpse] = useState("good");
  console.log(reviews);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    const response = await reviewsApi.getReviews();

    if (!response.ok) return console.log("error while getting reviews");

    setReviews(response.data);
  };

  const handleSubmit = async () => {
    const result = await reviewsApi.postResponses(response);

    if (result.ok) Alert.alert("posted successfully");
    else Alert.alert("failed to post");
  };

  return (
    <View style={styles.container}>
      <Text>Api testing</Text>
      <Button title="submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default App;
