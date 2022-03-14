import { useContext } from "react";
import ReactModal from "react-modal";

import { UserContext } from "../../contexts/UserContext";
import RepositoryList from "../RepositoriesList";

import {
  Container,
  TitleContainer,
  RepositoriesContainer,
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
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },

        content: {
          backgroundColor: "#e1e1e1",
        },
      }}
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
              <strong>Id: </strong>
              {userData.id}
            </p>

            <p>
              <strong>Nome: </strong>
              {userData.name}
            </p>

            <p>
              <strong>Login: </strong>
              {userData.login}
            </p>

            <p>
              <strong>Localidade: </strong>
              {userData.location}
            </p>

            <p>
              <strong>Quantidade de seguidores: </strong>
              {userData.followers}
            </p>

            <p>
              <strong>Repositórios públicos: </strong>
              {userData.public_repos}
            </p>
          </TextContainer>
        </UserDataContainer>

        <Title>Repositórios</Title>
        <RepositoriesContainer>
          {!!userData.repos_list ? (
            <ul>
              {userData.repos_list.map(
                (repository, index) => {
                  return (
                    <RepositoryList
                      data={repository}
                      key={`repository-${index}`}
                    />
                  );
                }
              )}
            </ul>
          ) : (
            <></>
          )}
        </RepositoriesContainer>
      </Container>
    </ReactModal>
  );
};

export default UserModal;
