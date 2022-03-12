import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";

import SearchHeader from "../../components/SearchHeader";

const Main = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <SearchHeader />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});

export default Main;
