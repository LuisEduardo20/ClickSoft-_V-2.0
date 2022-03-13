import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

import { user } from "../../../models/user.model";

import {
  Container,
  ImageContainer,
  DataContainer,
  ProfilePic,
  DataText,
  NameButton,
} from "./styles";

interface CardProps {
  user: user;
}

const ListCard = ({ user }: CardProps) => {
  const { setCardUser } = useContext(UserContext);

  return (
    <Container>
      <ImageContainer>
        <ProfilePic source={{ uri: user.avatar_url }} />
      </ImageContainer>

      <DataContainer>
        <NameButton onPress={() => setCardUser(user)}>
          <DataText>{user.name}</DataText>
        </NameButton>

        <DataText>{user.login}</DataText>

        <DataText>{user.location}</DataText>
      </DataContainer>
    </Container>
  );
};

export default ListCard;
