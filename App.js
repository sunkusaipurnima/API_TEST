/** @format */

import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import reviewsApi from "./app/api/reviews";

const App = (props) => {
  const handlePress = async () => {
    console.log("inside handle press");
    const result = await reviewsApi.postResponses("tq");
    if (!result.ok) return result.problem;
    console.log(result.data);
  };

  // const url = "https://haveyoudone.com/review/api/v1/response/21";

  // const reviewResponse = { ResponseText: "tq" };

  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(reviewResponse),
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization:
  //       " bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc3LCJpYXQiOjE2MzIzMjIwODF9.C6E1oTFRscMkvEbXoGZpZhkivbQllx5kA718VstRCdI",
  //   },
  // };

  // const response = await fetch(url, options);

  // try {
  //   const responseJson = await response.json();
  //   console.log("response json", responseJson);
  // } catch (error) {
  //   console.log("error while getting response json", error);
  // }
  // };

  return (
    <View style={styles.container}>
      <Text>Test Api</Text>
      <Button title="review response" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default App;
