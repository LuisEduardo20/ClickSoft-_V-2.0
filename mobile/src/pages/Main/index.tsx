import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";

import SearchHeader from "../../components/SearchHeader";
import UserCard from "../../components/UserCard";
import SearchedUsers from "../../components/SearchedUsers";

const Main = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <SearchHeader />
        <UserCard />
        <SearchedUsers />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
});

export default Main;
