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
            <p>Nome: {userData.name}</p>

            <p>Login: {userData.login}</p>

            <p>Localidade: {userData.location}</p>

            <p>Id: {userData.id}</p>

            <p>
              Quantidade de seguidores: {userData.followers}
            </p>

            <p>
              Repositórios públicos: {userData.public_repos}
            </p>
          </TextContainer>
        </UserDataContainer>

        <Title>Repositórios</Title>
        {!!userData.repos_list ? (
          <ul>
            {userData.repos_list.map((repositorie) => {
              return <RepositoryList data={repositorie} />;
            })}
          </ul>
        ) : (
          <></>
        )}
      </Container>
    </ReactModal>
  );
};

export default UserModal;
