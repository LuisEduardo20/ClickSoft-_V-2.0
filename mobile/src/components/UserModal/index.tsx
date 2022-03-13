import { Modal, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { UserContext } from "../../contexts/UserContext";

import RepositoryCard from "./RepositoryCard";

import {
  View,
  Container,
  ContainerTitle,
  ContainerUserData,
  TextContainer,
  Title,
  ProfilePic,
  TextData,
  TextDataTitle,
} from "./styles";

const UserModal = () => {
  const { userData, modalVisible, changeModalVisibility } =
    useContext(UserContext);

  return (
    <Modal
      animationType={"slide"}
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => changeModalVisibility(false)}
    >
      <View>
        <Container
          contentContainerStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ContainerTitle>
            <Title>Perfil do usuário</Title>

            <TouchableOpacity>
              <MaterialCommunityIcons
                name='close'
                size={40}
                onPress={() => changeModalVisibility(false)}
              />
            </TouchableOpacity>
          </ContainerTitle>

          <ContainerUserData>
            <ProfilePic
              source={{ uri: userData.avatar_url }}
            />

            <TextContainer>
              <TextData>
                <TextDataTitle>Id: </TextDataTitle>
                {userData.id}
              </TextData>

              <TextData>
                <TextDataTitle>Nome: </TextDataTitle>
                {userData.name}
              </TextData>

              <TextData>
                <TextDataTitle>Login: </TextDataTitle>
                {userData.login}
              </TextData>

              <TextData>
                <TextDataTitle>Localidade: </TextDataTitle>
                {userData.location}
              </TextData>

              <TextData>
                <TextDataTitle>Seguidores: </TextDataTitle>
                {userData.followers}
              </TextData>

              <TextData>
                <TextDataTitle>
                  Repositórios públicos:{" "}
                </TextDataTitle>
                {userData.public_repos}
              </TextData>
            </TextContainer>
          </ContainerUserData>

          <Title>Repositórios</Title>

          {!!userData.repos_list ? (
            userData.repos_list.map(
              (repository, index: number) => {
                return (
                  <RepositoryCard
                    data={repository}
                    key={`repository${index}`}
                  />
                );
              }
            )
          ) : (
            <></>
          )}
        </Container>
      </View>
    </Modal>
  );
};

export default UserModal;
