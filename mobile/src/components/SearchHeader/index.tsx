import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons/";

import {
  Container,
  TitleContainer,
  SearchContainer,
  Title,
  Input,
  Button,
  ButtonText,
} from "./styles";
import { UserContext } from "../../contexts/UserContext";

const SearchHeader = () => {
  const [name, setName] = useState("");
  const { getUser } = useContext(UserContext);

  const handleClick = () => {
    if (name.length > 0) {
      getUser(name);
    } else {
      Alert.alert("Error", "Preencha o nome corretamente!");
    }
  };

  return (
    <Container>
      <TitleContainer>
        <MaterialCommunityIcons name='github' size={50} />
        <Title>GitHub Searcher</Title>
      </TitleContainer>

      <SearchContainer>
        <Input
          placeholder='Ex: LuisEduardo20'
          onChangeText={(text) => setName(text)}
        />

        <Button onPress={handleClick}>
          <ButtonText>Pesquisar</ButtonText>
        </Button>
      </SearchContainer>
    </Container>
  );
};

export default SearchHeader;
