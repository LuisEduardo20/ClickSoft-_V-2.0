import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";

import SearchHeader from "../../components/SearchHeader";
import UserCard from "../../components/UserCard";
import SearchedUsers from "../../components/SearchedUsers";
import UserModal from "../../components/UserModal";

const Main = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <SearchHeader />

        <UserCard />

        <SearchedUsers />
      </ScrollView>

      <UserModal />
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
