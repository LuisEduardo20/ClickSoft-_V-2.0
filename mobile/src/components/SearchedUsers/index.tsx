import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import { UserContext } from "../../contexts/UserContext";
import { user } from "../../models/user.model";

import ListCard from "./ListCard";

const SearchedUsers = () => {
  const { searchedUsersList } = useContext(UserContext);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.children}
    >
      <Text style={styles.title}>
        Visualizados recentemente
      </Text>

      {searchedUsersList.map(
        (user: user, index: number) => {
          return (
            <ListCard user={user} key={`user${index}`} />
          );
        }
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2f2531",
  },

  children: {
    padding: 10,
    display: "flex",
    alignItems: "center",
  },

  title: {
    color: "#f8f9ff",
    fontSize: 24,
    marginTop: 5,
    marginBottom: 16,
  },
});

export default SearchedUsers;
