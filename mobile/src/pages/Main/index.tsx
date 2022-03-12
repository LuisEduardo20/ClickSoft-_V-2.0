import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";

import SearchHeader from "../../components/SearchHeader";
import UserCard from "../../components/UserCard";

const Main = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <SearchHeader />
        <UserCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
