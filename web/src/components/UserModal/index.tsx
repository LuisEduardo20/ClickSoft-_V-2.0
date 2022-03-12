import { useContext } from "react";
import ReactModal from "react-modal";

import { UserContext } from "../../contexts/UserContext";
import RepositoryList from "../RepositoriesList";

import {
  Container,
  TitleContainer,
  CloseButton,
  ProfilePicture,
  Title,
  UserDataContainer,
  TextContainer,
} from "./style";

ReactModal.setAppElement("#root");

const UserModal = () => {
  const { userData, modalVisible, changeModalVisibility } =
    useContext(UserContext);

  return (
    <ReactModal
      isOpen={modalVisible}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <Container>
        <TitleContainer>
          <Title>Perfil do usuário</Title>

          <CloseButton
            onClick={() => changeModalVisibility(false)}
          >
            X
          </CloseButton>
        </TitleContainer>

        <UserDataContainer>
          <ProfilePicture
            src={userData.avatar_url}
            alt='Foto de perfil do github'
          />

          <TextContainer>
            <p>
              Nome:
              <strong> {userData.name}</strong>
            </p>

            <p>
              Login:
              <strong> {userData.login}</strong>
            </p>

            <p>
              Localidade:
              <strong> {userData.location}</strong>
            </p>

            <p>
              Id:
              <strong> {userData.id}</strong>
            </p>

            <p>
              Quantidade de seguidores:
              <strong> {userData.followers}</strong>
            </p>

            <p>
              Repositórios públicos:
              <strong> {userData.public_repos}</strong>
            </p>
          </TextContainer>
        </UserDataContainer>

        <Title>Repositórios</Title>
        {!!userData.repos_list ? (
          <ul>
            {userData.repos_list.map(
              (repositorie, index) => {
                return (
                  <RepositoryList
                    data={repositorie}
                    key={`repository-${index}`}
                  />
                );
              }
            )}
          </ul>
        ) : (
          <></>
        )}
      </Container>
    </ReactModal>
  );
};

export default UserModal;
