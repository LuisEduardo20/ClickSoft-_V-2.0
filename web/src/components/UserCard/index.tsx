import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import {
  Container,
  ContainerData,
  InfoContainerData,
  ProfilePic,
  Text,
} from "./styles";

const UserCard = () => {
  const { userData } = useContext(UserContext);

  const { avatar_url, name, login, location } = userData;

  return (
    <Container>
      {Object.values(userData).length === 0 ? (
        <></>
      ) : (
        <ContainerData>
          <ProfilePic
            src={avatar_url}
            alt='Foto de perfil do github'
          />

          <InfoContainerData>
            <Text>
              <strong>Nome:</strong> {name}
            </Text>

            <Text>
              <strong>Nickname:</strong> {login}
            </Text>

            <Text>
              <strong>Localidade:</strong> {location}
            </Text>
          </InfoContainerData>
        </ContainerData>
      )}
    </Container>
  );
};

export default UserCard;
