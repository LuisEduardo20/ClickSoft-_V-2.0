import React, { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import {
  Container,
  ProfilePic,
  TextContainer,
  UserDataTitle,
  UserDataText,
} from "./styles";

const UserCard = () => {
  const { userData } = useContext(UserContext);

  return (
    <Container>
      {Object.values(userData).length === 0 ? (
        <></>
      ) : (
        <>
          <ProfilePic
            source={{ uri: userData.avatar_url }}
          />
          <TextContainer>
            <UserDataText>
              <UserDataTitle>Nome: </UserDataTitle>
              {userData.name}
            </UserDataText>

            <UserDataText>
              <UserDataTitle>Login: </UserDataTitle>
              {userData.login}
            </UserDataText>

            <UserDataText>
              <UserDataTitle>Localidade: </UserDataTitle>
              {userData.location}
            </UserDataText>
          </TextContainer>
        </>
      )}
    </Container>
  );
};

export default UserCard;
